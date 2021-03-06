"use strict";
/**
 * @desc: Controller for home view
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */
app.controller('HomeCtrl', function($scope, jsonLoader, HAVERSINE, VALIDATOR, NSEW, $filter, $interval) {

  $scope.results =  [];
  $scope.filter = '';

  $scope.$watch('$root.filter', function(newval,oldval) {
    $scope.filter = newval;
  });

  var haversine = HAVERSINE;
  var validator = VALIDATOR;

  var generateDistance = function() {
    if ( $scope.praias ) {
      var myLocation = $scope.myLocation.coordinates;
      var start = new Coordinate(myLocation.lat, myLocation.lng);
      angular.forEach($scope.praias, function(value, key) {

        // Get the haversine
        var end = new Coordinate(parseFloat(value.lat), parseFloat(value.long));
        $scope.praias[key].distFromMe = haversine(start, end);

        // Parse directions Letter to string.
        $scope.praias[key].dirOndulacao = NSEW[$scope.praias[key].dirOndulacao] || $scope.praias[key].dirOndulacao;
        $scope.praias[key].ddVento = NSEW[$scope.praias[key].ddVento] || $scope.praias[key].ddVento;

      });

    }
  };

  var orderBy = function(scopeProperty, orderProperty, limit) {

    if (!$scope.hasOwnProperty(scopeProperty) || !validator($scope[scopeProperty],'array') || !$scope[scopeProperty][0].hasOwnProperty(orderProperty)) {
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
    jsonLoader.$loadJsonFilesList(endpoints).then(
      function(success) {
        var i = 0;
        success.forEach(function(data,status,headers,config) {
          $scope[endpoints[i]] = data.data;
          i++;

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
