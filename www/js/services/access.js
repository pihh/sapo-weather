/**
 * @desc: Access service will check if user has location services enabeled, if has can go to home
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

services.factory('Access',function($q, STATUS, $cordovaGeolocation, $ionicLoading, $timeout) {

  var res = STATUS.MODEL;

  var checkIfAsked = function() {
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
        'template': '<ion-spinner icon="bubbles"></ion-spinner><br/>A detectar a sua localização!'
      });
      var posOptions = {
        'enableHighAccuracy': true,
        'timeout': 20000,
        'maximumAge': 0
      };
      return $cordovaGeolocation.getCurrentPosition(posOptions).finally(function() {
        $timeout(function() {
          $ionicLoading.hide();
        },750);
      });
    }
  };

  return access;
});
