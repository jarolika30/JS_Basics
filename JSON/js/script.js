console.log("You are at " + window.location);
const items = document.getElementsByTagName('h1');
console.log(items);
var indexHTMLelement = 0;
console.log(items[indexHTMLelement]);

const divs = document.querySelectorAll('div');
const colors = ['red', 'blue', '#30d5c8']
const pElements = document.querySelectorAll('p');

let crypto = [{name: 'Bitcoin', price: 1000.37}, {name: 'Ethereum', price: 716 }, {name: 'Litecoin', price: 140}];

/*На их основе создайте страницу, демонстрирующую сравнение курсов криптовалюты
— Заголовок берем из name
— Цену пишем в параграф
— Устанавливаем на странице цветной блок, ширина которого привязана к цене валюты
*/
crypto.forEach(function(item){
	for(key in item){
		if(key == 'name'){
          items[indexHTMLelement].innerHTML = item[key];
		}else if(key == 'price'){
			pElements[indexHTMLelement].innerHTML = item[key];
			divs[indexHTMLelement].style.width = item[key] + 'px';
			divs[indexHTMLelement].style.height = '40px';
			divs[indexHTMLelement].style.background = colors[indexHTMLelement];

		}
	}
	indexHTMLelement++;

})
/*creating string-object from JSON for transmittal*/
const apiString = JSON.stringify(DATA);
console.log(apiString);
