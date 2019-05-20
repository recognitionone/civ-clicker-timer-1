class MyCounterController {
	constructor() {
		this.view = new MyCounterView("demo", "startButton", "pauseButton", "resetButton");
		this.view2 = new MyCounterView2(); //coloredView ex.

		this.model = new MyCounterModel(10, 0);
	}

	init() {
	
	// reset i pause do oddzielnej funkcji

		this.view.addStartHandler (() => { this.model.start(
			(text) => { this.view.setupText(text);
						this.view2.setupText(text)}
			) });

		this.view.addPauseHandler (() => { this.model.pause() });

		this.view.addResetHandler (() => { this.model.reset(
			(text) => { this.view.setupText(text);
						this.view2.setupText(text)
						 }
			) });




		this.view2.addStartHandler (() => 
			{ this.model.start((text) => { this.view.setupText(text); this.view2.setupText(text) }),
			 this.view2.setupColor() }	
		);

		this.view2.addPauseHandler (() => { this.model.pause() });

		this.view2.addResetHandler (() => { this.model.reset(
			(text) => { this.view.setupText(text);
						this.view2.setupText(text)
						 }
			) });
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();