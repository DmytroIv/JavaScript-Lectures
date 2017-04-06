(function(){
  "use strict";
  angular.module("newsfeed")
      .constant("NEWSFEED_URL_CONSTANTS", {
        "GET_NEWFEED": "http://",
        "PUT_ARTICLE":"http://",
        "POST_ARTICLE":"http://",
        "DELETE_ARTICLE":"http://"
      })
})();
