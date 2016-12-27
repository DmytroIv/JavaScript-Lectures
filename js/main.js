// // It's function

// //function declaration
// function fn () {
	
// }

// var object = {}; // {}, function () {};

// //It's method
// object.method = function () {};


// //function expresion
// var functionX = function () {};

// //It's named functional expresion
// var functionY = function fnName () {
	// if (true){
		// fnName();
	// }
// };

// //constructor new Function
// var newFnName = new Function ("x", "return x");
// console.log(newFnName(123));

// // self invocation function
// (function(){
	// console.log("test1");
// })();
// (function(){
	// console.log("test2");
// }());

// var test = (function privateName(x){  //with recurtion
	// // console.log(x)
	// if (x < 5){
		// return privateName(x + 1);
	// } 
	// return x;
// })(0);
// console.log(test);


// (function privateName(x){ //with recurtion
	// console.log(x)
	// if (x < 1){
		// privateName(x + 1);
	// }
// }(0));

// ---------------------++++++++++++++++++++++

// var arrayWithFunctions = [
	// function () {return 1;},
	// function () {return 2;},
	// function () {return 3;}
// ];

// arrayWithFunctions.methodOfArray = function () {
	// return "I am a method";
// }

// console.log(arrayWithFunctions[1]());
// console.log(arrayWithFunctions.methodOfArray());

// function fnName() {
	// return "I am a function";
// }

// fnName.methodOfFunction = function () {
	// return "I am a method ";
// }

// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName['methodOfFunction']());

// console.log(fnName);

// var newFuncthion = fnName;

// console.log(newFuncthion());
// console.log(newFuncthion.methodOfFunction());
// console.log(newFuncthion['methodOfFunction']());

// newFuncthion = null;

// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName['methodOfFunction']());

// var obj = {
	// x: 10
// }
// console.log(obj.x);

// changeX(obj);
// function changeX(test){
	// test.x = 25;
// }
// console.log(obj.x);

// var x = 10;
// var y = x;
// console.log("old", x);
// console.log("old", y);
// x++;

// changeX(x);
// function changeX(test){
	// test = 25;
// }
// console.log("new", x);
// console.log("new", y);

//--------------------------+++++++++++++++++++++++++++++++++

// var x = true ? function(){ return 25;}() : false;
// console.log(x); // call function()

// var fn = x == 25 && function () { return 50 };
// console.log(fn); // body function

//------------+++++++++++++++++++++_________________________

// var y = "asd";

// function test (number, name) {
	// console.log(arguments);
	
	// console.log(number += 10);
	// console.log("Hello ", name);
	
	// var x = Array.apply(null, arguments);
	// console.log(x);
	
	// y += "test";
	
	// z();
	// function z() {
		// var rest = "test value";
	// }
	// console.log(rest);
	// //arguments[1]...
	// //arguments[2]...
	// //arguments[3]...
// }

// test(1, "Vasya", null, [], 256, "test")

// console.log(y);

//***********************************************************************
function getAllNulls(array){
	if(!Array.isArray(array)){
		throw("Attribute array is not array");
		console.log('asf');
	}
	
	var nullsArray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] === null){
			nullsArray.push(array[i]);
		}
	}
	return nullsArray;
}

getAllNulls([1,12,3,13,1,4,1234,23,4, null, undefined, 1,1,2,3, null, 12, {"null": null},null]);

console.log(getAllNulls([1,12,3,13,1,4,1234,23,4, null, undefined, 1,1,2,3, null, 12, {"null": null},null]));






























