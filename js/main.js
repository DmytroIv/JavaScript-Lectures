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
function Animal(name, type, weight, maxSpeed){
	this._name = name;
    this._type = type;
    this._weight = weight;
    this._maxSpeed = maxSpeed;
    this._speed = maxSpeed;
}

Animal.prototype = {
    getName : function() { return this._name; },
    getType : function() { return this._type; },
    getWeight : function() { return this._weight + "kg"; },
    setWeight : function(weight) { return this._weight = weight; },
    run : function (speed) {
        if(speed !== undefined){
            if(speed < 0){
                throw("Speed below 0!");
            }else if(speed > this._maxSpeed){
                throw("Speed above max run speed!");
            }else{
                this._speed = speed;
            }
        }else{
            return this._speed + "m/s";
        }
    },
    coverDistance : function(distance){
        return distance / parseFloat(this.run()) + "sec";
    }
};

//***//Home work

// Bird prototype
//
function Bird(name, type, weight, maxSpeed, canFly, maxFlySpeed) {
    Animal.apply(this, arguments);
    this._canFly = canFly;
    this._maxFlySpeed = maxFlySpeed;
    this._flySpeed = this._canFly ? this._maxFlySpeed : 0;
}
Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.fly = function (newSpeed){
    if(newSpeed !== undefined){
        if(!this._canFly){
            throw ("this animal can't fly");
        }else if(newSpeed < 0) {
            throw ("Speed below 0!");
        }else if(newSpeed > this._maxFlySpeed) {
            throw("Speed above max fly speed!");
        }else {
            return this._flySpeed = newSpeed;
        }
    }else{
        return this._flySpeed + "m/s";
    }
};
Bird.prototype.coverDistance = function(distance){
    return (this.run() > this.fly() ? distance / parseFloat(this.run()): distance / parseFloat(this.fly())) + "sec";
};
//***//

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

var chicken = new Bird("DOG", "chicken", 10, 20, true, 30);
console.log(chicken.coverDistance);
console.log(chicken.getName());
console.log(chicken.getType());
chicken.setWeight(15);
console.log(chicken.getWeight(15));
chicken.run(10);
console.log("run speed", chicken.run());

chicken.fly(20);
console.log("fly speed", chicken.fly());

console.log("time", chicken.coverDistance(500));
//


// Zoo prototype
function Zoo(cagesAmount, birdCagesAmount) {
    this._cagesAmount = cagesAmount;
    this._birdCagesAmount = birdCagesAmount;
}
Zoo.prototype.addAnimal = function () {

};
// Zoo functional




























