import $ from 'jquery';
import Backbone from 'backbone';

// const ToDoItems = new Backbone.View.extend({
// 	console.log('whaaaaaaaaa??')
// });

let myList = [];

const ToDo = Backbone.View.extend({
	// hello: function() {
	// 	console.log('whaaaaaaaaaaaa')
	// },
	tagName: 'p',
	className: 'to-do-item',
	events: {
		'click': 'removeItems'
	},
	initialize: function(input) {
		this.input = input;
		this.render();
	},
	template: function() {
		return `
		${this.input}
		`
	},
	render: function() {
		this.$el.append(this.template());
		$('#to_do_list').append(this.el);
		myList.push(this.input);
		console.log(myList);
	},

	removeItems: function() {
		$(this.el).remove();
	}
}); 


export default ToDo