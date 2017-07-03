/**
 * @desc: Access service will check if user has location services enabeled, if has can go to home
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

services.factory('Access',function($q, STATUS, $cordovaGeolocation, $ionicLoading, $log) {


  var access = {
    "$hasLocationEnabled": function() {

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
        var long = position.coords.longitude;

        var myLatlng = new google.maps.LatLng(lat, long);

        var mapOptions = {
          'center': myLatlng,
          'zoom': 16,
          'mapTypeId': google.maps.MapTypeId.ROADMAP
        };

        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        return {
          'status': STATUS.OK,
          'data': position
        };
      }, function(err) {
        $log.error(err);
        return {
          'status': STATUS.UNAUTHORIZED,
          'data': err
        };
      }).finally(function() {
        $ionicLoading.hide();
      });
    }
  };

  return access;
});
