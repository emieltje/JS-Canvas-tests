function sceneObject() {
	var params;
	this.id;
	
	this.posx = 10;
	this.posy = 10;
	this.posz = 1;		

	this.frame = 0;

	// Frame tick
	this.stepframe = function() {
	
		if (this.draw)
			this.draw();
			
		this.frame++;
	}
	
	this.paint = function(x, y, z, c) {
	
		// Generate a unqiue id for the object
		this.id = getUniqueId();
		
		// Register position
		this.posx = x;
		this.posy = y;
		this.posz = z;
		
		// Apply the params
		if (typeof c == 'object') {			
			for(var p in c){
	        	this[p] = c[p];
    	    }
		}
		
		// Add the object to the screen
		sceneObjectsMngr.addObject(this);
		
		if (this.init) {
			this.init();
		}
	}
	
	this.remove = function() {
		// remove this object from the scene
		sceneObjectsMngr.removeObject(this.id);
	}
}