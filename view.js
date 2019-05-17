class MyCounterView {
	constructor() {
		this.demo = document.getElementById("demo");
		this.startPauseButton = document.getElementById("startPauseButton");
		// this.pauseButton = document.getElementById("pauseButton");
		this.resetButton = document.getElementById("resetButton");

	}

	addStartPauseHandler(modelStartHandler, modelPauseHandler) {		
		this.startPauseButton.onclick = (e) => {
			this.setStartPauseButtonText('Pause');
			modelStartHandler(e);

			this.addPauseHandler(modelPauseHandler, modelStartHandler);
		}
	}

	addPauseHandler(modelPauseHandler, modelStartHandler) {
		this.startPauseButton.onclick = (e) => {
			this.setStartPauseButtonText('Start');
			modelPauseHandler(e);

			this.addStartPauseHandler(modelStartHandler, modelPauseHandler);
		}	
	}

	addResetHandler(resetHandler) {
		this.resetButton.onclick = (e) => {
			this.setStartPauseButtonText('Start');
			resetHandler(e);
		}
	}

	setTimerDisplay(text) {
		this.demo.innerHTML = text;
	}

	setStartPauseButtonText(text) {
		this.startPauseButton.innerHTML = text;
	}






}