function pow(x,y){
	return y < 1 ? x = 1 : pow(x,y - 1) * x;
}
//console.log(pow(5,2));

function toOneDimension(array, newArray){
	newArray = newArray || [];
	for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])){
			toOneDimension(array[i], newArray);
		}
		else {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

//console.log(toOneDimension([[1,2,3],[4,5,6],[7,[12,13,14,15,["a","b","c"]],8,9]], ["asd", 123, {}]));

//Numbers
// var x = 123;	// 123
// var y = 0xF;	// 15	
// var z = 5e3;	// 5000
// var w = 5e-3; 	// 0.005

// var infinity = Infinity; 
// var nan = NaN;
// var number = 5;
// console.log(isFinite(infinity));	 //false
// console.log(isFinite(nan));   		 //false
// console.log(isFinite(number));		 //true

//parseFloat parseInt
// console.log(+"");		 	//0
// console.log(+"56");		 	//56

// console.log(parseInt("FF", 16));			// 255
// console.log(parseInt("08", 10)); 			// 8
// console.log(parseInt("")); 					// NaN
// console.log(parseInt("10.5%"));				//10

// console.log(parseFloat("10.5%"));		 	//10.5 
// console.log(parseFloat("asd10.5%"));		//NaN 

// var f = 055;
// console.log(parseInt(f));					//45 


//isNaN
//console.log(isNaN("10.5%"));		//
// console.log(isNaN(""));				//
// console.log(isNaN("25.5"));			//
// console.log(isNaN(51));				//
// console.log(isNaN(null));			//
// console.log(isNaN(true));			//

// function isNumber(n){
	// return !isNaN(parseFloat(n)) && isFinite(n);
// }
// console.log(isNumber(""));

//Math.round

// Math.round(1.4)//1
// Math.round(1.5)//2

// Math.ceil(1.1)//2

// Math.floor(1.9)//1

// 10.567.toFixed(2)//"10.57"

// Math.round(10.255*100)/100// 10.26

// var numb = 0.1 + 0.2 // 0.3000000000000000000004
// console.log(numb);
// console.log((0.1*10+0.2*10)/10);
// console.log(+(0.1 + 0.2).toFixed(10));
// console.log(Math.round((0.1+0.2)*10)/10);

// console.log(9999999999999999); // ?



///////////////////////////  String  /////////////////////////////////

// var string = "st\"ring",
	// string = "ADV",
	// string = 'it \'s test string';

// console.log("first line \n next line");
// console.log("first line \/ next line");
// console.log("first line \\ next line");
// console.log("\\");

// console.log("adfs    ".length); //8

// console.log("test".charAt(0)); //"t"
// console.log("test"[0]); //"t"
// console.log("test"[5]); //undefined
// console.log("test".charAt(5)); //""


//var x = A and B;
// console.log(x.toUpperCase());// we do not change x
// console.log(x.toLowerCase());// we do not change x
// console.log(x);  

//x = x.toLowerCase(); we repalce sting with ne var

// var string = "test string";
// console.log(string.substring(1, 4)); //"est"
// console.log(string.substring(4, 1)); //"est"
// console.log(string.substring(1, -4)); //"t"
// console.log(string.substring(4)); //" string"

// console.log(string.slice(1,4)); //"est"
// console.log(string.slice(4,1)); //""
// console.log(string.slice(1,-4)); //"est st"
// console.log(string.slice(4)); //" string"

// console.log(string.substr(1, 5)); //"est s"







































