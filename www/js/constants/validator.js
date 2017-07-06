"use strict";
/**
 * @desc: Validates data type
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 */

constants.constant('VALIDATOR', (function(NSEW) {
  var againstList = {
    'number': function(variable) {
      return !isNaN(variable);
    },
    'string': function(variable) {
      return typeof variable === 'string' || variable instanceof String;
    },
    'float': function(variable) {
      return !isNaN(parseFloat(variable));
    },
    'nsew': function(variable) {
      variable = variable.toUpperCase().trim();
      return NSEW.hasOwnProperty(variable);
    },
    'array': function(variable) {
      return (variable.constructor === Array);
    },
    'json': function(variable) {
      try {
        JSON.parse(variable);
      } catch (e) {
        return false;
      }
      return true;
    }
  };

  return function VALIDATOR(variable, against) {

    // trim and get to lower case so it matches the property
    against = against.toLowerCase().trim();

    if (!againstList.hasOwnProperty(against)) {
      throw 'The validator can\'t recognize that validation';
    }

    return againstList[against](variable);
  };
}()));
