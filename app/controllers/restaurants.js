import Ember from 'ember';

export default Ember.Controller.extend({
	resultsPerPage: '9',
	currentPage: '1',
	actions: {
		jumpToPage(page) {
			this.set('currentPage', page);
		}
	}
});
