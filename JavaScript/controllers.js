/**
 * Created by YeongminCha on 2014. 2. 23..
 */
var portAppControllers = angular.module( 'portApp.Controllers', ['portApp.Factories'] );

portAppControllers.controller( 'IndexController', ['$scope', '$location', 'UserFactory', function( $scope, $location, UserFactory ){
    $scope.isActive = function( route ){
        return route === $location.path();
    }
    $scope.logContext = UserFactory.logContext;

    $scope.logOut = function(){
        UserFactory.logOut();
    }
}]);

portAppControllers.controller( 'MainController', ['$scope', function( $scope ){
    $scope.mainText = "This is Main!";
}]);

portAppControllers.controller( 'WheelhouseController', ['$scope', function( $scope ){
    $scope.mainText = "This is Wheelhouse!";
}]);

portAppControllers.controller( 'WorkshopController', ['$scope', function( $scope ){
    $scope.mainText = "This is Workshop!";
}]);

portAppControllers.controller( 'BedroomController', ['$scope', function( $scope ){
    $scope.mainText = "This is Bedroom!";
}]);

portAppControllers.controller( 'SternController', ['$scope', function( $scope ){
    $scope.mainText = "This is Stern!";
}]);

portAppControllers.controller( 'StemController', ['$scope', function( $scope ){
    $scope.mainText = "This is Stem!";
}]);

portAppControllers.controller( 'EngineRoomController', ['$scope', function( $scope ){
    $scope.mainText = "This is Engine Room!";
}]);

