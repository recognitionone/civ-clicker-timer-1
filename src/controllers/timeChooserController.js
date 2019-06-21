import { TimeChooserModel } from '../models/timeChooserModel.js';
import { TimeChooserView }  from '../views/timeChooserView.js';


export class TimeChooserController {
	constructor() {
		this.model = new TimeChooserModel();
		this.view = new TimeChooserView();
	}

	init() {
		this.view.addSliderHandler(() => { 
			this.model.save(this.view.slider.value);
			this.view.setupText(this.view.slider.value);
			document.cookie = `time=${this.view.slider.value}`;
			 });

		this.view.addStartButtonHandler(() => {
			window.location = ('/counter')
		});
	}
}