/**
 * Created by AterStrix on 08.03.2017.
 */
(function () {
  "use strict";
  app.addModule("addUserForm", {
    createAddUserForm: createAddUserForm
  });

  var validateUtils = app.getModule("validateUtils");

  function createAddUserForm(onAddUser) {
    var controller = new CreateController(onAddUser);
    return createView(controller);
  }

  function createView(controller) {
    var $viewTemplate = $('\
      <div class="addUser">\
        <div class="animatedBlock">\
          <input class="userName" type="text" placeholder="User name"/>\
          <input class="userEmail" type="text" placeholder="User email"/>\
          <input class="addUserButton" type="button" value="Add user"/>\
        </div>\
        <div class="completeMessage">User was added!</div>\
      </div>'
    );

    var $userName = $viewTemplate.find(".userName");
    var $userEmail = $viewTemplate.find(".userEmail");

    //my variables
    var $animateBlock = $viewTemplate.find(".animatedBlock");
    var $completeMessage = $viewTemplate.find(".completeMessage");

    $viewTemplate.find(".addUserButton").on("click", function () {
      if(controller.addUser($userName.val(), $userEmail.val())){
        //users form animation
        $animateBlock.animate({"top": -$animateBlock.height()}, 2000, "swing",function() { $(this).css("top", 0) });

        $completeMessage.css({"width": $animateBlock.width(),"height": $animateBlock.height()})
          .animate({"top": 0}, 2000)
          .delay(3000)
          .fadeOut(1000, "swing", function () { $(this).css({"top": $viewTemplate.height()}); })
          .fadeIn();
      }
    });

    controller.addResetView(function () {
      $userName.val("");
      $userEmail.val("");
    });
    return $viewTemplate;
  }

  function getUserModel() {
    return {
      "id": "",
      "name": "",
      "email": "",
      "assigned": false,
      "assignedTo": []
    }
  }

  function CreateController(onAddUser) {
    this._onAddUser = onAddUser;
    this._userModel = getUserModel();
  }

  CreateController.prototype = {
    addUser: addUser,
    validateForm: validateForm,
    addResetView: addResetView
  };

  function addUser(userName, userEmail) {
    this._userModel.name = userName;
    this._userModel.email = userEmail;
    this._userModel.id = userEmail;
    if (this.validateForm() && this._onAddUser(this._userModel)) {
      this._userModel = getUserModel();
      this.resetView();
      return true; //for checking when user is added or not
    }
  }

  function validateForm() {
    var errorMessage = "";
    if (!validateUtils.validateRequired(this._userModel.name)) {
      errorMessage += "Field User Name is required\n";
    }
    if (!validateUtils.validateRequired(this._userModel.email)) {
      errorMessage += "Field User Email is required\n";
    }
    else if (!validateUtils.validateEmail(this._userModel.email)) {
      errorMessage += "Field User Email is invalid\n";
    }
    if (errorMessage) {
      alert(errorMessage);
    }
    return !errorMessage;
  }

  function addResetView(resetView) {
    this.resetView = resetView;
  }
})();