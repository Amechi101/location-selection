"use strict";

angular.module('locationApp').directive( 'googleMapsSelection', googleMapsSelection );
angular.module('locationApp').directive( 'uiView', uiView );

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

function uiView() {
    return {
        scope: true,
        restrict: 'A',
        templateUrl:  'locationApp/components/home/partials/homeUISwitch.html',
        controller:"HomeController"     
    }
}

