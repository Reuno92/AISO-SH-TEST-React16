import {Job} from './Job';

export class Person {

	constructor(
		public id: number,
		public firstName: string,
		public lastName: string,
		public arrivalDate: Date,
		public job: Job
	) {}
}
