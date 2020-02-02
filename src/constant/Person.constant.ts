import {Person} from '../model/Person';

export type PersonState = {
	persons: Array<Person>;
	person: Person;
}

const INITIAL_PERSON_STATE: PersonState = {
	persons: Array<Person>(),
	person: new Person(
		0,
		'',
		'',
		0,
		{
			id: 0,
			name: '',
			maxBudget: 0
		},
		new Date().toISOString()
	)
};

export default INITIAL_PERSON_STATE;
