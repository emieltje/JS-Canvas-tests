function drawArrow(x, y)
{
	var context = context2d;
	// Set the style properties.
	context.save();
	context.strokeStyle = '#f00';
	context.lineWidth   = 1;
	
	context.beginPath();
	// Start from the top-left point.
	context.moveTo(x, 10+y); // give the (x,y) coordinates
	context.lineTo(10+x, 20+y);
	context.lineTo(x, 30+y);
	context.lineTo(x, 10+y);
	
	// Done! Now fill the shape, and draw the stroke.
	// Note: your shape will not be visible until you call any of the two methods.
	context.stroke();
	context.closePath();
	
	context.restore();
}

function drawCircle(x, y, radius) {
	context2d.beginPath();  
	context2d.arc(x, y, radius, 0, Math.PI*2, true);
	context2d.stroke();  
}