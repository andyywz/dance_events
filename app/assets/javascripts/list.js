var app = angular.module("eventApp", ["ngResource", "Filters"]);

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
    if ($scope.newEvent) {
      var event = Event.save($scope.newEvent);
      $scope.events.push(event);
    } else {
      alert('cant leave blank')
    }
    $scope.newEvent = {};
  };
  
  $scope.updateEvent = function (ev) {
    $scope.editObject = ev;
  };
  
  $scope.saveEvent = function (ev) {
    ev.$update();
    $('#modal').modal('hide');
  };
  
  $scope.deleteEvent = function (ev) {
    Event.delete(ev);
    $scope.events = updateEvents($scope.events, ev);
  };
  
  var updateEvents = function (array, ev) {
    var newArray = [];
    
    array.forEach(function (value) {
      if (value !== ev) {
        newArray.push(value)
      };
    });
    
    return newArray;
  };
}]);
