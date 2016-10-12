var postsDirectives = angular.module('postsDirectives', []);
postsDirectives.directive('highlight', function($interpolate){
    return {
        restrict: 'EA',
        scope: true,
        compile: function (tElem) {
            var interpolateFn = $interpolate(tElem.html(), true);
            tElem.html('');

            return function(scope, elem){
                scope.$watch(interpolateFn, function (value) {
                    elem.html(hljs.highlight(value).value);
                });
            }
        }
    };
});