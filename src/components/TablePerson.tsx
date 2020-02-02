import React, {FC} from 'react';
import {Table} from 'react-bootstrap';

const TablePerson: FC = () => {

	return(
		<Table striped bordered hover responsive>
			<thead>
			<tr>
				<th>First name</th>
				<th>Last name</th>
				<th>Job</th>
				<th>Budget</th>
				<th>Action</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>
					test
				</td>
			</tr>
			</tbody>
		</Table>
	)
};

export default TablePerson;
