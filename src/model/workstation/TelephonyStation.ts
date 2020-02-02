import Options from './Options';

export class TelephonyStation {

	constructor(
		id: number,
		telephony: Telephony,
		optionsTelephony: Array<Options>,
		total: number
	) {
	}
}

export class Telephony {

	constructor(
		public id: number,
		public label: string,
		public name: string,
		public price: string,
	) {}
}
