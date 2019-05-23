import { MyCounterView } from './view.js';

export class MyCounterColoredView extends MyCounterView {

	constructor() {
		super("demoB", "startButtonB", "pauseButtonB", "resetButtonB");
	}

	setupColor() {
		this.demo.style.color = "rgb(" + Math.random() * 256 + "," + Math.random() * 256 + "," + Math.random() * 256 + ")"
	}

	setupText(text) {
		super.setupText(text);
		this.setupColor();
	}
}