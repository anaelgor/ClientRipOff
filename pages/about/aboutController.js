// about controller
angular.module("myApp")
    .controller("aboutController", function ($scope, $rootScope) {
        // button click count
        $scope.btnCount = 0;
        $scope.myFunc = function () {
            $scope.btnCount++;
        }
    });