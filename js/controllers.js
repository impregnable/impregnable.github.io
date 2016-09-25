var postsControllers = angular.module('postsControllers', []);

postsControllers.controller('SmartStuffController', function($scope, postsFactory, $stateParams) {
    postsFactory.all()
        .then(function(posts) {
            $scope.posts = posts;
            // $scope.post = getById($scope.posts, $stateParams.id);
        });

});