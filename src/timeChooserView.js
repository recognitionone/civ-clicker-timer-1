export class TimeChooserView {
	constructor() {
		this.startButton = document.getElementById("startButton");
		this.timeChooser = document.getElementById("timeChooser");
	}

	addStartHandler(startHandler) {
		this.startButton.onclick = startHandler;
	}
}

