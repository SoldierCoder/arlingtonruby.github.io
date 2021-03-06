// Generated by CoffeeScript 1.6.3
this.app = angular.module('app', []);

this.app.controller('EventsController', function($scope, $http) {
  var events_url;
  $scope.events = [];
  $scope.title = "No Upcoming events";
  events_url = "http://api.meetup.com/2/events/?key=6468958671031515c1e1e284e4413&group_id=1815773&status=upcoming&order=time&limited_events=false&desc=false&callback=JSON_CALLBACK&offset=0&format=json&page=200&fields=";
  $http.jsonp(events_url).success(function(data) {
    if (data.results.length === 1) {
      $scope.title = "1 Upcoming Event";
    } else if (data.results.length > 1) {
      $scope.title = "" + data.results.length + " Upcoming Events";
    }
    return $scope.events = data.results;
  });
  return $scope.formatDate = function(t) {
    return (new Date(t)).toString('ddd MMMM d, yyyy @ h:mm tt');
  };
});

this.app.controller('PhotosController', function($scope, $http) {
  var photos_url;
  $scope.photos = [];
  photos_url = "http://api.meetup.com/2/photos/?key=6468958671031515c1e1e284e4413&group_id=1815773&order=time&desc=True&callback=JSON_CALLBACK&offset=0&format=json&page=200&fields=";
  return $http.jsonp(photos_url).success(function(data) {
    return $scope.photos = data.results;
  });
});
