"use strict";
/**
 * @desc: Application base files.
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */
app.run(function($ionicPlatform, Access ,$ionicModal, $rootScope) {

  // My location is shared through all the application
  $rootScope.myLocation = {};

  // Current state is shared through all menus
  $rootScope.$state = {};
  $rootScope.$on("$stateChangeStart", function(e, toState, toParams, fromState, fromParams, error) {
    $rootScope.$state = toState;
  });

 // get coordinates or lock Application
  $rootScope.checkForCoordinates = function() {
    Access.$getCoordinates().then(function(coordinates) {
      $rootScope.myLocation = new Coordinate(coordinates.coords.latitude,coordinates.coords.longitude);
      if ($rootScope.modal) {
        $rootScope.modal.hide();
        delete $rootScope.modal;
      }
    },function(error) {
      if (!$rootScope.modal) {
        $ionicModal.fromTemplateUrl('templates/location.html', {
          'scope': $rootScope
        }).then(function(modal) {
          $rootScope.modal = modal;
        }).finally(function() {
           // load the modal
          $rootScope.modal.show();
        });
      } else {
        $rootScope.modal.message = 'Os serviços continuam desactivados, por favor tente novamente';
      }
    });
  };

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }

    $rootScope.checkForCoordinates();

  });
});
