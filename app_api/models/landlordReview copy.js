//FOR PEOPLE REVIEWING LANDLORDS
//PG. 136
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var landlordReviewSchema = new mongoose.Schema({
  tenantID: { //the tenant doing the reviewing
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },
  landlordID: { //the landlord being reviewed
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  date: { //date this form was filled out
    type: Date,
    default: Date.now,
    required: true
  },
  responsive: { //Do they respond to messages and calls?
    type: Boolean,
    required: true
  },
  workOrder: { //Do they respond with help?
    type: Boolean,
    required: true
  },
  onSiteNotice: { //Do they give 24 hour notice before coming to the property?
    type: Boolean,
    required: true
  },
  notes: String //Any elaboration on those questions or other notable information you would like to share?
});

module.exports = mongoose.model("LandlordReview", accountSchema);
