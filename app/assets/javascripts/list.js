var app = angular.module("Event", ["ngResource", "Filters"]);

app.factory("Event", ["$resource", function ($resource) {
  return $resource("/events/:id.json", {id: "@id"}, {update: {method: "PUT"}});
}]);

angular.module("Filters", []).filter("checkmark", function () {
  return function (input) {
    return input ? 'ok' : 'remove';
  };
});

app.controller("EventsCtrl", ["$scope", "Event", function ($scope, Event) {
  $scope.events = Event.query();
  
  $scope.addEvent = function () {
    var event = Event.save($scope.newEvent);
    $scope.events.push(event);
    $scope.newEvent = {};
  };
}]);
