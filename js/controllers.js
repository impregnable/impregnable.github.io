var postsControllers = angular.module('postsControllers', []);
postsControllers.controller('SmartStuffController', function($scope, postsFactory, $stateParams) {
    postsFactory.all()
        .then(function(posts) {
            $scope.posts = posts;
            console.log($scope.posts,'posts');
            $scope.smartStuffPostId = $stateParams.smartStuffPostId;

            function getById(arr, id) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].id == id) {
                        return arr[i];
                    }
                }
            }
            $scope.singlePost = getById($scope.posts, $stateParams.smartStuffPostId);
            // console.log($scope.posts[0].codeSample);
            // $scope.bbb = $scope.posts[0].codeSample.join('\n');
            // console.log($scope.bbb);
        });
});
postsControllers.controller('HilariousStuffController', function($scope, thoughtsFactory, $stateParams) {
    thoughtsFactory.all()
        .then(function(posts) {
            $scope.posts = posts;
            console.log($scope.posts,'thoughts');
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
