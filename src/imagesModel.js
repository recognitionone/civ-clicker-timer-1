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
		console.log(Math.floor(timer / this.timeTick))
		return this.timeLaps[Math.floor(timer / this.timeTick)] || this.timeLaps[this.timeLaps.length - 1];
	}

	getCustomTick(timeLength) {
		//sprawdź czy timeLength != 0;
		return Math.floor(timeLength / this.timeLaps.length);
	}
}