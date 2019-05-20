class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		this.timer = null;
	}

	start(callbackFunction) {
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
		clearInterval(this.timer);
	}

	reset(callbackFunction) {
		clearInterval(this.timer);
		this.currentValue = this.initialValue;
		callbackFunction("reset");
	}


	

	
}