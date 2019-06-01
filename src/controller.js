import { MyCounterModel } from './model.js';
import { MyCounterView } from './view.js';
import { ImagesModel } from './imagesModel.js';
import { imagesMock } from "../mock/imagesMock.js";

export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(9, 0);
		this.imagesModel = new ImagesModel(imagesMock, this.model.initialValue - this.model.stopValue );
	}

	init() {
		this.setImage(this.imagesModel.beforeButonimage);
		this.view.addStartHandler(() => { this.model.start() });
		this.view.addPauseHandler(() => { this.model.pause() });
		this.view.addResetHandler(() => { this.model.reset() });
		this.view.body.addEventListener('mousemove', e => { this.model.reset() });

		this.model.counterEvent.addEventListener("changeValue", (e) => { 
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));
				this.view.setupText(e.detail.counterValue);
		});

		this.addChangeListener("end", "success", this.imagesModel.successButonimage);
		this.addChangeListener("reset", "reset", this.imagesModel.failedButonimage);
	}

	setImage(name) {
		return this.view.setupImage(name);		
	}

	addChangeListener(eventName, textValue, imageValue) {
		this.model.counterEvent.addEventListener(eventName, () => { 
				this.setImage(imageValue);
				this.view.setupText(textValue);
		})		
	}
}


