var postsControllers = angular.module('postsControllers', []);
postsControllers.controller('SmartStuffController', function($scope, postsFactory, $stateParams) {
    postsFactory.all()
        .then(function(posts) {
            $scope.posts = posts;
            $scope.smartStuffPostId = $stateParams.smartStuffPostId;

            function getById(arr, id) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].id == id) {
                        return arr[i];
                    }
                }
            }
            $scope.singlePost = getById($scope.posts, $stateParams.smartStuffPostId);
        });
});
postsControllers.controller('HilariousStuffController', function($scope, thoughtsFactory, $stateParams) {
    thoughtsFactory.all()
        .then(function(posts) {
            $scope.posts = posts;
            $scope.hilariousStuffPostId = $stateParams.hilariousStuffPostId;

            function getById(arr, id) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].id == id) {
                        return arr[i];
                    }
                }
            }
            $scope.singlePost = getById($scope.posts, $stateParams.hilariousStuffPostId);
        });
});
postsControllers.controller('HilariousStuffDetailController', function($scope) {
    var player = document.getElementById('audioPlayer');
    var isPlaying = false;

    $scope.playAudio = function() {
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
});
postsControllers.controller('SecondInfoPageController', function($scope) {
    $scope.showDetails = false;
});
