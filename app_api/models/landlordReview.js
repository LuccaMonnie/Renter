//FOR PEOPLE REVIEWING LANDLORDS
//PG. 136
var mongoose = require('mongoose');

var landlordReviewSchema = new mongoose.Schema({
  //responsive, easy to get in contact with
  communication: Number,
  fixProblem: Number, //how quickly did they respond with help
  //more??

});
