const button = document.getElementById('button1');
const form = document.forms[0];
var radioF = form.elements.sex;
console.log(radioF);
console.log(form);
var person = {};
form.onsubmit = function(e){
	e.preventDefault();
	const name = form.elements.namePerson.value;
	console.log(name);
	person.namePerson = name;
	const selectF = form.elements.color;
    const selectedIndex = selectF.options.selectedIndex;
	person.colorOfPost = selectF.options[selectedIndex].value;
	for(let index = 0; index < radioF.length; index++){
		if(radioF[index].checked){
			person.gender = radioF[index].value;
			console.log(person.gender);
		}
	}
	if(person.gender == "woman"){
		document.write("<body style = 'background:" +  person.colorOfPost + " '><h1>Present for " + person.namePerson + "</h1><img src = 'flowers.jpg'/></body>");
	}else{
        document.write("<body style = 'background:" +  person.colorOfPost + " '><h1>Present for " + person.namePerson + "</h1><img src = 'auto.jpg'/></body>");
	}
}
