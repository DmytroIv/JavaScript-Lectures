(function (){
	"use strict"
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
	};
	
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
	};
	
	function getMatches(string, regExp) {
		var regExp = new RegExp(regExp,"g");
		return string.match(regExp);
	};
	
	function getPartedPhone(string) {
		var str = string.match(/\+?(\d{1,2})[^]?(\d{3})[^]?(\d{3}[^]?\d{2}[^]?\d{2})/);
		if(!str){ throw("Invalid phone number")}
		
		var obj = {};		
		obj.countryCode = str[1]
		obj.cityCode = str[2]
		obj.phone = str[3]
				
		return obj;		
	};
	//
	function checkEverylineMatch(string, regExp) {
		var lines = string.split(/\n/);
		return lines.every(function (line){return regExp.test(line)});
	};
	
	var str = "asdasds tel +3(212)9993388\nasdasds tel +3(212)9993388\nasdasds tel +3(212)9993388\nasdasds tel +3(212)9993388\nasdasds tel +3(212)9993388";
	
	//console.log(hasTextBySample("string", /string+s?/i));
	//console.log(getMatches(str, /\(/));
	//console.log(getPartedPhone("asdasds tel +3(212)9993388"));	
	//console.log(str);
	//console.log(checkEverylineMatch(str, /\+{1}/g));	
	
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
		var weekDay = new Date(year, month, day);
		switch(weekDay.getDay()){
			case 0: 
				return "su";
				break;
			case  1: 
				return "mo";
				break;
			case 2: 
				return "tu";
				break;
			case 3: 
				return "we";
				break;
			case 4: 
				return "th";
				break;
			case 5: 
				return "fr";
				break;
			case 6: 
				return "sa";
				break;
			default: 
			throw("wrong date");
		}
	};
	
	function isYearLeap(year) {
		var year = new Date(year,1, 29);
		return year.getMonth() === 1;
	};
	
	function getWeekendsCount(year, month) {
		var monthInYear = new Date(year, month, 1);
		var	counter = 0;
		for(var i = 1;monthInYear.getMonth() === new Date(year, month, i); i++){
			var monthLooping = new Date(year, month, i);
			console.log(monthInYear);
			if(monthLooping.getDay() === 0 || monthLooping.getDay() === 6){
				counter++;
			}
		}
		return counter;
	};
	
	function getPayDayDate(yeat, month, notification){};
	
	//console.log(getDayByDate(2017, 0, 1));
	//console.log(isYearLeap(2016));
	console.log(getWeekendsCount(2017, 0));
	
	
})();




































