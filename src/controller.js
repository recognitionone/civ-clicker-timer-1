import { MyCounterModel } from './model.js';
import { MyCounterView } from './view.js';
import { ImagesModel } from './imagesModel.js';
 

export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(10, 0);
		this.imagesModel = new ImagesModel();
		this.obj = this.imagesModel.myObj;
	}

	init() {
		this.view.addStartHandler(() => { this.model.start(), this.setImage(this.obj.timeLaps[0]) });
		this.view.addPauseHandler (() => { this.model.pause() });
		this.view.addResetHandler (() => { this.model.reset(), this.view.setupText("reset"), this.setImage( this.obj.failedButonimage ) });
		this.setImage(this.obj.beforeButonimage);

		this.model.counterEvent.addEventListener("changeValue", (e) => {this.view.setupText(e.detail.text)} )

		this.addListener("koniec", this.obj.successButonimage);
		this.addListener("step1",  this.obj.timeLaps[0]);
		this.addListener("step2",  this.obj.timeLaps[5]);
		this.addListener("step3",  this.obj.timeLaps[10]);
		this.addListener("step4",  this.obj.timeLaps[15]);
	}

	setImage(name) {
		return this.view.setupImage( name );		
	}

	addListener(eventName, imageLink) {
		return this.model.counterEvent.addEventListener(eventName, () => {this.setImage(imageLink)} );
	}
}


