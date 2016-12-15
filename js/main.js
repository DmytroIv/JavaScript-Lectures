"use strict"

// console.log(+'25.22'); // 25.22
// console.log(25 % 19); // 6
// console.log(12/5); // 2.4 

 // console.log(5 > 3);
 // console.log(5 < 3);
 // console.log(5 <= 3);
 // console.log(5 >= 3);
 // console.log(5 != 3);
 // console.log(5 != '5');
 // console.log(5 !== '5');
 // console.log(null == undefined); //true
 // console.log(null === undefined);//false
 
 // console.log('0 == false', 0 == false); //true
 // console.log('0 === false', 0 === false); //false
 // console.log(' "" == false', '' == false); //true
 // console.log(' "" === false', '' === false); //false
 
 // console.log(0 && 5); //0 logic AND
 // console.log(0 || 5); //5 logic OR
 // console.log(!0); // true logic NOT
 // console.log(0 || test()); // "Test succes!"
 
 // console.log(34 && test() && 513 && 'end of ands list'); // 'end of ands list'
  
 // function test(){
	 // return "Test succes!";
 // }
 
 // console.log(!null); //true
 // console.log(!undefined); //true
 // console.log(!0); //true
 // console.log(!''); //true
 // console.log(!NaN); //true
 
 // var x = 5, y = 3, z = 2;
 // console.log(x, y, z); //true
 
 // console.log((1+3)*12); //48
 
 // console.log('asdasdasd \\ asdasdad'); //asdasdasd \ asdasdad 
 // console.log('asdasdasd \n asdasdad'); // \n 
 // console.log('asdasdasd \t asdasdad'); // \t 
 // console.log('asdasdasd \b asdasdad'); // \b

 // console.log(!!'asdasdasd \b asdasdad'); // true
 
 // var x = (3, 4, 5);
 // console.log(x); // true
 
 // var y = 5, z = x + y, x = 3;
 // console.log(z); // NaN
 // console.log(NaN == NaN, NaN === NaN); // false false
 // console.log(typeof NaN); // number

 // var x = NaN;
 // console.log(x == x); //false
 
// var x = 10;
// x++;
// console.log(x); 
// var y = 10;
// ++y;
// console.log(y); 
// var z = 5;
// --z;
// console.log(z);
// var v = 5;
// v--;
// console.log(z);

// console.log('a'>'z'); //false
// console.log('a'<'z'); //true
// console.log('a'<'Z'); //false
// console.log('a'>'Z'); //true
// console.log('asda'>'asd'); //true
// console.log('asda'>'asz'); //false
// console.log('12'>'2'); //false
// console.log('32'>'252'); //true
// console.log(+'12' > +'2'); //true
// console.log(+'32' > +'252'); //false

// console.log("2" > 1); //true
// console.log("2" < 1); //false
// console.log("3" > 7); //false
// console.log("7" > 3); //true
// console.log("7" > 3); //true

// console.log("1.0" == 1); //true
// console.log(true == 1); //true
// console.log(false == 0); //true
// console.log(false == '0'); //true
// console.log(true == '1'); //true
// console.log(false == ''); //true

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
// console.log(null <= 0); //true

//======================================

// true = !'' , !0, !false, !null, !undefined, !NaN, true, [] , {};	//boolean true
// false = "", !true, 0, false, null, undefined, NaN;       //boolean false
 
 // if (true){
	// console.log('1');
// }
 
 // if (0 && 25 || 'text'){	// at first AND<<6>> then OR<<5>>
	 // console.log('succes'); 
 // }
 
 // if (25 && 0 || false){
	 // console.log("succes")
 // }else{
 // console.log("not succes")
 // }
 
 // var names = 325;
 // if (names === "Vasua"){
	 // console.log("Hello admin " + names)
 // }else if(typeof names === 'string'){
	// console.log("hello user " + names )
 // }else{
	// console.log('You enter not a name');
 // }
 
// var x = /*if*/10>15 ?/*then*/ "test" :/*else*/'rest'; 
// console.log(x); 
 // var x = (3 > 3) ? 't5' : (3 > 1) ? 't3' : (1 > 0)? 't2': 'f';
 // console.log(x);
 
//====================================== 


// var z = '1';
// switch(z){
	// case '1':
	// console.log('action one');
	// console.log('action one');
	// break;
	// case 2:
	// console.log('action two');
	// break;
	// case '3':
	// console.log('action three');
	// break;
	// case true:
	// console.log('action four');
	// default : 
	// console.log('default action');
// }

// var x = {};
// console.log(typeof function(){} === 'object');

// if (-5*0){
	// console.log(-5*0);
// }