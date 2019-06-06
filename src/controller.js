import { MyCounterModel } from './model.js';
import { MyCounterView } from './view.js';
import { ImagesModel } from './imagesModel.js';
import { imagesMock } from "../mock/imagesMock.js";

export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(17, 0);

		try {
			this.imagesModel = new ImagesModel(JSON.stringify(imagesMock),
				 this.model.initialValue - this.model.stopValue );
		} catch (e) {
			console.error(e);
		}
	}

	init() {
		this.setImage(this.imagesModel.beforeButtonimage);
		this.view.addStartHandler(() => { this.model.start() });
		this.view.addPauseHandler(() => { this.model.pause() });
		this.view.addFailHandler(() => { this.model.fail() });

		this.view.body.addEventListener('mousemove', e => { this.model.fail() });

		this.model.counterEvent.addEventListener("changeValue", (e) => { 
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));
				this.view.setupText(e.detail.counterValue);
		});

		this.addChangeListener("success", "success", this.imagesModel.successButtonimage);
		this.addChangeListener("fail", "fail", this.imagesModel.failedButtonimage);
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


