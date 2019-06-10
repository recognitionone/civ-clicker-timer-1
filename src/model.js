export class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		this.timer = null;
		this.counterEvent = new EventTarget();
		this.timeLapsValue = 0;
	}

//TODO find way to properly use interface

	interface() {
		initialValue:null;
		stopValue: null;
		currentValue: null;
		counterEvent: null; //not working yet
		isTimerOn: false;
		// start();
		// stop();
	}

	start() {
		this.interface.currentValue = this.initialValue;
		this.interface.isTimerOn = true;
		this.timer = setInterval(
			() => {
				if (this.interface.currentValue === this.stopValue) { 
					this.stop();
					this.endEvent();
				} else {
					this.countingEvent();
					this.interface.currentValue--;
					this.timeLapsValue++;		
				}
			}, 1000);
	}

	stop() {
		clearInterval(this.timer);
		this.interface.currentValue = this.initialValue;
		this.timeLapsValue = 0;
		this.interface.isTimerOn = false;
	}

	countingEvent() {
		return this.counterEvent.dispatchEvent(new CustomEvent("changeValue", { detail: { 
					counterValue: this.interface.currentValue, 
					tickNumber: this.timeLapsValue} }));
	}

	endEvent() {
		this.counterEvent.dispatchEvent(new Event("end"));
	}

	
}