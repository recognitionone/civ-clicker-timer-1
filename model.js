class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;

		this.timer = null;
		this.startButtonValue = true;
	}

	start(callbackFunction) {
		this.timer = setInterval(() => {
			console.log(this.currentValue);
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
		clearInterval(this.timer);
	}

	reset(callbackFunction) {

		console.log(this.startButtonValue);

		clearInterval(this.timer);

		console.log(this.timer);

		this.currentValue = this.initialValue;
		callbackFunction("reset");
		this.startButtonValue = false;
	}
}