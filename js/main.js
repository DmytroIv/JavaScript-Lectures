///////////////
////Animation
///////////////
var $anim1 = $(".animate1");
var $anim2 = $(".animate2");
var $anim3 = $(".animate3");

// $anim1.hide(4000);

// $anim1.hide(4000, function(){
	// $anim1.show(1000);
// });

// $("h1").on("click", function(){
	// $anim1.toggle(1000);
// });

// $("h1").on("click", function(){
	// $anim1.stop().toggle(1000);
	// $anim2.stop().slideToggle(1000);
	// $anim3.stop().fadeToggle(1000);
	
	// $(this).fadeTo(500, 0.5, "swing", function(){
		// alert("complete")
	// });
// });

// $anim2.slideUp();
// $anim2.slideUp().slideDown();

// $anim3.fadeOut().fadeIn();

// $anim1.hide({
	// duration: 1000,
	// queue: true,
	// step: function(param1, param2, param3){
		// console.log(param2.prop, param2.now, param2.end);
	// },
	// done: function(promise){
		// promise.then(function(){
			// console.log("All ok");
		// }).done(function(){
			// console.log("All nice");
		// });
	// }
// });

// $anim1.fadeOut({
	// duration: 1000,
	// queue: true,
	// step: function(param1, param2){
		// console.log(param2.prop, param2.now, param2.end);
	// },
	// done: function(promise){
		// promise.then(function(){
			// console.log("All ok");
		// }).done(function(){
			// console.log("All nice");
		// });
	// }
// });

// $anim1.animate({"width": "25%"})
// .fadeOut({
	// duration: 1000,
	// queue: false
// }).fadeIn({
	// duration:1000,
	// queue: true
// })

// $anim1.fadeOut({
	// duration: 1000,
	// queue: true
// }).slideUp({
	// duration:1000,
	// queue: false
// })

///////////////////////////////////.animate
//$anim3.css("position", "relative").animate({
//	width: "50%",
//	height: "100px",
//	left: "100px"
//}, 4000, "swing", function(){
//	alert("complete");
//});
//
//$("body").animate({
//	"scrollTop": 500
//});

///////////////////.delay
//$anim3.delay(2000).fadeOut(1000);

//$anim3.delay(2000).queue(function(){
//  $(this).css("background", "red");
//}).fadeOut(1000);

//$anim3.delay(2000).queue(function(){
//  $(this).css("background", "red").dequeue();
//}).fadeOut(1000);

//$("h1").on("click", function(){
//  $anim3.css({"width": "100%", "height": "300px"});
//  $anim3.stop(true).animate({ "height": "100px" }, 1000).animate({ "width": "25%" }, 1000);
//});

//$("h1").on("click", function(){
//  $anim3.css({"width": "100%", "height": "300px"});
//  $anim3.stop(true, true).animate({ "height": "100px" }, 1000).animate({ "width": "25%" }, 1000);
//});

///////////////////.finish

//$("h1").on("click", function(){
//  $anim3.css({"width": "100%", "height": "300px"});
//  $anim3.finish().animate({ "height": "100px" }, 1000).animate({ "width": "25%" }, 1000);
//});



///////////////////////////////////
//////////////////////////////Ajax
///////////////////////////////////http://www.mocky.io/ //for testing
//$.ajax("http://www.mocky.io/v2/58c1969e110000a91663f040").done(
//    function(response){
//      alert(response);
//    }
//);


////JSON example
/*
{
  "key": "value",
  "key2": true,
  "someKey": {
    "someInnerKey": 123
  },
  "array": [1,2,3]
}
*/



////XML exmple
/*
<container>
  <key>value</key>
  <key2>true</key2>
  <someKey>
    <someInnerKey></someInnerKey>
  </someKey>
  <array>
    <value>1</value>
    <value>2</value>
    <value>3</value>
  </array>
</container>
*/

// Query parameters
//http://www.mocky.io/v2/58c1969e110000a91663f040?param=value1&param2=value2%test

// deleteSomeEntity/entityId
// deleteSomeEntity?entityId=sajkldjh13213213213
////////////////////////////////////////////////////////////////////////////
//console.log($.now());

//succes url
//"http://www.mocky.io/v2/58c1a2c01100000a1863f07a",

/*
$.ajax({
  url: "http://www.mocky.io/v2/58c1a2c01100000a1863f07a",
  async: true,
  beforeSend: function(jqXHR, settings){
    //jqXHR.someCustomDate = "text";
    //console.log(jqXHR);
    //console.log(settings);
  },
  cache: false,//browser do not caches data
  complete: function(jqXHR, status){
    //console.log(jqXHR, status);
  },
  data: {
    key1: "value1",
    key2: "value2"
  },
  method: "POST",
  dataType: "json",
  error: function(jqXHR, errorStatus, errorText){
    console.log(jqXHR, errorStatus, errorText);
  },
  global: true,                                    //default true
  headers: {
    //"My-sample-header": "test",
  },
  statusCode: {
    200: function(){
      alert("All ok");
    },
    404: function(){
      alert("Not found");
    }
  }
}).done(function(data, status, jqXHR){
  //console.log(data);
  //console.log(jqXHR);

});
//console.log($.now());
//$("h1").fadeOut("10000");
*/
///////////////////////////////////////////////
$(document).on("ajaxStart", function(){
  console.log("start");
}).on("ajaxStop", function(){
  console.log("stop");
}).on("ajaxSend", function(){
  console.log("send");
}).on("ajaxSuccess", function(){
  console.log("success");
});

$.ajax("http://www.mocky.io/v2/58c1a2c01100000a1863f07a");
$.ajax("http://www.mocky.io/v2/58c1a2c01100000a1863f07a");
$.ajax("http://www.mocky.io/v2/58c1a2c01100000a1863f07a");
































































