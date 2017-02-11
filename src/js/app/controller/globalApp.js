/**
 * Created by onejustone on 2017/2/9.
 */

angular.module("globalApp",[])
.constant('globalDataUrl', 'http://localhost:2046/global/')
.controller('topLevelCtrl', ['$scope', function ($scope) {

}]).controller('swiperCtrl', [
	'$scope', '$http', 'globalDataUrl',
	function ($scope, $http, globalDataUrl) {

	$scope.swiperData = {
		banner_ads : [],
	};
	$http.get(globalDataUrl + '0').then((data) => {
		console.log(data.data.data.banner_ads);
		$scope.swiperData.banner_ads = data.data.data.banner_ads;
	})
}]);