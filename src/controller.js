import { MyCounterModel } from './model.js';
import { MyCounterView } from './view.js';
import { ImagesModel } from './imagesModel.js';
import { imagesMock } from "../mock/imagesMock.js";

export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(6, 0);

		try {
			this.imagesModel = new ImagesModel(JSON.stringify(imagesMock),
				 this.model.initialValue - this.model.stopValue );
		} catch (e) {
			console.error(e);
		}
	}

	init() {
		this.model.start();
		this.view.body.addEventListener('mousemove', this.checkMouseMove, true);

		this.model.counterEvent.addEventListener("changeValue", (e) => { 
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));
				this.view.setupText(e.detail.counterValue);
				console.log(this.model.interface.isTimerOn);
		});

		this.model.counterEvent.addEventListener("end", () => { 
			this.setImage(this.imagesModel.successButtonimage);
			this.view.setupText("success");
			this.view.showRetry();
			console.log("success");
			console.log(this.model.interface.isTimerOn);
			this.view.body.removeEventListener('mousemove', this.checkMouseMove, true);
		})
	}

	setImage(name) {
		return this.view.setupImage(name);		
	}

	checkMouseMove() {
		(e) => {		
			this.setImage(this.imagesModel.failedButtonimage);
			this.view.setupText("fail");
			this.view.showRetry();
			this.model.endEvent();
		}
	}
}


