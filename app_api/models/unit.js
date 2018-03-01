//FOR A UNIT OF A PROPERTY
//PG. 136
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var unitSchema = new mongoose.Schema({
  unitID: { //this units identification number for the purposes of the database
    type: Number,
    required: true,
    unique: true
  },
  propertyID: { //what property is the unit a part of
    type: Schema.Types.ObjectId,
    ref: "Property",
    required: true
  },
  tenantID: { //linked account that lives here if not available and if tenant has an account
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  available: { //available for searching, looking to fill the unit with a tenant
    type: Boolean,
    required: true
  },
  name: { //unit number or name (ex. 7B)
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Unit", unitSchema);
