import { MyCounterModel } from './model.js';
import { MyCounterView } from './view.js';
import { MyCounterColoredView } from './coloredView.js';

 

export class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.coloredView = new MyCounterColoredView();
		this.model = new MyCounterModel(10, 0);
	}

	init() {
		this.view.addStartHandler(() => { this.model.start() });
		this.coloredView.addStartHandler(() => { this.model.start() });


		this.view.addPauseHandler (this.initPause());
		this.coloredView.addPauseHandler (this.initPause());

		this.view.addResetHandler(this.initReset());
		this.coloredView.addResetHandler(this.initReset());


		this.model.counterEvent.addEventListener("reset", () => {this.setupTextForViews("reset")} );		

		this.model.counterEvent.addEventListener("changeValue", (e) => {this.changeValueHandler(e.detail.text)} )


	}

	setupTextForViews(text) {
		this.view.setupText(text);
		this.coloredView.setupText(text);
	}

	changeValueHandler(text) {
		this.setupTextForViews(text);
		this.coloredView.setupColor();
	}

	initPause() {
		return () => { this.model.pause() };
	}

	initReset() {
		return () =>  { this.model.reset() };
	}


}


