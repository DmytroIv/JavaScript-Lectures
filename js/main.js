(function () {
  "use strict";
  angular.module("app", [
    "price",
    "toHtml",
    "myComponent",
    "ScrollService",
    "scrollToTop"
  ]).run(function ($templateCache) {
    $templateCache.put("myTemplate.html", "this is the <br/> content of the template");
  });
})();

(function () {
  "use strict";
  angular.module("price", [])
      .filter("price", price);

  function price() {
    return function (number, symbol) {
      return (symbol || "$") + number;
    };
  }
})();

(function () {
  "use strict";
  angular.module("toHtml", [])
      .filter("toHtml", toHtml);

  toHtml.$inject = ["$sce"];
  function toHtml($sce) {
    return function (html) {
      return $sce.trustAsHtml(html);
    };
  }
})();

(function () {
  "use strict";
  angular.module("app")
      .controller("myCtrl", myCtrl);

  myCtrl.$inject = ["$scope", "$filter", "$http", "$q", "$sce", "$templateCache", "$interval", "testConstant", "testConstant2", "message", "messages"];
  function myCtrl($scope, $filter, $http, $q, $sce, $templateCache, $interval, testConstant, testConstant2, message, messages) {
    var myCtrl = this;
    myCtrl.price = $filter("price")(25, "#");
    myCtrl.serverData = {};
    myCtrl.userAction = "";
    myCtrl.html = /*$sce.trustAsHtml(*/"<h1>test test</h1>";//);
    myCtrl.html2 = /*$sce.trustAsHtml(*/$templateCache.get("myTemplate.html");
    myCtrl.timer = new Date().getSeconds();
    myCtrl.date = $.now();
    myCtrl.usersFilter = "";
    myCtrl.names = [];
    myCtrl.selectedOption = "";
    myCtrl.imageSrc = "";

    console.log("testConstant", testConstant);
    console.log("testConstant2", testConstant2);

    myCtrl.options = [
      {value: "", label: "select item"},
      {value: "Item1", label: "item1 label"},
      {value: "Item2", label: "item2 label"},
      {value: "Item3", label: "item3 label"},
      {value: "Item4", label: "item4 label"},
      {value: "Item5", label: "item5 label"}
    ];

    myCtrl.onBlur = onBlur;
    myCtrl.askUser = askUser;
    myCtrl.usersFilterMethod = usersFilterMethod;

    myCtrl.getMessage = getMessage;
    myCtrl.getMessagesCount = getMessagesCount;

    function getMessage() {
      return messages.message;
    }

    function getMessagesCount() {
      return messages.list.length;
    }

    function onBlur($event) {
      //console.log($event);
    }

    function usersFilterMethod(elem, index, array) {
      // console.log(elem, index, array);
      return ~elem.name.toLowerCase().indexOf(myCtrl.usersFilter.toLowerCase());
    }

    $scope.$applyAsync(function () {
      myCtrl.serverData = {"myKey1": "asdasd"};
    });

    // console.log($scope);

    $http({"method": "GET", "url": "http://www.mocky.io/v2/58d4161a100000db0cd7a6b5"}).then(function (data) {
      myCtrl.serverData = data.data;
      // console.log(data);
    });

    function askUser() {
      myModal().then(function (userAnswer) {
        myCtrl.userAction = userAnswer;
        myCtrl.imageSrc = "images/logo.png";
      });
    }

    function myModal() {
      var deffered = $q.defer();
      setTimeout(function () {
        deffered.resolve("User click on");
      }, 5000);
      return deffered.promise;
    }

    $interval(function (time) {
      //console.log(time);
      myCtrl.timer = new Date().getSeconds();
    }, 1000, 5, false, new Date().getSeconds());
  }
})();

(function () {
  "use strict";
  angular.module("myComponent", []).component("myComponent", myComponent());

  function myComponent() {
    return {
      template: "<div><h1>Component title</h1><ng-transclude></div>",
      transclude: true
    };
  }
})();

