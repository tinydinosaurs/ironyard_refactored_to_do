// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
// import tiy from './app.js';
import toDoView from './views/TodoItemView.js';
import $ from 'jquery';


$('#submit_to_do').click(function () {
    let newItem = new toDoView($('#to_do_item').val());
    $('#to_do_item').val('');
    return newItem;
});

/****************************************************/
/*		LET'S REFACTOR THIS VANILLA JAVASCRIPT		*/
/****************************************************/

//////////////////////////////////////
// variables for any objects in the //
//DOM we want to reuse, e.g. button //
//////////////////////////////////////

// var toDoEntry = document.getElementById('to_do_item');
// var submitToDo = document.getElementById('submit_to_do');
// var toDoList = document.getElementById('to_do_list');
// var resetList = document.getElementById('reset_list');
// create an empty array

// var toDoEntries = [];

//////////////////////
// helper functions //
//////////////////////

// clears any text in the user input box
// function clearInput() {
  // toDoEntry.value = '';
// };


// function render() {
//     toDoList.value = '';
//     var listItem = '';
//     for(var i = 0; i < toDoEntries.length; i++) {
//         listItem += '<p><input type="checkbox"> ' + toDoEntries[i] + '<p>';
//         toDoList.innerHTML = listItem;
//     }
// }


////////////////////
// event listener //
////////////////////

// creat an event listener that listens for a click on the submitToDo button and then fires an anonymous function.
// submitToDo.addEventListener('click', function() {
//     // on click, store the user input in an array
//     toDoEntries.push(toDoEntry.value);
//     // call render function
//     render(); 
//     // also on click, log user input to the console    
//     console.log(toDoEntry.value);
//     // then clear input field
//     clearInput();
// });

// resetList.addEventListener('click', function() {
    // toDoEntries = [];
    // listItem = '';
    // toDoList.innerHTML = '';
// });
// 