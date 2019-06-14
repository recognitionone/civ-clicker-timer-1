export class CounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		const timer = null;
		this.counterEvent = new EventTarget();
		this.timeLapsValue = 0;
	}

	start() {
		this.timer = setInterval(() => {
			if (this.currentValue === this.stopValue) {
				this.endTimer("success");
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

	fail() { this.endTimer("fail") }

	endTimer(eventName) {
		clearInterval(this.timer);
		this.currentValue = this.initialValue;
		this.timeLapsValue = 0;
		this.counterEvent.dispatchEvent(new Event(eventName));		
	}
}