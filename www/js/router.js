/**
 * @desc: All application routes, templates and controllers are mapped in this
 *    file. It's a angular ui router regular file.
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    'url': '/app',
    'abstract': true,
    'templateUrl': 'templates/menu.html',
    'controller': 'AppCtrl'
  })
  .state('app.docs', {
    'url': '/docs',
    'views': {
      'menuContent': {
        'templateUrl': 'templates/docs.html',
        'controller': 'DocsCtrl'
      }
    }
  })
  .state('app.doc', {
    'url': '/doc/:index',
    'views': {
      'menuContent': {
        'templateUrl': 'templates/doc.html',
        'controller': 'DocsCtrl'
      }
    }
  })

  .state('app.home',{
    'url': '/home',
    'templateUrl': 'templates/home.html',
    'views': {
      'menuContent': {
        'templateUrl': 'templates/home.html',
        'controller': 'HomeCtrl'
      }
    },
    'resolve': {

    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
