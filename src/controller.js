import { MyCounterModel } from './model.js';
import { MyCounterView } from './view.js';
import { ImagesModel } from './imagesModel.js';
import { imagesMock } from "../mock/imagesMock.js";

export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(30, 0);
		this.imagesModel = new ImagesModel(imagesMock, this.model.initialValue - this.model.stopValue );
	}

	init() {
		this.setImage(this.imagesModel.beforeButonimage);
		this.view.addStartHandler(() => { this.model.start() });
		this.view.addPauseHandler(() => { this.model.pause() });

		this.view.addResetHandler (() => { 
			this.model.reset(), 
			this.view.setupText("reset"), 
			this.setImage(this.imagesModel.failedButonimage) 
		});

		this.model.counterEvent.addEventListener("changeValue", (e) => { 
				this.view.setupText(e.detail.counterValue);
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));
			 } )		

		this.model.counterEvent.addEventListener("end", () => {
			this.setImage(this.imagesModel.successButonimage);;
			this.view.setupText("success");
		})

		// this.view.body.addEventListener('mousemove', e => { 
		// 	this.setImage( this.imagesModel.failedButonimage ); 
		// 	this.model.reset();
		// 	this.view.setupText("reset");
		// 	//TODO - uporządkować to
		// });
	}

	setImage(name) {
		return this.view.setupImage(name);		
	}
}


