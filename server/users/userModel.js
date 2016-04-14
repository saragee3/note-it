var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  savedDestinatins: {
    type: [String]
  },
  savedWiki: {
    type: [String]
  }
});

module.exports = mongoose.model('User', userSchema);