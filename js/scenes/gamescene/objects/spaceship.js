function spaceShip() {
	var key_up 		= false;
	var key_down 	= false;
	var key_right 	= false;
	var key_left 	= false;
	
	this.imgSpaceship = new Image();

	// Current speed
	this.impulse = 0;
	// current Angle	
	this.angle = 90;
	
	// Max speeds
	this.speed = {
		min 			: -3,
		max 			: 4,
		rotate 			: 5,
		accelleration 	: 0.2,
		drag : {
			pos : 0.07,
			min : 0.05
		}
	};
	
	this.image = 'images/spaceship.gif';
	
	//Size of the spaceship
	this.scale = 1;
	this.rot = 0;
	
	this.init = function() {
		this.imgSpaceship.src = this.image;
	}
	
	this.movement = function() {
			if (key_right)
			{	
				this.angle += this.speed.rotate;
			}else if (key_left) {
				this.angle -= this.speed.rotate;
			}

			if (this.angle > 360) 
				this.angle = 0;

			if (key_up)
			{
				this.impulse += this.speed.accelleration;
			}else if (key_down)
			{
				this.impulse -= this.speed.accelleration;
			}else {
				// Let the ship stop if no key is pressed
				if (this.impulse < 0) {
					this.impulse += this.speed.drag.min;
				}

				if (this.impulse > 0) {
					this.impulse -= this.speed.drag.pos;
				}
			}

			if (this.impulse < this.speed.min) {
				this.impulse = this.speed.min;
			}	

			if (this.impulse > this.speed.max) {
				this.impulse = this.speed.max;
			}	

			this.posy += Math.sin(Math.PI * this.angle / 180) * this.impulse;
			this.posx += Math.cos(Math.PI * this.angle / 180) * this.impulse;

			if (this.angle >= 0) {
				this.rot = Math.PI * (this.angle+90) / 180;
	        } else {
				this.rot = Math.PI * (360+ (this.angle+90)) / 180;
	        }
	}
	
	this.draw = function() 
	{
		// Calculate movement!
		this.movement();
		// Show engine fire
		this.engineFire();
		// Draw the ship to the scene
		this.drawShip();
	}
	
	this.engineFire = function() {
		// Engine fire!
		if (key_up && this.frame % 2 == 0) {
			new explosion().paint(this.posx, this.posy, 1, { 
				height: 45 * this.scale,
				width : 45 * this.scale,
				speed : 1
			});
		}
	}
	
	this.drawShip = function() {
		// Draw the spaceship
		context2d.save();
		context2d.translate(this.posx, this.posy);
		context2d.scale(this.scale,this.scale);
		context2d.rotate(this.rot);
    	context2d.drawImage(this.imgSpaceship, -30, -30);
    	context2d.restore();
	}
	
	this.keyDown = function(keycode) {
		switch(keycode) {
			case KEY_UP : key_up = true; break;
			case KEY_DOWN : key_down = true; break;				
			case KEY_RIGHT : key_right = true; break;
			case KEY_LEFT : key_left = true; break;
		}
	}
	
	this.keyUp = function(keycode) {
		switch(keycode) {
			case KEY_UP : key_up = false; break;
			case KEY_DOWN : key_down = false; break;				
			case KEY_RIGHT : key_right = false; break;
			case KEY_LEFT : key_left = false; break;
		}
	}

}
spaceShip.prototype = new sceneObject();