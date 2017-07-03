/**
 * @desc: Haversine formula applied to the json file recieved
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo: Tests ( a lot of tests )
 */

filters.filter('haversine', function() {

  var haversine = function(start,end){

    // error handleing
    // start && end should be a coordinates object
    var lat1,lat2,lon1,lon2,radius,x1,dLat,x2,dLon,hF1,hF2,hF;

    lat1 = start.lat;
    lat2 = end.lat;

  }
  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, optional1, optional2) {

    var output;

    // Do filter work here

    return output;

  }

});
