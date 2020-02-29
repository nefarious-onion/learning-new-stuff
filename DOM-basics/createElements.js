//Creating elements

//create a div
var newDiv = document.createElement('div');

//Add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title', 'Hello Div');

//Create a text node
var newDivText = document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivText);

//add new div to DOM
var container = document.querySelector('header .container'); 
var h1 = document.querySelector('header h1'); 
container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '3rem';

console.log(newDiv);