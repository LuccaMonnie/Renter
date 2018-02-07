//FOR PEOPLE REVIEWING TENANTS
var mongoose = require('mongoose');

//construct a schema
var tenantReviewSchema = new mongoose.Schema({
  account : String, //make this specific to person's account?
  rating: {type: Number, "default": 0, required: true}, //SET REQUIRED, validation error, create way to see on the webpage
  notice: Boolean, // notice given
  rentLeft: Boolean, //is there still unpaid rent
  latePayment: Boolean, //did they have late rent?
  lateThreeDay: Boolean,
  latePaymentNum: Number,
  lateThreeDayNum: Number,
  damages: Boolean,
  damageDescription: String,
  complaintsFiled: Boolean, //legality of reporting what the complaints were?
  complaintDescription: String,
  undocumentedHousemates: Boolean, //undocumented tenants or pets
  coTenants: Boolean,
  rentalStatus: Boolean,//CHECK?? on a written rental agreement meaning
  removed: Boolean, //asked to vacate?
  rentAgain: Boolean,
  pets: Boolean,
  petType: String,
  deposit: Boolean,
  moveOutDate: String, // calendar dropdown
  rentalAmount: Number,
  lease: Boolean,

  notes: String, //should we have this be a list [String] that we can parse to
  //group people together



});
