(function (){
	"use strict";
	angular.module("app", [
		"price",
		"toHtml"
	]).run(function($templateCache){
		$templateCache.put("myTemplate.html", "this is the <br/> content of the template");
	});
})();

(function (){
	"use strict";
	angular.module("price", [])
	.filter("price", price);
	
	function price(){
		return function (number, symbol){
			return (symbol || "$") + number;
		};
	}
})();

(function (){
	"use strict";
	angular.module("toHtml", [])
	.filter("toHtml", toHtml);
	
	toHtml.$inject = ["$sce"];
	function toHtml($sce){
		return function (html){
			return $sce.trustAsHtml(html);
		};
	}
})();

(function () {
	"use strict";
	angular.module("app")
		.controller("myCtrl", myCtrl);
	
	myCtrl.$inject = ["$scope", "$filter", "$http", "$q", "$sce", "$templateCache", "$interval"];
	function myCtrl($scope, $filter, $http, $q, $sce, $templateCache, $interval) {
		var myCtrl = this;
		myCtrl.price = $filter("price")(25, "#");
		myCtrl.serverData = {};
		myCtrl.userAction = "";
		myCtrl.html = /*$sce.trustAsHtml(*/"<h1>test test</h1>";//);
		myCtrl.html2 = /*$sce.trustAsHtml(*/$templateCache.get("myTemplate.html");
		myCtrl.timer = new Date().getSeconds();
			
		myCtrl.askUser = askUser;
		
		$scope.$applyAsync(function(){
			myCtrl.serverData = {"myKey1": "asdasd"};
		});
	
		console.log($scope);
	
		$http({"method": "GET", "url":"http://www.mocky.io/v2/58d4161a100000db0cd7a6b5"}).then(function(data){
			myCtrl.serverData = data.data;
			// console.log(data);
		});
		
		function askUser(){
			myModal().then(function(userAnswer){
				myCtrl.userAction = userAnswer;
			});
		}
		
		function myModal() {
			var deffered = $q.defer();
			setTimeout(function(){
				deffered.resolve("User click on");
			}, 5000);
			return deffered.promise;
		}
		
		$interval(function(time){
			console.log(time);
			myCtrl.timer = new Date().getSeconds();
		}, 1000, 5, false, new Date().getSeconds());
	}
})();
