AngularForm.factory('SubmissionsService', ['$http', function ($http){
  var SubmissionsService = {};

  SubmissionsService.index = function(callback, err){
    $http.get('/submissions/all_submissions.json').then(function (response){
      callback(response.data);
    }, function (response){
      err(response.data);
    })
  };

  SubmissionsService.create = function(submission, callback) {
    $http.post('/submissions.json', {submission: submission}).success(function (response){
      callback(response);
    })
  }

  return SubmissionsService;

}]);