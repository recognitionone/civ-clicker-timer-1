export class CounterView {
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