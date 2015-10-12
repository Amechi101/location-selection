"use strict";

angular.module('locationApp').directive( 'googleMapsSelection', googleMapsSelection );

//directive to watch for change on the list to update map
function googleMapsSelection() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            // console.log(scope);
            // console.log(attrs);
            // console.log(element);

            scope.$watch(function(scope) {
                // console.log(attrs)
            });
                
        }
    };
}
