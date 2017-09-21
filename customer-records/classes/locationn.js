/**
* Creates a Locationn object representing a geographic point. 
* lat is specified in degrees. 90 to -90 
* lng is specified in degrees. 180 to -180
*/
function Locationn(opts) {
	// Private
	const R = 6371e3,
		sin = Math.sin,
		cos = Math.cos,
		acos = Math.acos;

	// Properties
	this.lat = opts ? new Point(opts.lat) : 0; // TODO: decide if new Point()
	this.lng = opts ? new Point(opts.lng) : 0;

	// Methods
	this.__proto__.distanceFrom = function(location) {
		// 1.
		var d = -1;
		if(!(location instanceof Locationn))
			return d;

		// 2.
		var lat1 = this.lat.toRad(),
			lat2 = location.lat.toRad(),
			deltaLng = location.lng.toRad() - this.lng.toRad(),
			delta = acos(sin(lat1) * sin(lat2) + cos(lat1) * cos(lat2) * cos(deltaLng));
		d = R * delta;

		// 3.
		return d;
	}
}