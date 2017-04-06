var mongoose = require('mongoose');

// mongoose.connect('mongodb://Users:password@ds145800.mlab.com:45800/amazingrace');
mongoose.connect('mongodb://localhost/eventscore2');

mongoose.connection.on('error', function(error) {
  console.error(error);
});

mongoose.connection.once('open', function() {
  console.log('Mongoose connected.');
});

module.exports = mongoose;