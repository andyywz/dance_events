var app = angular.module("List", ["ngResource"]);

app.factory("Event", ["$resource", function ($resource) {
  return $resource("/events/:id.json", {id: "@id"}, {update: {method: "PUT"}});
}]);

app.controller("ListCtrl", ["$scope", "Event", function ($scope, Event) {
  $scope.events = Event.query();
  
  $scope.addEvent = function () {
    var event = Event.save($scope.newEvent);
    $scope.events.push(event);
    $scope.newEvent = {};
  };
}]);
