function Customer(opts) {
	this.id = opts ? Number(opts.id) : 0;
	this.name = opts ? String(opts.name) : '';
	this.location = opts ? opts.location : new Locationn();
}