var blog = angular.module('myPrivateBlog',
    ['ui.router', 'postsControllers','postsServices', 'btford.markdown', 'postsDirectives', 'hljs']);

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
          templateUrl: 'html/smartStuff.html',
          controller: 'SmartStuffController'
        }
      }
    })
    .state('postsAboutSmartStuff', {
      url: '/smartStuff/{smartStuffPostId}',
      views: {
        'content': {
          templateUrl: 'html/post.html',
          controller: 'SmartStuffController'
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
    })
    .state('infoPage', {
      url: '/infoPage',
      views: {
        'content': {
            templateUrl: 'html/infoPage.html'
        }
      }
    });
})
    .run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });
