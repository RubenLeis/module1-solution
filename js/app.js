
//BONUS IMPLEMENTED
//https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment1/Assignment-1.md
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.message = "";
  $scope.checkFood = function() {
    if ($scope.foodList) {
        var totalFood = calculateNumberOfFoods($scope.foodList)
        if (totalFood <4) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!"
        }
        $scope.messageStyle = {color:'green'};
        $scope.textboxStyle = {border:'solid 1px green'};
    } else {
        $scope.message = "Please enter data first";
        $scope.messageStyle = {color:'red'};
        $scope.textboxStyle = {border:'solid 1px red'};
        
    }
  };
  
   /*
   * Count the items separated by , separator.
   * Do NOT consider and empty item
   */
  function calculateNumberOfFoods(string) {
    var foodArray = string.split(',');
    var arrayLength = foodArray.length;
    var itemsCount=0;
    for (var i = 0; i < arrayLength; i++) {
        var food = foodArray[i];
        if (food) {
            itemsCount++;
        }
    }  
    return itemsCount;
  }
}
})();
