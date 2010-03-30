function MapScene() {
	var fpstext;
	var frame = 0;
	
	this.init = function() {
		new map().paint(0,0,1, {});
		
		fpstext = new text();
		fpstext.paint(canvas.width - 100, 12, 3, {
			text: 'Frame: -', 
			font: FONT_SMALL,
			color: '#0f0'
		} );		
		
		new spinner().paint(300, 300, 2, {});
	}
	
	this.stepframe = function() {
		frame++;
		
		fpstext.write('Frame: ' + frame);
	}
}