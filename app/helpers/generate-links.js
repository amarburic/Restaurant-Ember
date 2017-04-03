import Ember from 'ember';

export function generateLinks([nOfPages]) {
  let ret = [];
  for(var i = 0; i < nOfPages; i++)
  	ret = ret.concat([{value: i + 1}]);
  return ret;
}

export default Ember.Helper.helper(generateLinks);
