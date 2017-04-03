import Ember from 'ember';

export function isWithinRange([index, perPage, currentPage]) {
	if(index >= perPage * (currentPage - 1) && index < perPage * currentPage)
		return true;
	return false;
}

export default Ember.Helper.helper(isWithinRange);
