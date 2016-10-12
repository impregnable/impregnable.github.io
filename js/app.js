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
    .run(function($rootScope, $state, $interval) {
      $rootScope.$state = $state;

      var player = document.getElementById('header-greeting__player');
      var isPlaying = false;
      $rootScope.justPlay = function() {
          if (isPlaying) {
              player.pause();
          } else {
              player.play();
          }
      };
      player.onplaying = function() {
          isPlaying = true;
      };
      player.onpause = function() {
          isPlaying = false;
      };

      // $interval(function(){ $rootScope.justPlay(); }, 7000000);

      // $interval(call,5000);
      // var newString = 'new String that will be passed here through service';
      // function call() {
      //     $('.header__greeting').html(newString);
      //     console.log('one');
      // }
    });
