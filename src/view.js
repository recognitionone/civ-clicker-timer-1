export class MyCounterView {
	constructor() {
		this.counterDisplay = document.getElementById("demo");
		// this.startButton = document.getElementById("startButton");

		this.image = document.getElementById("image");
		this.body = document.body;
		this.retry = document.getElementById('retryButton');
	}

	setupText(text) {
		this.counterDisplay.innerHTML = text;
	}

	setupImage(imageName) {
		this.image.src = imageName;
	}

	// createRetry() {
	//     this.retry = document.createElement("A");
	//     const text = document.createTextNode("Retry");
	//     retry.appendChild(text);
	//     retry.setAttribute('href','#');
	//     retry.addClass('display-none');
	//     document.body.appendChild(retry);
	// }

	showRetry() {
		this.retry.classList.add('display-block');
	}

	hideRetry() {
		this.retry.classList.add('display-none');
	}
}