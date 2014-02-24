/**
 * Created by YeongminCha on 2014. 2. 23..
 */
var portAppControllers = angular.module( 'portApp.Controllers', ['portApp.Factories'] );

portAppControllers.controller( 'IndexController', ['$scope', '$location', 'IndexFactory', function( $scope, $location, IndexFactory ){
    $scope.indexContext = IndexFactory.context;

    $scope.toggleIndexFlag = function(){
        var flag = $scope.indexContext.flag;
        $scope.indexContext.flag = !flag;
        if( flag ) $scope.indexContext.source = "http://ozarker.org/wp-content/uploads/2013/12/ilb.jpg";
        else $scope.indexContext.source = "http://www.electrical-online.com/wp-content/uploads/2010/11/light-on.jpg";
    };
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

