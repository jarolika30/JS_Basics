console.log("You are at " + window.location);
const items = document.getElementsByTagName('li');
const divs = document.querySelectorAll('div');
let text = ['Lady Java','I wanna program like they do at Oracle','Let you through my hotspot','Let you through my firewall',
'I am object oriented and I am ready to browse','So come into my house and I wll let you click my mouse','You can download me anywhere',
'You can get me for free','Java Zone'];
console.log(items);
console.log(divs);
console.log(text);
let counter = 0;
while(counter < items.length){
	items[counter].innerHTML = text[counter];
	counter++;
}
for(let index = 0; index < divs.length; index++){
   divs[index].style.backgroundImage = 'linear-gradient(' + (45 + index * 50) + 'deg, red, yellow)';
}