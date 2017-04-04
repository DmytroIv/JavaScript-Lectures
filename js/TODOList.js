/**
 * Created by AterStrix on 08.03.2017.
 */
(function () {
  "use strict";
  app.addModule("TODOList", {
    createTODOList: createTODOList
  });
  var addTaskForm = app.getModule("addTaskForm");
  var addUserForm = app.getModule("addUserForm");
  var usersList = app.getModule("usersList");
  var tasksList = app.getModule("tasksList");
  var arrayUtils = app.getModule("arrayUtils");

  function createTODOList(users, tasks) {
    var controller = new CreateController(users, tasks);
    return createView(controller);
  }

  function createView(controller) {
    var $viewTemplate = $('\
            <div class="todo-list">\
                <div class="userManagement"></div>\
                <div class="taskManagement"></div>\
            </div>'
    );

    $viewTemplate.find(".userManagement").append(
      addUserForm.createAddUserForm(controller.addUser.bind(controller))
    ).append(
      usersList.createUsersList(
        controller.getUsers(),
        controller.userDeleted.bind(controller),
        controller.userAssignChange.bind(controller)
      )
    );
    $viewTemplate.find(".taskManagement").append(
      addTaskForm.createAddTaskForm(controller.addTask.bind(controller))
    ).append(
      tasksList.createTasksList(
        controller.getTasks(),
        controller.taskDeleted.bind(controller),
        controller.taskCompleted.bind(controller),
        controller.taskActive.bind(controller)
      )
    );

    controller.addResetView(function () {
      tasksList.refreshView();
      usersList.refreshView();
    });

    return $viewTemplate;
  }

  function CreateController(users, tasks) {
    this._users = users;
    this._tasks = tasks;
    this._activeTask = null;
  }

  CreateController.prototype = {
    addUser: addUser,
    addTask: addTask,
    userAssignChange: userAssignChange,
    addResetView: addResetView,
    getUsers: getUsers,
    getTasks: getTasks,
    userDeleted: userDeleted,
    taskDeleted: taskDeleted,
    taskActive: taskActive,
    taskCompleted: taskCompleted
  };

  function addUser(user) {
    if (!arrayUtils.findInArray(this.getUsers(), {email: user.email})) {
      this.getUsers().push(user);

      $.ajax("http://localhost:3000/users", {
        "method": "POST",
        "data": {
          "id": user.id,
          "name": user.name,
          "email": user.email,
          "assignedTo": JSON.stringify([])
        }
      });

      this.resetView();
      return true;
    }
    else {
      alert('User with this email already exist');
    }
    return false;
  }

  function addTask(task) {
    if (!arrayUtils.findInArray(this.getTasks(), {id: task.id})) {
      this.getTasks().push(task);

      $.ajax("http://localhost:3000/tasks", {
        "method": "POST",
        "data": {
          "title": task.title,
          "description": task.description,
          "id": task.id,
          "createDate": new Date(),
          "completed": false,
          "assignedTo": JSON.stringify([])
        }
      });

      this.resetView();
      return true;
    }
    else {
      alert("Task with this ID already exist");
    }
    return false;
  }

  function getUsers() {
    return this._users;
  }

  function getTasks() {
    return this._tasks;
  }

  function userAssignChange(user, value) {
    if (this._activeTask) {
      user.assigned = value;
      if (value) {
        user.assignedTo.push(this._activeTask.id);
        this._activeTask.assignedTo.push(user.email);

        $.ajax("http://localhost:3000/users/" + user.id, {
          "method": "PATCH",
          "data": {"assignedTo": JSON.stringify(user.assignedTo)},
          "success": function () {
            var $li = $(":checked").parents("li");
            var liWidth = $li.outerWidth();
            var liHeight = $li.outerHeight();
            var scale = 1.1;

            $li.animate({
              "left": -(liWidth * scale - liWidth) / 2,
              "top": -(liHeight * scale - liHeight) / 2,
              "width": liWidth * scale,
              "height": liHeight * scale
            }, 700, function () {
              $li.animate({
                "left": "0",
                "top": "0",
                "width": liWidth,
                "height": liHeight
              }, 700)
                .removeClass("checked");
            });

          }
        });

        $.ajax("http://localhost:3000/tasks/" + this._activeTask.id, {
          "method": "PATCH",
          "data": {"assignedTo": JSON.stringify(this._activeTask.assignedTo)}
        });

      }
      else {
        user.assignedTo.splice(user.assignedTo.indexOf(this._activeTask.id, 1));
        this._activeTask.assignedTo.splice(this._activeTask.assignedTo.indexOf(user.email), 1);

        $.ajax("http://localhost:3000/users/" + user.id, {
          "method": "PATCH",
          "data": {"assignedTo": JSON.stringify(user.assignedTo)}
        });

        $.ajax("http://localhost:3000/tasks/" + this._activeTask.id, {
          "method": "PATCH",
          "data": {"assignedTo": JSON.stringify(this._activeTask.assignedTo)}
        });

      }
    }

    this.resetView();
  }

  function userDeleted(user) {
    var that = this;
    user.assignedTo.forEach(function (taskId) {
      var task = arrayUtils.findInArray(that.getTasks(), {id: taskId});
      task.assignedTo.splice(task.assignedTo.indexOf(user.email), 1);

      $.ajax("http://localhost:3000/tasks/" + task.id, {
        "method": "PATCH",
        "data": {"assignedTo": JSON.stringify(task.assignedTo)}
      });
    });

    $.ajax("http://localhost:3000/users/" + user.id, {
      "method": "DELETE"
    });

    this.resetView();
  }

  function taskDeleted(task) {
    var that = this;
    task.assignedTo.forEach(function (userEmail) {
      var user = arrayUtils.findInArray(that.getUsers(), {email: userEmail});
      user.assignedTo.splice(user.assignedTo.indexOf(task.id), 1);

      $.ajax("http://localhost:3000/users/" + user.id, {
        "method": "PATCH",
        "data": {"assignedTo": JSON.stringify(user.assignedTo)}
      });

      if (that._activeTask === task) {
        user.assigned = false;
      }
    });
    if (this._activeTask === task) {
      this._activeTask = null;
    }

    $.ajax("http://localhost:3000/tasks/" + task.id, {
      "method": "DELETE"
    });

    this.resetView();
  }

  function taskActive(task) {
    if (this._activeTask)
      this._activeTask.active = false;
    task.active = true;
    this._activeTask = task;
    this.getUsers().forEach(function (user) {
      user.assigned = !!~task.assignedTo.indexOf(user.email);
    });

    if (this._activeTask) {
      $.ajax("http://localhost:3000/tasks/" + this._activeTask.id, {
        "method": "PATCH",
        "success": function () {

          $(".active").stop()
            .animate({
              "left": "-10px",
              "background-color": "#31c07c",
              "border-color": "#ffde6f"
            }, 700, "swing", function () {
              $(this).animate({"left": "0"}, 500);
            });
        }
      });
    }

    this.resetView();

  }

  function taskCompleted(task) {
    var that = this;
    task.assignedTo.forEach(function (userEmail) {
      var user = arrayUtils.findInArray(that.getUsers(), {email: userEmail});
      user.assignedTo.splice(user.assignedTo.indexOf(task.id), 1);

      $.ajax("http://localhost:3000/users/" + user.id, {
        "method": "PATCH",
        "data": {"assignedTo": JSON.stringify(user.assignedTo)}
      });

      if (that._activeTask === task) {
        user.assigned = false;
      }
    });
    task.assignedTo = [];
    $.ajax("http://localhost:3000/tasks/" + task.id, {
      "method": "PUT",
      "data": task
    });

    this.resetView();
  }

  function addResetView(resetView) {
    this.resetView = resetView;

  }
})();