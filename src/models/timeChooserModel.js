export class TimeChooserModel {
	constructor() {
		this.value = 60;
	}

	save(value) {
		this.value = value;
	}
}