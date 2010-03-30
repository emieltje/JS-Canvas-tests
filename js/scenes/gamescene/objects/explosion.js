function explosion() {
	var img = new Image();

	// Animate settings
	var aniStep = 0;
	var max_aniSteps = 16;
		
	this.width = 128;
	this.height = 128;
	
	this.speed = 2;
	
	this.init = function() {
		img.src = 'images/explosion.png';
	}
	
	this.draw = function() {
    	context2d.drawImage(img, (aniStep*128), 0, 128, 128, this.posx - (this.width/2), this.posy - (this.height/2), this.width, this.height);
		
		if ( this.frame % this.speed == 0 ) {
			aniStep++;
		}
    	
    	if (aniStep == max_aniSteps)
			this.remove();
	}
}
explosion.prototype = new sceneObject();