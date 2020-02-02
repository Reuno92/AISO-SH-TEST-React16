import Options from './Options';

export class ComputerStation {

	constructor(
		public id: number,
		public computer: Computer,
		public options: Array<Options>,
		public total: number,
	) {}
}

export class Computer {
	constructor(
		public id: number,
		public label: string,
		public value: string,
		public price: number,
	) {}
}
