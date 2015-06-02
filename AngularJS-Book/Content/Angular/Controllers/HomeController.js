app.controller("HomeCtrl", function ($scope, angularService) {
    $scope.divEmployee = false;
    //$scope.greeting="WappeR";
    $scope.greeting = 'Hey';
    
    $scope.ChangeGreeting = function (msg) {
        $scope.greeting = msg + "Kiss";
    }
});