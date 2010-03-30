function MenuScene() {
	var pointerarrow;
	var index = 1;
	
	var choices = 2;
	
	this.init = function() {
		var textx = (canvas.width/3);
	
		// Create background starfield
		new starfield().paint(0,0, 1, { 
			stars : 1024,
			usekeys : false
		});
		
				
		new text().paint(textx, 100, 1, {text: 'SpaceJS', font: FONT_BIG} );
		new text().paint(textx, 130, 1, {text: 'Map', font: FONT_BIG} );		
		
		pointerarrow = new arrow();
		pointerarrow.paint(textx - 20, 72, 1, {} );
		
		
	}

	this.keyDown = function(keycode) {
	
		if (keycode == KEY_DOWN) {
			if (index != choices) {
				pointerarrow.posy += 30;
				index++;
			}
		}
		
		if (keycode == KEY_UP) {
			if (index != 1) {
				pointerarrow.posy -= 30;
				index--;
			}
		}
		
		if (keycode == KEY_ENTER) {
			switch(index) {
				case 1:
					switchScene(new GameScene());
					break;
				case 2:
					switchScene(new MapScene());
					break;
			}
		}
	}
}