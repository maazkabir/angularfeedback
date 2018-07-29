var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Feedback
var feed = new Schema({
  name: {
    type: String
  },
  feedback: {
    type: String
  }
},{
    collection: 'feeds'
});

module.exports = mongoose.model('feed', feed);