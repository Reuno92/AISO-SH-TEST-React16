import {OptionMaterial} from '../Abstract/OptionMaterial';

export class ComputerStation {

	constructor(
		public id: number,
		public computer: Computer,
		public options: Array<OptionComputer>,
		public total: number,
	) {}
}

class Computer {
	constructor(
		public id: number,
		public label: string,
		public name: string,
		public price: number,
	) {}
}

class OptionComputer extends OptionMaterial {
	constructor(
		public id: number,
		public label: string,
		public name: string,
		public numberOwned?: number,
		public total?: number
	) {
		super(id, label, name);
	}
}
