var ListCtrl = function ($scope) {
  $scope.events = [{name: "Stompology"}, {name: "Babble"}];
  
  $scope.addEvent = function () {
    $scope.events.push($scope.newEvent);
    $scope.newEvent = {};
  };
};
