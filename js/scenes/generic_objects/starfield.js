function starfield() {
	
	var key_up 		= false;
	var key_down 	= false;
	var key_right 	= false;
	var key_left 	= false;

	this.stars = 512;
	this.usekeys = false;
	this.speed = 0.5;
	
	var star=new Array(this.stars);
	var w = canvas.width + (canvas.width/3);
	var h = canvas.height + (canvas.height/3);
	
	this.init = function() {
		for(var i=0; i <  this.stars ;i++)
		{
			star[i]=new Array(2);
			star[i][0]=Math.random()*w;
			star[i][1]=Math.random()*h;
		}
	}

	this.draw = function() {
	
		if (this.usekeys) 
		{
			if (key_up) {
				this.posy = this.posy - this.speed;
			}else if (key_down) {
				this.posy = this.posy + this.speed;
			}
			
			if (key_right) {
				this.posx = this.posx + this.speed;
			}else if (key_left) {
				this.posx = this.posx - this.speed;
			}
		}
					
	    context2d.save();
		context2d.fillStyle = '#fff';

		for(s in star) {
			context2d.fillRect(star[s][0] + this.posx,star[s][1] + this.posy, 1,1 );
		}
		
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
starfield.prototype = new sceneObject(); 		