(function () {
  "use strict";

  angular.module("app")
      .constant("testConstant", "testConstantValue")
      .constant("testConstant2", {
        "getUserInfo": "/user/getUserInfo",
        "key2": "value2"
      })
})();

(function () {
  "use strict";

  angular.module("app")
      .value("message", "")
      .value("messages", {
        "message": "",
        "list": []
      }).value("ajax", {});
})();

(function () {
  "use strict";

  angular.module("app")
      .controller("messagesController", messagesController);

  messagesController.$inject = ["message", "messages", "ScrollService"];
  function messagesController(message, messages, ScrollService) {
    var messagesController = this;

    messagesController.messageField = "";
    messagesController.sendMessage = sendMessage;

    function sendMessage(newMessage) {
      ScrollService.scrollTop(0);
      messages.list.push(newMessage);
      messages.message = newMessage;
    }
  }
})();

(function () {
  "use strict";

  angular.module("ScrollService", []).service("ScrollService", ScrollService);

  ScrollService.$inject = ["testFactory"];
  function ScrollService(testFactory) {
    return {
      scrollTop: scrollTop
    }
    function scrollTop(position) {
      console.log(testFactory);
      testFactory.method();
      $("html, body").animate({"scrollTop": position}, 500);
    }
  }
})();

(function () {
  "use strict";

  angular.module("app")
      .factory("testFactory", testFactory);

  function testFactory() {
    return {
      "key1": "value1",
      "key2": "value2",
      "obj": {"test": "test"},
      "method": method
    }
  }

  function method() {
    console.log("I am method");
  }
})();

(function () {
  "use strict";

  angular.module("app")
      .component("myMessanger", myMessanger());

  function myMessanger() {
    myMessangerCtrl.$inject = ["messages"];
    return {
      templateUtl: "componentTemplate.html",
      //template: "<div><h1>{{myMessanger.myTitle}}</h1></div>"
      controller: myMessangerCtrl,
      controllerAs: "myMessanger",
      transclude: false,
      bindings: {
        title: "@",
        onMessageSent: "&"
      }
    }

    function myMessangerCtrl(messages) {
      var myMessangerCtrl = this;

      myMessangerCtrl.messageField = "";

      myMessangerCtrl.sendMessage = sendMessage;

      function sendMessage(message) {
        myMessangerCtrl.onMessageSent({"message": message});
        messages.message = message;
        messages.list.push(message);
      }
    }
  }

})();

(function () {
  "use strict";

  angular.module("scrollToTop", ["ScrollService"]).directive("scrollToTop", scrollToTop);

  scrollToTop.$inject = ["ScrollService"];
  function scrollToTop(ScrollService) {
    return {
      restrict: "A",
      //templateUrl: "",
      //template: "",
      //controller: controller,
      //controllerAs: controllerAs,
      link: link,
      //require: "",
      //transclude: false,
      //bindTocontroller: false,
      //scope: false,
    }

    function link($scope, $element) {
      $element.on("click", function () {
        ScrollService.scrollTop(0);
      });
    }
  }

})();

(function (){
  angular.module("app")
      .factory("myInterceptors", myInterceptors)
      .config(interceptorsConfig);

  myInterceptors.$inject=["$q", "ajax"];
  function myInterceptors($q, ajax){
    var requests = [];
    return {
      request: function(config){
        //console.log(config);
        requests.push(config);
        ajax.inProgress = true;
        return config;
      },
      response: function(response){
        //console.log(response);
        requests.pop;
        ajax.inProgress = !!requests.length;
        return response;
      },
      requestError: function(rejectReson){
        requests.pop();
        ajax.inProgress = !!requests.length;
        return $q.reject(rejectReson);
      },
      responseError: function(response){
        return $q.reject(response);
      }
    }
  }

  interceptorsConfig.$inject = ["$httpProvider"];
  function interceptorsConfig($httpProvider){
    $httpProvider.interceptors.push("myInterceptors");
  }
})();














































































