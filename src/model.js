export class MyCounterModel {
	constructor(initialValue, stopValue) {
		this.initialValue = initialValue;
		this.currentValue = initialValue;
		this.stopValue = stopValue;
		const timer = null;
		this.counterEvent = new EventTarget();
	}

	start() {
		// this.counterEvent.dispatchEvent(new Event("start"));
		this.createCustomEvent("start")

		this.timer = setInterval(() => {
			if(this.currentValue === this.stopValue) {
				clearInterval(this.timer);
				// this.counterEvent.dispatchEvent(new Event("koniec"));
				this.createCustomEvent("koniec")

			} else {
				this.currentValue--;
				// this.counterEvent.dispatchEvent(new CustomEvent("changeValue", { detail: { text: this.currentValue} }));
				this.createCustomEvent("changeValue", { detail: { text: this.currentValue} });
				switch (this.currentValue) {
				  case 10:
				    // this.counterEvent.dispatchEvent(new CustomEvent("step1"));
					this.createCustomEvent("step1");

				  	break;
				  case 8:
				  	// this.counterEvent.dispatchEvent(new CustomEvent("step2"));
					this.createCustomEvent("step2");

				  	break;
				  case 5:
					this.createCustomEvent("step3");

				    // this.counterEvent.dispatchEvent(new CustomEvent("step3"));
				    break;
				  case 2:
					this.createCustomEvent("step4");
				  
				  	// this.counterEvent.dispatchEvent(new CustomEvent("step4"));
				  	break;
				  default:
				}


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