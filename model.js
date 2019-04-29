class MyCounterModel {
	constructor(time) {
		this.time = time;
		this.timer = setInterval(this.myCounter, 1000);
	}


	myCounter() {
	    if (this.time <= 0) {
	      clearInterval(this.timer);	      
	      
	      this.time = timeValue;
	      demo = "my watch has ended";
	    
	    } else {

	      demo = --this.time;
	    }
	  }
}



class MyCounterView {
	const demo = document.getElementById("demo").innerHTML;	

}





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

