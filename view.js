class MyCounterView {
	constructor(displayId, startButtonId, pauseButtonId, resetButtonId) {
		// this.displayId = displayId || "demo"; //etc
		//TODO dokończyć tą metodą


		// this.demo = document.getElementById(this.displayId); //etc
		this.demo = document.getElementById(displayId); 
		this.startButton = document.getElementById(startButtonId);
		this.pauseButton = document.getElementById(pauseButtonId);
		this.resetButton = document.getElementById(resetButtonId);	


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