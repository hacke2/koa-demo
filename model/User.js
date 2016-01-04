'use strict'
class User {
 	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	toString() {
		return 'My name is ' + this.name + ', I \'m is ' + this.y + ' years old';
	}

}

exports.User = User;