function GameScene() {

	var spaceship;
var fpstext;
	this.stepframe = function() {
	
		// don't let the spaceship fly-away!!
		if (spaceship.posx < 0) {
			spaceship.posx = canvas.width;
		}
		
		if (spaceship.posx > canvas.width) {
			spaceship.posx = 0;
		}
		
		if (spaceship.posy < 0) {
			spaceship.posy = canvas.height;
		}

		if (spaceship.posy > canvas.height) {
			spaceship.posy = 0;
		}
		
	}
	
	this.init = function() {
			fpstext = new text();
			fpstext.paint(canvas.width - 100, 12, 3, {
				text: 'Frame: -', 
				font: FONT_SMALL,
				color: '#0f0'
			} );
			
		//create new spaceship
		spaceship = new spaceShip();
		spaceship.paint(200, 200, 2, {
			scale : 0.50
		});
		
		// enemy 
		var enemy_spaceship = new enemy_spaceShip();
		enemy_spaceship.paint(0, 0, 2, {
			scale : 0.50,
			follow : spaceship,
			dbg : fpstext
		});
		
		// Write text
		new text().paint(4, 12, 2, {text: 'type \'x\' for menu', font: FONT_SMALL} );		
		
		new starfield().paint(0,0, 0, { 
			stars : 200,
			speed : 0.2
		});
	}

	this.keyUp = function(keycode) {
		
	}
	
	this.keyDown = function(keycode) {
		if(keycode == KEY_X) {
			switchScene(new MenuScene());
		}
		
		if(keycode == KEY_SPACE) {
			new explosion().paint(spaceship.posx, spaceship.posy, 2, { 
				height: 75,
				width : 75
			});
		}
	}
}