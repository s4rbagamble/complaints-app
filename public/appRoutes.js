angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {

 $routeProvider

		.when('/', {
			templateUrl: 'views/complaints.html',
			controller: 'ComplaintsController'
		});

	$locationProvider.html5Mode(true);

}])



