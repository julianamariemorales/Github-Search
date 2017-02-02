var app = angular.module('githubViewer');

app.factory('github', function($http) {


    var getUser = function(username){
      return $http.get ("https://api.github.com/users/" + username)
        .then(function(response){
          return response.data;
        });
    };

    var getRepos =function(user){
        return $http.get(user.repos_url)
          .then(function(response){
            return response.data;
          });
    };

    var getRepoDetails = function(userloginname, reponame){
      var repo;
      var repoUrl = "https://api.github.com/repos/" + userloginname + "/"  + reponame;

      //return promise
      return $http.get(repoUrl)
            .then(function(response){
              repo = response.data; //process the response
              return repo;
              });

              /*
              return $http.get(repoUrl + "/git_url");
            })

              .then(function(response){
                  repo.git_url = response.data;

                  return repo;
              });
              */

    };

    //public api
    return  {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };



}); //end of module
