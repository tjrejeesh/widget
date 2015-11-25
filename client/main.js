angular.module('myApp', ['ui.bootstrap']).controller('DropdownCtrl', function ($scope, $log, $http) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
  
  
var url = "https://www.google.co.in?callback=JSON_CALLBACK";

$http.jsonp("https://www.google.co.in?callback=JSON_CALLBACK")
    .then(function(data){
        console.log(data.found);
    });  
  


  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});