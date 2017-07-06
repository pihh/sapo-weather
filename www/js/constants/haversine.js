"use strict";
/**
 * @desc: Gets distance between coodinates
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 */

constants.constant('HAVERSINE',(function() {

  var toRad = function(num) {
    return num.toRad();
  };
  // jumping options and callback for simplicity ( but on a real project I'd use them )
  return function HAVERSINE(start, end, options, callback) {
    // validate if valid lat long
    if (false === start instanceof Coordinate || false === end instanceof Coordinate) {
      throw 'Start and end location of the haversine formula must be of instance Coodinate';
    }

    var km = 6371;
    var defaultOptions = {
      'decimalPlaces': 5
    };

    var dLat = toRad(end.lat - start.lat);
    var dLng = toRad(end.lng - start.lng);
    var lat1 = start.lat.toRad();
    var lat2 = end.lat.toRad();

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var res = km * c;

    // update default options to match user added options
    if (options) {
      if (options.decimalPlaces && !isNaN(options.decimalPlaces)) {
        defaultOptions.decimalPlaces = options.decimalPlaces.toFixed(0);
      }
    }

    // Apply the options
    res = res.toFixed(defaultOptions.decimalPlaces);

    return parseFloat(res);
  };
}()));
