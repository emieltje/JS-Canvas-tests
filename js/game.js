const FPS = 60;
const DEBUG = false;

// Setup globals
var maincanvas = maincanvasCtx = canvas = context2d = currentScene = null;

// Register the managers
keymngr = new KeyManager();
sceneObjectsMngr = new sceneObjectsManager();

// generate a unqiue id
var getUniqueId = (function() {
	var id=0;
	return function() {
		if (arguments[0]==0) {
			id=0;
			return 1;
		} else 
			return id++;
	}
})();

// Window onload function.. setup the game
window.onload = function() {

	// Main
	maincanvas = document.getElementById('canvasFrame');
	maincanvasCtx = maincanvas.getContext('2d');

	// Doublebuffer, in-memory painting
	canvas = document.createElement('canvas');
	canvas.width = maincanvas.width;
	canvas.height = maincanvas.height;	
	context2d = canvas.getContext('2d');
		
	// Got keydown event!	
	document.onkeydown = function(event) {
		keymngr.keydownEvent(event);
		
		// Send the key to the currentScene
		if (currentScene.keyDown)
			currentScene.keyDown(event.keyCode);
			
		// Debug 
		if (DEBUG) {
			if (event.keyCode == KEY_L) {
				for(x in sceneObjectsMngr.sceneObjects) {
					console.info('o: ' + sceneObjectsMngr.sceneObjects[x].id);
				}
				console.info(sceneObjectsMngr.sceneObjects.length + ' Objects registered');
			}
		}
	};

	// Got a keyup event!
	document.onkeyup = function(event) {
		// Register the event 
		keymngr.keyupEvent(event);

		// Send the key to the currentScene
		if (currentScene.keyUp)
			currentScene.keyUp(event.keyCode);
	};

	// Init the game, eg setup the scene
	initGame();	

	// Set FPS
	setInterval(gameLoop, 1000 / FPS);
}

function initGame() {
	// Start scene
	currentScene = new MenuScene();
	currentScene.init();
}

function switchScene(scene) {
	// Remove all the objects from the scene objects manager
	sceneObjectsMngr.flush();
	
 	// Set the new scene
	currentScene = scene;
	currentScene.init();
}

function gameLoop() {
	// Clear the buffers
	maincanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
	context2d.clearRect(0, 0, canvas.width, canvas.height);	
	
	// Redraw all scene objects
	sceneObjectsMngr.repaint(); 	
	maincanvasCtx.drawImage(canvas, 0, 0);			
}