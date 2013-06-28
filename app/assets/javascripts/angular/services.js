AngularForm.factory('SubmissionsService', ['$http', function ($http){
  var SubmissionsService = {};

  SubmissionsService.allSubmissions = function(callback){
    $http.get('/submissions/all_submissions.json').success(function(data){
      callback(data);
    });
  };

  return SubmissionsService;
}]);

// function (response){
//       return response.data;
//     }, function (response){
//       return "An error occured";
//     }