/**
 * @desc: Access service will check if user has location services enabeled, if has can go to home
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

services.service('Access',function($q, STATUS, $cordovaGeolocation, $ionicLoading, $log) {

  var res = STATUS.MODEL;

  var checkIfAsked = function (){
    window.alert('Check if you denied permissions before, if you did the browser can have blocked the request');
  };

  var access = {
    "$canUseLocation": function() {
      res.status = STATUS.UNAUTHORIZED;
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.diagnostic.isLocationAvailable(function() {
          // Success
          res.status = STATUS.OK;
        }, function() {
          // Error
          checkIfAsked();
        });
      }
      return res;
    },
    "$getCoordinates": function() {

      $ionicLoading.show({
        'template': '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
      });

      var posOptions = {
        'enableHighAccuracy': true,
        'timeout': 20000,
        'maximumAge': 0
      };

      $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {

        $log.info({
          'position': position
        });

        var lat  = position.coords.latitude;
        var lng = position.coords.longitude;
        var coordinate = new Coordinate(lat,lng);

        res.status = STATUS.OK;
        res.data = position;
      }, function(err) {
        $log.error(err);
        checkIfAsked();
        res.status = STATUS.UNAUTHORIZED;
        res.data = err;
      }).finally(function() {
        $ionicLoading.hide();
        return res;
      });
    }
  };

  return access;
});
