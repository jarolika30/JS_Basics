window.addEventListener('load', function(){});
const apiKey = '099715979800997fed902c8c415868c1';
const city = 'Москва';

const resInput = document.querySelector('.result');
const form = document.forms[0];
var catRadio = document.getElementsByName('cat');
 var restRadio = document.getElementsByName('rest');
 var moneyRadio = document.getElementsByName('money');
console.log(resInput);
class Person {
    constructor(name){
		this.happiness = 0;
		this.name = name;
	}

	hasCat() {
	   return this.happiness++;
	}

	hasRest() {
	   return this.happiness++;
	}

	hasMoney() {
		return this.happiness++;
	}

	isSunny() {
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		var DATA = JSON.parse(xhr.responseText);
		var tempreture = Math.floor(DATA.main.temp - 273);
		if(tempreture > 15){
			this.happiness++;
		}
		return this.happiness;
	}
}
resInput.onclick = function(e){
	e.preventDefault();
	
	const name = form.elements.name.value;
	
    for (var i = 0; i < catRadio.length; i++) {
    	if (catRadio[i].type === 'radio' && catRadio[i].checked) {
        	var haveCat = catRadio[i].value;
        	console.log(haveCat);       
    	}
 	 }

 	
    for (var i = 0; i < restRadio.length; i++) {
    	if (restRadio[i].type === 'radio' && restRadio[i].checked) {
        	var haveRest = restRadio[i].value; 
        	console.log(haveRest);      
    	}
 	 }

 	 
    for (var i = 0; i < moneyRadio.length; i++) {
    	if (moneyRadio[i].type === 'radio' && moneyRadio[i].checked) {
        	var haveMoney = moneyRadio[i].value; 
        	console.log(haveMoney);      
    	}
 	 }

 	 const personOne = new Person(name);
 	 if(haveCat === 'yes' && haveRest === 'yes' && haveMoney === 'yes'){
 	 	personOne.hasCat();
 	 	personOne.hasRest();
 	 	personOne.hasMoney();
 	 }
 	 personOne.isSunny();
 	 const divName = document.querySelector('.personName');
 	 const divIcon = document.querySelector('.icon');
 	 divName.innerHTML = personOne.name + ':';
 	 if(personOne.happiness === 4){
 	 	divIcon.innerHTML = '😁';
 	 }else if(personOne.happiness == 2 || personOne.happiness == 3){
 	 	divIcon.innerHTML = '😐';
 	 }else{
 	 	divIcon.innerHTML = '☹️';
 	 }
}
