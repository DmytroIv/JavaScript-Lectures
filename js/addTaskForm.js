/**
 * Created by AterStrix on 08.03.2017.
 */
(function () {
  "use strict";
  app.addModule("addTaskForm", {
    createAddTaskForm: createAddTaskForm
  });

  var validateUtils = app.getModule("validateUtils");

  function createAddTaskForm(onAddTask) {
    var controller = new CreateController(onAddTask);
    return createView(controller);
  }

  function createView(controller) {
    var $viewTemplate = $('\
      <div class="addTask">\
        <div class="animatedBlock">\
          <input class="taskTitle" type="text" placeholder="Task title"/>\
          <textarea class="taskDescription" type="text" placeholder="Task description"></textarea>\
          <input class="taskId" type="text" placeholder="Task ID"/>\
          <input class="addTaskButton" type="button" value="Add task"/>\
        </div>\
        <div class="completeMessage">Task was added!</div>\
      </div>'
    );

    var $taskTitle = $viewTemplate.find(".taskTitle");
    var $taskDescription = $viewTemplate.find(".taskDescription");
    var $taskId = $viewTemplate.find(".taskId");

    //my variables
    var $animateBlock = $viewTemplate.find(".animatedBlock");
    var $completeMessage = $viewTemplate.find(".completeMessage");

    $viewTemplate.find(".addTaskButton").on("click", function () {
      if(controller.addTask($taskTitle.val(), $taskDescription.val(), $taskId.val())){
        //tasks form animation //rewrite!!!
        var animatedWidth = $animateBlock.width();

        $animateBlock.animate({"left": animatedWidth}, 1000, "swing", function(){
          $(this).css({"left": -animatedWidth});
        }).delay(3000).animate({"left": 0}, 2000);

        $completeMessage.css({
          "width": animatedWidth,
          "height": $animateBlock.height(),
          "top": 0, "left": -animatedWidth
        }).animate({"left": 0}, 1000).delay(3000)
          .animate({"left": animatedWidth}, 2000, "swing", function(){ $(this).css({"left": -animatedWidth}); });
      }
    });

    controller.addResetView(function () {
      $taskTitle.val("");
      $taskDescription.val("");
      $taskId.val("");
    });

    return $viewTemplate;
  }

  function getTaskModel() {
    return {
      title: "",
      description: "",
      id: "",
      createDate: new Date(),
      active: false,
      completed: false,
      assignedTo: []
    }
  }

  function CreateController(onAddTask) {
    this._onAddTask = onAddTask;
    this._taskModel = getTaskModel();
  }

  CreateController.prototype = {
    addTask: addTask,
    validateForm: validateForm,
    addResetView: addResetView
  };

  function addTask(taskTitle, taskDescription, taskId) {
    this._taskModel.title = taskTitle;
    this._taskModel.description = taskDescription;
    this._taskModel.id = taskId;
    this._taskModel.createDate = new Date();
    if (this.validateForm() && this._onAddTask(this._taskModel)) {
      this._taskModel = getTaskModel();
      this.resetView();
      return true;
    }
  }

  function validateForm() {
    var errorMessage = "";
    if (!validateUtils.validateRequired(this._taskModel.title)) {
      errorMessage += "Field Task Title is required\n";
    }
    if (!validateUtils.validateRequired(this._taskModel.description)) {
      errorMessage += "Field Task Description is required\n";
    }
    if (!validateUtils.validateRequired(this._taskModel.id)) {
      errorMessage += "Field Task ID is required\n";
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