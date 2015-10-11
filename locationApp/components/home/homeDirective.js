"use strict";

angular.module('locationApp').directive( 'googleMapsSelection', googleMaps );

function googleMaps( ) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            // console.log(scope);
            // console.log(attrs);
            // console.log(element);
                
        }
    };
}
