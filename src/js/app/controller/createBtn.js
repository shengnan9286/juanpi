/**
 * Created by onejustone on 2017/1/9.
 */
// 创建一个模块,注意这里的中括号 [],存在中括号代表创建一模块，并且可以写入相关依赖，
// 如果一个模块没有被创建，那么，是无法被查找的。

angular.module('serviceDemo',['ngRoute'])
.controller('createBtn', ['$scope','$location', function ($scope,$location) {
	var btns = [{
		name:'I am first Button',
		url:'/btn1'
	},{
		name:'I am second Button',
		url:'/btn2'
	}];

	$scope.btns = btns;

	$scope.dispatchNewUrl = function (nav) {
		console.log(nav)
		$location.path(nav);
	//	$location.path() 进行路由跳转!!!不是页面跳转
	}
}])
 
