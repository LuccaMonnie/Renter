//FOR A PROPERTY MANAGED BY A LANDLORD
//PG. 136
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

var propertySchema = new mongoose.Schema({
  propertyID: { //this properties identification number for the purposes of the database
    type: Number,
    required: true,
    unique: true
  },
  landlordID: { //the landlord who owns the property, also the creator of the property profile
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  name: { //nickname to display on the property page for the building
    type: String,
    required: true
  },
  numUnits: { //how many separate units in the building
    type: Number,
    min: 1,
    required: true
  },
  address: { //exact address of building
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      uppercase: true,
      required: true,
      enum: statesArray
    },
    zip: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model("Property", accountSchema);
