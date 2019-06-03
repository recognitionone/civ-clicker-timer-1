// var Ajv = require('ajv');
// var ajv = new Ajv({allErrors: true});
// var valid = ajv.validate(schema, data);
// if (!valid) console.log(ajv.errors);


export class ImagesModel {
	constructor(imagesData, timeLength) {

		// function isValidJson(json) {
		//     try {
		//         JSON.parse(json);
		//         return true;
		//     } catch (e) {
		//         return false;
		//     }
		// }


		if (imagesData.beforeButonimage 
			&& imagesData.successButonimage 
		    && imagesData.failedButonimage
		    && imagesData.timeLaps.length >= 1) 
		{		 
			Object.assign(this, imagesData);
		} else {
			console.log("invalid input");
		}

		this.timeTick = this.getCustomTick(timeLength);
	}	

	getImage(timer) {
		return this.timeLaps[Math.floor(timer / this.timeTick)] || this.timeLaps[this.timeLaps.length - 1];
	}

	getCustomTick(timeLength) {
		if (timeLength >= 1) {
			return Math.floor(timeLength / this.timeLaps.length);
		} else {
			alert("wrong timer");
		}
	}
}