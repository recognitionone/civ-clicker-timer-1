import { MyCounterModel } from './model.js';
import { MyCounterView } from './view.js';
import { ImagesModel } from './imagesModel.js';
 
import { imagesMock } from "../mock/imagesMock.js";


export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(20, 0);

		this.imagesModel = new ImagesModel(imagesMock);
		this.customTick = 10000;
	}

	init() {
		this.customTick = this.imagesModel.addCustomTick(20, 0);
		console.log("custom tick:", this.customTick);

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
			(e) => { this.view.setupText(e.detail.text) } )

		this.model.counterEvent.addEventListener("timeLapsValue", 
			(e) => {
					console.log(e.detail.text);
					this.setImage(this.imagesModel.addImageCustomTick(e.detail.text));
			} )
		

		this.addImageChangeListener("koniec", this.imagesModel.successButonimage);

		this.view.body.addEventListener('mousemove', e => { this.setImage( this.imagesModel.failedButonimage ) });
	}

	setImage(name) {
		return this.view.setupImage( name );		
	}

	addImageChangeListener(eventName, imageLink) {
		return this.model.counterEvent.addEventListener( eventName, () => {this.setImage(imageLink)} );
	}
}


