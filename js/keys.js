// Keys 
const KEY_UP    = 38;
const KEY_DOWN  = 40;
const KEY_LEFT  = 37; 	
const KEY_RIGHT = 39;
const KEY_ENTER = 13;
const KEY_SPACE = 32;
const KEY_X 	= 88;
const KEY_L		= 76;

function KeyManager() {
	this.keydownEvent = function(event) {
		if(DEBUG)
			console.info('key: ' + event.keyCode);
		
		for(x in sceneObjectsMngr.sceneObjects) {
			if (sceneObjectsMngr.sceneObjects[x].keyDown) {
				sceneObjectsMngr.sceneObjects[x].keyDown(event.keyCode);
			}
		}
	}
	
	this.keyupEvent = function(event) {
		for(x in sceneObjectsMngr.sceneObjects) {
			if (sceneObjectsMngr.sceneObjects[x].keyUp) {
				sceneObjectsMngr.sceneObjects[x].keyUp(event.keyCode);
			}
		}
	}
}