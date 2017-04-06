var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  eventId: { type: Number, required: true, unique: true },
  displayName: { type: String, required: true },
  location: { type: String },
  date: { type: Date },
  createdAt: { type: Date }
  updatedAt: { type: Date, default: Date.now },
  startTime: { type: Date },
  headlineArtist: { type: String },
  featureArtist: { type: String },
  ticketMinimum: { type: Number },
  ticketMaximum: { type: Number },
  ticketAverage: { type: Number },
  ticketAvailable: { type: Number },
  score: { type: Number },
  eventCapacity: { type: Number },
  ticketsSold: { type: Number},
  purchaseURL: { type: String }

});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;