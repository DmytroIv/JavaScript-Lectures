//user
var users = [];
var tasks = [];
var emailPattern = /\w+@\w+\.\w+/;
var usersList = [];
var tasksList = [];
var $usersContainer = $(".users");
var $tasksContainer = $(".tasks");

(function activate() {
  addUserFunctionality();
  addTaskFunctionality();
})();

//user add function
function addUserFunctionality() {
  var $userNameField = $('.userName');
  var $userEmailField = $('.userEmail');
  $(".addUserButton").on("click", function () {
    var valid = true,
      errorText = "Field(s) ";
    if (!validateRequired($userNameField)) {
      errorText += "User name ";
      valid = false;
    }
    if (!validateRequired($userEmailField) || !validateEmail($userEmailField) ||
      findInCollection(users, {"email": $userEmailField.val()})
    ) {
      errorText += "User email ";
      valid = false;
    }
    if (valid) {
      users.push({
        name: $userNameField.val(),
        email: $userEmailField.val(),
        "checkBox": false,                    //
        assignedTo: []
      });
      generateUsersList();
      $userNameField.val("");
      $userEmailField.val("");
    }
    else {
      alert(errorText + "are invalid");
    }
  })
}

function validateRequired(field) {
  return $(field).val() || $(field).is(":checked");
}

function validateEmail(field) {
  return emailPattern.test($(field).val());
}

function findInCollection(collection, findParams) {
  return collection.reduce(function (foundElem, elem) {
    var found = null;
    if (findParams && typeof findParams === "object" && !Array.isArray(findParams)) {
      for (var field in findParams) {
        if ((found === null || found === true) && elem[field] === findParams[field]) {
          found = true;
        }
        else {
          found = false;
        }
      }
      return foundElem !== undefined ? foundElem : found ? elem : undefined;
    }
    else {
      return foundElem !== undefined ? foundElem : elem === findParams ? elem : undefined;
    }
  }, undefined);
}

function generateUsersList() {
  usersList = [];
  users.forEach(function (user, index) {
    usersList[index] = generateUser(user);
    if(~$tasksContainer.find(".active").index()) {
      if (user.assignedTo.includes(tasks[$tasksContainer.find(".active").index()].taskID)) {
        usersList[index].find("input").prop("checked", true);
      }
    }
  });
  $usersContainer.html(usersList);
}

function generateUser(user) {
  var li = $('<li />').data("user", user);
  var userName = $('<p class="userName">' + user.name + '</p>');
  var userEmail = $('<p class="userEmail">' + user.email + '</p>');
  var assignedLabel = $('<label>Assigned</label>');
  var assignedCheckbox = $('<input type="checkbox" />').prop("checked", false).appendTo(assignedLabel).on("click", function(){
    if(~$tasksContainer.find(".active").index()){
      assigningUserToTask(users, user, generateUsersList);
    }
    // generateTasksList();
  });
  var button = $('<button type="button">Delete user</button>')
    .on("click", function () {
      removeItem(users, user, generateUsersList);
    });
  return li.append([userName, userEmail, assignedLabel, button]);
}

function removeItem(list, item, callback) {
  var index = list.indexOf(item);
  if (~index) {
    list.splice(index, 1);

    //delete tasks ID from users
    //for(var i = 0; i < users.length; i++){ users[i].assignedTo.spice(users[i].assignedTo.indexOf(item.taskID), 1); }
    callback();
  }
}
//at home - function assigning users to tasks and tasks to users
function assigningUserToTask(list, item, callback){
  var index = list.indexOf(item);
  var taskLiIndex = $tasksContainer.find(".active").index();
  if(~index && !item.assignedTo.includes(tasks[taskLiIndex].taskID)){
    item.assignedTo.push(tasks[taskLiIndex].taskID);

    tasks[taskLiIndex].assignedWith.push(item.email);
  }else{
    var indexOfDeleteElemFromUserList = item.assignedTo.indexOf(tasks[taskLiIndex].taskID);
    item.assignedTo.splice(indexOfDeleteElemFromUserList, 1);

    var indexOfDeleteElemFromTaskList = tasks[taskLiIndex].assignedWith.indexOf(item.email);
    tasks[taskLiIndex].assignedWith.splice(indexOfDeleteElemFromTaskList, 1);
  }
  console.log(tasks, users);
  callback();
}


