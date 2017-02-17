var app = angular.module('githubViewer');

  app.controller('RepoController', function($scope, $routeParams, github) {

      var onRepo = function(data){
        $scope.repo = data;
      };

      var onRepoErr = function(whathappened){
        $scope.error = whathappend;
      };


      //get the repo name
      var reponame = $routeParams.reponame;
      //var username = $routeParams.username;
      var userloginname = $routeParams.userloginname;

      github.getRepoDetails(userloginname, reponame)
        .then(onRepo, onRepoErr);


      }); //end of module
