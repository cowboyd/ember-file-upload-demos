import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    let [blob] = params;
    this.revokeCurrentURL();
    return this._url = URL.createObjectURL(blob);
  },

  revokeCurrentURL() {
    if (this._url) {
      URL.revokeObjectURL(this._url);
    }
  },

  destroy(...args) {
    this.revokeCurrentURL();
    this._super(...args);
  }
});
