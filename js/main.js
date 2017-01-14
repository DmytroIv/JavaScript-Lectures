// 1 - 1
function addOpacity(hexColor, opacity){
	hexColor = hexColor.split("");
	var red = "",
		green = "",
		blue = "";
	
	return "rgba(" + rgba + opacity + ")";
}



// 1 - 2
function blockGrower(width,height){
	//var widthDim = width.slice(parseFloat(width).toString.length);//----------------
	//var heightDim = height.slice(parseFloat(height).toString.length);//-------------
	
	var widthValue = Math.round(parseFloat(width) * 1.5 * 10000) / 10000;//-------
	var heightValue = Math.round(parseFloat(height) * 1.5 * 10000) / 10000;//-----
	
	var obj = {};
	obj.widthOb = widthValue //+ widthDim;
	obj.heightOb = heightValue //+ heightDim;
	return obj;
} 

//console.log(blockGrower("123223.2313123px","27.222223%"));

// 1 - 3
function getTwoNumbers(min, max){
	var arr = [];
	var obj = {};
	for (var i = 0; i < 5; i++) {
		arr[i] = getRandom(min, max);
	}	
	//var sorted arr = Math.sort( arr, function(a,b){return a - b;})
		
	return obj;
}

//console.log(getTwoNumbers(1, 10));

// 1 - 4
function chechNumberType(number){
	return Math.round(number) === number ? "integer" : "float";
}

//console.log(chechNumberType(10));

// 2 - 1

function getRandomPart(string){
		var min = 0;
		var max = string.length - 1;
		var arr = [];
		for (var i = 0; i < 2; i++){
			arr[i]= getRandom(min, max);
		}
	return string.substring(arr[0],arr[1]);
}

//console.log(getRandomPart("string"));

// 2 - 2
 
function getTwoSymbols(string){
	var stringUpp = string.toUpperCase();
	var arr = [];
	var min = 0;
	var max = string.length - 1;
	for (var i = 0; i < 2; i++){
			arr[i] = getRandom(min, max);
	}
	if(stringUpp.charAt(arr[0]) === stringUpp.charAt(arr[1])){
		return string.charAt(arr[1]);
	}else{
		return string.charAt(arr[0]) + string.charAt(arr[1]);
	}
}

//console.log(getTwoSymbols("string"));

// 2 - 3

function wordRemover(word, string){
	var arrString = string.split(" ");
	for (var i = 0; i < arrString.length; i++){
		if (word === arrString[i]){
			arrString.splice(i, 1);	
		}
	}
	return arrString.join(" ");
}

//console.log(wordRemover("dfa" ,"sfs dfa asd fas sd sf asdf"));




























console.log();

function getRandom(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}