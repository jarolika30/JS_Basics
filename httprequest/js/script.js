console.log("You are at " + window.location);
const apiKey = '099715979800997fed902c8c415868c1';

const form = document.forms[0];
const insert = document.querySelector('.total');
const city = form.elements.city;
console.log(city);
form.onsubmit = function(e){
	e.preventDefault();
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=' + apiKey;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if(xhr.status != 200){
		console.log(xhr.status + ' ' + xhr.statusText);
	}else{
		console.log(xhr.responseText);
		var DATA = JSON.parse(xhr.responseText);
	}
	insert.innerHTML = Math.floor(DATA.main.temp - 273);
}