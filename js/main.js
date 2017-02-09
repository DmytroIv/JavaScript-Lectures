function Animal(name, type, weight, maxSpeed){
	var name = name, 
		type = type,
		weight = weight,
		maxSpeed = maxSpeed,
		oldSpeed = maxSpeed;
		
		this.getName = function(){ return name; }; 
		this.getType = function(){ return type; };
		this.getWeight = function(){ return weight + "kg"; };
		this.setWeight = function(newWeight){ weight = newWeight;};
		this.run = function(speed){
			if(speed === undefined){ 
				return oldSpeed; 
			}else if(speed > 0 && speed < maxSpeed){
				return oldSpeed = speed; 
			}
			else{
				return "wrong speed";
			}
		};
		this.coverDistance = function(distance){ return (distance / parseFloat(this.run()) + "sec"); };
}

//
// function Animal(name, type, weight, maxSpeed){
	// this._name = name; 
		// this._type = type;
		// this._weight = weight;
		// this._maxSpeed = maxSpeed;
		// this._speed = maxSpeed;		
// }

// Animal.prototype.getName = function(){ return this._name; };
// Animal.prototype.getType = function(){ return this._type; };
// Animal.prototype.getWeight = function(){ return this._weight +"kg"; };
// Animal.prototype.setWeight = function(newWeight){ return this._weight = newWeight; };
// Animal.prototype.run = function(speed){
			// if(speed === undefined){ 
				// return this._speed; 
			// }else if(speed > 0 && speed < this._maxSpeed){
				// return this._speed = speed; 
			// }
			// else{
				// return this._speed;
			// }
		// };	
// Animal.prototype.coverDistance = function(distance){ 
// return distance / parseFloat(this.run()) + "sec"; };
//


function Bird (name, type, weight, maxSpeed, canFly, maxFlySpeed){
	Animal.apply(this, arguments);
	var canFly = canFly;
	var maxFlySpeed = maxFlySpeed;
	var oldRun = this.run;
	var flySpeed = 0;
	this.fly = function(flySpeed){
		if(canFly){
			if(flySpeed === undefined){ 
				return flySpeed ; 
			}else if(flySpeed > 0 && flySpeed < maxFlySpeed){
				return flySpeed = flySpeed; 
			}
			else{
				throw "wrong speed";
			}
		}else{ return oldRun(); }
		
	}

	this.coverDistance = function(distance){ 
	if(this.oldSpeed > flySpeed)
		return (distance / parseFloat(this.run()) + "sec"); 
	};
}

var chicken = new Bird("DOG", "dog", 10, 20, true, 30);
chicken.setWeight(15);
chicken.run(5);
chicken.fly(25);
console.log("run speed", chicken.run())

chicken.fly(10);
console.log("fly speed", chicken.fly())

console.log("time", chicken.coverDistance(20));








































