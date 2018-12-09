console.log(Infinity);
console.log(Infinity + 1);
console.log(3 * Infinity);
console.log(Number.Positive_Infinity);
console.log(Math.pow(10,1000));
console.log(1/Infinity);
console.log(Math.log(0));
console.log(0 === -0);
console.log(isFinite(2e64));
console.log(0 == undefined);
console.log(0 === undefined);
console.log(null == undefined);
console.log(null === undefined);
console.log(0 == null);
console.log(0 === null);

//encode/decodeURI()

var uri = 'https://mozilla.org/?x=шеллы';
var encode = encodeURI(uri);
console.log(encode);
var decode = decodeURI(encode);
console.log(decode);

//Object
console.log(Object.length);
console.log(Object.prototype);

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({c: 4, d: 5}, object1, {e:7,c:0});
console.log(JSON.stringify(object1));
console.log(object2);
var ob = Object.create({},{a:{value:23}});
console.log(ob);

Object.assign(ob,{c:48,b:18});
console.log(ob);
Object.defineProperty(ob,'fg',{value:78,writable:true});
console.log(ob);
Object.defineProperties(ob,{df:{value:34,writable:true},cd:{value:11}});
console.log(ob);
var arr = Object.entries(object2);
console.log(arr[0]);
var descriptor = Object.getOwnPropertyDescriptor(ob, 'df');
console.log(descriptor.writable + ' ' + descriptor.value + ' ' + descriptor.configurable);
var descriptors = Object.getOwnPropertyDescriptors(ob);
console.log(descriptors);
var arr2 = Object.getOwnPropertyNames(object2);
console.log(arr2);
console.log(Object.getPrototypeOf(arr2));
console.log(Object.is(12,'12'));
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.isExtensible(ob));
Object.preventExtensions(ob);
console.log(Object.isExtensible(ob));
console.log(ob.constructor);
console.log(ob.toLocaleString());
console.log(ob.valueOf());
console.log(ob.isPrototypeOf(arr2));
console.log(ob.hasOwnProperty('a'));
console.log(ob.propertyIsEnumerable('a'));

//Number
var num = 4.8989;
console.log(num.toFixed(2));
console.log(num.toExponential());
console.log(parseInt(num));
console.log(num.toLocaleString());
console.log(num.valueOf());
console.log(num.toPrecision(2));

//date

var date = Date.now();
var date2 = new Date(2014, 2,24,12,0);
var date3 = new Date();
console.log(date + ' ' + date2);
console.log(date3);
console.log(date3.getDate());
console.log(date3.getDay());
console.log(date3.getHours());
console.log(date3.getMilliseconds());
console.log(date3.getYear());
console.log(date3.getFullYear());

//String
var str = "I will steal your soul";
var str1 = ' forever!';
console.log(str.charAt(8));
console.log(str.indexOf('your'));
console.log(str.lastIndexOf('s'));
var str2 = str.slice(1,7);
console.log(str.slice(1,7));
console.log(str2);
console.log(str2.trim());
console.log(str.concat(str1));
console.log(str1.repeat(3));
var arr2 = new Array();
arr2 = str.split(' ');
console.log(arr2);
console.log(str.includes('Yes'));
console.log(str.endsWith('l'));
console.log(str.startsWith('I'));
console.log(str.replace('soul', 'heart'));
console.log(str.substring(4,9));

//Arrays












