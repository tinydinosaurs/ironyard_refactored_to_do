import $ from 'jquery';
import Backbone from 'backbone';

// const ToDoItems = new Backbone.View.extend({
// 	console.log('whaaaaaaaaa??')
// });

const ToDoItemView = Backbone.View.extend({
	tagName: 'p',
	className: 'to-do-item',
	events: {
		'click': 'completeItems',
		 'click .fa-trash-o': 'removeItems'
	},
	initialize: function(input) {
		this.input = input;
		this.render();
	},
	template: function() {
		return `
		${this.input} <i class="fa fa-trash-o"></i>
		`
	},
	render: function() {
		this.$el.append(this.template());
		$('#to_do_list').append(this.el);
	},

	completeItems: function() {
		this.$el.toggleClass('complete');
	},

	removeItems: function() {
		this.$el.remove();
	}
}); 


export default ToDoItemView