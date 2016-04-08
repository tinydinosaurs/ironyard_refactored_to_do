// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import $ from 'jquery';
import ToDoItemView from './views/ToDoItemView';
import ToDoListCollection from './collections/ToDoListCollection';




let myToDos = new ToDoListCollection();




var settings = {
	success: function() {
		myToDos.forEach((item) => {
			console.log(item.get('userInput'));
			let doThisView = new ToDoItemView(
				item.get('userInput')
			);
			$('#to_do_list').append(doThisView.el);
		});
	}
};

myToDos.fetch(settings);

$('#submit_to_do').on('click', (e) => {
	e.preventDefault();
	let doThis = {
		userInput: $('#to_do_item').val()
	};
	myToDos.create(doThis);
	let doThisView = new ToDoItemView(doThis.userInput);
	$('#to_do_item').val('');
	$('#to_do_list').append(doThisView.el);
});


//////////THIS IS SOME OLD CODE//////////
// $('#submit_to_do').click(function () {
//     let newItem = new ToDoItemView($('#to_do_item').val());
//     $('#to_do_item').val('');
// });