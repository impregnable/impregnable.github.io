angular.module('postsServices', [])
    .factory('postsFactory', function($http) {
        var promise;
        return {
            all: function() {
                if(!promise) {
                    promise = $http.get('postsSmartStuff.json')
                        .then(function(response) {
                            return response.data;
                        })
                }
                return promise;
            }
        }
    });

