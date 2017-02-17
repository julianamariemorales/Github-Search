var app = angular.module('githubViewer');

  app.controller('MainController', function($scope, $interval, $location) {

    var countdownInterval = null;

    //startCountdown();
    $scope.startCountdown = function() {
        $interval($scope.decrementCountDown, 1000,$scope.countdown);
      };
      $scope.decrementCountDown = function() {
        $scope.countdown -= 1;
        if ($scope.countdown === 0) {
          $scope.search($scope.username);
        }
      };

      //start search
      $scope.search = function(username){
        if(countdownInterval){
          $interval.cancel(countdownInterval);
          $scope.countdown = null; //assign countdown timer to null
        }
        //$log.info("Searching for..." + username);
        //$http.get ("https://api.github.com/users/" + username)
        //.then(onUserComplete, onErr);

        $location.path("/user/" + username);
      };


      //default values
      $scope.username =  "julianamariemorales";
      $scope.countdown = 5;


      $scope.startCountdown();

      }); //end of module
