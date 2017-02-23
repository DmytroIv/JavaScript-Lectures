//$(window).on("resize", function(e) {
//  console.log(e, window.innerWidth);
//});
//
//$(window).on("scroll", function(e) {
//  console.log($(window).scrollTop());
//});
//
//$(document).ready(function(){}); //not recommended
//$(document).on("ready", function(){}); //not recommended
//$(function(){
//  $("h1").hide();
//});


//$(document).on("keydown", function(e){
//  console.log(e.keyCode);
//});
//
//$(":text:eq(0)").on("keyup", function(e){
//  console.log("input " + e.keyCode);
//});
//
//$("button").on("click", function(e){
//  e.preventDefault();
//  console.log(e.clientX, e.clientY);
//});
//
//$("img").on("contextmenu", function(e){
//  e.preventDefault();
//  console.log(e.clientX, e.clientY);
//});
//
//$("img, h1").on("dblclick", function (e) {
//  console.log(e.target);
//});
//
//
//$("button").on("mousedown", null, "its mousedown event", function(e){
//  console.log(e.data);
//}).on("mousemove", null, "its mousemove event", function(e){
//  console.log(e.data);
//}).on("mouseup", null, "its mouseup event", function(e){
//  console.log(e.data);
//}).on("click", false);
//

//$("input").on("focus", function(e){
//  console.log("focus", e.target);
//}).on("blur", function(e){
//  console.log("blur", e.target);
//});
//


//$("input").on("change", function (e){
//  console.log(e.target.value);
//}).on("select", function(e){
//  console.log(e.target.value.slice(e.target.selectionStart, e.target.selectionEnd));
//});


//$("form").on("submit", function(e){
//  e.preventDefault();
//  console.log("submit");
//});

////////////////////

//$("img, h1").on("click", function(e){
//  console.log("test " + this.tagName);
//}).eq(1).on("click", function(e){
//  console.log("test 2 " + this.tagName);
//});
//
//$("img, h1").on("click", function(e){
//  console.log("test " + this.tagName);
//  e.stopPropagation();
//}).eq(1).on("click", function(e){
//  console.log("test 2 " + this.tagName);
//});
//
//$("img, h1").on("click", function(e){
//  console.log("test " + this.tagName);
//  e.stopImmediatePropagation();
//}).eq(1).on("click", function(e){
//  console.log("test 2 " + this.tagName);
//});

////////////////

$("img").wrap("<div class='imageWrapper' />");
$("img").wrap("span.text");

var newElem = $("<div class='universalWrapper'>test</div>")
    .on("click", function(){ console.log(this.className); });

var $test = $(".jqueryTestContainer");

//$("span", $test).wrap(newElem);
//$("span, br", $test).wrapAll(newElem);

//$("h5", $test).wrapInner(newElem);
//$("ul", $test).wrapInner(newElem);

//$("ul", $test).unwrap();
//$("span", $test).unwrap("h5");

//$("ul", $test).append("<li>test</li>");
//$("ul", $test).append(newElem);
//$("ul", $test).append(["<li>test1</li>", newElem]);
//$("ul, span", $test).append(["<li>test1</li>", newElem]);
//var firstLi = $("ul li:first", $test);
//$("ul", $test).append(firstLi);

//$("ul", $test).prepend($("ul li:last", $test));

//$("ul li:last", $test).prependTo($("ul", $test));
//$("ul li:first", $test).appendTo($("ul", $test));

//$("h5", $test).after("<div>after</div>");
//$("h5", $test).before("<div>before</div>");
//$("h5", $test).before($("ul li:first", $test));

//$("ul li:last", $test).insertAfter($("ul", $test));
//$("ul li:first", $test).insertBefore($("ul", $test));

/////////////////////////////////////

//$("span", $test).html(function(index, html){
//  return html + index;
//});

//$("h5", $test).html("<em>new text</em>");
//$test.html("");

//console.log($test.text());
//$test.text("test text");
//$test.html("test text");
//$test.text("<em>test text</em>");//tags like text

//////////////////

//$("span", $test).remove();
//$("span", $test).remove(".one");
//$test.remove();

//////////////////

//var tempTest = $test.detach();
//
//$("h1").on("click", function(){
//  $(this).after(tempTest);
//});

/////////////////

//$("h5", $test).empty();

//////////////////

//$("h5", $test).replaceWith($("ul", $test));

//$("ul", $test).on("click", function() {alert("asd")});
//$("h5", $test).replaceWith($("ul", $test).clone());

/////////////////

//$("ul", $test).clone().replaceAll($("h5", $test));

///////////////////////////////////
//
//$("li, span", $test).each(function(index, element){
//  console.log(index, element);
//});
//
//console.log("index", $("li").index());
//console.log("index", $("li").eq(1).index());
//console.log("index", $("li.third").index());
//console.log("index", $("li.first").index());
//console.log("index", $("li.second").index());

//console.log("index", $("h5").index());
//console.log("index", $("nav").index()); //-1





