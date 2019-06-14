export class TimeChooserView {
	constructor() {
		this.startButton = document.getElementById("startButton");
		this.timeChooser = document.getElementById("timeChooser");
		this.timeValue = document.getElementById("timeValue");
	}

	addStartHandler(startHandler) {
		this.startButton.onclick = startHandler;
	}

	// this.timeChooser.oninput = function() {
	//   timeValue.innerHTML = this.value;
	// }

	//TODO: finish
}

