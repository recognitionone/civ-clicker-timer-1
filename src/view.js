export class MyCounterView {
	constructor() {
		this.counterDisplay = document.getElementById("demo");
		this.image = document.getElementById("image");
		this.body = document.body;
		this.isRetryOn = false;
	}

	setupText(text) {
		this.counterDisplay.innerHTML = text;
	}

	setupImage(imageName) {
		this.image.src = imageName;
	}

	createRetry(value) {
	    const retry = document.createElement("A");
	    const text = document.createTextNode(value);
	    retry.appendChild(text);
	    retry.setAttribute('href','#');
	    this.body.appendChild(retry);
	    this.isRetryOn = true;
	}
}