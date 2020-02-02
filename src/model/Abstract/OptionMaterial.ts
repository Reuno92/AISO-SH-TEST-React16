export abstract class OptionMaterial {

	constructor(
		public id: number,
		public label: string,
		public name: string,
		public numberOwned?: number,
		public total?: number
	) {
	}
}
