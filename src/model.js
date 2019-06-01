export class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		const timer = null;
		this.counterEvent = new EventTarget();
		this.timeLapsValue = 0;
	}

	start() {
		this.createCustomEvent("start")

		this.timer = setInterval(() => {
			if(this.currentValue === this.stopValue) {
				clearInterval(this.timer);
				this.createCustomEvent("end")
				this.timeLapsValue = 0;
				this.currentValue = this.initialValue;
			} else {
				this.createCustomEvent("changeValue", { detail: { 
					counterValue: this.currentValue, 
					tickNumber: this.timeLapsValue} });
				this.currentValue--;
				this.timeLapsValue++;
			}
		}, 1000);
	}

	createCustomEvent(eventName, eventDetail) {
		return this.counterEvent.dispatchEvent(new CustomEvent(eventName, eventDetail));
	}

	pause() {
		clearInterval(this.timer);
	}

	reset() {
		clearInterval(this.timer);
		this.currentValue = this.initialValue;
		this.counterEvent.dispatchEvent(new Event("reset"));
	}
}