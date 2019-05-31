export class ImagesModel {
	constructor(imagesData) {
		//TODO - sprawdzanie/ validacja danych 
		this.IsValidJSONString = function(imagesData) {
	        try {
	            JSON.parse(imagesData);
	        } catch (e) {
	            return false;
	        }
	        return true;
	    }

		Object.assign(this, imagesData);
	}	



	getImage(timer) {
		const filteredArray = Object.keys(this.timeLaps).filter((elem) => { 
			return elem >= timer;
		 })
		return this.timeLaps[filteredArray[0]];
	}

	addCustomTick(initialValue, stopValue) {
		const timeLapsArrayLenght = Object.keys(this.timeLaps).length;
		const timeLength = initialValue - stopValue;
		const tick = timeLength / timeLapsArrayLenght;
		return tick;
	}

	addImageCustomTick(number) {
		return Object.values(this.timeLaps)[number];
	}
}