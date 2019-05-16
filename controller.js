class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(10, 0);
	}

	init() {
		this.view.addStartHandler (() => { this.model.start((text) => { this.view.setupText(text) }) });
		this.view.addPauseHandler (() => { this.model.pause() });
		this.view.addResetHandler (() => { this.model.reset((text) => { this.view.setupText(text) }) });

		this.view.addStartHandlerB (() => { 
			this.model.start((text) => { this.view.setupText(text) }), 
			this.model.changeColor((theColor) => { this.view.setupColor(theColor) })
		});


		this.view.addPauseHandlerB (() => { this.model.pause() });
		this.view.addResetHandlerB (() => { this.model.reset((text) => { this.view.setupText(text) }) });

		// this.view.addColorHandler (() => { this.model.changeColor((theColor) => { this.view.setupColor(theColor) }) });
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();