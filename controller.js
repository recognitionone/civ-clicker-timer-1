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

		this.view.addPauseHandler (this.initPause());
		this.coloredView.addPauseHandler (this.initPause());

		this.view.addResetHandler(this.initReset());
		this.coloredView.addResetHandler(this.initReset());
	}

	initPause() {
		return () => { this.model.pause() };
	}

	initReset() {
		return () =>  { this.model.reset((text) => { this.view.setupText(text); this.coloredView.setupText(text)}) };
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();