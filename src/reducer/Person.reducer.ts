import {Person} from '../model/Person';

const personReducer = (state: any, action: any) => {
	switch(action.type) {
		case '[PERSON_TABLE] LOAD':
			return {
				...state,
				persons: [...action.payload] as Array<Person>
			};
		case '[PERSON_MODAL] CREATE':
			action.payload.id = state.persons.length + 1;
			return {
				...state,
				persons: [
					...state.persons,
					action.payload
				],
				person: {}
			};
		case '[PERSON_TABLE] MODIFY':
			return {
				...state,
				person: {
					...action.payload
				}
			};
		default:
			return state
	}
};

export default personReducer
