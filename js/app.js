var blog = angular.module('myPrivateBlog',
    ['ui.router', 'postsControllers','postsServices', 'btford.markdown', 'postsDirectives', 'hljs', 'ngStorage']);

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
                    templateUrl: 'html/smartPost.html',
                    controller: 'SmartStuffController'
                }
            }
        })
        .state('hilariousStuff', {
            url: '/hilariousStuff',
            views: {
                'content': {
                    templateUrl: 'html/hilariousStuff.html',
                    controller: 'HilariousStuffController'
                }
            }
        })
        .state('postsAboutHilariousStuff', {
            url: '/hilariousStuff/{hilariousStuffPostId}',
            views: {
                'content': {
                    templateUrl: 'html/hilariousPost.html',
                    controller: 'HilariousStuffDetailController'
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
    .run(function($rootScope, $state, $interval, phrasesFactory, $localStorage) {
      $rootScope.$state = $state;
      $rootScope.$storage = $localStorage;

      var player = document.getElementById('header-greeting__player');
      var isPlaying = false;

      $rootScope.playResponse = function() {
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

      // just for fun: list of favourite phrases... still refactoring like all stuff on my blog
      phrasesFactory.all()
          .then(function(phrases) {
              $rootScope.phrases = phrases;

              var arrayPhrases = $.map(phrases, function(value) {
                  return [value];
              });
              // initial audio hero's response
              $rootScope.heroResponse = 'audio/Goodnewstravelsslowlybadnewshaswings.mp3';
              //
              $rootScope.changePhrases = function() {
                  var i = 0;
                  function nextPhrase() {
                      i = (i + 1) % arrayPhrases.length;
                      var next = arrayPhrases[i];
                      $('.header__greeting').html(next);
                      // yeah, it's fucking ridiculous, but I can't figure out how the hell I can combine it
                      var nextForAudioName = next.replace(/[^a-zA-Z ]/g,'').replace(/ /g, '');
                      var heroResponse = 'audio/' + nextForAudioName + '.mp3';
                      $rootScope.heroResponse = heroResponse;
                  }
                  return {
                      start : function() {
                          $interval(nextPhrase, 60000)
                      }
                  }
              };
              var go = $rootScope.changePhrases();
              go.start();
              // $rootScope.$storage = $localStorage.$default({
              //     counter: 42
              // });
          })
    });
