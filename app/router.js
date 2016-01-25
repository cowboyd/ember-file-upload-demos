import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: 'auto'
});

Router.map(function() {
  this.route('demos');
});

export default Router;
