/**
 * Created by onejustone on 2017/1/9.
 */
// 创建一个在不同控制器的作用域中传递消息的服务
angular.module('serviceDemo')
.service('broadCastService', ['$rootScope', function ($rootScope) {
	// 创建一个 broadCastService 服务
	return {
	//	返回一个对象，该对象是一个自定义类型
		broadCast: function (eventName, type, data) {
			$rootScope.$broadcast(eventName, {
				// 调用 $rootScope 中的 $broadcast 事件，
				// eventName 是该次事件的名称，其后接收一个向事件提供额外数据的对象
				type: type,
				data: data
			})
		}
	}
}])
 
