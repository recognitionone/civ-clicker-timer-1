class MyCounterController {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel(10, 0);
	}

	init() {
		this.view.addStartHandler(() => { this.model.start() });
		this.view.addPauseHandler (() => { this.model.pause() });
		this.view.addResetHandler (() => { this.model.reset() });

		// this.model.counterEvent.addEventListener("koniec", () => {console.log("koniec") } );
		this.model.counterEvent.addEventListener("reset", () => {this.view.setupText("reset")} );
		this.model.counterEvent.addEventListener("changeValue", (e) => {this.view.setupText(e.detail.text)} )
	}
}

const counterCtr = new MyCounterController();

counterCtr.init();