(function () {
  "use strict";

  angular.module("newsfeed")
  .component("videoComponent", videoComponent());
  
  function videoComponent() {
	  return {
		  templateUrl: "file:///C:/Users/Student/Desktop/123/JavaScript-Lectures/templates/videoComponentTemplate.html",
		  controller: videoComponentCtrl,
		  controllerAs: "videoComponentCtrl",
		  bindings: {
			  article: "<",
			  onEdit: "&",
			  onDelete: "&",
		  }
		  
	  }
	  
	  function videoComponentCtrl(){
		  var videoComponentCtrl = this;
		  
		  videoComponentCtrl.deleteArticle = deleteArticle;
		  videoComponentCtrl.editArticle = editArticle;
		  
		  function deleteArticle (){
			  videoComponentCtrl.onDelete();
		  }
		  function editArticle (){
			  videoComponentCtrl.onEdit();
		  }
		  
	  }
	  
	  
  }
   
})();