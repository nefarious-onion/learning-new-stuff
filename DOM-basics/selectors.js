//EXAMINE DOCUMENT OBJECT

// console.dir(document); //-> shows all the properties and objects and methods that are inside the document
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all) // HTML-collection of everything the document contains and access them by their index
// console.log(document.all[13])
// document.all[10].textContent = 'hello'; //not a good way to select anything
// console.log(document.forms)
// console.log(document.links) //HTML-collection is a different thing than an array -> array-methods don't work!

//-------------selectors----------------

//GETELEMENTBYID
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle)
// headerTitle.textContent = 'Hello'; //doesn't pay attention to styling - one of the biggest differences between textContent and innerText
// headerTitle.innerText = 'goodbye'; //applies styles

//headerTitle.innerHTML = '<h3>Hello</h3>'; //doesnt change hi, but inserts the html-code inside the DOM-object
                                            //there is a way to change the actual html of the page, but it's more advanced method
//header.style.borderBottom = 'solid 3px #000'; // .style allows you to manipulate css styles -> use camelCase on the css properties

//GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'hello2';
// items[1].style.fontWeight = 'bold';
// items[1].style.background = 'green';

//items.style.background = '#f4f4f4'; // not working bc you need to loop through the array

// for (var i = 0; i < items.length; i++) {
//     items[i].style.background = '#f4f4f4';
// }

//GETELEMENTBYTAGNAME

// var items = document.getElementsByTagName('li');
// console.log(items);
// items[1].textContent = 'hello2';
// items[1].style.fontWeight = 'bold';
// items[1].style.background = 'green';

// for (var i = 0; i < items.length; i++) {
//         items[i].style.background = '#f4f4f4';
// }

//QUERYSELECTOR

//var header = document.querySelector('header'); //grabs the first instance of tag on the page
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px black';

// var input = document.querySelector('input'); //chooses the first input on the page
// input.value = 'Hello world';

// //u can use any css selector with the queryselector
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'yellow';

//QUERYSELECTORALL
// var titles = document.querySelectorAll('.title'); //-> nodelist that has array methods 
// console.log(titles); 

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.background = 'hotpink';
// }
// for (var i = 0; i < even.length; i++) {
//     even[i].style.background = 'cyan';
// }

