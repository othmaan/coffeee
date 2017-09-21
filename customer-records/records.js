/** 
* Reads file & return string content of it
*/
function readFile(url, cb) {
	if(typeof(url) !== 'string')
		throw new TypeError('Incorrect type of url.')

	// 1. Download
	fetch(url)
	.then(parse)
	.then(read)
	.catch(handleError);

	// 2. Parse
	function parse(response) {
		return response.blob();
	}

	// 3. Read
	var reader = new FileReader();
	function read(file) {
		reader.onload = process;
		reader.readAsText(file);
	}

	// 4. Process
	function process() {
		var r = [];

		try {
			reader.result.split('\n').forEach(val => {
		   		r.push(JSON.parse(val));
			});
		}
		catch (e) {
		   if(cb)
		   	cb({data: null, error: new Error('Parsing error. Input file has incorrect format.')});
		}
		
		
		if(cb)
			cb({data: r, error: null});
	}

	// 5. Handle Error
	function handleError(e) {
		if(cb)
			cb({data: [], error: e});
	}	
}



function main() {
	console.log('============ Main ============');
	// 1.
	var url = 'https://raw.githubusercontent.com/othmaan/intercom/master/customer-records/data/proper.txt',
		office = new Locationn({lat:53.3381985, lng: -6.2592576}),
		hundredKm = 100000;
		customers = new CustomerCollection();

	// 2. Read file
	readFile(url, cb);

	// 3. Process
	function cb(result) {
		if(result.error) {
			console.error('Error while fetching customers ...');
			throw result.error;
		}

		// 1.
		console.info('==> Unfiltered list of customers ...');
	    console.log(result.data);
	    
	    // 2.
	    customers.fromArray(result.data);
	    console.info('==> Filtered list of customers, enjoy ☕️ ...');
	    console.log(customers.sortedBy('id').toBe().notFarFrom(office).by(hundredKm)); // KM
	}
}

setTimeout(()=> {
	main();
}, 1500);


