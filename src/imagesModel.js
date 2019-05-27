

export class ImagesModel {
	constructor(imagesData) {
		//TODO - sprawdzanie/ validacja danych 
		Object.assign(this, imagesData);
	}	


	addImage(timer) {
		const filteredArray = Object.keys(this.timeLaps).filter((elem) => { 
			return elem >= timer;
		 })
		return this.timeLaps[filteredArray[0]];
		
	}

	//TODO taka funkcja - jeśli mam tylko listę elementów, podzielić ją po równo w czasie, mając dany czas 
}