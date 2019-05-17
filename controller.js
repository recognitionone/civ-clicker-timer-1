class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(10, 0);
	}

	init() {
		this.addStartPauseHandler();

		this.view.addResetHandler (() => { this.model.reset(
			this.setTimerDisplay.bind(this)
		) });
	}

	addStartPauseHandler() {
		this.view.addStartPauseHandler (
			this.modelStartHandler.bind(this),
			() => { this.model.pause() }
		)
	}
	
	modelStartHandler() {
		this.model.start( this.setTimerDisplay.bind(this) )
	}

	setTimerDisplay(text) {
		this.view.setTimerDisplay(text)
		if (text === 'koniec') {
			this.model.reset(this.setTimerDisplay.bind(this));
			this.view.startPauseButton.click();
		}
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();