(function() {
  'use strict';
  
  var mongoose = require('mongoose');
  
  var MemberSchema = new mongoose.Schema({
    Display_Name: {
      type: 'String',
      required: true
    },
    Phone_Number : {
      type: 'Number'
    },
    First_Name: {
      type: 'String'
    },
    Middle_Name: {
      type: 'String'
    },
    Last_Name: {
      type: 'String'
    },
    DOB: {
      type: 'String'
    }
  });
  
  module.exports = mongoose.model('member', MemberSchema);
})();