/**
 * Created by onejustone on 2017/1/9.
 */
angular.module('serviceDemo')
// 查找 serviceDemo APP
.controller('demo2Ctrl', ['$scope','$rootScope','broadCastService',
	// 创建 demo2Ctrl 控制器，并在控制器构造函数中注入相关依赖
	function ($scope, $rootScope,broadCastService) {

	$scope.sendInformation = function (type, data) {
		// 新建 sendInformation 方法，用于广播信息
		broadCastService.broadCast('listenInformation', type, data);
		// 调用 indexService 服务模块中 broadCastService 服务中的 broadCast 对象并为其注册一个
		// listenInformation 事件
	};

	$scope.$on('listenInformation', function (event, args) {
		// 使用 $on() 方法监听 listenInformation
		$scope.c = args.data;
	})

}]).controller('demo2SecondCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

	$scope.$on('listenInformation', function (event, args) {
		// 使用 $on() 方法监听 listenInformation
		$scope.c = args.data;
	})
}])
