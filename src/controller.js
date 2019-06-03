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
			//TODO Error handling
			console.error(e);
		}
	}

	init() {
		this.setImage(this.imagesModel.beforeButonimage);
		this.view.addStartHandler(() => { this.model.start() });
		this.view.addPauseHandler(() => { this.model.pause() });
		this.view.addFailHandler(() => { this.model.fail() });

		//TODO niech nie działa jak nie był wciśnięty start
		this.view.body.addEventListener('mousemove', e => { this.model.fail() });

		this.model.counterEvent.addEventListener("changeValue", (e) => { 
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));
				this.view.setupText(e.detail.counterValue);
		});

		this.addChangeListener("end", "success", this.imagesModel.successButonimage);
		this.addChangeListener("fail", "fail", this.imagesModel.failedButonimage);
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


