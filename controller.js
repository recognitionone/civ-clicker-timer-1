class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(10, 0);
	}

	init() {
		this.view.addStartHandler(() => { this.model.start() });
		this.view.addPauseHandler (() => { this.model.pause() });
		this.view.addResetHandler (() => { this.model.reset() });
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();