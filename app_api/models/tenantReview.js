//FOR PEOPLE REVIEWING TENANTS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//numbers in attributes correspond to the numbers from Monnie Management rental request image

var tenantReviewSchema = new mongoose.Schema({
  tenantID: { //the tenant being reviewed
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },
  landlordID: { //the landlord doing the reviewing
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  date: { //date this form was filled out
    type: Date,
    default: Date.now,
    required: true
  },
  notice: { // 1. proper notice given?
    type: Boolean,
    required: true
  },
  rentLeft: { //2. is tenant liable for rent or any unpaid rent?
    type: Boolean,
    required: true
  },
  rentLeftAmount: { //if 2=yes then how much do they owe
    type: Number,
    min: 1
  },
  late: { //3. did they have late rent payments or 3 day notices?
    type: Boolean,
    required: true
  },
  lateThreeDayNum: { //if 3=yes then how many 3 day notices?
    type: Number,
    min: 1
  },
  latePaymentNum: { // if 3=yes then how many late payments?
    type: Number,
    min: 1
  },
  nSF: { //5. Any NSF checks? (NSF=non sufficient funds which means a bounced check)
    type: Boolean,
    required: true
  },
  nSFNum: { //If 5=yes then how many NSF checks?
    type: Number,
    min: 1
  },
  damages: { //6. Any documented damages?
    type: Boolean,
    required: true
  },
  damageDescription: String, //if 6=yes then describe damages
  complaintsFiled: { //7. Any documented complaints?
    type: Boolean,
    required: true
  },
  complaintDescription: { //if 7=yes then describe complaints
    type: String,
    required: true
  },
  undocumentedHousemates: { //8. Any unauthorized tenants or pets?
    type: Boolean,
    required: true
  },
  coTenants: { //9. Share with a co-tenant?
    type: Boolean,
    required: true
  },
  rentalStatus: { //10. On a written rental agreement?
    type: Boolean,
    required: true
  },
  evicted: { //11. Has tenant ever been asked to vacate?
    type: Boolean,
    required: true
  },
  rentAgain: { //12. Would re-rent to the applicant?
    type: Boolean,
    required: true
  },
  depositRefund: {
    type: Boolean,
    required: true
  }, //13. Was deposit refunded?
  pets: { //14. Does the applicant have a pet?
    type: Boolean,
    required: true
  },
  petType: String, //if 14=yes then what kind of pet?
  moveOutDate: { // calendar dropdown?
    type: Date,
    required: true
  },
  rentAmount: {
    type: Number,
    required: true,
    min: 1
  },
  lease: {
    type: Boolean,
    required: true
  },
  notes: String //any additional details
});

module.exports = mongoose.model("TenantReview", tenantReviewSchema);
