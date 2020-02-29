//EVENT LISTENERS

//Using html markup onClick is the old way of doing a click event -> modern way would be this:

//var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick() {
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.background = 'black';
// }

//function buttonClick(e) {
    // console.log(e.target); //gives the element where the event was fired from
    // console.log(e.target.id); 
    // console.log(e.target.className); 
    // console.log(e.target.classList);  //DOM-token list

    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>' + e.target.id + '</h3>'
    
    //CLIENT = FROM THE WINDOW
    // console.log(e.type); //type of event
    // console.log(e.clientX); //mouse position in the window element from side to side
    // console.log(e.clientY); //mouse position in the window element from top down

    //OFFSET = FROM THE ELEMENT ITSELF
    // console.log(e.offsetX); //mouse position INSIDE the element
    // console.log(e.offsetY);
    
    // console.log(e.altKey); //boolean true if altkey is pressed when click event fires
    // console.log(e.ctrlKey); 
    // console.log(e.shiftKey); 
//}

//var button = document.getElementById('button');
//var box = document.getElementById('box');
    
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent); //doubleclick
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent); //fires only when mouse enters the element
//box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent); //fires when mouse enters the element but also when mouse goes over any inner elements too
//box.addEventListener('mouseout', runEvent);

//box.addEventListener('mousemove', runEvent); // u can grab the position of the mouse with this

//function runEvent(e) {
    //console.log('EVENT TYPE: ' + e.type);
    
    //output.innerHTML = '<h3>MouseX ' + e.offsetX + '</h3><h3>MouseY ' + e.offsetY + '</h3>'
    
    //Change the background color of the whole body with the mouse position:
    //document.body.style.background = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
//}

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);


//itemInput.addEventListener('focus', runEvent); //fires when element is activated
//itemInput.addEventListener('blur', runEvent); //fires when element is deactivated


//itemInput.addEventListener('cut', runEvent); //fires when something is cut
//itemInput.addEventListener('paste', runEvent); //fires when s0omething is pasted

//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);
//the submit button is submitting as a regular html submit-button unless you prevent that
//in order for the event to happen as intended you need to add a method to the function
// e.preventDefault(); -> prevents the submit button sending the information to wherever

function runEvent(e) {
    e.preventDefault(); //allows the submit button event to work as intended

    console.log('EVENT TYPE: ' + e.type);
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

    //console.log(e.target.value); //gives the value of the targeted element


}