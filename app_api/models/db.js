var mongoose = require( 'mongoose');
var shutdown;
var dbURI = 'mongodb://localhost/renter'
mongoose.connect(dbURI);

//monitor for connector
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

//check for connection error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

//check for disconnection
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});


//end the connection with mongoose!
shutdown = function (msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through '+ msg);
    callback();
  });
};

//send message to the shutdown method and begin the kill process
process.once('SIGUSR2', function (){
  shutdown('nodemon restart', function (){
    process.kill(process.pid, 'SIGUSR2');
  });
});

//exit Node process
process.on('SIGINT', function(){
  shutdown('app termination', function(){
    process.exit(0);
  });
});

process.on('SIGTERM', function(){
  shutdown('Heroku app shutdown', function (){
    process.exit(0);
  });
});

require('./tenantReview');
require('./users');
