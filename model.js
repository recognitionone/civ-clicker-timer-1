class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		const timer = null;
	}

	start(callbackFunction) {
		console.log("start function");
		this.timer = setInterval(() => {
			if(this.currentValue === this.stopValue) {
				clearInterval(this.timer);
				callbackFunction("koniec");
			} else {
				this.currentValue--;
				callbackFunction(this.currentValue);
			}
		}, 1000);
	}

	pause() {
		console.log("pause function");

		clearInterval(this.timer);
	}

	reset(callbackFunction) {
		console.log("reset function");

		clearInterval(this.timer);
		this.currentValue = this.initialValue;
		callbackFunction("reset");
	}


	changeColor(colorCallbackFunction) {
		console.log("color function");

		colorCallbackFunction(
			"rgb(" + Math.random() * 256 + "," + Math.random() * 256 + "," + Math.random() * 256 + ")"
			);
	}

	
}