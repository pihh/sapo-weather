"use strict";
/**
 * @desc: Controller for docs view
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */
controllers.controller('DocsCtrl', function($scope, $ionicModal, $timeout, jsonLoader, $stateParams) {

  // instanciate the scope
  $scope.docs = [];
  $scope.openDoc = {};

  // Error handeling modal
  var loadModal = function() {
    if (!$scope.modal) {
      $ionicModal.fromTemplateUrl('templates/message.html', {
        'scope': $scope
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.message = 'Falha ao carregar ficheiro json, por favor verifique a sua conexão á internet e tente novamente mais tarde.';
      }).finally(function() {
         // load the modal
        $scope.modal.show();
      });
    }
  };

  var removebackSlashes = function(str) {
    return str.replace(/\\\//g, "/");
  };
  // Single item view
  $scope.selectDoc = function(index) {
    $scope.openDoc = $scope.docs[index];
    $scope.openDoc.description = removebackSlashes($scope.openDoc.description);
  };

  // List items view
  jsonLoader.$loadJsonFile('docs').then(function(data) {
    // if (jsonLoader.$isJSON(data.data)) {
    if (data.data) {
      $scope.docs = data.data;
      if ($stateParams.index) {
        $scope.selectDoc($stateParams.index);
      }
    } else {
      loadModal();
    }
  },function(err) {
    loadModal();
  });
});
