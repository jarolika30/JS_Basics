window.addEventListener('load', function(){});
const apiKey = '099715979800997fed902c8c415868c1';
const city = 'Москва';
const tempreture = 0;
const resInput = document.querySelector('.result');
console.log(reInput);
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
		tempreture = Math.floor(DATA.main.temp - 273);
		if(tempreture > 15){
			this.happiness++;
		}
		return this.happiness;
	}
}
