import {Person} from '../model/Person';

export type PersonAction =
	| { type: '[PERSON_TABLE] LOAD', payload: Array<Person> }
	| { type: '[PERSON_MODAL] CREATE', payload: Person }
