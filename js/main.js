// var obj = {};

// var obj = new Object();

// var obj = {
	// key1: "value1",
	// key2: null,
	// "user": {
		// "firstname": "Vasya",
		// lastname: "Sidorov"
	// } 
// };

// var obj = {};
// obj.key1 = "value1";
// obj.key2 = null;
// obj["user"] = {
	// "firstname": "Vasya",
	// lastname: "Sidorov"
// };

// console.log(obj.key1);

// //////////////////////////////////////////
// delete obj.key1;

// console.log(obj.key1);

// ///////////////////////////////////////////
// obj.key1 = undefined;

// if (obj.key1 !== undefined){
	// //some action
	// console.log("no result");
// }

// if ("key1" in obj){
	// //some action
	// console.log("Has result");
// }

/////////////////////////////////////////////////
// for(var key in obj){
	// console.log(obj[key]);
// }

// var obj = {
	// "1": "value1",
	// "25": "value2",
	// "10": "value3",
	// "test1": "value4",
	// "asd": "value5",
	// "11": "value6",
	// "zzz": "value7"
// }

// // for(var key in obj){
	// //console.log(key + " : ",obj[key]);
// // }

// var keys = Object.keys(obj);// return array keys of object
// //console.log(keys);

// for (var i = 0; i < keys.length; i++){
	// console.log(keys[i], obj[keys[i]]);
// }

///////////////////////////////////////////////

// var obj = {
	// "key1": 10,
	// "key2": 15,
	// "10": "value3",
	// "test1": "value4",
	// "asd": "value5",
	// "11": "value6",
	// "zzz": "value7"
// }

// Object.defineProperty(obj, "key1", {
	// writable: false
// })

// obj.key1 = 25;
// console.log(obj.key1);

// Object.defineProperty(obj, "key1", {
	// writable: true
// })

// obj.key1 = 25;
// console.log(obj.key1);

// Object.defineProperty(obj, "key1", {
	// configurable: false,
	// writable: false,
	// enumerable: false
// });

// console.log(Object.keys(obj));
// obj.key1 = "test";
// console.log(obj.key1);

// Object.defineProperty(obj, "key1", {
	// configurable: true	
// });

// Object.defineProperty(obj, "test",{
	// enumerable : true
// })

// console.log(obj.test);

// obj.test = "rest";

// console.log(obj.test);

// Object.defineProperty(obj, "test",{
	// get: function() { return this.value / 3 },
	// set: function(newValue) { this.value = newValue * 2}
// });

// console.log(obj.test);
// obj.test = 12;
// console.log(obj.test);

// var obj = {
	// firstName: "test1",
	// lastName: "test2"
// }

// Object.defineProperty(obj, "fullName",{
	// get: function() { 
		// return this.firstName + " " + this.lastName;
	// },
	// set: function(newValue) { 
		// this.firstName = newValue.split(" ")[0];
		// this.lastName = newValue.split(" ")[1];
		// }
// });

// console.log(obj.fullName);

// obj.fullName = "Vasya Pupkin"

// console.log(obj);

// obj.firstName = "Sidor"
// console.log(obj.fullName);
// console.log(obj);

// Object.defineProperties(obj, {
	// "fullName":{
		// get: function() { 
			// return this.firstName + " " + this.lastName;
		// },
		// set: function(newValue) { 
			// this.firstName = newValue.split(" ")[0];
			// this.lastName = newValue.split(" ")[1];
		// }
	// },
	// "age": {
		// value: 18,
		// enumerable: true,
		// writable: false
	// }
// });

// console.log(obj.fullName);
// console.log(obj.age);


//////////////////////////////////////////////////////////////////////////////////////////////
//Array => methods

// var array = [0, 1];
// console.log("Push 10:" ,array.push(10)); //3
// console.log(array); //[0,1,10]

// console.log("Pop :" ,array.pop()); //10
// console.log(array); //[0, 1]

// console.log("Unshift 256:", array.unshift(256)); //3
// console.log(array); //[256,0,1]

// console.log("Shift:", array.shift()); //256
// console.log(array); //[0,1]

//////////
//splice//
//////////

// var arr = [0,1,2,3];
// console.log(arr.splice(1,2,5,6,7,8));//[1,2]
// console.log(arr);//[0,5,6,7,8,3]

// console.log(arr.splice(1,0, "test"));//[]
// console.log(arr);//[0,"test",5,6,7,8,3]

/////////
//split// method of string making array from string 
/////////

// var string = "ab,bc,cd";
// console.log(string.split(",", 2)); // ["ab", "bc"]

