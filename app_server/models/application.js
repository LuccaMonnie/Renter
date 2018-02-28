//FOR TENANTS APPLYING FOR A UNIT
//PG. 136
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var applicationSchema = new mongoose.Schema({
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
  propertyID: { //building for unit applying to
    type: Schema.Types.ObjectId,
    ref: "Property",
    required: true
  },
  unitID: { //specific unit applying for
    type: Schema.Types.ObjectId,
    ref: "Unit",
    required: true
  }
  //add other questions when I get the scanned copy
});

module.exports = mongoose.model("Application", accountSchema);
