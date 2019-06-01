import { MyCounterModel } from './model.js';
import { MyCounterView } from './view.js';
import { ImagesModel } from './imagesModel.js';
 
import { imagesMock } from "../mock/imagesMock.js";


export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(20, 0);

		this.imagesModel = new ImagesModel(imagesMock, this.model.initialValue - this.model.stopValue );
		this.customTick = 10000;
	}

	init() {
		// this.customTick = this.imagesModel.getCustomTick(this.model.initialValue, this.model.stopValue);
		// console.log("custom tick:", this.customTick);

		this.view.addStartHandler(() => { 
			this.model.start(this.customTick), 
			this.setImage(this.imagesModel.getImage(this.model.initialValue)) 
		});

		this.view.addPauseHandler (() => { this.model.pause() });
		this.view.addResetHandler (() => { 
			this.model.reset(), 
			this.view.setupText("reset"), 
			this.setImage( this.imagesModel.failedButonimage ) });
		this.setImage(this.imagesModel.beforeButonimage);

		this.model.counterEvent.addEventListener("changeValue", 
			(e) => { 
				this.view.setupText(e.detail.counterValue);
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));

			 } )		

		this.addImageChangeListener("koniec", this.imagesModel.successButonimage);

		// this.view.body.addEventListener('mousemove', e => { 
		// 	this.setImage( this.imagesModel.failedButonimage ); 
		// 	this.model.reset();
		// 	this.view.setupText("reset");
		// 	//TODO - uporządkować to
		// });
	}

	setImage(name) {
		return this.view.setupImage( name );		
	}

	addImageChangeListener(eventName, imageLink) {
		return this.model.counterEvent.addEventListener( eventName, () => {this.setImage(imageLink)} );
	}
}


