class MyCounterView {
	constructor() {
		this.demo = document.getElementById("demo");
		this.startButton = document.getElementById("startButton");
		this.pauseButton = document.getElementById("pauseButton");
		this.resetButton = document.getElementById("resetButton");

		this.demoB = document.getElementById("demoB");
		this.startButtonB = document.getElementById("startButtonB");
		this.pauseButtonB = document.getElementById("pauseButtonB");
		this.resetButtonB = document.getElementById("resetButtonB");

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

//Timer B Handlers

	//button on click przyjmuje ostatnią przypisaną mu funkcję
	addStartHandlerB(startHandler, changeColorHandler) {
		this.startButtonB.onclick = () => { startHandler(), changeColorHandler() }
	}

	addPauseHandlerB(pauseHandler) {
		this.pauseButtonB.onclick = pauseHandler;
	}

	addResetHandlerB(resetHandler) {
		this.resetButtonB.onclick = resetHandler;
	}	

//here we change the value shown by the timer
	setupText(text) {
		this.demo.innerHTML = text;
		this.demoB.innerHTML = text;
	}


//here we handle color change in Timer B
	// addColorHandler(changeColorHandler) {
	// 	this.startButtonB.onclick = changeColorHandler;
	// }

	setupColor(theColor) {
		this.demoB.style.color = theColor;
	}

}