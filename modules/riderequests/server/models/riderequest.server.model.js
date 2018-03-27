'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Riderequest Schema
 */
var RiderequestSchema = new Schema({
  // name: {
  //   type: String,
  //   default: '',
  //   required: 'Please fill Riderequest name',
  //   trim: true
  // },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  driverId:{
    type:String
  },

  requesterId:{
    type:String
  },

  arrival:{
    type:String
  },

  departure:{
    type:String
  },

  isAccepted:{
    type: Boolean
  },

  isDeclined:{
    type: Boolean
  },

  requesterId:{
    type:Boolean
  },

  isCompleted:{
    type:Boolean
  }

});

mongoose.model('Riderequest', RiderequestSchema);
