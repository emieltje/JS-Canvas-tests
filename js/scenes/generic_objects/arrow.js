function arrow() {
	this.draw = function() {
		drawArrow(this.posx, this.posy);
	}
}
arrow.prototype = new sceneObject(); 		