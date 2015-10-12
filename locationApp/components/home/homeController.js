"use strict";

angular.module('locationApp').controller( 'HomeController', HomeController );

HomeController.$inject = ['LocationData', '$cookies', '$filter', '$route'];

function HomeController( LocationData, $cookies, $filter, $route ) {
	
	var home = this;

	home.reloadRoute = reloadRoute;
	home.switchView = switchView;

	//Default UI View
	home.view = 'locationApp/components/home/partials/default.html';

	//view for different UI
	home.views = [
		{
            name: '4 Col',
            template: 'locationApp/components/home/partials/4-col.html',
            icon: 'btn btn-default navbar-btn glyphicon glyphicon-th'
        },
        {
            name: 'List',
            template: 'locationApp/components/home/partials/list.html',
            icon: 'btn btn-default navbar-btn glyphicon glyphicon-th-list'
     	}
    ];


    function reloadRoute() {
        $route.reload();
	}
            
    function switchView(view) {
        home.view = view.template;
    }
        

	LocationData.getLocations().then(function( locations ) {

		var data = locations.data;

		/***
		Display Data on page
		***/
		home.locationsOnPage = data;

		
		/***
		Logic for universal select/deselect
		***/
		home.isAll = false;	
	
    	//Select All
    	home.selectAll = function() {
            if(home.isAll === false) {
	    		angular.forEach(home.locationsOnPage, function(location){
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

			    //Loading markers onto the map
			    LoadMarkers(storePositions, storesObj.name);
			 
			    //Adding store names to pop-up description
			    LoadStoreNames(allMarkers, storesObj.name);
			};
	    }

	    function LoadStoreNames(marker, storeNames) {
	        google.maps.event.addListener(marker, 'click', function() {
	            infowindow.setContent(storeNames);
	            infowindow.open(map, this);
	        });
	    }

	    function LoadMarkers(positions, storeNames) {
		    allMarkers = new google.maps.Marker({
		        position: positions,
		        map: map,
		        title:storeNames
		    });
	    }

	    navigator.geolocation.getCurrentPosition(initialize); 
	});
 
	return home;
}


