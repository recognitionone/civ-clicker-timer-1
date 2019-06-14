export class TimeChooserView {
	constructor() {
		this.startButton = document.getElementById("startButton");
		this.slider = document.getElementById("slider");
		this.timeValue = document.getElementById("timeValue");
	}

	// addStartHandler(startHandler) {
	// 	this.startButton.onclick = startHandler;
	// }

	addSliderHandler(sliderHandler) {
		this.slider.oninput = sliderHandler;
	}

	setupText(value) {
		this.timeValue.innerHTML = value;
	}

	// this.timeChooser.oninput = function() {
	//   timeValue.innerHTML = this.value;
	// }

	//TODO: finish
}

