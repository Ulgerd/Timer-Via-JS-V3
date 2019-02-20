class StatefulEmitter {
	constructor(obj) {
		this.state = {...obj};
		this.funcs = [];
	};

	subscribe(fn) {
		this.funcs.push(fn);
		this.functionCall();

		return () => {
			this.funcs = this.funcs.filter(eventFn => fn !== eventFn);
		};
	};

  	setState(data) {
		this.state = (data.constructor === Object) ? {...data} : data(this.state);
  		this.functionCall();
	};

	functionCall() {
		return this.funcs.forEach(fn => {
			fn.call(null, this.state);
		})
	};
};