export class ImagesService {
	static async getImages(fileName) {		
		const response = await fetch(`/images/${fileName}.json`);
		const images = await response.json();
		return images;
	}
}

