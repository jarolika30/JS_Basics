var number = 23.45;
var str = number.toFixed(1);
var str1 = number.toString(16);
console.log(str);
console.log(str1);
var date = new Date();
console.log(date.valueOf());
var ob = {
	nameOb: "UnknownOb",
	stateOb: "active",
	turnOn: 12
}
console.log(ob.toString());
console.log(ob.stateOb);
console.log(ob instanceof Object);
console.log(ob instanceof RegExp);
console.log("stateOb" in ob);
console.log(str in ob);
var arr = [1,2,3,4];
console.log(arr);
console.log(arr.length);
delete arr[3];
console.log(arr);
console.log(arr.length);

