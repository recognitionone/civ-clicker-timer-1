export class CounterModel {

	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		this.timer = null;
		this.counterEvent = new EventTarget();
		this.timeLapsValue = 0;
	}

	start() {
		this.timer = setInterval(() => { 
			if (this.currentValue === this.stopValue) { 
				this.endEvent();
				this.stop();
			} else {
				this.countingEvent();
				this.currentValue--;
				this.timeLapsValue++;
			}}, 1000);
	}

	stop() {
		clearInterval(this.timer);
		this.currentValue = this.initialValue;
		this.timeLapsValue = 0;
	}

	countingEvent() {
		return this.counterEvent.dispatchEvent(new CustomEvent("changeValue", { detail: { 
					counterValue: this.currentValue, 
					tickNumber: this.timeLapsValue} }));
	}

	endEvent() {
		return this.counterEvent.dispatchEvent(new Event("end"));
	}

}