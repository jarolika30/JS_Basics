console.log("You are at " + window.location);
let person = {
	name : "Саша",
	surname : "Патлух", 
	age:30, 
	teacher:true,
	sayHello:function(){
		return "Hello" + this.name;
	}
}
console.log(person.name);
console.log(person.sayHello());
console.log(typeof person);
console.log(person);
person.canCode = true;
console.log(person);
const par = document.querySelector('p');
par.innerHTML = person.name + " " + person.surname + " " + person.age;
const cools = document.getElementsByClassName('cool');
console.log(cools);
console.log(cools[1]);
cools[0].innerHTML = "I am first";
const cools1 = document.getElementsByTagName('div');
console.log(cools1);
cools1[1].innerHTML = "I am glad";

const cools3 = document.querySelectorAll('.cool');
console.log(cools3);
cools3[2].innerHTML = "I am fine";