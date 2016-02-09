//Simple multiple file upload implemented by angularcode.com
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
  $scope.uploadFiles = function (files) {
      $scope.files = files;
      if (files && files.length) {
          Upload.upload({
              url: '/upload',
              data: {
                  files: files
              }
          }).then(function (response) {
              $timeout(function () {
                  $scope.result = response.data;
              });
          }, function (response) {
              if (response.status > 0) {
                  $scope.errorMsg = response.status + ': ' + response.data;
              }
          }, function (evt) {
              $scope.progress =
                  Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          });
      }
  };
}]);
