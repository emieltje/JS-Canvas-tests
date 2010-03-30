function map() {

	// public
	this.scrollspeed = 4;
	this.tilesize = 30;
	
	this.map = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],	
		[1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
		[1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],	
		[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	];

	
	var key_up 		= false;
	var key_down 	= false;
	var key_right 	= false;
	var key_left 	= false;

	this.mapBuffer = null;
	this.mapBufferctx = null;
	
	this.init = function() {
		// Setup the map
		this.mapBuffer = document.createElement('canvas');
		this.mapBuffer.width = (this.map[0].length * this.tilesize);
		this.mapBuffer.height = (this.map.length * this.tilesize);
		this.mapBufferctx = this.mapBuffer.getContext('2d');
		
		this.renderMap();
	}

	this.renderMap = function() {
		var px = py = 0;
		for (var x = 0; x != this.map.length; x++)
		{
			for (var y = 0; y != this.map[x].length; y++)
			{
				if (this.map[x][y] == 1)
					this.mapBufferctx.fillStyle = '#f00';
				else
					this.mapBufferctx.fillStyle = '#00f';
				
				this.mapBufferctx.save();
				this.mapBufferctx.fillRect( py * this.tilesize, 
									px * this.tilesize, 
									this.tilesize, this.tilesize );
				this.mapBufferctx.restore();									
				py++;
			}
			py = 0;
			px++;		
		}	
	}	
	
	this.draw = function() {
		// inverted map controls
		if (key_right)
		{	
			this.posx--;
		}else if (key_left) {
			this.posx++;
		}
		
		if (key_up)
		{
			this.posy++;
		}else if (key_down)
		{
			this.posy--;
		}
		
		context2d.drawImage(this.mapBuffer, this.posx * this.scrollspeed, this.posy * this.scrollspeed);		
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
map.prototype = new sceneObject(); 		