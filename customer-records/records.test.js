(function () {
	const { test, todo } = QUnit;

	QUnit.module('Customer records');

	test('point', assert => {
		//assert.expect(10);

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
		assert.deepEqual(new Point(-1337.99).x instanceof Number, true, 'is instance of Number');

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

	todo('location', assert => {
		//assert.expect(10);

		// 1
		assert.ok(true, 'Work In Progress');

	});

	todo('customer', assert => {
		//assert.expect(10);

		// 1
		assert.ok(true, 'Work In Progress');

	});

	todo('readFile', assert => {
		//assert.expect(10);

		// 1
		assert.ok(true, 'Work In Progress');

	});

	todo('filter', assert => {
		//assert.expect(10);

		// 1
		assert.ok(true, 'Work In Progress');

	});

})();