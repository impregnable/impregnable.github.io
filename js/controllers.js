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