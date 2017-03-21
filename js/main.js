
//////////////////////////////////////////////////////////////////// ARRAY
// var array = [1,2,3,4,5];

// console.log(_.chunk(array, 2));

// console.log(_.difference(array, [1, 3], [4])); 
// console.log(_.difference(array, [1, 3]));

// var array = [1.35, 2.45, 3.5, 4.7, 5.9];

// console.log(_.differenceBy(array, [1, 3], [4], Math.floor));

// console.log(_.differenceBy([
	// {"x":1, "y":1, },
	// {"x":2, "y":2, }
// ], [
	// {"x":1, "y":2, }
// ], "x"));

// console.log(_.differenceWith([
	// {"x":1, "y":1, },
	// {"x":2, "y":2, },
// ], [
	// {"x":1, "y":1, }
// ], _.isEqual));

var users = [
	{"user": "barney", active: false},
	{"user": "fred", active: false},
	{"user": "pabbles", active: true}
];

// console.log(_.findIndex(users, function(object){
	// return object.user === "barney";
// }));

// console.log(_.findIndex(users, {'user': "barney", "active":false}));

// console.log(_.findIndex(users, ["active", false]));

// console.log(_.findIndex(users, "active"));

// var object = {
	// key1 : {name: "test"},
	// key2 : {name: "reest"}
// }

// console.log(_.find(users, "active"));
// console.log(_.find(object, {'name': 'reest'}));

// console.log(_.findLastIndex(users, {'active': false}));

// console.log(_.head(users));
// console.log(_.first(users));
// console.log(_.last(users));

// console.log(_.intersection(users, [_.last(users)]));
// console.log(_.intersectionBy(users, [_.last(users)], 'user'));

//////////////////////////////////////////////////////////////////// _.pull
// console.log(_.pull(users, _.last(users), users[0]));
// console.log(users);

// console.log(_.pullAll(users, [_.last(users), users[0]]));
// console.log(users);

// console.log(_.pullAllBy(users, [{"some":"reest", "active":true}], 'active'));

// console.log(_.pullAllWith(users, [{"some":"reest", "active":true}], function(obj1, obj2){
	// return obj1.active === obj2.active;
// }));

// console.log(_.pullAt(users, [0, 2])); 
// console.log(users); 

//////////////////////////////////////////////////////////////////// _.remove
// console.log(_.remove(users, {"active": false}));
// console.log(users);

//////////////////////////////////////////////////////////////////// _.uniq
// console.log(_.uniq([1,1,2,3]));
// console.log(_.uniqBy(users, 'active'));
// console.log(_.uniqWith(users, function(object){ 
	// return object.active;
// }));

//////////////////////////////////////////////////////////////////// _.union
var array1 = [
	{"user": "bob", active: false},
	{"user": "pabbles", active: true}
];
// console.log(_.union([1, 2], [2, 3], [3, 6]));
// console.log(_.union(users, array1));
// console.log(_.unionBy(users, array1, 'user'));
// console.log(_.unionWith(users, array1, _.isEqual));

//////////////////////////////////////////////////////////////////// _.without
// console.log(_.without(users, _.last(users)));
// console.log(users);

//////////////////////////////////////////////////////////////////// FUNCTION
//////////////////////////////////////////////////////////////////// _.after
// function test(){ console.log("test"); }

// var newTest = _.after(3, test);


//////////////////////////////////////////////////////////////////// _.bedore
// var newTest = _.before(3, test);

// $("h1").on("click", newTest);

//////////////////////////////////////////////////////////////////// _.bind
// function test(arg1, arg2){ console.log(arg1 + arg2); }

// var newTest = _.bind(test, null, "test 1");
// var newTest = _.bind(test, null, _, "test 1");

// newTest("arg 2 ");

//////////////////////////////////////////////////////////////////// _.bindKey
// var obj = {};
// var newBind = _.bindKey(obj, 'someMethod', 1, 5);

// obj.someMethod = function(arg1, arg2) { console.log(arg1, arg2); };

// newBind();

//////////////////////////////////////////////////////////////////// _.debounce
// var debounce = _.debounce(function(){
	// console.log("you stop clicking, at last");
// }, 1000)
// $("h1").on("click", debounce);

// var debounce = _.debounce(function(){
	// console.log("you stop clicking, at last");
// }, 1000, {
	// leading: true
	// });
// $("h1").on("click", debounce);

// var debounce = _.debounce(function(){
	// console.log("you stop clicking, at last");
// }, 1000, {
	// leading: true,
	// maxWait: 5000,
	// trailing: false
	// });
// $("h1").on("click", debounce);

//////////////////////////////////////////////////////////////////// _.throttle
function onScroll(e){
	console.log(window.scrollY);
}

// var newOnScroll = _.throttle(onScroll, 500);

// $(window).on("scroll", onScroll);
// $(window).on("scroll", newOnScroll);

// $('h1').on('click', newOnScroll);

var newOnScroll = _.throttle(onScroll, 5000, {
	leading: true,
	trailing: false
});

// $('h1').on('click', newOnScroll);

//////////////////////////////////////////////////////////////////// OBJECT
//////////////////////////////////////////////////////////////////// _.clone
var object = {
	key1: 1,
	key2: 2,
	innerObject: {
		key1: 25,
		key2: 35,
	}
}

// console.log(_.clone(object));
// console.log(_.clone(object) === object);
// console.log(_.clone(object).innerObject === object.innerObject);

// console.log(_.cloneDeep(object).innerObject === object.innerObject);

//////////////////////////////////////////////////////////////////// _.assign
// console.log(_.assign({}, object));
// console.log(_.assign({}, object, {key1: 25}));

// object.__proto__ = { proto1: 40};
// console.log(_.assignIn({}, object));

//////////////////////////////////////////////////////////////////// _.defaults
// $("h1").customPlugin({});

// console.log(_.defaults(object, {key1: 30, key25: 50}));

// console.log(_.defaultsDeep(object, {key1: 30, key25: 50, innerObject: {
	// key1: "rest",
	// key3: "test"
// }}));


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// function test(a,b,c){
	// console.log(a+b+c);
// }

// var newTest = _.curry(test);

// newTest(1)(2)(3);
// newTest(1,2)(3);
// newTest(1,2,3);

// var newTest = newTest(1,2);

// $("h1").on("click", function(){
	// newTest(3);
// });





























