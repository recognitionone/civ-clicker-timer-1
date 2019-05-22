class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.coloredView = new MyCounterColoredView();
		this.model = new MyCounterModel(10, 0);
	}

	init() {
		this.view.addStartHandler (() => { this.model.start((text) => { this.view.setupText(text); this.coloredView.setupText(text)}) });

		this.coloredView.addStartHandler (() => 
			{ this.model.start((text) => { this.view.setupText(text); this.coloredView.setupText(text) }),
			  this.coloredView.setupColor() });

		this.addPauseHandler();
		this.addResetHandler();
	}

	addPauseHandler() {
		const initPause = () => { this.model.pause() };

		this.view.addPauseHandler (initPause);
		this.coloredView.addPauseHandler (initPause);
	}

	addResetHandler() {
		const initReset = () => { this.model.reset((text) => { this.view.setupText(text); this.coloredView.setupText(text)}) };

		this.view.addResetHandler(initReset);
		this.coloredView.addResetHandler(initReset);
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();