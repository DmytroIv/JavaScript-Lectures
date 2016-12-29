// function summ(x, y){
	// return x + y;
// }
// console.log(summ(2,4));

// function isPositive (x){
	// if(typeof x === 'number' && x > 0){
		// return true;
	// }
	// return false;
	
	// //return typeof x === 'number' && x > 0; // master answer
// }
// console.log(isPositive('sdf3'));
// console.log(isPositive(3));

// function toBoolean (x){
	// if (!x == true){
		// return false;
	// }else {return true;}
	
	// /*switch(x){
		// case isNaN(x):
		// case false:
		// case '':
		// case 0:
		// case null:
		// case undefined:
			// return false;
			// break;
		// default : return true;
	// }*/

	// //return !!x //master answer 	
// }

// console.log(toBoolean(1));
// console.log(toBoolean(0));
// console.log(toBoolean("asd"));
// console.log(toBoolean({}));
// console.log(toBoolean([]));
// console.log(toBoolean(null));
// console.log(toBoolean(undefined));

//-----------------------------------------------------

// function greeting(name){
	// if(typeof name == 'string' && name != ''){  // if(typeof name == 'string' && name)  master
	// return "Hello " + name;
	// }else{
	// return "wrong name";
	// }
// }

// console.log();

// function square(x){
	// if(typeof x === 'number'){
	// return "Square x = " + x**2;    // return x === "number" && x === x && "square x " + x*x || "wrong x" master
	// }else{
	// return "wrong x";
	// }
// }

// console.log();

// function powerOrNot(x){
	// if(x % 2 === 0){
		// return "in square = " , x*x;
	// }
	// if(x % 3 === 0){
		// return "in cube = " , x**3;
	// }else{
		// return "x without pow " , x;
	// }
	
	
	// // the longest way to the target
	// // switch(x%2){
		// // case 0:
		// // return x*x;
		// // break;
	// // }switch(x%3){
		// // case 0:
		// // return x**3;
		// // break;
	// // }
	// // return x;
	
	// //master instance
	// //switch(true){
	// //	case x%2 ===0:
	// //  	return x * x;
	// //	case x%3 ===0:
	// //  	return x * x * x;
	// //	default: 
	// //		return x;
	
// }


// console.log();



//-----------------------------------------------------

// function getType(x){
	// switch(true){
		// case Array.isArray(x): 
			// return "array";
			// break;
		// case typeof x === "object" && x !== null: 
			// return "object";
			// break;
		// case typeof x === "string": 
			// return "string";
			// break;
		// case typeof x === "number" && x === x: 
			// return "number";
			// break;
		// case x === null: 
			// return "null";
			// break;
		// case !(x === x): 
			// return "NaN";
			// break;
		// case typeof x === "function": 
			// return "function";
			// break;
		// default: 
			// return "Boolean";
		
	// }
// }

// console.log(getType(null));
// console.log(getType(NaN));
// console.log(getType([12,2]));
// console.log(getType(undefined)); // did not find
// console.log(getType(""));
// console.log(getType(123));
// console.log(getType(0));

// function getLengthOfHyp(x1, x2, y1, y2, x3, y3, x4, y4){
	// if(((x1 - x3) === 0 && (y1 - y3) === 0) || ((x1 - x4) === 0 && (y1 - y4) === 0) || ((x2 - x4) === 0 && (y2 - y4) === 0) || ((x2 - x3) === 0 && (y2 - y3) === 0)) {
	// return Math.sqrt(((y1 - y2)**2)+((x1 - x2)**2)+((x4 - x3)**2)+((y4 - y3)**2));
	// }
	// return alert("You have wrong threangle")
// }

//console.log(getLengthOfHyp(x1, x2, y1, y2, x3, y3, x4, y4));
  //console.log(getLengthOfHyp(2,   6,  2,  2,  2,  2,  2,  4));

// function isTruePrimitive(x){
	// return ((typeof x === "string" || typeof x === "number" || typeof x === "boolean") && x != false && x === x) || false;  

	// // master return typeof x !== "object" && typeof x !== "function" && !!x;
	// }

// console.log(isTruePrimitive(true));
// console.log(isTruePrimitive(""));
// console.log(isTruePrimitive([]));
// console.log(isTruePrimitive({}));
// console.log(isTruePrimitive(function(){});

















































































