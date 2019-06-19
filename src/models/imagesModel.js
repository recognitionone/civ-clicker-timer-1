import { JsonValidator } from "../../common/json"

export class ImagesModel {
	constructor(imagesData, timeLength) {

		if (!JsonValidator.isValidJson(imagesData)) { 
			throw new Error("imagesData is not a valid json"); 
		}

		imagesData = JSON.parse(imagesData);

		if (!imagesData.beforeButtonimage) {
			throw new Error ("can't find beforeButtonimage property");
		} 
		if (!imagesData.successButtonimage) {
			throw new Error ("can't find successButtonimage property");
		} 
		if (!imagesData.failedButtonimage) {
			throw new Error ("can't find failedButtonimage property");
		} 
		if (imagesData.timeLaps.length < 1) {
			throw new Error ("not enough assets in timeLaps property");
		} 

		Object.assign(this, imagesData);
		this.timeTick = this.getCustomTick(timeLength);
	}	

	getImage(timer) {
		return this.timeLaps[Math.floor(timer / this.timeTick)];
	}

	getCustomTick(timeLength) {
		if (timeLength >= 1) {
			return (timeLength / this.timeLaps.length);
		} else {
			alert("wrong timer");
		}
	}
}