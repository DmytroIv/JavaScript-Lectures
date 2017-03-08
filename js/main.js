$("div").each(function(index, element){
	//$(element);
	//console.log(index, element);
});

///////////////////////////////extend -coping object properties to target obj 
// var target = {
// 	test: 25
// };

// var source1 = {
// 	test1: 256,
// 	test2: 15
// };

// var source2 = {
// 	test2: 30,
// 	test3: 25
// };

// console.log($.extend(target, source1, source2));

////  $("").extend(deep, target, source1, source2, sourceN);
//// 		deep - deep copy
//// 		target - object to were we copy
//// 		source - objects from were we copy properties

////////////////////////////makeArray making array from psevdoJqueryArray
//var divsArray = $.makeArray("div");
//console.log(divsArray);

// test(1,2,3);
// function test(){
// 	console.log(arguments.forEach); //showing that its not array
// 	console.log($.makeArray(arguments).forEach); //showing that its array with array functionality
// }

////////////////////////noop - empty function
// fnWithCallback(function(){});
// fnWithCallback($.noop);
// function fnWithCallback(callback){
// 	console.log("qwe")
// 	callback("asd");
// }

////////////////////////now - short new Date writing 

// var currentTimestamp = new Date().getTime();
// var now = $.now();
// console.log(currentTimestamp);
// console.log(now);

///////////////////////type - return type of object
// console.log($.type(""));
// console.log($.type(new RegExp()));

/////////////////////////////////////////////
//////////////////////////lists of Callbacks
/////////////////////////////////////////////

 // get only flags   $.Callbacks("")
var func1 = function (data){
	console.log("1", data);
	return false;
}
var func2 = function (data){
	console.log("2", data);
}
var func3 = function (data){
	console.log("3", data, this);
}
////Flags "once"

// var callbacks = $.Callbacks("once");

// callbacks.add(func1);
// callbacks.fire("test");

// callbacks.add(func1);
// callbacks.add(func2);

// callbacks.fire("test");

////Flags "once memory"

// var callbacks = $.Callbacks("once memory");
// callbacks.add(func1);
// callbacks.fire("test");
// // callbacks.fire("test 2");

// callbacks.add(func1);
// callbacks.add(func2);

// callbacks.fire("test 3");

////Flags "memory"

// var callbacks = $.Callbacks("memory");
// callbacks.add(func1);
// callbacks.fire("test");
// // callbacks.fire("test 2");

// callbacks.add(func1);
// callbacks.add(func2);

// // callbacks.fire("test 3");

////Flags "unique"

// var callbacks = $.Callbacks("unique");
// callbacks.add(func1);
// callbacks.add(func1);
// callbacks.fire("test");

////Flags "stopOnFalse"

// var callbacks = $.Callbacks("stopOnFalse");
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.fire("test");

////////////////////////////////////////////////////

// var callbacks = $.Callbacks();
// callbacks.add(func1);
// callbacks.fire("test");
// callbacks.add(func2);
// callbacks.fire("test 2");

// callbacks.remove(func1);
// callbacks.fire("test 3");

// console.log(callbacks.fired());
// callbacks.add(func3);
// callbacks.fire("test");
// callbacks.fireWith({key: "value"}, ["test"]);
// callbacks.fired();

// console.log(callbacks.fired());

// console.log(callbacks.has(func1));
// console.log(callbacks.has(func3));

// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.fire("test");

// callbacks.empty();

// callbacks.fire("test 2");

// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.fire("test 1");
// callbacks.disable();
// callbacks.fire("test 2");
// console.log(callbacks.disabled());

// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.fire("test 1");
// callbacks.lock();
// callbacks.fire("test 2");
// console.log(callbacks.locked());

///////////////////////lock with memory
// var callbacks = $.Callbacks("memory")
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.fire("test 1");
// callbacks.lock();
// callbacks.fire("test 2");
// console.log(callbacks.locked());
// callbacks.add(func1);

///////////////////////////////////////////
////////////////////////Promise
///////////////////////////////////////////
var promise = $.Deferred();
console.log(promise);

// video time at 02:22:42

















































