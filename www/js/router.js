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

  .state('app.docs',{
    'url': '/docs',
    'templateUrl': 'templates/docs.html',
    'controller': 'DocsCtrl',
    'resolve': {

    }
  })

  .state('app.location',{
    'url': '/location',
    'templateUrl': 'templates/location.html',
    'controller': 'LocationCtrl',
    'views': {
      'menuContent': {
        'templateUrl': 'templates/location.html'
      }
    },
    'resolve': {

    }
  })

  .state('app.home',{
    'url': '/home',
    'templateUrl': 'templates/home.html',
    'controller': 'HomeCtrl',
    'resolve': {

    }
  })

  .state('app.search', {
    'url': '/search',
    'views': {
      'menuContent': {
        'templateUrl': 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
    'url': '/browse',
    'views': {
      'menuContent': {
        'templateUrl': 'templates/browse.html'
      }
    }
  })
    .state('app.playlists', {
      'url': '/playlists',
      'views': {
        'menuContent': {
          'templateUrl': 'templates/playlists.html',
          'controller': 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    'url': '/playlists/:playlistId',
    'views': {
      'menuContent': {
        'templateUrl': 'templates/playlist.html',
        'controller': 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/location');
});
