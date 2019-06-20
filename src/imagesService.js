export class ImagesService {
	static async getImages(fileName) {		
		let response = null;

		try {
			response = await fetch(`/images/${fileName}.json`);
			if (response.status >= 300 ) {
				response = await fetch('/images/error.json');
			}	
			const images = await response.json();
			return images;
		} catch(e) {
			console.error(e);
		}


	}

}

