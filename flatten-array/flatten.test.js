(function () {
	const { test } = QUnit;

	QUnit.module('Flatten Array');

	test('flatten()', assert => {
		assert.expect(6);

		// 1
		assert.deepEqual(flatten(null), [], 'supports null');

		// 2
	    assert.deepEqual(flatten(undefined), [], 'supports undefined');

	    // 3
	    assert.deepEqual(flatten([[], [[]], []]), [], 'supports empty arrays');

	    // 4
	    var nested = [1, 2, 3, [[[], [], [], 0, 0, [[[0, 0, [], [[[[[[[[[[[[[0]]]]]]]]]]]]]]]]], 4, 5, 6, [7, [8, [9]]]]];
	    assert.deepEqual(flatten(nested), [1, 2, 3, 0, 0, 0, 0, 0, 4, 5, 6, 7, 8, 9], 'can flatten nested arrays');

	    // 5
	    var massive = [],
	    	flat = [];
	    for (let i = 0; i < 100000; i++) {
            massive.push([1, 2, 3, [[[], [], [], 0, 0, [[[0, 0, [], [[[[[[[[[[[[[0]]]]]]]]]]]]]]]]], 4, 5, 6, [7, [8, [9]]]]]);
            flat.push(1, 2, 3, 0, 0, 0, 0, 0, 4, 5, 6, 7, 8, 9);
        }
        assert.deepEqual(flatten(massive), flat, 'can handle massive nested arrays');

        // 6
        var deep = [1, 2, 3, 4, 5],
        	flat = [1, 2, 3, 4, 5];
        for (let i = 0; i < 1000; i++) {
        	deep = [deep];
        }
        assert.deepEqual(flatten(deep), flat, 'can handle deep nested arrays');
	});

	QUnit.testStart( ( { module, name } ) => {
  		console.info( `Now running: ${module}: ${name}` );
	});
})();