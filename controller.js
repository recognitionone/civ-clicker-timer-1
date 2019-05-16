class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(10, 0);
	}

	init() {
		this.view.addStartHandler (() => { this.model.start(
			(text) => { this.view.setupText(text) },
			(text) => { this.view.toggleButtonText(text) }
			) });

		this.view.addResetHandler (() => { this.model.reset(
			(text) => { this.view.setupText(text) },
			(text) => { this.view.toggleButtonText(text) }
			) });
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();