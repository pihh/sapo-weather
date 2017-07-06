/**
 * @desc: Application base controller. Uses Abstract template.
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */
controllers.controller('AppCtrl', function($scope, $rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  // $scope.$on('$ionicView.enter', function(e) {
  // });

  $scope.radio = $rootScope.filter;

  $scope.updateFilter = function(str) {
    $rootScope.filter = str;
  };

});
