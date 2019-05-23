export class MyCounterView {
	constructor(displayId, startButtonId, pauseButtonId, resetButtonId) {
		this.displayId = displayId || "demo";
		this.startButtonId = startButtonId || "startButton";
		this.pauseButtonId = pauseButtonId || "pauseButton";
		this.resetButtonId = resetButtonId || "resetButton"
		
		this.demo = document.getElementById(this.displayId);
		this.startButton = document.getElementById(this.startButtonId);
		this.pauseButton = document.getElementById(this.pauseButtonId);
		this.resetButton = document.getElementById(this.resetButtonId);	
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