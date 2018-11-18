console.log(Boolean(-Infinity));
console.log(Boolean(Infinity));
console.log(Boolean(NaN));
console.log(Boolean(null));
var obj = {};
console.log(Boolean(obj));
console.log(Boolean('e'));
console.log(Boolean(""));
console.log(Boolean(' '));
console.log(Boolean(-0));

console.log(obj);
console.log(Number(' '));
console.log(Number(""));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(obj));

console.log(parseInt("true"));
console.log(parseFloat("true"));
console.log(parseInt("11.7 miles"));
console.log(parseFloat("11.7 miles"));
console.log(parseInt(123.678));
console.log(parseFloat(123.678));
console.log(parseInt(null));
console.log(parseFloat(null));
console.log(parseInt("tr"));
console.log(parseFloat("tr"));
console.log(parseInt(""));
console.log(parseFloat(""));
console.log(parseInt(" "));
console.log(parseFloat(" "));

