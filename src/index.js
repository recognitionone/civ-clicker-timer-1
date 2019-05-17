import _ from 'lodash';
import './style.css';
import Icon from './dog.jpg';
import printMe from './print.js';


function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	//text
	element.innerHTML = _.join(['Hello', 'everybody'], ' ');
	element.classList.add('hello');

	//image
	const myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	//button
	btn.innerHTML = 'Click me';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());