(function () {
  var TODO_List = app.getModule("TODOList");
  $.ajax("http://localhost:3000/db").done(function (response) {

    response.users.forEach(parseJSON);
    response.tasks.forEach(parseJSON);

    function parseJSON(item) {

      if (item.assignedTo) {
        item.assignedTo = JSON.parse(item.assignedTo);
      } else {
        item.assignedTo = [];
      }
      if (item.active) {
        item.active = false;
      }
      if (item.assigned) {
        item.assigned = false;
      }
      if (item.completed) {
        item.completed = JSON.parse(item.completed);
      }
    }

    $("h1").after(TODO_List.createTODOList(response.users, response.tasks));
  });

  /*
   $("h1").after(TODO_List.createTODOList([
   // {
   //   id: "asdasd@asdaf.ds",
   //   name: "asadsad asdas ",
   //   email: "asdasd@asdaf.ds",
   //   assigned: false,
   //   assignedTo: []
   // },
   // {
   //   id: "asd2ASD@asd.ds",
   //   name: "sarggfhf gh fgh",
   //   email: "asd2ASD@asd.ds",
   //   assigned: false,
   //   assignedTo: []
   // },
   // {
   //   id: "asdkjash@asd.aadsd",
   //   name: "asd1 12 312",
   //   email: "asdkjash@asd.aadsd",
   //   assigned: false,
   //   assignedTo: []
   // },
   // {
   //   id: "lkajf@asdfsd.sa",
   //   name: "asd 1231 ",
   //   email: "lkajf@asdfsd.sa",
   //   assigned: false,
   //   assignedTo: []
   // },
   // {
   //   id: "ad@dsa.asd",
   //   name: "13214 234 324 ",
   //   email: "ad@dsa.asd",
   //   assigned: false,
   //   assignedTo: []
   // }
   ], [
   // {
   //   title: "asd 2",
   //   description: "asd asdas dsad asdasd",
   //   id: "assa1233",
   //   active: false,
   //   createDate: new Date(2100, 1, 1),
   //   completed: false,
   //   assignedTo: []
   // },
   // {
   //   title: "asd 3",
   //   description: "asd asdsad asd ",
   //   id: "asdasd2",
   //   createDate: new Date(1900, 1, 1),
   //   active: false,
   //   completed: false,
   //   assignedTo: []
   // },
   // {
   //   title: "asd 4",
   //   description: "asd asdsa sad sad asds",
   //   id: "asd1",
   //   active: false,
   //   createDate: new Date(1800, 1, 1),
   //   completed: false,
   //   assignedTo: []
   // }
   ]));
   */

})();
