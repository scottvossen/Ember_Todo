TodoApp.Router.map(function() {
	this.resource('todos', { path: '/'});
});

TodoApp.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});