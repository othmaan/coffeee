(function () {
	const { test, todo } = QUnit;

	QUnit.module('Customer records');


	test('Point', assert => {
		assert.expect(9);

		// 1
		assert.deepEqual(new Point(null).x, 0, 'supports null');

		// 2
		assert.deepEqual(new Point(void 0).x, 0, 'supports undefined');

		// 3
		assert.deepEqual(new Point('1337').x, 1337, 'supports string');

		// 4
		assert.deepEqual(new Point(1337).x, 1337, 'supports number');

		// 5
		assert.deepEqual(new Point(1337.99).x, 1337.99, 'supports decimal point');

		// 6
		assert.deepEqual(new Point(-1337.99).x, -1337.99, 'supports signed number');

		// 7
		assert.ok(new Point(-1337.99).x instanceof Number, 'is instance of Number');

		// 8
		var num = new Point(-1337.99);
		const ref1 = num.x;
		num.toRad();
		assert.deepEqual(ref1, num.x, 'instance is not mutated after change to radian');

		// 9
		num = new Point(1337.77);
		const ref2 = num.x;
		num.toDeg();
		assert.deepEqual(ref2, num.x, 'instance is not mutated after change to degree');

	});


	test('Location', assert => {
		assert.expect(7);

		// 1
		var loc = new Locationn(null);
		assert.ok(loc.lat === 0 && loc.lng === 0, 'supports null');

		// 2
		loc = new Locationn(void 0);
		assert.ok(loc.lat === 0 && loc.lng === 0, 'supports undefined');

		// 3
		var abuDhabi = new Locationn({lat: 24.3870789, lng: 54.4185348});
		assert.ok(abuDhabi.lat instanceof Point && abuDhabi.lng instanceof Point, 'lat & lng are instance of Point');

		// 4
		assert.deepEqual(abuDhabi.distanceFrom(null), -1, 'distanceFrom supports null');

		// 5
		assert.deepEqual(abuDhabi.distanceFrom(void 0), -1, 'distanceFrom supports undefined');

		// 6
		assert.deepEqual(abuDhabi.distanceFrom(abuDhabi), 0, 'distance between same location is zero');

		// 7
		var dubai = new Locationn({lat: 25.0757073, lng: 54.9475554});
		var d = abuDhabi.distanceFrom(dubai); //toFixed() returns string 
		assert.deepEqual(d.toFixed(0), 93.37 * 1000 + '', 'can calculate distance between 2 locations');		

	});


	test('Customer', assert => {
		//assert.expect(5);

		// 1
		var customer = new Customer(null);
		assert.ok(customer instanceof Customer, 'supports null');

		// 2
		customer = new Customer(void 0);
		assert.ok(customer instanceof Customer, 'supports undefined');

		// 3
		assert.ok(customer.location instanceof Locationn, 'location is intance of Location');

		// 4
		customer = new Customer({id: '10'});
		assert.ok(typeof(customer.id) === 'number', 'id is number');

		// 5
		customer = new Customer({name: 'Quentin'});
		assert.ok(typeof(customer.name) === 'string', 'name is string');

	});


	test('CustomerCollection', assert => {
		assert.expect(9);

		// 1
		var customers = new CustomerCollection(null);
		assert.ok(customers instanceof CustomerCollection, 'supports null');

		// 2
		customers = new CustomerCollection(void 0);
		assert.ok(customers instanceof CustomerCollection, 'supports undefined');

		// 3
		assert.deepEqual(customers.fromArray(null), [], 'fromArray() supports null');

		// 4
		var junk = [{user_id: 10, latitude: -45.213213, longitude: 41.213213, age: 90}];
		assert.throws(function() {
			customers.fromArray(junk)
		}, new Error('Malformed input array.'), 'fromArray() can handle input arrays with junk data');

		// 5
		customers = new CustomerCollection();
		assert.deepEqual(customers.toBe(), customers, 'toBe() returns same instance');

		// 6
		var c1 = new Customer({
			id: 8, location: 
			new Locationn({lat: 24.3870001, lng: 54.4185001}), 
			name: 'Quentin'
		}),
		c2 = new Customer({
			id: 15, 
			location: new Locationn({lat: 24.3870002, lng: 54.4185002}), 
			name: 'Jerome'
		}),
		c3 = new Customer({
			id: 29, 
			location: new Locationn({lat: 27.3870789, lng: 55.4185348}), 
			name: 'Tarantino'
		});
		var list = new CustomerCollection();
		list.customers = [c3, c1, c2];
		assert.deepEqual(list.sortedBy('id').customers, 
			[c1, c2, c3], 'sortedBy() arranges customers by id in ascending order');

		// 7
		assert.throws(function() { list.toBe().by('name') }, 
			'by() can handle other unsupported filter criteria');

		// 8
		assert.throws(function() { list.toBe().by('name') }, 
			'by() can handle other unsupported data types');

		// 9
		var office = new Locationn({lat: 24.3870000, lng: 54.4185000}),
			oneKm = 1000;
		assert.deepEqual(list.toBe().notFarFrom(office).by(oneKm),
			[c1, c2], 'can filter customers by location');

	});


	test('readFile()', assert => {
		//assert.expect(10);

		// 1
		assert.throws(function(){ readFile(null, new Function()); }, 'can handle null url');

		// 2
		assert.throws(function(){ readFile(void 0, new Function()); }, 'can handle undefined url');

		// 3
		var proper = '',
			malformed = '';
		assert.throws(function(){ readFile(malformed, new Function()); }, 
			'can handle malformed input files');

	});

})();