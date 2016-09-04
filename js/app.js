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
    });
})
    .run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });
