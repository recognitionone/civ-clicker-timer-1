export class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		const timer = null;
		this.counterEvent = new EventTarget();
	}

	start() {
		this.counterEvent.dispatchEvent(new Event("start"));
		this.timer = setInterval(() => {
			if(this.currentValue === this.stopValue) {
				clearInterval(this.timer);
				this.counterEvent.dispatchEvent(new Event("koniec"));
			} else {
				this.currentValue--;
				this.counterEvent.dispatchEvent(new CustomEvent("changeValue", { detail: { text: this.currentValue} }));
			}
		}, 1000);
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