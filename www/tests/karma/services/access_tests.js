describe('Access', function() {

  var status, cordovaGeolocation, ionicLoading, timeout;
  beforeEach(module('sapo.services'));

  beforeEach( inject(function(STATUS, $cordovaGeolocation, $ionicLoading, $timeout) {
    status = STATUS;
    cordovaGeolocation = $cordovaGeolocation;
    ionicLoading = $ionicLoading;
    timeout = $timeout;
  }));

});
