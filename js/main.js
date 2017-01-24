var string = "soMe text string email@test.com"; 
var email = "email@test.com"; 
var email2 = "eMail@test.com\nemail12@test.com"; 
var phone = "soMe text +7(567)789-45-56 some text and 123"; 
var phone2 = "soMe text +73(567)789-45-56"; 
var phone3 = "soMe text +73 567 789 45 51"; 



function testRexgexp(string, regExp){
	return string.match(regExp);
}

console.log(testRexgexp(string,/some/));
console.log(testRexgexp(string,/some/i));
console.log(testRexgexp(string,/^some/i));
console.log(testRexgexp(string,/^text/i));
console.log(testRexgexp(string,/text/i));

console.log(testRexgexp(email, /\w+@\w+\.{1}\w{2,}/i));
console.log(testRexgexp(email2, /^\w+@\w+\.{1}\w{2,}$/im));
console.log(testRexgexp(email2, /^\w+@\w+\.{1}\w{2,}$/img));
console.log(testRexgexp(email2, /^\w+@\w+\.{1}\w{2,}$/mg));
console.log(testRexgexp(email2, /^\w+@\w+\.{1}\w{2,}$/g));

console.log(testRexgexp(email2, /(\w+)@[^]/));
console.log(testRexgexp(email2, /(\w+)@[^]+/));

console.log(testRexgexp(email2, /([a-z]+)@\w+\.{1}\w{2,}/));
console.log(testRexgexp(email2, /(?:[a-z]+)@\w+\.{1}\w{2,}/));

console.log(testRexgexp(email2, /(?:[a-z]+)@(\w+)\.{1}(\w{2,})/));

console.log(testRexgexp(phone, /\+?\d{1,2}\(?\d{1,3}\)?\d{3}-?\d{2}-?\d{2}/));
console.log(testRexgexp(phone2, /\+?\d{1,2}\(?\d{1,3}\)?\d{3}-?\d{2}-?\d{2}/));
console.log(testRexgexp(phone3, /\+?\d{1,2}[^]?\d{3}[^]?\d{3}[^]?\d{2}[^]?\d{2}/));


var testText = "'asd' 'bcd' 'ifg'";
var testText2 = '"asd" "bcd" "ifg"';
console.log(testRexgexp(testText, /\'\w+\'/g));
console.log(testRexgexp(testText, /'(.+)'/g));
console.log(testRexgexp(testText2, /"(.+?)"/g));
console.log(testRexgexp(testText2, /[^"]\b[^]+\b"/g));

console.log(testText.replace(/"(.+?)"/g, function (elem){
		console.log(elem);
		if(elem === "\"asd\""){
			return elem;
		}
		else {
			return 123;
		}
}));

console.log(testText.replace(/"(.+?)"/g, 123));





















