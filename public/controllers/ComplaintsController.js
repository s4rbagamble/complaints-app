import _ from 'lodash';
const {dataSort} = require('../src/dataSort');

angular.module('ComplaintsCtrl', []).controller('ComplaintsController', function($scope, $http) {
    $http({
            method: 'GET',
            url: 'http://localhost:8080/db'

          }).then(function successCallback(response) {

            var data = dataSort(response.data.CPMU);
            $scope.records = data;
            $scope.IsVisible = true;

            $scope.ShowHide = () => {
              if ($scope.IsVisible === true) {
                    var rollup = [];
                    for (var i=2;i<data.length;i=i+3) {
                      rollup.push(data[i]);
                    }
                    $scope.records = rollup;
                    $scope.IsVisible = false;
              } else if ($scope.IsVisible === false) {
                $scope.records = data;
                $scope.IsVisible = true;
              }
            }
          }, function errorCallback(response) {
            console.log(response)
          });
});
