"use strict";
/**
 * @desc: Controller for home view
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */
app.controller('HomeCtrl', function($scope, http, HAVERSINE) {

  var haversine = HAVERSINE;

  var getDistances = function(obj) {
    var start = $scope.myLocation,
      end = new Coodinate(obj.lat,obj.lng);

    obj.distFromMe = haversine(start,end);
  };

  var generateDistance = function(obj) {

    return obj;
  };

  var orderBy = function(obj, property, limit) {

    return obj;
  };

  var reloadLocation = function() {
    if ($scope.myLocation.hasOwnProperty('get') && !$scope.myLocation.get().hasOwnProperty('lat')) {
      return;

    }
    var endpoints = ["locations","praias","weathertypes"];
    http.$loadJsonFilesList(endpoints).then(
      function(success) {
        var i = 0;
        success.forEach(function(data,status,headers,config) {
          $scope[endpoints[i]] = data;
          i++;

        });
      },function(fail) {
      throw 'Failed to load multiple promises';
    });
  };

   // Listen for changes on my location object
  $scope.$watch('myLocation', function() {
    reloadLocation();
  });


  // bootstrap
  function bootstrap() {
    reloadLocation();
  }


  bootstrap();
});
