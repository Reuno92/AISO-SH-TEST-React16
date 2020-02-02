const personReducer = (state: any, action: any) => {
	switch(action.type) {
		case '[PersonTable] Load':
			return {
				...state,
				person: [...action.payload]
			};
		case '[PersonModal] Create':
			return {
				...state,
				persons : [
					state.persons,
					action.payload,
				]
			};
		default:
			return state
	}
};

export default personReducer
