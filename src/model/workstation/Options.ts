import {OptionMaterial} from '../Abstract/OptionMaterial';

export default class Options extends OptionMaterial {
	constructor(
		public id: number,
		public label: string,
		public name: string,
		public price: number,
		public maxNumberLimit: number,
		public numberOwned?: number,
		public total?: number
	) {
		super(id, label, name);
	}
}
