TodoApp = Ember.Application.create();

TodoApp.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});