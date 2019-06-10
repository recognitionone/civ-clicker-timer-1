export class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		this.timer = null;
		this.counterEvent = new EventTarget();
		this.timeLapsValue = 0;
	}

	interface() {
		currentValue: null;
		counterEvent: null; //not working yet
		isTimerOn: false;
	}

	start() {
		this.interface.currentValue = this.initialValue;
		this.interface.isTimerOn = true;
		this.timer = setInterval(
			() => {
				if (this.interface.currentValue === this.stopValue) { 
					this.interface.isTimerOn = false;
					this.endEvent();
					this.counterEvent.dispatchEvent(new Event("end"));

				} else {
					
						this.countingEvent();
						this.interface.currentValue--;
						this.timeLapsValue++;		
				}
			}, 1000);
	}

	countingEvent() {
		return this.counterEvent.dispatchEvent(new CustomEvent("changeValue", { detail: { 
					counterValue: this.interface.currentValue, 
					tickNumber: this.timeLapsValue} }));
	}

	endEvent() {
		clearInterval(this.timer);
		this.interface.currentValue = this.initialValue;
		this.timeLapsValue = 0;
		
	}
}