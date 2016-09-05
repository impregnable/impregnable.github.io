var blog = angular.module('myPrivateBlog', ['ui.router']);

blog.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        'content': {
          templateUrl: 'html/home.html'
        }
      }
    })
    .state('smartStuff', {
      url: '/smartStuff',
      views: {
        'content': {
          templateUrl: 'html/smartStuff.html'
        }
      }
    })
    .state('hilariousStuff', {
      url: '/hilariousStuff',
      views: {
        'content': {
          templateUrl: 'html/hilariousStuff.html'
        }
      }
    });
})
    .run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });
