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
document.body.innerHTML = person.name + " " + person.surname + " " + person.age;