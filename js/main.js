$(function(){
  var usersManagement = $(".todo-list .usersManagement");
  var taskManagement = $(".todo-list .taskManagement");

  //users

  var usersArray = [];

  var usersUl = $("ul", usersManagement);

  function newUser(){
    var usersLi = "<li></li>";
    var checkboxAssigned = "<label>Asigned<input type=checkbox></label>";
    var buttonDeleteUser = "<button type=button>Delete user</button>";

    var pUserName = $("<p.UserName />").text(usersArray[usersArray.length - 1].name); //not good
    var pUserEmail = $("<p.UserEmail />").text(usersArray[usersArray.length - 1].email); //not good

    return $(usersLi).append([pUserName, pUserEmail, checkboxAssigned, buttonDeleteUser]);
  }

  $(":button", usersManagement).on("click", function(){
    var inputsText =  $("input:text", usersManagement);
     usersArray.push({"name": inputsText.eq(0).val(), "email":inputsText.eq(1).val()}); //not good
    inputsText.val("");
  }).on("click", function(){
    usersUl.append(newUser());
  });

  $("button", usersUl).on("click", function(){
    var s = $(this).parents("li").index();
    console.log(s);
    $(this).html("");
  });

  //$("li", usersUl).on("change", function(){
  //  var li = this;
  //  //$("input:checked");
  //  for(var i = 0; i <= usersArray.length;){
  //    if(usersArray[i].email === $("input", li).eq(0).val) {
  //      usersArray[i].checkboxTask = "task name";       //test
  //      console.log(usersArray);
  //    }
  //  }
  //});


  //tasks

});