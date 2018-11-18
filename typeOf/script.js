console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof null);
var obj = {};
console.log(typeof obj);
console.log(typeof 'e');
console.log(typeof "true");
console.log(typeof '');
var arr = ['w','1'];
console.log(typeof arr);
var f = function(){return true};
console.log(typeof f);
var bool = false;
console.log(typeof bool);
var date = new Date();
console.log(typeof date);
console.log(typeof undefined);

console.log(toString.call(arr));
console.log(toString.call('e'));

var count = 2 ** 4;
console.log(count);
var res = count / 0;
console.log(res);
var res1 = count / -0;
console.log(res1);
var res2 = count / "";
console.log(res2);
var res3 = count / undefined;
console.log(res3);
var res4 = count / null;
console.log(res4);

console.log(Infinity == Infinity);
console.log(Infinity == -Infinity);
console.log(NaN == NaN);
console.log(Infinity / Infinity);
console.log(2 / Infinity);
console.log(undefined === null);
console.log(undefined == null);
console.log(undefined == NaN);


