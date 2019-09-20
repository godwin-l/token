var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var token = new Schema({
  apiKey: String,
  clientId: String,
  clientSecret: String
},
  {
  strict: false
});
module.exports = mongoose.model('token', token);