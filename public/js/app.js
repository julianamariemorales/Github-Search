 // i have a dependency from ngRoute
var app = angular.module('githubViewer', ['ngRoute']);



  app.config(function($routeProvider){ //https://docs.angularjs.org/api/ngRoute/provider/$routeProvider

    //root view
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })

      //user contoller view
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })

      //repos contoller view
      //.when("/user/julianamariemorales/:reponame", {
      .when("/repos/:userloginname/:reponame", {
        templateUrl: "repo.html",
        controller: "RepoController"
      })


      .otherwise({redirectTo: "/main"});
                //Sets route definition that will be used on route change
                //when no other route definition is matched

    }); //end of routing
