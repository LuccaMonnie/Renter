//FOR PEOPLE REVIEWING TENANTS
var mongoose = require('mongoose');

//construct a schema
var tenantReviewSchema = new mongoose.Schema({
  account : String, //make this specific to person's account?
  rating: {type: Number, "default": 0},
  notes: String //should we have this be a list [String] that we can parse to
  //group people together
});
