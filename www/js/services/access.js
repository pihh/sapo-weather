"use strict";
/**
 * @desc: Access service will check if user has location services enabeled, if has can go to home
 *  named it by access because I'd use the same service if I'd use access levels.
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

services.factory('Access',function($cordovaGeolocation, $ionicLoading, $timeout) {

  var checkIfAsked = function() {
    window.alert('Check if you denied permissions before, if you did the browser can have blocked the request');
  };

  var access = {
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
