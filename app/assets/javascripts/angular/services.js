AngularForm.factory('SubmissionsService', ['$http', function ($http){
  var SubmissionsService = {};

  SubmissionsService.index = function(){
    return $http.get('/submissions/all_submissions.json').then(function (response){
      return response.data;
    }, function (response){
      return "An error occured";
    })
  };

  return SubmissionsService;

}]);