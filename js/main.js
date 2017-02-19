// functional
//
// function Animal(name, type, weight, maxSpeed){
//     var speed = maxSpeed;
//
//     this.getName = function(){ return name; };
//     this.getType = function(){ return type; };
//     this.getWeight = function(){ return weight + "kg"; };
//     this.setWeight = function(newWeight){ weight = newWeight;};
//     this.run = function(newSpeed){
//         if(newSpeed !== undefined){
//             if(newSpeed < 0){
//                 throw("Speed below 0!");
//             }else if(newSpeed > maxSpeed){
//                 throw("Speed above max speed!");
//             }else{
//                 speed = newSpeed;
//             }
//         }else{
//             return speed + "m/s";
//         }
//     };
//     this.coverDistance = function(distance){
//         return (distance / parseFloat(this.run()) + "sec");
//     };
// }

//prototype
//
function Animal(name, type, weight, maxSpeed) {
  this._name = name;
  this._type = type;
  this._weight = weight;
  this._maxSpeed = maxSpeed;
  this._speed = maxSpeed;
}

Animal.prototype = {
  getName: function () {
    return this._name;
  },
  getType: function () {
    return this._type;
  },
  getWeight: function () {
    return this._weight + "kg";
  },
  setWeight: function (weight) {
    return this._weight = weight;
  },
  run: function (speed) {
    if (speed !== undefined) {
      if (speed < 0) {
        throw("Speed below 0!");
      } else if (speed > this._maxSpeed) {
        throw("Speed above max run speed!");
      } else {
        this._speed = speed;
      }
    } else {
      return this._speed + "m/s";
    }
  },
  coverDistance: function (distance) {
    return distance / parseFloat(this.run()) + "sec";
  }
};

/***//*Home work*/
// Bird prototype
//
function Bird(name, type, weight, maxSpeed, canFly, maxFlySpeed) {
  Animal.apply(this, arguments);
  this._canFly = canFly;
  this._maxFlySpeed = maxFlySpeed;
  this._flySpeed = this._canFly ? this._maxFlySpeed : 0;
}
Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.fly = function (newSpeed) {
  if (newSpeed !== undefined) {
    if (!this._canFly) {
      throw ("this animal can't fly");
    } else if (newSpeed < 0) {
      throw ("Speed below 0!");
    } else if (newSpeed > this._maxFlySpeed) {
      throw("Speed above max fly speed!");
    } else {
      return this._flySpeed = newSpeed;
    }
  } else {
    return this._flySpeed + "m/s";
  }
};
Bird.prototype.coverDistance = function (distance) {
  return (this.run() > this.fly() ? distance / parseFloat(this.run()) : distance / parseFloat(this.fly())) + "sec";
};

// Zoo prototype
function Zoo(cagesAmount, birdCagesAmount) {
  this._cagesAmount = cagesAmount;
  this._birdCagesAmount = birdCagesAmount;
  this._zoo = [];
  this._zooTime = new Date();
}
Zoo.prototype = {
  addAnimal: function (animal) {
    if (Bird.prototype.isPrototypeOf(animal)) {
      if (this._birdCagesAmount) {
        this._zoo.push(animal);
        return this._birdCagesAmount--;
      } else {
        throw "not enough bird cages !"
      }
    }
    else {
      if (this._cagesAmount) {
        this._zoo.push(animal);
        return this._cagesAmount--;
      } else {
        throw "not enough animal cages !"
      }
    }
  },
  feedAnimal: function (animalName) {
    for (var i = 0; i < this._zoo.length; i++) {
      if (this._zoo[i]["_name"] === animalName) {
        this._zoo[i].feedingTime = new Date();
      }
    }
  },
  getHungryAnimals: function () {
    var currentZooTime = this._zooTime.getHours() + (Math.round(this._zooTime.getMinutes() * 100 / 60) / 100);
    var names = [];
    this._zoo.forEach(function (item) {
      if (item.feedingTime) {
        var itemFeddingTime = item.feedingTime.getHours() + (Math.round(item.feedingTime.getMinutes() * 100 / 60) / 100);
        if (Math.abs(itemFeddingTime - currentZooTime) > 4) {
          names.push(item["_name"]);
        }
      } else {
        names.push(item["_name"]);
      }
    });
    return names;
  },
  setClockTime: function (hour, minute) {
    this._zooTime.setHours(hour, minute);
  }
};


