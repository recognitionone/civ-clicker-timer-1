import { CounterModel } from '../models/counterModel.js';
import { ImagesModel }  from '../models/imagesModel.js';
import { CounterView }  from '../views/counterView.js';
import { imagesMock }   from "../../mock/imagesMock.js";
import { ImagesService } from '../imagesService';


export class CounterController {
	constructor() {
		this.view = new CounterView();
		this.model = new CounterModel(3, 0);
	}

	async init() {
		const imagesData = await ImagesService.getImages('simple');

		try {
			this.imagesModel = new ImagesModel(imagesData, this.model.initialValue - this.model.stopValue);
		} catch (e) {
			console.error(e);
		}

		await this.setImage(this.imagesModel.beforeButtonimage);
		this.model.start();

		const endEvent = () =>  {
			this.view.setupText("fail");
			if(this.view.isRetryOn === false){
				this.view.createRetry("It was close. Try again")
			}
			this.model.stop();
			this.setImage(this.imagesModel.failedButtonimage);			
		};


		await this.model.counterEvent.addEventListener("changeValue", (e) => { 
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));
				this.view.setupText(e.detail.counterValue);
		});

		await this.model.counterEvent.addEventListener("end", () => {
			this.view.body.removeEventListener('mousemove', endEvent, false);
			this.setImage(this.imagesModel.successButtonimage);
			this.view.setupText("success");
			
			if(this.view.isRetryOn === false){
				this.view.createRetry("Congratulations! Try another round");
			}

			this.model.stop();
		});

		await this.view.body.addEventListener('mousemove', endEvent, false);

		if (this.imagesModel.isError) {
			this.view.setupText("error");
			this.model.stop();
			this.view.body.removeEventListener('mousemove', endEvent, false);

		}

		
	}

	setImage(name) {
		this.view.setupImage(name);		
	}


}