//Home work -----------------------------------------------------------------------------
//task add function
function addTaskFunctionality() {
  var $taskTitleField = $('.taskTitle');
  var $taskDescriptionField = $('.taskDescription');
  var $taskIDField = $('.taskID');

  $(".addTaskButton").on("click", function () {
    var valid = true,
      errorText = "Field(s) ";
    if (!validateRequired($taskTitleField)) {
      errorText += "Task title ";
      valid = false;
    }
    if (!validateRequired($taskDescriptionField)) {
      errorText += "Task description ";
      valid = false;
    }
    if (!validateRequired($taskIDField) || findInCollection(tasks, {"taskID": $taskIDField.val()})) {
      errorText += "Task ID ";
      valid = false;
    }
    if (valid) {
      tasks.unshift({
        "taskTitle": $taskTitleField.val(),
        "taskDescription": $taskDescriptionField.val(),
        "taskID": $taskIDField.val(),
        "taskDone": false,
        "taskCreateTime": new Date().getDate() + "," + (new Date().getMonth() + 1) + "," + new Date().getFullYear() + "  " + new Date().toTimeString().slice(0, 8),
        "assignedWith": []
      });
      generateTasksList();
      $taskTitleField.val("");
      $taskDescriptionField.val("");
      $taskIDField.val("");
    }
    else {
      alert(errorText + "are invalid");
    }
  })
}

function generateTasksList() {
  tasksList = [];
  tasks.forEach(function (task, index) {
    tasksList[index] = generateTask(task);
    if(task.taskDone){
      tasksList[index].addClass("taskDone");
      tasksList[index].find(".complete").prop("disabled", true);
    }
  });
  $tasksContainer.html(tasksList);
}

function moveTop(list, item, callback) {
  var index = list.indexOf(item);
  if(~index && index !== 0) {
    var preItem = list[index - 1];
    list[index - 1] = item;
    list[index] = preItem;
    callback();
  }
}

function moveBottom(list, item, callback) {
  var index = list.indexOf(item);
  if(~index && index !== list.length - 1) {
    var preItem = list[index + 1];
    list[index + 1] = item;
    list[index] = preItem;
    callback();
  }
}

function completeTask(list, item, callback){
  var index = list.indexOf(item);
  if(~index) {
    item.taskDone = true;
    item.assignedWith.length = 0;
    list.push(list.splice(index, 1)[0]);
    callback();
  }
}

function activateLi(list, item, callback){

}

function generateTask(task) {
  var li = $('<li />').data("task", task).on("click", function () {
    /////////////////////////////////////////////////////////////////
    var $li = $(this);
    if (!$li.hasClass("active") && !$li.hasClass("taskDone")) {
      $tasksContainer.children(".active").removeClass("active");
      $li.addClass("active");
    }
    else {
      $li.removeClass("active");
    }
    generateUsersList();
    /////////////////////////////////////////////////////////////////////
  });
  var taskTitle = $('<h2 class="taskTitle">' + task.taskTitle + '</h2>');
  var createData = $('<p class="createData">' + task.taskCreateTime + '</p>');
  var taskDescription = $('<p class="taskDescription">' + task.taskDescription + '</p>');
  var assigned = $('<p>Assigned to </p>');
  var assignedCounter = $('<span>' + task.assignedWith.length + ' users</span>').appendTo(assigned);
  var buttonWrapper = $('<div />').on("click", false);
  var buttonMoveTop = $('<button type="button">Move top</button>')
    .on("click", function () {
      moveTop(tasks, task, generateTasksList);
    }).appendTo(buttonWrapper);
  var buttonMoveBottom = $('<button type="button">Move bottom</button>')
    .on("click", function () {
      moveBottom(tasks, task, generateTasksList);
    }).appendTo(buttonWrapper);
  var buttonDelete = $('<button type="button">Delete task</button>')
    .on("click", function () {
      removeItem(tasks, task, generateTasksList);
    }).appendTo(buttonWrapper);
  var buttonCompleteTask = $('<button class="complete" type="button">Complete task</button>')
    .on("click", function () {
        completeTask(tasks, task, generateTasksList);
        generateUsersList();
    });

  return li.append([taskTitle, createData, taskDescription, assigned, buttonWrapper, buttonCompleteTask]);
}
//




































