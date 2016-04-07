import $ from 'jquery';
import Backbone from 'backbone';

// const ToDoItems = new Backbone.View.extend({
// 	console.log('whaaaaaaaaa??')
// });



const ToDo = Backbone.View.extend({
	// hello: function() {
	// 	console.log('whaaaaaaaaaaaa')
	// },
	tagName: 'p',
	className: 'to-do-item',
	initialize: function(input) {
		this.input = input;
		this.render();
	},
	template: function() {
		return `
		<input type="checkbox" class="done">${this.input}
		`
	},
	render: function() {
		let myList = [];
		this.$el.append(this.template());
		$('#to_do_list').append(this.el);
		myList.push(this.input);
		console.log(myList);
	},
}); 

// imageInfo.forEach((val, index, array) => {
// 	let newImageView = new ImageView(val.label, val.src);
// 	$('.flex-container').append(newImageView.$el);
// });

export default ToDo