// var url = "https://google.com/mail";
// var urlArr = url.split("/");

// console.log(urlArr);
// if (urlArr[urlArr.length -1] === "mail") {
	// console.log("we are on email");
// }

// var objectString = "test:value,test2:value2";
 
// function stringToObject(string){
	// var newObject = {};
	// var keysWithValues = string.split(",");
	// for(var i = 0; i < keysWithValues.length; i++) {
		// var keyAndValue = keysWithValues[i].split(":");
		// newObject[keyAndValue[0]] = keyAndValue[1];
	// }
	// return newObject;
// }
// console.log(stringToObject(objectString));

// var string = "some string";
// console.log(string.split(""));

////////
//join//
////////

// var array = ["ab","bc","cd"];
// console.log(array.join());
// console.log(array.join("|"));

//slice

// console.log(["a","b","c","d"].slice(1,3));//["a","b"]
// console.log(["a","b","c","d"].slice());//["a","b","c","d"]
// console.log(["a","b","c","d","e"].slice(-3,-1));//["c","d"]

////////
//sort//
////////

// console.log([1,45,19,2].sort());

// var sortedArray = [1,2,15,10,9];

// sortedArray.sort(function(a, b){
	// // if (a < b){
		// // return -1;
	// // }else if(a > b)
		// // return 1;
	
	// return a - b;
// });

// console.log(sortedArray);

// var sortedArray = ["arz", "sdw","aez", "era", "fgdsf","z","a"];

// sortedArray.sort(function(string1, string2){
	// if(string1.toLowerCase() > string2.toLowerCase())
		// return 1;
	// if(string1.toLowerCase() < string2.toLowerCase())
		// return -1;
// });

// console.log(sortedArray);

// //reverse
// var array = ["ab","bc","cd"];
// console.log(array.reverse());//["cd", "bc", "ab"]

// //concat

// var arr1 = [1,2,3];
// var arr2 = [4,5,6];
// var arr3 = ["test","test2","test3"];
// console.log(arr1.concat(arr2, {}, null, arr3));//[1, 2, 3, 4, 5, 6, Object, null, "test", "test2", "test3"]

///////////////
//indexOf//////
//lastIndexOf//
///////////////

// var obj = {
	// "test" : "rest"
// };
// var arr = [1, "test", obj, 1];

// console.log(arr.indexOf(1));//0
// console.log(arr.indexOf("test"));//1
// console.log(arr.indexOf(obj));//2
// console.log(arr.indexOf({"test":"rest"}));//-1
// console.log(arr.lastIndexOf(1));//3

// if (~arr.indexOf("test")){
	// console.log("we have test in array");
// }

///////////////////////////////////////////
//forEach anf filter
///////////////////////////////////////////
// var array = ["test", 2, 25];
// array.forEach(function(element, index, array){
	// if (typeof element === "number")
		// array[index] = element.toString();
	// console.log(element, index, array);
// });

// var array = ["test", 2, 25];
// var arrayOfNumbers = array.filter(function(element,index,array){
	// return typeof element === "number";
// });
// console.log(arrayOfNumbers);

////////////////////////
// map
// var array = [1,2,3,4,5];
// var newArray = array.map(function (element,index,array){
	// return element * 10;
// });
// console.log(array);
// console.log(newArray);

///////////////////////////////////////
//every and some
// var array = [1,2,3,4,5,"string"];
// var allNumbers = array.every(function (element){
	// return typeof element === "number";
// });
// console.log(allNumbers);

// array.pop();
// var isAllNumbers = array.every(function (element){
	// return typeof element === "number";
// });
// console.log(isAllNumbers);

// var isArrayHasNull = array.some(function (element) {
	// return element === null;
// });
// console.log(isArrayHasNull);
// array.push(null);
// var isArrayHasNull = array.some(function (element) {
	// return element === null;
// });
// console.log(isArrayHasNull);

//////////////////////////////////////////////////////////////
//reduce
//////////////////////////////////////////////////////////////
// var array = [1,2,3,4,5];

// var summOfNumbers = array.reduce(function (startValue, element, index, array){
	// return startValue + element;
// },0);

// console.log(summOfNumbers);

// var summOfNumbers = array.reduce(function (startValue, element, index, array){
	// return startValue + element;
// });

// console.log(summOfNumbers);

// var users = [
	// {"user1": "name1"},
	// {"user2": "name2"},
	// {"user3": "name3"},
// ];
// var objectWithNames = users.reduce(function (startValue, element, index, array){
	// startValue["user" + (index + 1)] = element["user" + (index + 1)];
	// return startValue;
// }, {});

// console.log(objectWithNames);




















































