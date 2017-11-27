import Backbone from 'backbone';

// 1. Define Model and give it a name
const Song = Backbone.Model.extend({
  // custom code; we are going to use Book as a class; so we can get an instance of Model Book
});

// Makes sure when book.js is imported, they get Book automatically
export default Song;
