/**
 * Created by onejustone on 2017/1/9.
 */

angular.module('serviceDemo')
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/btn1',{
		templateUrl:'views/demo1.html',
		// controller:'demo1Controller'
	}).when('/btn2',{
		templateUrl:'views/demo2.html',
		// controller:'demo2Controller'
	}).otherwise({
		redirectTo:'/'
	})
}])