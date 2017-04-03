import Ember from 'ember';

export function starRating(rating) {
  
  let full_star = '<span class = "full-star">★</span>';
  let empty_star = '<span class = "empty-star">★</span>';
  
  let ret = "";
  rating = Math.floor(rating);
  let max_rating = 5;
  for(var i = 1; i <= rating; i++)
  	ret += full_star;
  for(var i = 1; i <= max_rating - rating; i++)
  	ret += empty_star;
  
  return ret;
}

export default Ember.Helper.helper(starRating);
