import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['range-stepper'],

    // Parameters
    start: 1,
    end: 1,
    stepSize: 1,
    onRangeChanged() {}, // Passed 'start' and 'end' arguments

    _onRangeChanged() {
        this.onRangeChanged(this.get('start'), this.get('end'));
    },

    onPreviousStep() {
        this.set('start', this.get('start') - this.get('stepSize'));
        this.set('end', this.get('end') - this.get('stepSize'));
        this._onRangeChanged();
    },

    onNextStep() {
        this.set('start', this.get('start') + this.get('stepSize'));
        this.set('end', this.get('end') + this.get('stepSize'));
        this._onRangeChanged();
    },

    didUpdateAttrs({ newAttrs, oldAttrs }) {
        this._super(...arguments);

        const oldStepSize = Ember.get(oldAttrs, 'stepSize.value');
        const newStepSize = Ember.get(newAttrs, 'stepSize.value');

        if (newStepSize !== oldStepSize) {
            // Keep range start the same and adjust end
            this.set('end', this.get('start') + newStepSize - 1);
            this._onRangeChanged();
        }
    }
});
