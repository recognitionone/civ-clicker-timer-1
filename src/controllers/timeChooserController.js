import { TimeChooserModel } from '../models/timeChooserModel.js';
import { TimeChooserView }  from '../views/timeChooserView.js';


export class TimeChooserController {
	constructor() {
		this.model = new TimeChooserModel();
		this.view = new TimeChooserView();
	}

	init() {
		this.view.addStartHandler(() => { this.model.save(this.view.timeChooser.value) });
	}
}