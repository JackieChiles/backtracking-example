import Ember from 'ember';

export default Ember.Controller.extend({
    start: 1,
    end: 5,
    stepSize: 5,

    onRangeSelected(range) {
        this.set('stepSize', range);
    },

    onRangeChanged(start, end) {
        this.set('start', start);
        this.set('end', end);
    }
});
