import React, {FC, useEffect, useReducer, useState} from 'react';
import {Alert, Button, Modal, Table, Form} from 'react-bootstrap';
import {Person} from '../model/Person';
import moment from 'moment';
import PersonModal from '../modal/Person.modal';
import INITIAL_PERSON_STATE, {PersonState} from '../constant/Person.constant';
import {PersonAction} from '../action/Person.action';
import personReducer from '../reducer/Person.reducer';

type TablePersonProps = {
	data: Array<Person>
}

const TablePerson: FC<TablePersonProps> = ({data}: TablePersonProps) => {
	const [dataReceived, setDataReceived]: [PersonState, React.Dispatch<React.SetStateAction<PersonState>>] = useState<PersonState>(INITIAL_PERSON_STATE);
	const [state, dispatch]: [PersonState, React.Dispatch<PersonAction>] = useReducer(personReducer, dataReceived);
	const [modal, setModal] = useState(false);

	useEffect( (): void => {
		dispatch({type: '[PERSON_TABLE] LOAD', payload: data});
	}, [data]);

	const getData = (data: Array<Person>): Array<JSX.Element> => {
		return data.map((person: Person) => (
			<tr key={person.id}>
				<td>{person.id}</td>
				<td>{person.firstName}</td>
				<td>{person.lastName}</td>
				<td>{person.job.name}</td>
				<td>{moment(person.arrivalDate).format('LL')}</td>
				<td>{person.budget}</td>
				<td><Button variant="primary" size="sm" onClick={ () => console.log(data)}>See</Button></td>
			</tr>
		));
	};

	const displaysData = (data: Array<Person>): JSX.Element | Array<JSX.Element> => {
		if (data === []) {
			return (
				<tr>
					<td colSpan={7}>
						<Alert variant="danger">Persons not found !</Alert>
					</td>
				</tr>
			);
		} else {
			return getData(data);
		}
	};

	// Modal function
	const toggleModal = () => setModal(!modal);

	const submitPerson = (event: React.FormEvent) => {
		event.preventDefault();
		event.stopPropagation();

		dispatch({type: '[PERSON_MODAL] CREATE', payload: state.person });
		toggleModal();
	};

	return (
		<React.Fragment>

			<Button variant="success"
							onClick={ () => toggleModal() }
							className="my-2">
				Create a new arrival
			</Button>

			<Table striped bordered hover responsive>
				<thead>
				<tr>
					<th>#id</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Job</th>
					<th>Arrival date</th>
					<th>Budget</th>
					<th>Action</th>
				</tr>
				</thead>
				<tbody>
					{ displaysData(state.persons) }
				</tbody>
			</Table>

			<Modal show={modal} size="lg" onHide={() => toggleModal()}>
				<Modal.Header closeButton>
					<h1>Create an new arrival</h1>
				</Modal.Header>
				<Form onSubmit={(e: React.FormEvent) => submitPerson(e)}>
				<Modal.Body>
					<PersonModal form={state.person} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={ () => toggleModal()}>
						Close
					</Button>
					<Button variant="primary" type="submit">
						Save Changes
					</Button>
				</Modal.Footer>
				</Form>
			</Modal>

		</React.Fragment>
	);
};

export default TablePerson;
