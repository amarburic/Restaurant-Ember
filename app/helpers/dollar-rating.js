import Ember from 'ember';

export function dollarRating(rating) {
  let full_dollar = '<span class = "full-dollar">$</span>';
  let empty_dollar = '<span class = "empty-dollar">$</span>';
  
  let ret = "";
  rating = Math.floor(rating);
  let max_rating = 4;
  for(var i = 1; i <= rating; i++)
  	ret += full_dollar;
  for(var i = 1; i <= max_rating - rating; i++)
  	ret += empty_dollar;
  return ret;
}

export default Ember.Helper.helper(dollarRating);
