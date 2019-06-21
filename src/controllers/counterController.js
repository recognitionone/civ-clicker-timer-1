import { CounterModel } from '../models/counterModel.js';
import { ImagesModel }  from '../models/imagesModel.js';
import { CounterView }  from '../views/counterView.js';
import { imagesMock }   from "../../mock/imagesMock.js";
import { ImagesService } from '../imagesService';


export class CounterController {
	constructor() {
		let time = null; 
		this.time = localStorage.getItem('time');
		this.view = new CounterView();
		this.model = new CounterModel(this.time, 0);
	}

	async init() {
		

		const imagesData = await ImagesService.getImages('simple');

		try {
			this.imagesModel = new ImagesModel(imagesData, this.model.initialValue - this.model.stopValue);
		} catch (e) {
			console.error(e);
		}

		const endEvent = () =>  { 
			this.setImage(this.imagesModel.failedButtonimage);
			this.view.setupText("fail");
			if(this.view.isRetryOn === false){
				this.view.createRetry("It was close. Try again")
			}
			this.model.stop();
		};

		this.model.start();

		this.view.body.addEventListener('mousemove', endEvent, false);	

		this.model.counterEvent.addEventListener("changeValue", (e) => { 
				this.setImage(this.imagesModel.getImage(e.detail.tickNumber));
				this.view.setupText(e.detail.counterValue);
		});

		this.model.counterEvent.addEventListener("end", () => {
			this.view.body.removeEventListener('mousemove', endEvent, false);
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



