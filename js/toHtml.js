(function (){
	
	"use strict"
	
	angular.module("app")
	.filter("toHtml", toHtml);
	
	toHtml.$inject = ["$sce"];
	function toHtml ($sce){
		return function(html){
			return $sce.trustAsHtml(html);
		}
	}
	
})();