"use strict";
/**
 * @desc: Controller for home view
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */
app.controller('HomeCtrl', function($scope, http, HAVERSINE, VALIDATOR, $filter) {

  $scope.results =  [];

  var haversine = HAVERSINE;

  var generateDistance = function() {
    if ( $scope.praias ) {
      var myLocation = $scope.myLocation.coordinates;
      var start = new Coordinate(myLocation.lat, myLocation.lng);
      angular.forEach($scope.praias, function(value, key) {

        var end = new Coordinate(parseFloat(value.lat), parseFloat(value.long));
        $scope.praias[key].distFromMe = haversine(start, end);
      });

      console.log($scope.praias);
    }
  };

  var orderBy = function(scopeProperty, orderProperty, limit) {

    if (!$scope.hasOwnProperty(scopeProperty) || !VALIDATOR($scope[scopeProperty],'array') || !$scope[scopeProperty][0].hasOwnProperty(orderProperty)) {
      return;

    }

    $scope.results = $filter('orderByProperty')($scope[scopeProperty],orderProperty);
    if (limit) {
      $scope.results = $scope.results.slice(0, limit);
    }
  };

  var reloadLocation = function() {
    var proceed = false;

    try {
      var check = $scope.myLocation.get().hasOwnProperty('lat');
      proceed = true;
    } catch (e) {
      // do nothing
    }

    // if coordinates are not loaded, stop executing
    if (!proceed) {
      return;
    }

    var endpoints = ["locations","praias","weathertypes"];
    http.$loadJsonFilesList(endpoints).then(
      function(success) {
        var i = 0;
        success.forEach(function(data,status,headers,config) {
          $scope[endpoints[i]] = data.data;
          i++;

        });

        window.console.log({
          'myLocation': $scope.myLocation.coordinates,
          'locations': $scope.locations,
          'praias': $scope.praias,
          'weathertypes': $scope.weathertypes,
        });

        generateDistance();
        orderBy('praias','distFromMe',10);

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

  }


  bootstrap();
});
