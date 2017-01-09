import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['range-picker'],

    selectedSize: 5,

    // Parameters
    start: 1,
    end: 5,
    onRangeSelected() {} // Passed 'range' argument
});
