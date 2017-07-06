"use strict";
/**
 * @desc: Response model and response codes for uniform naming and data sharing
 *  throughout the application. Not sure if will ever use it but since it's
 *  a copy from a snippet, can't hurt
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

constants.constant('RESPONSES', {
  'OK': 200,
  'UNAUTHORIZED': 401,
  'ERROR': 500
})
.provider('STATUS', function(RESPONSES) {

  // validates if the response code it's valid and returns the number
  var validResponseStatus = function(res) {
    if (RESPONSES.hasOwnProperty(res)) {
      return RESPONSES[res];
    }
    throw 'Invalid status code';
  };


  this.value = function() {
    return {
      'status': validResponseStatus,
      'data': {},
      'message': ''
    };
  };
  this.$get = this.value;


});
