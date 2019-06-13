import { TimeChooserModel } from './timeChooserModel.js';
import { TimeChooserView } from './timeChooserView.js';


export class TimeChooserController {
	constructor() {
		this.model = new TimeChooserModel();
		this.view = new TimeChooserView();
	}

	init() {
		this.view.addStartHandler(() => { this.model.start(this.view.timeChooser.value) });
	}
}