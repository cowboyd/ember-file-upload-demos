import Ember from 'ember';
import { layout } from '../templates/components/x-object-url';

export default Ember.Component.extend({
  classNameBindings: [':x-object-url'],
  layout: layout,
  url: Ember.computed('blob', function() {
    this.revokeCurrentURL();
    return this._url = URL.createObjectURL(this.get('blob'));
  }),

  revokeCurrentURL() {
    if (this._url) {
      URL.revokeObjectURL(this._url);
    }
  },

  willDestroyElement() {
    this.revokeCurrentURL();
  }
});
