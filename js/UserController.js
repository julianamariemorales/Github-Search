var app = angular.module('githubViewer');

    app.controller('UserController', function($scope, github, $routeParams) {

        //onUserComplete
        var onUserComplete = function(data){
          $scope.user = data;
          github.getRepos($scope.user)
          .then(onRepos, onErr);

          $scope.success = "Successfully got user from Github!";
          $scope.message = "alert alert-success";
        };

        //show repositories
        var onRepos =function(data){
          $scope.repos = data;
        };


        //error
        var onErr = function(whathappened){
          $scope.error = "Could not get user data";
          $scope.message = "alert alert-danger";
        };

        //default values
        $scope.username = $routeParams.username;
        $scope.userloginname = $routeParams.userloginname;

        github.getUser($scope.username)
        .then(onUserComplete, onErr);


      }); //end of module
