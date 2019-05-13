class MyCounterModel {

	constructor(time) {
		this.time = time;
		this.timer = setInterval(this.myCounter, 1000);
			}

	myCounter() {
	    if (this.time <= 0) {
	      clearInterval(this.timer);	      
	      this.time = timeValue;
	      this.view.demo = "my watch has ended";
	    } else {
	      this.view.demo = --this.time;
	    }
	  }
}


class MyCounterView {

	constructor() {
		this.demo = document.getElementById("demo").innerHTML;	
		const demo = "any";
		//ta zmienna istnieje tylko wewnątrz tej klasy, substytut tego, że jest prywatna
	}

	newMethod() {
		const demo = 1;
		console.log("first", demo);

		if (2 > 1) {
			const demo = 2;
			console.log("if", demo);
		}

		const demo = 3;
		console.log("after if", demo);
	}
}


class MyCounterController() {
	constructor() {
		this.view = new MyCounterView();
		this.model = new MyCounterModel();
	}
}



const any = new MyCounterView();
any.demo // to co jest z konstruktora a nie tamta prywatna
any.newMethod();











// class GoldenRetriever {
//   constructor(name) {
//     this.name = name;
//   }

//   podajLape() {
//   	console.log(this.name);
//   }
// }




// const merida = new GoldenRetriever("Merida");

// merida.podajLape();

