function enemy_spaceShip() {
	
}

(function() {
	
	//var e = enemy_spaceShip.prototype;
	enemy_spaceShip.prototype = new spaceShip();

	// enemy_spaceShip.prototype.keyDown = function(keyCode) {
	// 	// No control
	// }
	// 
	// enemy_spaceShip.prototype.keyUp = function(keyCode) {
	// 	// No control
	// }
	enemy_spaceShip.prototype.draw = function() {
		
		// calculate the angle between this ship and the following ship
		this.angle = 270 - (Math.atan2(this.posx - this.follow.posx, this.posy - this.follow.posy) * 180 / Math.PI);
	
		// Set the impulse
		this.impulse = 2;
		
		this.posy += Math.sin(Math.PI * this.angle / 180) * this.impulse;
		this.posx += Math.cos(Math.PI * this.angle / 180) * this.impulse;

		if (this.angle >= 0) {
			this.rot = Math.PI * (this.angle+90) / 180;
		} else {
			this.rot = Math.PI * (360+ (this.angle+90)) / 180;
		}
		this.dbg.write('Angle: ' + this.angle);
		
		this.engineFire();
		
		this.drawShip();
	}
	
	enemy_spaceShip.prototype.init = function() {
	
		this.imgSpaceship.src = 'images/spaceship2.png';
	}
	
	enemy_spaceShip.prototype.speed = {
		min 			: -1,
		max 			: 2,
		rotate 			: 2,
		accelleration 	: 0.1,
		drag : {
			pos : 0.07,
			min : 0.05
		}
	};

//	enemy_spaceShip.prototype

})();