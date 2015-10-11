"use strict";

angular.module('locationApp').controller( 'HomeController', HomeController );

HomeController.$inject = ['LocationData', '$cookies', '$filter', '$scope'];

function HomeController( LocationData, $cookies, $filter, $scope ) {
	
	var home = this;


	LocationData.getLocations().then(function( locations ) {

		var data = locations.data;

		/***
		Display Data on page
		***/
		home.locationsOnPage = data;
		
		console.log(home.locationsOnPage);

		/***
		Logic for universal select/deselect
		***/
		home.isAll = false;				
    	
    	//Select All
    	home.selectAll = function() {
            if(home.isAll === false) {
	    		angular.forEach(home.locationsOnPage, function(location){
	    			console.log(location)
	             	location.checked = true;
	    		});
        		
        		home.isAll = true;	
        	} 
    	};

    	//Deselect All
    	home.deselectAll = function() {
            angular.forEach(home.locationsOnPage, function(location){
             	location.checked = false;
    		});
	        
	        home.isAll = false;	
    	};
      
      	//Show the select amount
	    home.selectedLocations = function () {
	        return $filter('filter')(home.locationsOnPage, {checked: true});
	    };

	    /***
		Map data
		***/
		var infowindow = new google.maps.InfoWindow(),
			currentLocation,
			mapOptions,
			map,
			allMarkers,
			stores,
			storesObj = {},
			storePositions,
			i;
	    
	    function initialize(location) {

	    	//Map stars with your current location
	        currentLocation = {lat: location.coords.latitude, lng: location.coords.longitude};

	        mapOptions = {
	            center: currentLocation,
	            zoom: 13,
	            mapTypeId: google.maps.MapTypeId.ROADMAP
	        };
	        
	        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


	        for (i = 0; i < home.locationsOnPage.length; i++) {
			    
			    //infomation of all the stores
			    stores = home.locationsOnPage[i];

			    //store relative info for google maps
			    storesObj['name'] = stores.name;
			    storesObj['latitude'] = stores.latitude;
			    storesObj['longitude'] = stores.longitude;

			    //position coordinates for all stores
			    storePositions = new google.maps.LatLng(storesObj.latitude, storesObj.longitude);
			    
			    //load all markers to the page initially
			    allMarkers = new google.maps.Marker({
			        position: storePositions,
			        map: map,
			        title: storesObj.name
			    });

			    StoreNameCallback(allMarkers, storesObj.name);
			};
	    }

	    function StoreNameCallback(markerInfo, name) {
	        google.maps.event.addListener(markerInfo, 'click', function() {
	            infowindow.setContent(name);
	            infowindow.open(map, this);
	        });
	    }

	    navigator.geolocation.getCurrentPosition(initialize); 
	});
 

	return home;
}


