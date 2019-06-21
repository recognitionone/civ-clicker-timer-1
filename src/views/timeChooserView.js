export class TimeChooserView {
	constructor() {
		this.startButton = document.getElementById("startButton");
		this.slider = document.getElementById("slider");
		this.timeValue = document.getElementById("timeValue");
	}

	addSliderHandler(sliderHandler) {
		this.slider.oninput = sliderHandler;
	}

	setupText(value) {
		this.timeValue.innerHTML = value;
	}

	addStartButtonHandler(startButtonHandler) {
		this.startButton.onclick = startButtonHandler;
	}


}

