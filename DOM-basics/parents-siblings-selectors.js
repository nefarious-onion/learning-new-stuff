//TRAVERSING THE DOM

var itemList = document.querySelector('#items');

//PARENTS AND CHILDREN

//--------parentNode

    // console.log(itemList.parentNode);
    // itemList.parentNode.style.background = 'green';
    // console.log(itemList.parentNode.parentNode.parentNode);

//----------parentElement -> can be used basically the same as parentNode

    // console.log(itemList.parentElement);
    // itemList.parentElement.style.background = 'green';
    // console.log(itemList.parentElement.parentElement.parentElement);

//---------childNodes

    // console.log(itemList.childNodes);
    //gives a nodelist that has text-elements in in addition to all the childnodes -> they represent linebreaks
    //childNodes should not be used bc of the text-elements
    //-> use instead:

//---------children

    // console.log(itemList.children); //-> gives a HTML-collection with all the childnodes
    // itemList.children[1].style.background = 'hotpink';

//--------firstChild -> kinda useless

    // console.log(itemList.firstChild); //-> inclides linebreaks etc like the childNodes 

//--------firstElementChild -> more useful, doesn't include the white space, just the actual elements like the children

    // console.log(itemList.firstElementChild);
    // itemList.firstElementChild.style.background = 'brown';

//-------lastElementChild
    // itemList.lastElementChild.style.background = 'brown';


//SIBLINGS

//------nextSibling & previousSibling
    // console.log(itemList.nextSibling); // includes the linebreaks again
    // console.log(itemList.nextElementSibling);
    // console.log(itemList.previousSibling); //includes the linebreaks
    // console.log(itemList.previousElementSibling);
    // itemList.previousElementSibling.style.background = 'green';

    