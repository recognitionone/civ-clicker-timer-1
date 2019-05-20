class MyCounterView {
	constructor() {
		this.demo = document.getElementById("demo");
		this.startButton = document.getElementById("startButton");
		this.pauseButton = document.getElementById("pauseButton");
		this.resetButton = document.getElementById("resetButton");

		
	}

	addStartHandler(startHandler) {
		this.startButton.onclick = startHandler;
	}

	addPauseHandler(pauseHandler) {
		this.pauseButton.onclick = pauseHandler;
	}

	addResetHandler(resetHandler) {
		this.resetButton.onclick = resetHandler;
	}

	setupText(text) {
		this.demo.innerHTML = text;
	}
}