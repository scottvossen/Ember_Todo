TodoApp.Router.map(function() {
	this.resource('todos', { path: '/' }, function() {
		// child routes
    	this.route('active');
    	this.route('completed');
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

TodoApp.TodosActiveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		});
	},

	renderTemplate: function(controller) {
		this.render('todos/index', { controller: controller });
	}
});

TodoApp.TodosCompletedRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return todo.get('isCompleted');
		});
	},

	renderTemplate: function(controller) {
		this.render('todos/index', { controller: controller });
	}
});