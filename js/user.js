/**
 * Created by AterStrix on 08.03.2017.
 */
(function () {
    app.addModule("user", {
        createUser: createUser
    });

    function createUser(user, onDelete, onAssignChange) {
        var controller =  new CreateController(user, onDelete, onAssignChange);
        return createView(controller);
    }

    function createView(controller) {
        var user = controller.getUser();

        var $viewTemplate = $('\
            <li>\
                <p class="userName">'+user.name+'</p>\
                <p class="userEmail">'+user.email+'</p>\
                <lable>Assigned <input class="assignCheckbox" type="checkbox"/> </lable>\
                <button class="deleteButton" type="button">Delete user</button>\
            </li>'
        );

        var $assignCheckbox = $viewTemplate.find(".assignCheckbox");
        var $deleteButton = $viewTemplate.find(".deleteButton");


        $assignCheckbox[0].checked = user.assigned;
        //my hW trying to animate
        if($assignCheckbox[0].checked){
          $assignCheckbox.parents("li").css({"width": 487, "height": 82}).animate({"left" : "-7px", "top": "-7px" ,"width" : 487 + 14, "height": 82 + 14},700, function(){
            $(this).animate({"left" : "0", "top": "0", "width": 487, "height": 82}, 700);
          });
        }

        $assignCheckbox.on("change", function() {
          controller.changeAssign(this.checked);
        });

        $deleteButton.on("click", function() {
            controller.deleteUser();
        });

        return $viewTemplate;
    }

    function CreateController(user, onDelete, onAssignChange) {
        this._user = user || {};
        this._onDelete = onDelete || $.noop;
        this._onAssignChange = onAssignChange || $.noop;
    }
    CreateController.prototype = {
        deleteUser: deleteUser,
        changeAssign: changeAssign,
        getUser: getUser
    };

    function changeAssign(value) {
        this._onAssignChange(this._user, value);
    }

    function deleteUser() {
        this._onDelete(this._user);
    }

    function getUser() {
        return this._user;
    }
})();