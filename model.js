class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		const timer = null;
		const startButtonValue = true;
	}

	start(callbackFunction, buttonTextCallbackFunction) {
		
		if (this.startButtonValue === true) {
			console.log(this.startButtonValue);
			clearInterval(this.timer);
			buttonTextCallbackFunction("Start");
			this.startButtonValue = !this.startButtonValue;	
			
		} else {
			console.log(this.startButtonValue);
			
			this.timer = setInterval(() => {
				if(this.currentValue === this.stopValue) {
					clearInterval(this.timer);
					callbackFunction("koniec");

					buttonTextCallbackFunction("Start");
					this.startButtonValue = !this.startButtonValue;

					this.currentValue = this.initialValue;
				} else {
					this.currentValue--;
					callbackFunction(this.currentValue);
				}
			}, 1000);

			buttonTextCallbackFunction("Pause");
			this.startButtonValue = !this.startButtonValue;
		

		}
		
	}

	reset(callbackFunction, buttonTextCallbackFunction) {

		console.log(this.startButtonValue);

		clearInterval(this.timer);
		this.currentValue = this.initialValue;
		callbackFunction("reset");
		buttonTextCallbackFunction("Start");
		this.startButtonValue = false;
	}
}