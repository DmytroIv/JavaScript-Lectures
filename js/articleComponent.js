(function () {
  "use strict";

  angular.module("newsfeed")
  .component("articleComponent", articleComponent());
  
  function articleComponent() {
	  return {
		  templateUrl: "file:///C:/Users/Student/Desktop/123/JavaScript-Lectures/templates/articleComponentTemplate.html",
		  controller: articleComponentCtrl,
		  controllerAs: "articleComponentCtrl",
		  bindings: {
			  article: "<",
			  onEdit: "&",
			  onDelete: "&",
		  }
		  
	  }
	  
	  function articleComponentCtrl(){
		  var articleComponentCtrl = this;
		  
		  articleComponentCtrl.deleteArticle = deleteArticle;
		  articleComponentCtrl.editArticle = editArticle;
		  
		  function deleteArticle (){
			  articleComponentCtrl.onDelete();
		  }
		  function editArticle (){
			  articleComponentCtrl.onEdit();
		  }
		  
	  }
	  
	  
  }
   
})();