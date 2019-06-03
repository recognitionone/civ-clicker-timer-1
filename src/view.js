export class MyCounterView {
	constructor() {
		this.demo = document.getElementById("demo");
		this.startButton = document.getElementById("startButton");
		this.pauseButton = document.getElementById("pauseButton");
		this.resetButton = document.getElementById("resetButton");

		this.image = document.getElementById("image");
		this.body = document.body;
	}

	addStartHandler(startHandler) {
		this.startButton.onclick = startHandler;
	}

	addPauseHandler(pauseHandler) {
		this.pauseButton.onclick = pauseHandler;
	}

	addFailHandler(resetHandler) {
		this.resetButton.onclick = resetHandler;
	}

	setupText(text) {
		this.demo.innerHTML = text;
	}

	setupImage(imageName) {
		this.image.src = imageName;
	}

}


//TODO usuń wszystko poza setupText, setupImage
//TODO niech się robi nowy button "retry" na success albo fail 