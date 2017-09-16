(function () {
	const { test, todo } = QUnit;

	QUnit.module('Customer records');

	todo('records', assert => {
		//assert.expect(10);

		// 1
		assert.ok(true, 'Work In Progress');

	});

	QUnit.testStart( ( { module, name } ) => {
  		console.info( `Now running: ${module}: ${name}` );
	});
})();