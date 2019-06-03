// var Ajv = require('ajv');
// var ajv = new Ajv({allErrors: true});
// var valid = ajv.validate(schema, data);
// if (!valid) console.log(ajv.errors);

import { JsonValidator } from "../common/json"

export class ImagesModel {
	constructor(imagesData, timeLength) {

		if (!JsonValidator.isValidJson(imagesData)) { 
			throw new Error("imagesData is not a valid json"); 
		}

		imagesData = JSON.parse(imagesData);



		if (!imagesData.beforeButonimage) {
			throw new Error ("can't find beforeButonimage property");
		} 
		//TODO poprawić Buton na Btton
		//etc

		// if (imagesData.beforeButonimage 
		// 	&& imagesData.successButonimage 
		//     && imagesData.failedButonimage
		//     && imagesData.timeLaps.length >= 1) 
		// {		 
		// 	Object.assign(this, imagesData);
		// } else {
		// 	console.log("invalid input");
		// }

		Object.assign(this, imagesData);
		this.timeTick = this.getCustomTick(timeLength);
	}	

	getImage(timer) {
		// return this.timeLaps[Math.floor(timer / this.timeTick)] || this.timeLaps[this.timeLaps.length - 1];
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