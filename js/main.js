(function (){
    "use strict";

	var modules = {},
		ourAwesomeApi = {};
	
	ourAwesomeApi.addModule = addModule;
	ourAwesomeApi.getModule = getModule;
	ourAwesomeApi.addMethod = addMethod;
	
	window.api = ourAwesomeApi;
	
	//Functions
	function addModule(name, module) {
		if(modules[name]){
			throw("Module already exist");
		}
		else{
			var fn = new Function("return function " + name + "(){}")();
			fn.prototype = module;
			modules[name] = fn;
		}
	}
		
	function addMethod(moduleName, name, method) {
		if(!modules[moduleName]) {
			throw ("Module does not exist");
		}
		else if(modules[moduleName].prototype[name]){
			throw ("Method alredy exist");	
		}
		else {
			modules[moduleName].prototype[name] = method;
		}
	}
	
	function getModule(name) {
		if(modules[name]){
			return new modules[name]();
		}
		else {
			throw ("Module does not exist");
		}
	}
	
})();
//regExp
(function (){
	api.addModule("regExpService",{
		hasTextBySample: hasTextBySample,
		getMatches: getMatches,
		getPartedPhone: getPartedPhone,
		checkEverylineMatch: checkEverylineMatch
	});
	//Functions
	function hasTextBySample(string, regExp) {
		return regExp.test(string);
	}
	
	function getMatches(string, regExp) {
		regExp = new RegExp(regExp,"g");
		return string.match(regExp);
	}
	
	function getPartedPhone(string) {
		var str = string.match(/\+?(\d{1,2})[^]?(\d{3})[^]?(\d{3}[^]?\d{2}[^]?\d{2})/);
		if(!str){ throw("Invalid phone number");}
		
		var obj = {};		
		obj.countryCode = str[1];
		obj.cityCode = str[2];
		obj.phone = str[3];
				
		return obj;		
	}
	//
	function checkEverylineMatch(string, regExp) {
		var lines = string.split(/\n/);
		return lines.every(function (line){return regExp.test(line)});
	}

})();
//Date
(function (){
	api.addModule("dataServices",{
		getDayByDate: getDayByDate,
		isYearLeap: isYearLeap,
		getWeekendsCount: getWeekendsCount,
		getPayDayDate: getPayDayDate
	});
	//Functions
		
	function getDayByDate(year, month, day) {
		var weekDay = new Date(year, month, day),
        daysOfWeekArray = ["su", "mo", "tu", "we", "th", "fr", "sa"];
		return daysOfWeekArray[weekDay.getDay()];
	}
	
	function isYearLeap(year) {
		year = new Date(year,1, 29);
		return year.getMonth() === 1;
	}
	
	function getWeekendsCount(year, month) {
		var monthInYear = new Date(year, month + 1, 0).getDate();
		var	counter = 0;
		for(var i = 1; i <= monthInYear; i++){
			var monthLooping = new Date(year, month, i).getDay();
			if(monthLooping === 0 || monthLooping === 6){
				counter++;
			}
		}
		return counter;
	}
	//
	function getPayDayDate(year, month, notificationFunction){
		var counter = 0,
			todayDate = new Date(),
        	todayArray = [todayDate.getDate(), todayDate.getMonth(), todayDate.getFullYear()],
        	paymentDayArray = notification(year, month);
        if(todayArray[1] === paymentDayArray[1]) {
        	if(todayArray[0] <= paymentDayArray[0]){
        		for (var i = todayArray[0]; i < paymentDayArray[0]; i++) {
                counter++;
            }
            	return !counter ? "Today is PayDay!!!" : "Payment day will be in " + counter + " days. Date of payment " + paymentDayArray;
        	} else {
        		return "Payment already has been this month.";
			}
        }
		var diffDays = getDifferenceBetweenDays(todayArray, paymentDayArray);
        return "You will get pay in - " + (diffDays - 1) + " days. Date of payment: " + paymentDayArray;
    }
	
	//function notification for getting second friday date array
    function notification(year, month) {
        var dateOfMonthInYear = year && month ? (new Date(year, month + 1, 0).getDate()) : (new Date().getDate()),
            fridaysDateArray = [];
        for(var i = 1; i <= dateOfMonthInYear; i++){
            var monthLooping = new Date(year, month, i).getDay();
            if(monthLooping === 5){
                fridaysDateArray.push([new Date(year, month, i).getDate(), (new Date(year, month, i).getMonth()), new Date(year, month, i).getFullYear()]);
            }
        }
        return fridaysDateArray[1];
    }
	//function difference between dates
    function getDifferenceBetweenDays(arrayOfFirstYearMonthDate, arrayOfSecondYearMonthDate) {
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(arrayOfFirstYearMonthDate[2], arrayOfFirstYearMonthDate[1], arrayOfFirstYearMonthDate[0]);
        var secondDate = new Date(arrayOfSecondYearMonthDate[2], arrayOfSecondYearMonthDate[1], arrayOfSecondYearMonthDate[0]);
        return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    }

	// console.log(getDayByDate(2017, 0, 28));
	// console.log(isYearLeap(2017));
	// console.log(getWeekendsCount(2017, 0));
	// console.log(notification(2017, 0));
	// console.log(getPayDayDate(2017, 1));

})();

(function (){
    api.addModule("commonServices",{
        getTypeOf: getTypeOf,
        combine: combine,
        limitTo: limitTo
    });
    //Functions
	function getTypeOf(elem){
		return {}.toString.call(elem).slice(8, -1);
	}

	function combine(elem1, elem2, stringSeparator){
		var elem3 = [elem1, elem2];
		if(getTypeOf(elem1) === "String" || getTypeOf(elem1) === "Array"){
			elem3 = !stringSeparator ? elem1.concat(elem2): elem1.concat(stringSeparator, elem2);
		}else if (isFinite(elem1) && getTypeOf(elem1) === "Number"){
			elem3 = elem1 + elem2;
		}else if(getTypeOf(elem1) === "Object"){
			elem3 = Object.assign({}, elem1, elem2);
		}
		return elem3;
	}

    function limitTo(element, limit) {
		var returnElement = element;
		if(getTypeOf(element) === "String" || getTypeOf(element) === "Array"){
			returnElement = element.slice(0, limit);
		}else if(isFinite(element) && getTypeOf(element) === "Number"){
			returnElement = element < limit ? element : limit;
		}
		return returnElement;
	}

    // console.log(getTypeOf(null));

    // console.log(combine("123", "123", ", "));
    // console.log(combine([1, 2, 3, 5], ["a", "b", "c"]));
    // console.log(combine(123, 123));
    // console.log(combine({"a": 1, "ab": 55, "ac": "was"}, {"b": true, "bb": [1,2,3], "bc": 11}));
    // console.log(combine(/asd/, null));

    console.log(limitTo("12345abcde", 2));
    console.log(limitTo([1, 2, 3, 4, 5], 2));
    console.log(limitTo(123, 122));
    console.log(limitTo({"a": 1, "ab": 55, "ac": "was"}));
    console.log(limitTo(/asd/, null));


})();


































