class MyCounterView2 {
	constructor() {
		this.demoB = document.getElementById("demoB");
		this.startButtonB = document.getElementById("startButtonB");
		this.pauseButtonB = document.getElementById("pauseButtonB");
		this.resetButtonB = document.getElementById("resetButtonB");

	}

	addStartHandlerB(startHandler) {
		this.startButtonB.onclick = startHandler;
	}

	addPauseHandlerB(pauseHandler) {
		this.pauseButtonB.onclick = pauseHandler;
	}

	addResetHandlerB(resetHandler) {
		this.resetButtonB.onclick = resetHandler;
	}	

	setupText(text) {
		this.demoB.innerHTML = text;
	}

	setupColor() {
		this.demoB.style.color = "rgb(" + Math.random() * 256 + "," + Math.random() * 256 + "," + Math.random() * 256 + ")"
	}

}