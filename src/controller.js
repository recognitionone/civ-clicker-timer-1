import { MyCounterModel } from './model';
import { MyCounterView } from './view';
import { ImagesModel } from './imagesModel';

import { ImagesService } from './imagesService';
import { imagesMock } from '../mock/imagesMock';

export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(3, 0);
		this.imagesService = new ImagesService();

		try {
			this.imagesModel = new ImagesModel(JSON.stringify(imagesMock),
				 this.model.initialValue - this.model.stopValue );
		} catch (e) {
			console.error(e);
		}

	}

	init() {
		const any = () =>  { 
			this.setImage(this.imagesModel.failedButtonimage);
			this.view.setupText("fail");
			this.view.showRetry();
			this.model.stop();
		};

		this.model.start();

		this.view.body.addEventListener('mousemove', any, false);	

		this.model.counterEvent.addEventListener("changeValue", (e) => { 
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));
				this.view.setupText(e.detail.counterValue);
		});

		this.model.counterEvent.addEventListener("end", () => {
			this.view.body.removeEventListener('mousemove', any, false);
			this.setImage(this.imagesModel.successButtonimage);
			this.view.setupText("success");
			this.view.showRetry();
			this.model.stop();
		});


		this.imagesService.getImages();
	}

	setImage(name) {
		this.view.setupImage(name);		
	}
}


