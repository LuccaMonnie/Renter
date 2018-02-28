//FOR ACCOUNTS
//PG. 136
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new mongoose.Schema({
  accountID: { //users identification number for the purposes of the database
    type: Number,
    required: true,
    unique: true
  },
  email: { //email associated with the account
    type: String,
    required: true,
    unique: true
  },
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  landlord: { //Is this a landlord account or a tenant account? True is landlordAccount
    type: Boolean,
    required: true
  },
  location: String //general area landlord works under (ex. Portland, OR)
});

module.exports = mongoose.model("Account", accountSchema);
