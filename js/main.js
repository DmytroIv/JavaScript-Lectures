// var i = 0;
// while(i < 5){
	// console.log(i);
	// i += 1;
// }

// var j = 50;
// do //runs at least once;
// {
	// console.log(j);
	// j += 1;
// }while (j < 10); 


// for(var i = 0; i < 10; i += 1){
	// console.log(i);
// }

// for(var i = 10; i > 5; i -= 1){
	// console.log(i);
// }

// for(var i = 10; i > 0; i -= 2){
	// console.log(i);
// }

// var i = 10;
// for(; i > 0;){
	// i--;
	// console.log(i);
// }

// var i = 0;
// while(i < 100){
	// console.log(i);
	// i++;
	// if(i > 10){
		// break;
	// }
// }
// var i = 0;
// do{
	// console.log(i);
	// i++;
	// if(i > 7){
		// break;
	// }
// }while(i < 100);

// for(var i = 0; i < 100; i++){
	// console.log(i);
	// if(i > 10){
		// break;
	// }
// }

// var i = 0;
// while(i < 10){
	// i++;
	// if(i > 5 && i < 8){
		// continue;
	// }
	// console.log(i);
// }

// var i = 0;
// do{
	// i++;
	// if(i > 5 && i < 8){
		// continue;
	// }
	// console.log(i);
// }while(i < 10);

// for(var i = 0; i < 10; i++){
	// if(i > 5 && i < 8){
		// continue;
	// }
	// console.log(i);
// }

// ===============================================

// var i = 0;
// outer:while(true){
	// console.log("outer i=", i);
	// while(true){
		// i++;
		// console.log("inner i=", i);
		// if(i>10){
			// break outer;
		// }
	// }
// }
// var i = 0;
// outer: do{
	// i++;
	// console.log("outer i=",i);
	// do{
		// i++;
		// console.log("inner i=",i);
		// if(i > 10){
			// break outer;
		// }
	// }while(true)
// }while(true)

// outerFor: for(var i = 0;;){
	// console.log("outer i=", i);
	// for(;;){
		// i++;
		// console.log("inner i=", i);
		// if(i > 10){
			// break outerFor;
		// }
	// }
// }	

// var i = 0;
// outer: for(var i = 0; i < 1000;){
	// console.log("outer i=", i);
	// for(;;){
		// i++;
		// console.log("inner i=", i);
		// if(i > 100){
			// continue outer;
		// }
	// }
// }

// var i = 0;
// outer:while(i < 30){
	// console.log('outer i =', i);
	// while(true){
		// console.log('inner i =', i);
		// i++;
		// if(i > 10){
			// continue outer;
		// }
	// }
// }

// var i = 0;

// outer: do{
	// console.log("outer i=", i);
	// do{
		// i++;
		// console.log("inner i=", i);
		// if(i > 10){
			// continue outer;
		// }
	// }while(true);
// }while(i < 30);

// =====================================

// var object = {
	// name1: "value 1",
	// keyr2: "value 2",
	// key3s: "value 3",
	// key4z: "value 4",
	// isObj: {test: "test"},
	// isArr: [2,4,5]
// }

// for(var key in object){
	// console.log(key, ":", object[key]);
// }

// var array = [1, 2, 4, 5, null, 123, "asd"];
// array.someKey = 'some value'; // dicrease speed of wock with array

// // for(var index in array){
	// // console.log(index);
	// // console.log(array[index]);
// // }

// for(var index = 0; index < array.length; index++){
	// console.log(array[index]);
// }

// ===================================== ARRAY

// var arr = [];
// var arr = [1, {}, [], 'asdasd', function(){},"end of array"];
// var arr = new Array(); //[];
// var arr = new Array(1, {}, [], 'asdasd', function(){},"end of array"); // [1, {}, [], 'asdasd', function(){},"end of array"];
// var arr = new Array(2); //[undefined, undefined];

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr);

// arr[0]='test';
// console.log(arr[0]);
// arr[0]='sdf';

//var arr = [1,2,3];
// console.log(arr.length);
// console.log(arr.push(11)); //4
// console.log(arr.length); //4

// arr.push('test') > 4 ? console.log("we have a big array!") : null;
// arr.push('test') > 4 && console.log("With && we have a big array!");

// console.log(arr);

// var z;
// if(z = 8 > 6){
	// console.log("z = 8 > 6", z);
// }

// console.log("our array = ", arr);

// console.log(Array.isArray(arr)); //

// var array = ["text", 123, "adf", [], null, {}];
// for(var i = 0; i < array.length; i++) {
	// var currentElement = array[i];
	// if (typeof currentElement === 'object' && !Array.isArray(currentElement)){
		// console.log(currentElement);
		// break;
	// }
	// console.log("iteration =", i + 1);
// }

var array = ["text", 123, "adf", [], null, {}];
array.length = 10;
console.log(array);












