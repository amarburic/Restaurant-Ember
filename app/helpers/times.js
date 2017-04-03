import Ember from 'ember';

export function times(n) {
  var accum = 0;
    for(var i = 1; i < n; i++)
        accum += i;
    return accum;
}

export default Ember.Helper.helper(times);
