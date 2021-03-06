'use strict';


// Declare app level module which depends on filters, and services
angular.module('esi', ['esi.filters', 'esi.services', 'esi.directives', 'esi.controllers']).
  config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    .when('/', {templateUrl: 'partials/home.html', controller: 'HomeCntl'})
    .when('/party/:partyname', {templateUrl: 'partials/party.html', controller: 'PartyCntl'})
    .when('/state/:statename', {templateUrl: 'partials/state.html', controller: 'StateCntl'})
    .when('/person/:personname/:dob', {templateUrl: 'partials/person.html', controller: 'PersonCntl'})
    .when('/constituency/:statename/:constituencyname', {templateUrl: 'partials/constituency.html', controller: 'ConstituencyCntl'})
    .when('/election/:electionyear', {templateUrl: 'partials/election.html', controller: 'ElectionCntl'})
    .when('/stats', {templateUrl: 'partials/stats.html', controller: 'StatsCntl'})
    .otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode(true);
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  })
  .run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
      $(document).foundation();
    });
  });
