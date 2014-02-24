/**
 * Created by YeongminCha on 2014. 2. 23..
 */

var portApp = angular.module( 'portApp.route', ['ngRoute'] );

portApp.config( ['$routeProvider', function( $routeProvider ){
    $routeProvider.
        when( '/main', {
            controller: 'MainController',
            templateUrl: 'main.html'
        } ).
        when( '/wheelhouse', {
            controller: 'WheelhouseController',
            templateUrl: 'wheelhouse.html'
        } ).
        when( '/workshop', {
            controller: 'WorkshopController',
            templateUrl: 'workshop.html'
        } ).
        when( '/bedroom', {
            controller: 'BedroomController',
            templateUrl: 'bedroom.html'
        } ).
        when( '/stern', {
            controller: 'SternController',
            templateUrl: 'stern.html'
        } ).
        when( '/stem', {
            controller: 'StemController',
            templateUrl: 'stem.html'
        } ).
        when( '/engineRoom', {
            controller: 'EngineRoomController',
            templateUrl: 'engineRoom.html'
        } ).
        otherwise( {
            redirectTo: '/main'
        } );
}] );
