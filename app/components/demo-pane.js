import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':demo-pane'],

  snippetName: Ember.computed(function () {
    return `${this.get('name')}.hbs`;
  })
});
