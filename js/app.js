(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "Ruben";
  $scope.message = "";
  $scope.checkFood = function() {
    if ($scope.food) {
        var totalFood = calculateNumberOfFoods($scope.food)
        if (totalFood <4) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!"
        }
    } else {
        $scope.message = "Please enter data first";
    }
  };
    
  function calculateNumberOfFoods(string) {
    var foodArray = string.split(',');
    var length = foodArray.length;
    return length;
  }
}
    

})();
