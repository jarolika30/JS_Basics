const us = document.getElementById("us");
const man = document.getElementById("m");
const woman = document.getElementById("w");
var User = {
	hasAccessToProfile:true,
	sayHello:function(){
		return "Привет!";
	}
}
function UserM(nameU, email, password){
	this.nameU = nameU,
	this.email = email,
	this.password = password,
	this._proto_ = User,
	this.sayHello = function(){
		return "Привет, " + this.nameU + "!" + " Ты зарегистрирован.";
	}
}
function UserF(nameU, email, password){
	this.nameU = nameU,
	this.email = email,
	this.password = password,
	this._proto_ = User,
	this.sayHello = function(){
		return "Привет, " + nameU + "!" + " Ты зарегистрирована.";
	}
}
const Katty = new UserF("Katty", "cat@rambler.ru", "345OYhjk");
const Dima = new UserM("Dima", "dim@rambler.ru", "dfgE1296");
console.log(User.sayHello());
console.log(Katty.sayHello());
console.log(Dima.sayHello());
us.innerHTML = User.sayHello();
man.innerHTML = Dima.sayHello();
woman.innerHTML = Katty.sayHello();

class Person{
	constructor(nameP, lastname, profession){
		this.nameP = nameP;
		this.lastname = lastname;
		this.profession = profession
	}
	sayHi(){
		return "Hi, I`m " + this.nameP;
	}
}
class Female extends Person{
	constructor(nameP, lastname, profession,numberOfKids){
		super(nameP, lastname, profession);
		this.numberOfKids = numberOfKids
	}
	makeUp(){
		return "I love smoky.";
	}
}
const Masha = new Female("Masha", "Rack", "teacher", 1);
console.log(Masha);
for(key in Masha){
	console.log(key);
}
console.log(Masha.sayHi());
console.log(Masha.makeUp());
