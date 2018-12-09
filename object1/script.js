
var ob = {
	nameob: "Katty",
	sayName:function(){
		return "I am " + nameOb;
	}
};

console.log(ob.extensible);
console.log(Object.prototype);
console.log(Array.prototype);
console.log(Array.extensible);
console.log(typeof ob);
var arr = new Array();
var ob1 = Object.create({city:"Riga",street:"Swutrn"});
console.log(ob1);
console.log("nameob" in ob);
console.log(ob.hasOwnProperty("nameob"));
console.log(ob.hasOwnProperty("toString"));
console.log(Object.isExtensible(ob));
console.log(Object.isSealed(ob));
Object.freeze(ob);
console.log(Object.isExtensible(ob));
console.log(Object.isSealed(ob));
console.log(Object.isFrozen(ob));

var ob3 = Object.create(ob1);
console.log(ob1.isPrototypeOf(ob3));
var ob4  = Object.defineProperties({},{x:{value:23, writable:true},y:{value:17, writable:true}});
console.log(ob4);

var arr1 = [1,2,3,4,5];
console.log(arr1);
arr1.length = 3;
console.log(arr1);
arr1.length = 0;
console.log(arr1);
var arr3 = [1,3];



