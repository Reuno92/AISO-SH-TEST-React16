import {OptionMaterial} from '../Abstract/OptionMaterial';

export class TelephonyStation {

	constructor(
		id: number,
		telephony: Telephony,
		optionsTelephony: Array<OptionsTelephony>,
		total: number
	) {
	}
}

class Telephony {

	constructor(
		public id: number,
		public label: string,
		public name: string,
		public price: string,
	) {}
}

class OptionsTelephony extends OptionMaterial {

	constructor(
		public id: number,
		public label: string,
		public name: string,
		public numberOwned?: number,
		public total?: number
	) {
		super(id, label, name)
	}
}
