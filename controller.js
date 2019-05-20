class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.view2 = new MyCounterView2();

		this.model = new MyCounterModel(10, 0);
	}

	init() {
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


		this.view2.addStartHandlerB (() => 
			{ this.model.start((text) => { this.view.setupText(text); this.view2.setupText(text) }),
			 this.view2.setupColor() }	
		);


		this.view2.addPauseHandlerB (() => { this.model.pause() });
		this.view2.addResetHandlerB (() => { this.model.reset(
			(text) => { this.view.setupText(text);
						this.view2.setupText(text)
						 }
			) });

	}
}

const counterCtr = new MyCounterController();

counterCtr.init();