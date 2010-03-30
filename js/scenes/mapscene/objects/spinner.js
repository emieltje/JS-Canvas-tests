function spinner() {

	this.width = 100;
	var angle = 0;
	
	var px = px = 0;
	
	var endRadius = 2;
	this.rotSpeed = 1.5;
		
	this.init = function() {
	}

	this.getPixel = function(width) {
		py = width * Math.sin(Math.PI * (angle+90) / 180);
		px = width * Math.cos(Math.PI * (angle+90) / 180);

		var imgd = context2d.getImageData((this.posx + px), (this.posy + py), 1, 1);
		var imxpxl = imgd.data;
	
		return imxpxl;
	}
	
	this.draw = function() {

		angle += this.rotSpeed;
	
		if (angle == 360)
		{
			angle = 0;
		}
		
		var pxa = this.getPixel( (this.width/2) + (endRadius/2) );
		var pxb = this.getPixel(-(this.width/2) - (endRadius/2));
		if (pxa[0] == '255' || pxb[0] == '255') {
			// Collision!!!
			angle -= 20;
			
			maincanvas.style.backgroundColor = '#f00';
			
		}else{
			maincanvas.style.backgroundColor = '#222';
			context2d.save();
	
			context2d.translate(this.posx, this.posy)
			context2d.rotate(Math.PI * (angle+90) / 180);
			
			context2d.beginPath();  
			context2d.lineTo(-(this.width/2),0);  
			context2d.lineTo(+(this.width/2),0);  
			context2d.closePath();  
			context2d.stroke();  
	
			drawCircle(-(this.width/2), 0, endRadius);		
			context2d.arc(0, 0, 10, 0, Math.PI*2, true);
			drawCircle(+(this.width/2), 0, endRadius);	
			context2d.restore(); 
		}
		
		drawCircle(this.posx, this.posy, (endRadius*2));
		
		
	}
}
spinner.prototype = new sceneObject(); 		