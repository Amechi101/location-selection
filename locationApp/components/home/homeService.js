"use strict";

angular.module('locationApp').factory( 'LocationData', LocationData );

LocationData.$inject = ['$http', '$q'];

function LocationData( $http, $q ) {


	var service = {}


	service.getLocations = function() {

		var deffered = $q.defer();

		$http({
			url:'https://s3.amazonaws.com/public.earshotinc.com/locations.json',
			method: 'GET'
		})
		.then(function( data ) {

			//success
			deffered.resolve( data );
	
		}, function() {
			
			//error
			deffered.reject( 'Data Unavailable' );
		
		});

		return deffered.promise;

	};

	return service;		
}