class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		const timer = null;
	}

	start() {
		this.timer = setInterval(() => {
			if(this.currentValue === this.stopValue) {
				clearInterval(timer);
				console.log("pierwszy koniec");
			} else {
				this.currentValue--;
				console.log("pierwszy", this.currentValue)
			}
		}, 1000);
	}

	pause() {
		clearInterval(this.timer);
		console.log("pause timer");
	}

	reset() {
		clearInterval(this.timer);
		this.currentValue = this.initialValue;
		console.log("reset timer");
	}

}

const counter = new MyCounterModel(30, 0);
// counter.start();

const counterBeta = new MyCounterModel(50, 40);
// counterBeta.start();

class MyCounterModel2 {
	constructor() {
	}

	start(initialValue, stopValue) {

		let currentValue = initialValue;
		
		const timer = setInterval(() => {
			if(currentValue == stopValue) {
				clearInterval(timer);
				console.log("drugi koniec");
			} else {
				currentValue--;
				console.log("drugi", currentValue)
			}
		}, 1000);
	}

	pause() {
		//TODO
	}

	reset() {
		//TODO
	}

}

const counter2 = new MyCounterModel2();

// counter2.start(30, 0);
// counter2.start(50, 40);