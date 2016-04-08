import Backbone from 'backbone';
import ToDoListModel from '../models/ToDoListModel';

const ToDoListCollection = Backbone.Collection.extend({
	model: ToDoListModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/do-it-now'
});


export default ToDoListCollection