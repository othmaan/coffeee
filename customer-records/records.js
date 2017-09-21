/**
* Creates a Point object representing a numerical point.  
*/
function Point(num) {
	this.x = (typeof(num) === 'number' || typeof(num) === 'string') ? new Number(num) : 0;

	// Methods
	this.__proto__.toRad = function() { 
		return this.x * Math.PI / 180;
	}

	this.__proto__.toDeg = function() {
		return this.x * 180 / Math.PI;
	}
}

/**
* Creates a Location object representing a geographic point. 
* lat is specified in degrees. 90 to -90 
* lng is specified in degrees. 180 to -180
*/
function Location(opts) {
	// Private
	const R = 6371e3,
		sin = Math.sin,
		cos = Math.cos,
		acos = Math.acos;

	// Properties
	this.lat = opts ? new Point(opts.lat) : 0;
	this.lng = opts ? new Point(opts.lng) : 0;

	// Methods
	this.__proto__.distanceFrom = function(location) {
		// 1.
		var d = -1;
		if(!(location instanceof Location))
			return d;

		// 2.
		var lat1 = this.lat.toRad(),
			lat2 = location.lat.toRad(),
			deltaLng = location.lng.toRad() - this.lng.toRad(),
			delta = acos(sin(lat1) * sin(lat2) + cos(lat1) * cos(lat2) * cos(deltaLng));
		d = delta ? R * delta : -1;

		// 3.
		return d;
	}
}


function CustomerCollection() {
	// TBD
}

function Customer(opts) {
	this.id = opts ? opts.id : 0;
	this.name = opts ? opts.name : '';
	this.location = opts ? new Location(opts.location) : new Location();

	// Creates array of Customer objects from JSON
	this.__proto__.fromJson = function(json) {
		// TBD
	}

	// Creates array of Customer objects from Array of objects
	this.__proto__.fromArray = function(array) {
		// TBD
	}

	// Filter collection using id or location
	this.__proto__.filter = function(customers, predicate) {
		// TBD
	}

	this.__proto__.sort = function(customers, prodicate) {
		// TBD
	}	
}


/** Reads file & return string content of it
*/
function readFile(fileName) {
	// url = https://gist.githubusercontent.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt
	const reader = new FileReader();

}



function main() {
	// TBD
	let office = new Location({lat:53.3381985, lng: -6.2592576});

	// 1. readFile();

	// 2. filter();

	// 3. sort();

}