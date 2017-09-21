/**
* Creates a Point object representing a numerical point.  
*/
function Point(num) { //in degrees
	this.x = (typeof(num) === 'number' || typeof(num) === 'string') ? new Number(num) : 0;

	// Methods
	this.__proto__.toRad = function() { 
		return this.x * Math.PI / 180;
	}

	this.__proto__.toDeg = function() {
		return this.x * 180 / Math.PI;
	}
}