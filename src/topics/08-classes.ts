export class Person {
	public name: string;
	private address: string;

	constructor() {
		this.name = 'Harold';
		this.address = 'Soacha';
	}
}

const ironman = new Person();

console.log(ironman);
