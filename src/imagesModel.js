export class ImagesModel {
	constructor(imagesData, timeLength) {
		//TODO - sprawdzanie/ validacja danych 
		// this.IsValidJSONString = function(imagesData) {
	 //        try {
	 //            JSON.parse(imagesData);
	 //        } catch (e) {
	 //            return false;
	 //        }
	 //        return true;
	 //    }


		Object.assign(this, imagesData);
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