import React, {FC} from 'react';
import {Button, Table} from 'react-bootstrap';
import {Person} from '../model/Person';
import moment from 'moment';

type TablePersonProps = {
	data: Array<Person>
}

const TablePerson: FC<TablePersonProps> = ({data}: TablePersonProps) => {

	return (
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
				{
					data !== [] && data.map(person => (
						<tr key={person.id}>
							<td>{ person.id }</td>
							<td>{ person.firstName }</td>
							<td>{ person.lastName }</td>
							<td>{ person.job }</td>
							<td>{ moment(person.arrivalDate).format('LL') }</td>
							<td>{ person.budget }</td>
							<td><Button variant="primary">See</Button></td>
						</tr>
					))
				}
				</tbody>
			</Table>
		</React.Fragment>
	);
};

export default TablePerson;
