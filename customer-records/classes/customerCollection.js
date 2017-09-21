function CustomerCollection(obj) {
	this.customers = obj ? obj : [];
	this.from = new Locationn();


	// Creates array of Customer objects from JSON
	this.__proto__.fromJson = function(json) {
		// TBD
	}

	// Creates array of Customer objects from Array of objects
	this.__proto__.fromArray = function(array) {
		var customers = [];
		if(!(array instanceof Array))
			return customers;
		
		array.forEach(val => {
			if(!val.hasOwnProperty('user_id') ||
				!val.hasOwnProperty('latitude') ||
				!val.hasOwnProperty('longitude') ||
				!val.hasOwnProperty('name')) {
				throw new Error('Malformed input array.');
			}

			var ivar = new Customer({
				location: new Locationn({lat: val.latitude, lng: val.longitude}),
				name: val.name,
				id: val.user_id
			})
			customers.push(ivar);
		});

		this.customers = customers;
	}

	this.__proto__.toBe = function() {
		return this;
	}

	this.__proto__.notFarFrom = function(from) {
		if(!(from instanceof Locationn))
			throw new Error('Only filtering from Locationn is supported.');

		this.from.lat = from.lat; //in degrees
		this.from.lng = from.lng;
		return this;
	}

	this.__proto__.by = function(distance) {
		if(typeof(distance) !== 'number')
			throw new TypeError('Unexpected type. Distance is a numeric value.');

		var filtered = [];
		if(!(this.customers.length))
			return filtered;

		return this.customers.filter(val => {
			if(!(val instanceof Customer))
				throw new Error('Only filtering customers is supported.')

			return val.location.distanceFrom(this.from) <= distance;
		});
	}

	this.__proto__.sortedBy = function(by) {
		if(by !== 'id')
			throw new TypeError('Only sorting by id is supported.');

		this.customers = this.customers.sort((a, b) => {
			if(!(a instanceof Customer) || !(b instanceof Customer)) {
				throw new Error('Only sorting customers is supported.')
			}
			return a.id - b.id;
		})
		return this;
	};
}