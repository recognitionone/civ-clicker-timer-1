export class ImagesService {
	constructor() {

	}

	getImages() {
		// fetch('https://jsonplaceholder.typicode.com/users').then(function(response) {
		// 	console.log(JSON.stringify(response));
		// }, function(error) {
		// 	console.error(error);
		// });

		//this one works
		fetch('/images/simple.json')
		  .then(function(response) {
		    return response.json();
		  })
		  .then(function(myJson) {
		    console.log(JSON.stringify(myJson));
		  });
		console.log("hello fetch")
	}
}