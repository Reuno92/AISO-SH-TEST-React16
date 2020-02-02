import {Person} from './Person';
import {ComputerStation} from './workstation/ComputerStation';
import {TelephonyStation} from './workstation/TelephonyStation';

export class WorkFurniture {

	constructor(
		public id: number,
		public Employee: Person,
		public WorkStation : [
			ComputerStation,
			TelephonyStation,
		]
	) {}
}
