import Backbone from 'backbone';

const ToDoListModel = Backbone.Model.extend({
	defaults: {
		userInput: 'get off your ass and do something'},
	idAttribute: '_id',
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/do-it-now'	
});

export default ToDoListModel