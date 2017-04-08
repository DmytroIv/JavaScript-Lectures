(function () {
  "use strict";

  angular.module("newsfeed")
  .component("photosComponent", photosComponent());
  
  function photosComponent() {
	  return {
		  templateUrl: "file:///C:/Users/Student/Desktop/123/JavaScript-Lectures/templates/photosComponentTemplate.html",
		  controller: photosComponentCtrl,
		  controllerAs: "photosComponentCtrl",
		  bindings: {
			  article: "<",
			  onEdit: "&",
			  onDelete: "&",
		  }
		  
	  }
	  
	  function photosComponentCtrl(){
		  var photosComponentCtrl = this;
		  
		  photosComponentCtrl.deleteArticle = deleteArticle;
		  photosComponentCtrl.editArticle = editArticle;
		  
		  function deleteArticle (){
			  photosComponentCtrl.onDelete();
		  }
		  function editArticle (){
			  photosComponentCtrl.onEdit();
		  }
		  
	  }
	  
	  
  }
   
})();