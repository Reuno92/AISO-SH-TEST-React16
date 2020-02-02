import React, {FC} from 'react';
import {Button, Table} from 'react-bootstrap';
import {Person} from '../model/Person';

type TablePersonProps = {
	data: Array<Person>
}

const TablePerson: FC<TablePersonProps> = ({data}: TablePersonProps) => {

	console.log('data received', data);

	return(
		<React.Fragment>
		<Button variant="success">Create a new arrival</Button>
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
			</tbody>
		</Table>
		</React.Fragment>
	)
};

export default TablePerson;
