function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 - 1 done fixed
function addOpacity(hexColor, opacity){
	var red = parseInt(hexColor.substr(1,2), 16) + ", ",
		green = parseInt(hexColor.substr(3,2), 16) + ", ",
		blue = parseInt(hexColor.substr(5,2), 16) + ", ";
	
	return "rgba(" + red + green + blue + opacity + ")";
}

//console.log(addOpacity("#facab2", 0.5));

// 1 - 2 done fixed
function blockGrower(width,height){
    var widthValue = parseFloat(width),
        widthDimension = width.slice(("" + widthValue).length);
    var heightValue = parseFloat(height);
        heightDimension = height.slice(("" + heightValue).length);

        widthValue = Math.round((widthValue * 1.5) * 10000) / 10000;
        heightValue = Math.round((heightValue * 1.5) * 10000) / 10000;

    var obj = {
        "width": widthValue + widthDimension,
        "height": heightValue + heightDimension
    };

    return obj;
}

//console.log(blockGrower("123223.2323423rem","27.222223%"));

// 1 - 3 done fixed
function getTwoNumbers(min, max){
	var arr = [];
	var obj = {};
	for (var i = 0; i < 5; i++) {
		arr[i] = getRandom(min, max);
	}	
	var sortedArr = arr.sort(function(a,b){return a - b;});
    obj.min = sortedArr[0];
    obj.max = sortedArr[sortedArr.length - 1];

	return obj;
}

//console.log(getTwoNumbers(1, 10));

// 1 - 4 done fixed
function checkNumberType(number){
	return Math.round(number) === number ? "integer" : "float";
}

//console.log(checkNumberType(10.32));

// 2 - 1 done fixed

function getRandomPart(string){
		var min = 0;
		var max = string.length - 1;
    return string.slice(getTwoNumbers(min, max).min, getTwoNumbers(min, max).max);
}

/*function getRandomPart(string){ //was done at class
    var min = 0;
    var max = string.length - 1;
    var arr = [];
    for (var i = 0; i < 2; i++){
        arr[i]= getRandom(min, max);
    }
    return string.substring(arr[0],arr[1]);
}*/

//console.log(getRandomPart("strisdfsdfng"));

// 2 - 2 done fixed

function getTwoSymbols(string){
    var stringUpp = string.toUpperCase();
    var arr = [];
    var min = 0;
    var max = string.length - 1;

    arr[0] = getTwoNumbers(min, max).min;
    arr[1] = getTwoNumbers(min, max).max;

    if(stringUpp.charAt(arr[0]) === stringUpp.charAt(arr[1])){
        return string.charAt(arr[1]);
    }else{
        return string.charAt(arr[0]) + string.charAt(arr[1]);
    }
}

/*function getTwoSymbols(string){ // was done at class
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
}*/

//console.log(getTwoSymbols("sitriiiiiing"));

// 2 - 3 well enough done at class

function wordRemover(word, string){
	var arrString = string.split(" ");
	for (var i = 0; i < arrString.length; i++){
		if (word === arrString[i]){
			arrString.splice(i, 1);	
		}
	}
	return arrString.join(" ");
}

//master task decision
function wordRemoverWithFilter(word, string){
    return string.split(" ")
        .filter(function(element){return element !== word; })
        .join(" ");
}

//console.log(wordRemover("dfa" ,"sfs dfa asd fas sd sf asdf"));
//console.log(wordRemoverWithFilter("dfa" ,"sfs dfa asd fas sd sf asdf"));




























console.log();

function getRandom(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}