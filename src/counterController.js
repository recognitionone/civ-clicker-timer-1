import { MyCounterModel } from './model';
import { MyCounterView } from './view';
import { ImagesModel } from './imagesModel';

import { ImagesService } from './imagesService';
import { imagesMock } from '../mock/imagesMock';

export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(3, 0);
	}

	async init() {
		const imagesData = await ImagesService.getImages('simple');

		try {
			this.imagesModel = new ImagesModel(imagesData, this.model.initialValue - this.model.stopValue);
		} catch (e) {
			console.error(e);
		}

		const any = () =>  { 
			this.setImage(this.imagesModel.failedButtonimage);
			this.view.setupText("fail");
			if(this.view.isRetryOn === false){
				this.view.createRetry("It was close. Try again")
			}
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
			
			if(this.view.isRetryOn === false){
				this.view.createRetry("Congratulations! Try another round");
			}

			this.model.stop();
		});
	}

	setImage(name) {
		this.view.setupImage(name);		
	}


}


