var app = angular.module("pizza-time",[]);

app.controller('mainCtrl', function($scope, $interval){
  var isDateTimeSet = false;
  var isCountdownNotAtZero = true;
  var timeUntilPizza;

  $scope.message = 'Please choose a time';

  var tick = function() {
    if (isDateTimeSet && isCountdownNotAtZero) {
      timeUntilPizza = $scope.arrivalDateTime - Date.now();
      isCountdownNotAtZero = !(timeUntilPizza <= 0);

      $scope.message = timeUntilPizza;
    } else if (!isCountdownNotAtZero && isDateTimeSet) {
      $scope.message = 'Pizza should be here';
    }
  }

  $scope.setArrival = function(){
    isDateTimeSet = true;
    timeUntilPizza = $scope.arrivalDateTime - Date.now();
  };

  $interval(tick, 1000);
});
