import {Job} from './Job';

export class Person {

	constructor(
		public id: number,
		public firstName: string,
		public lastName: string,
		public budget: number,
		public job: Job,
		public arrivalDate?: Date,
	) {
	}
}