// Bird functional
// function Bird(name, type, weight, maxSpeed, canFly, maxFlySpeed) {
//     Animal.apply(this, arguments);
//     var canFly = canFly;
//     var maxFlySpeed = maxFlySpeed;
//     var flySpeed = canFly ? maxFlySpeed : 0;
//     this.fly = function (newSpeed){
//         if(newSpeed !== undefined){
//             if(!canFly){
//                 throw ("this animal can't fly");
//             }else if(newSpeed < 0) {
//                 throw ("Speed below 0!");
//             }else if(newSpeed > maxFlySpeed) {
//                 throw("Speed above max fly speed!");
//             }else {
//                 return flySpeed = newSpeed;
//             }
//         }else{
//             return flySpeed + "m/s";
//         }
//     };
//     this.coverDistance = function (distance) {
//         return (this.run() > this.fly() ? distance / parseFloat(this.run()): distance / parseFloat(this.fly())) + "sec";
//     };
// }
// Zoo functional
// function Zoo(cagesAmount, birdCagesAmount) {
//     var cagesAmount = cagesAmount;
//     var birdCagesAmount = birdCagesAmount;
//     var zoo = [];
//     var zooTime = new Date();
//
//     this.test = function () {
//       return [zooTime, zoo];
//     };
//
//     this.addAnimal = function (animal) {
//         if (Bird.prototype.isPrototypeOf(animal)) {
//             if (birdCagesAmount) {
//                 zoo.push(animal);
//                 return birdCagesAmount--;
//             } else {
//                 throw "not enough bird cages !"
//             }
//         }
//         else {
//             if (cagesAmount) {
//                 zoo.push(animal);
//                 return cagesAmount--;
//             } else {
//                 throw "not enough animal cages !"
//             }
//         }
//     };
//     this.feedAnimal = function (animalName) {
//         for (var i = 0; i < zoo.length; i++) {
//             if (zoo[i].getName() === animalName) {
//                 zoo[i].feedingTime = new Date();
//             }
//         }
//     };
//     this.getHungryAnimals = function () {
//         var currentZooTime = zooTime.getHours() + (Math.round(zooTime.getMinutes() * 100 / 60) / 100);
//         var names = [];
//         zoo.forEach(function (item) {
//             if (item.feedingTime) {
//                 var itemFeddingTime = item.feedingTime.getHours() + (Math.round(item.feedingTime.getMinutes() * 100 / 60) / 100);
//                 if (Math.abs(itemFeddingTime - currentZooTime) > 4) {
//                     names.push(item.getName());
//                 }
//             } else {
//                 names.push(item.getName());
//             }
//         });
//         return names;
//     };
//     this.setClockTime = function (hour, minute) {
//        zooTime.setHours(hour, minute);
//     }
// }


var bird1 = new Bird("coco", "parrot", 10, 20, true, 30);
var bird2 = new Bird("paroo", "parrot", 10, 20, true, 30);
var bird3 = new Bird("chick", "chicken", 10, 20, true, 20);
var bird4 = new Bird("peng", "penguin", 10, 20, false, 0);
var chicken = new Bird("peng", "chicken", 10, 20, true, 30);

var animal1 = new Animal("tom", "dog", 10, 15);
var animal2 = new Animal("jery", "mouse", 1, 15);
var animal3 = new Animal("leopold", "cat", 10, 1);

//
// console.log(chicken.getName());
// console.log(chicken.getType());
// chicken.setWeight(15);
// console.log(chicken.getWeight(15));
// chicken.run(10);
// console.log("run speed", chicken.run());
//
// chicken.fly(20);
// console.log("fly speed", chicken.fly());
//
// console.log("time", chicken.coverDistance(500));
// //
//
// var firstZoo = new Zoo(2, 3);
// firstZoo.addAnimal(bird1);
// firstZoo.addAnimal(bird2);
// firstZoo.addAnimal(bird3);
// //firstZoo.addAnimal(bird4);
// firstZoo.addAnimal(animal1);
// firstZoo.addAnimal(animal2);
// //firstZoo.addAnimal(animal3);
// firstZoo.feedAnimal("tom");
// firstZoo.feedAnimal("coco");
//
// console.log(firstZoo);
//
// firstZoo.setClockTime(20, 0);
//
// firstZoo.setClockTime(20, 0);
// console.log(firstZoo.getHungryAnimals());
//////////////////////////////////////////////

/*jQuery*/
$(function () {
  "use strict";

  $("button:submit").on("click", validateAndSubmit);
  //$(":text").on("change", );


  function validateAndSubmit() {
    var submitObject = {};

    var inputText = $(":text");

    var inputRadio = $(":radio");

    var checkbox = $(":checkbox");

    (function validateNameEmailPhone() {
      var emailRegExp = /^[^<>()[\]\\.,;:\s@\"]{1,}\@{1}[a-zA-z\d]{4}\.{1}[a-z]{2,3}$/,
        phoneRegExp = /^\+?(\d{1,2})[(]{1}(\d{3})[)]{1}(\d{3}[-]?\d{2}[-]?\d{2})$/;

      if (!inputText.eq(0).val()) {
        delete submitObject.name;
        inputText.eq(0).parents("div").addClass("invalid");
        alert("Write your name!");
      } else {
        submitObject.name = inputText.eq(0).val();
        inputText.eq(0).parents("div").removeClass("invalid");
      }

      if (!emailRegExp.test(inputText.eq(1).val())) {
        delete submitObject.email;
        inputText.eq(1).parents("div").addClass("invalid");
        alert("Write your email like this example: xxxx@xxxx.xx !");
      } else {
        inputText.eq(1).parents("div").removeClass("invalid");
        submitObject.email = inputText.eq(1).val();
      }

      if (!phoneRegExp.test(inputText.eq(2).val())) {
        delete submitObject.phone;
        inputText.eq(2).parents("div").addClass("invalid");
        alert("Write your phone like this example: +xx(xxx)xxx-xx-xx !");
      } else {
        inputText.eq(2).parents("div").removeClass("invalid");
        submitObject.phone = inputText.eq(2).val();
      }

    })();

    (function isRadio() {
      for (var i = 0; i < inputRadio.length; i++) {
        if (inputRadio.eq(i).prop("checked")) {
          inputRadio.parents("div").removeClass("invalid");
          return submitObject.type = inputRadio.eq(i).prop("value");
        }
      }
        inputRadio.parents("div").addClass("invalid");
        alert("Are you? Make a choice between: student, employee, head");
    })();

    (function isConfirm() {
      if (checkbox.prop("checked")) {
        submitObject.checkbox = true;
        checkbox.parents("div").removeClass("invalid");
      } else {
        submitObject.checkbox = false;
        checkbox.parents("div").addClass("invalid");
        alert("Do you confirm our rules?");
      }
    })();

    if (submitObject.name && submitObject.email && submitObject.phone && submitObject.type && submitObject.checkbox){
      console.log(submitObject);
    }
  }

});
