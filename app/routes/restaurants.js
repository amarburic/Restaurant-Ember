import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    let value = {
    	id: 'grand-old-mansion',
    	label: 'Restaurant Name',
    	rating: 3.5,
    	nOfRatings: 1745, 
    	tags: [
    		{
    			name: "International"
    		}, {
    			name: "Italian"
    		}, {
    			name: "Mediterranian"
    		}
    	],
    	image: "https://previews.123rf.com/images/eastwest/eastwest0912/eastwest091200245/6143757-A-young-and-attractive-couple-dining-in-a-restaurant-Stock-Photo.jpg"
    };
    let ret = [];
    let n = 50;
    for(var i = 0; i < n; i++)
    	ret = ret.concat([Object.assign({}, value)]);
    for(var i = 0; i < n; i++)
        ret[i].nOfRatings = i;
    return ret;
    }
});
