import React, {FC, useState} from 'react';
import {Alert, Button, Modal, Table} from 'react-bootstrap';
import {Person} from '../model/Person';
import moment from 'moment';
import PersonModal from '../modal/Person.modal';

type TablePersonProps = {
	data: Array<Person>
}

const getData = (data: Array<Person>): Array<JSX.Element> => {
	return data.map((person: Person) => (
		<tr key={person.id}>
			<td>{person.id}</td>
			<td>{person.firstName}</td>
			<td>{person.lastName}</td>
			<td>{person.job}</td>
			<td>{moment(person.arrivalDate).format('LL')}</td>
			<td>{person.budget}</td>
			<td><Button variant="primary" size="sm" disabled={true}>See</Button></td>
		</tr>
	));
};
const displaysData = (data: Array<Person>) => {
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



const TablePerson: FC<TablePersonProps> = ({data}: TablePersonProps) => {

	const [modal, setModal] = useState(false);

	// Modal function
	const toggleModal = () => setModal(!modal);

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
					{ displaysData(data) }
				</tbody>
			</Table>

			<Modal show={modal} size="lg" onHide={() => toggleModal()}>
				<Modal.Header closeButton>
					Create an new arrival
				</Modal.Header>
				<Modal.Body>
					<PersonModal />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={ () => toggleModal()}>
						Close
					</Button>
					<Button variant="primary" onClick={ () => toggleModal()}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>

		</React.Fragment>
	);
};

export default TablePerson;
