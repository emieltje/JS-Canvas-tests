function sceneObjectsManager() {
	// All objects in the current scene	
	this.sceneObjects = new Array();

	this.addObject = function(object) {
		this.sceneObjects.push(object);	
		this.sceneObjects.sort(function(a,b){return a.posz - b.posz;})
	}
	
	// Flush all the objects
	this.flush = function() {
		this.sceneObjects = new Array();
	}
	
	// Repaint all the objects to the scene
	this.repaint = function() {
	
		for (x in this.sceneObjects)
		{
			if(this.sceneObjects[x]) {
				if (this.sceneObjects[x].stepframe) {
					this.sceneObjects[x].stepframe();
				}
			}
			
			if (currentScene.stepframe) {
				currentScene.stepframe();
			}
		}
	}
	
	// Remove the object	
	this.removeObject = function(id) {
		var temp = new Array();
		for (x in this.sceneObjects)
		{
			if (this.sceneObjects[x].id != id) {
				temp.push(this.sceneObjects[x]);			
			}
		}
		
		// Sort again
		temp.sort(function(a,b){return a.posz - b.posz;});
		
		// Redefine the screen objects
		this.sceneObjects = temp;
	}
	
	// Get the object by the given id		
	this.getObject = function(id) {
		for (x in this.sceneObjects)
		{
			if (this.sceneObjects[x].id != id) {
				return this.sceneObjects[x];			
			}
		}
	}
}