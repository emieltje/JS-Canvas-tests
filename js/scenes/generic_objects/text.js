function text() {
	this.font = FONT_NORMAL;
	this.text = '';
	this.color = '#fff';
	
	this.draw = function() {
		writeText(this.text, this.posx, this.posy, this.font, this.color);
	}
	
	this.write = function(text) {
		this.text = text;
	}
}
text.prototype = new sceneObject();