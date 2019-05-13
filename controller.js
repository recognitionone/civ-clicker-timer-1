class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(10, 0);
	}

	init() {
		this.view.addStartHandler(() => { this.model.start((text) => { this.view.setupText(text) }) });
		this.view.addPauseHandler (() => { this.model.pause() });
		this.view.addResetHandler (() => { this.model.reset((text) => { this.view.setupText(text) }) });
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();