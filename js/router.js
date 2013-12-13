TodoApp.Router.map(function() {
	this.resource('todos', { path: '/' }, function() {
		// child routes
	});
});

TodoApp.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

TodoApp.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('todos');
	}
});