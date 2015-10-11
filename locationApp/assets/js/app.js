/*------------------------------------------------------------------
[JS Main Module]

Project: Location App
Version: 1.0.0
Author: Amechi Egbe
Website: http://amechiegbe.com
Email: amechiegbe@gmail.com
-------------------------------------------------------------------*/

"use strict";

//To avoid namespace collision
var NewsFeedInitilazer = (function ( core, angular ) {

    /***
     *Private Variables
     ****/

    //Enter here

    
    /***
     *Public API
     ****/

    core.angularModule = function() {
    	
        // create the angular module 
		angular.module('locationApp', ['ngRoute', 'ngCookies', 'angular.filter']);
    }

    //Return Public Method
    return core;
    
})( NewsFeedInitilazer || {}, angular );


/***
*Call functions 
****/
NewsFeedInitilazer.angularModule();
