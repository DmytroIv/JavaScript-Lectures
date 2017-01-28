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


	//done without optimization
	function getPayDayDate(year, month, notification){
		var counter = 0,
        	todayArray = [new Date().getDate(), new Date().getMonth(), new Date().getFullYear()],
        	paymentDayArray = notification(year, month);

        console.log(todayArray, paymentDayArray);

        if(todayArray[0] <= paymentDayArray[0] && todayArray[1] ==! paymentDayArray[1]) {
            for (var i = todayArray[0]; i < paymentDayArray[0]; i++) {
                counter++;
            }
            if(!counter){return "Today is PayDay!!!"}
        }else{
			var diffDays = getDifferenceBetweenDays(todayArray, paymentDayArray);
        	return "Payment already has been in this month, you will get pay in - " + (diffDays - 1) + " days" ;
		}
		return "Payment day will be in " + counter + " days, on " + paymentDay;

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

	//console.log(getDayByDate(2017, 0, 28));
	//console.log(isYearLeap(2017));
	//console.log(getWeekendsCount(2017, 0));
	//console.log(notification(2017, 0));
	//console.log(getPayDayDate(2017, 1, notification));

})();




































