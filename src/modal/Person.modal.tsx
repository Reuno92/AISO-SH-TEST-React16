import React, {FC, useEffect, useRef, useState} from 'react';
import {Col, Form, FormControl} from 'react-bootstrap';
import {Job} from '../model/Job';

import {Computer} from '../model/workstation/ComputerStation';
import {Telephony} from '../model/workstation/TelephonyStation';
import Options from '../model/workstation/Options';

type OptionsSupplies = {
	computer: Array<Options>;
	telephony: Array<Options>;
}

const PersonModal: FC = () => {

	const [jobs, setJobs] = useState(Array<Job>());
	const [computers, setComputers] = useState<Array<Computer>>(Array<Computer>());
	const [telephony, setTelephony] = useState<Array<Telephony>>(Array<Telephony>());
	const [optionsComputer, setOptionsComputer] = useState<Array<Options>>(Array<Options>());
	const [maxOptionsComputer, setMaxOptionsComputer] = useState<number>(1);
	const [minOptionsComputer, setMinOptionsComputer] = useState<number>(0);
	const [optionsTelephony, setOptionsTelephony] = useState<Array<Options>>(Array<Options>());


	const optionsComputerSelected = useRef<FormControl<React.ElementType<any>> | null>(null);
	let computerOptionLimit: number = 1;

	const urlJob = 'http://localhost:3000/job';
	const urlComputer = 'http://localhost:3000/computer';
	const urlTelephony = 'http://localhost:3000/telephony';
	const urlOptions = 'http://localhost:3000/options';

	/**
	 * Ref List of Job, computers, telephony, options' computer, options' telephony
 	 */
	useEffect(() => {
		fetch(urlJob)
			.then((res: Response) => res.json())
			.then((data: Array<Job>) => setJobs(data));
	}, [urlJob]);

	useEffect(() => {
		fetch(urlComputer)
			.then((res: Response) => res.json())
			.then((data: Array<Computer>) => setComputers(data));
	}, [urlComputer]);

	useEffect(() => {
		fetch(urlTelephony)
			.then((res: Response) => res.json())
			.then((data: Array<Telephony>) => setTelephony(data));
	}, [urlTelephony]);

	useEffect(() => {
		fetch(urlOptions)
			.then((res: Response) => res.json())
			.then((data: OptionsSupplies) => setOptionsComputer(data.computer));
	}, [urlOptions]);

	useEffect(() => {
		fetch(urlOptions)
			.then((res: Response) => res.json())
			.then((data: OptionsSupplies) => setOptionsTelephony(data.telephony));
	}, [urlOptions]);

	/**
	 * Max and Min limit of options computer selected.
	 * @param e
	 */
	const getLimitOptionsComputerSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
		const index: number = optionsComputer.findIndex(x => x.name === e.target.value);
		if (optionsComputer[index] !== undefined) {
			setMaxOptionsComputer( optionsComputer[index].maxNumberLimit);
			setMinOptionsComputer(1);
		} else {
			setMaxOptionsComputer(0);
			setMinOptionsComputer(0);
		}
	};

	return (
		<Form>
			<Col>
				<h2>General Informations</h2>
				<Form.Row>
					<Form.Group as={Col} controlId="FormFirstName">
						<Form.Label>First name</Form.Label>
						<Form.Control type="text" placeholder="Enter the arrival's first name"/>
					</Form.Group>

					<Form.Group as={Col} controlId="FormLastName">
						<Form.Label>Last name</Form.Label>
						<Form.Control type="text" placeholder="Enter the arrival's last name"/>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="FormJob">
						<Form.Label>Job</Form.Label>
						<Form.Control as="select">
							<option value="none">Choose job…</option>
							{
								jobs.map(job => (
									<option key={job.id} value={job.name}>
										{job.name}
									</option>
								))
							}
						</Form.Control>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="FormArrivalDate">
						<Form.Label>Arrival Date</Form.Label>
						<Form.Control type="date" min={new Date().toISOString().split("T")[0]}/>
					</Form.Group>
				</Form.Row>
			</Col>

			<Col>
				<h2>Computer Supplies</h2>
				<Form.Row>
					<Form.Group as={Col} controlId="FormComputer">
						<Form.Label>Computer</Form.Label>
						<Form.Control as="select">
							<option	value="none">Choose one only</option>
							{
								computers.map(computer =>
									(
										<option key={computer.id} value={computer.value}>
											{`${computer.label} (${computer.price}€)`}
										</option>)
								)
							}
						</Form.Control>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="FormOptions">
						<Form.Label>Options</Form.Label>
						<Form.Control as="select"
													onChange={(e: React.ChangeEvent<HTMLInputElement>) => getLimitOptionsComputerSelected(e)}
													ref={ optionsComputerSelected }>
							<option	value="none">Choose one only</option>
							{
								optionsComputer.map(option =>
									(
										<option key={option.id} value={option.name}>
											{`${option.label} (${option.price}€)`}
										</option>)
								)
							}
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="FormComputer">
						<Form.Label>Choose a number</Form.Label>
						<Form.Control type="number" placeholder="Choose a number" defaultValue={'0'} min={minOptionsComputer} max={maxOptionsComputer}>
						</Form.Control>
					</Form.Group>
				</Form.Row>
			</Col>

			<Col>
				<h2>Telephony Supplies</h2>
				<Form.Row>
					<Form.Group as={Col} controlId="FormOptionsComputer">
						<Form.Label>Phone</Form.Label>
						<Form.Control as="select">
							<option value="none">Choose one only</option>
							{
								telephony.map( phone => (
									<option key={phone.id} value={phone.name}>
										{`${phone.label} (${phone.price} €)`}
									</option>
								))
							}
						</Form.Control>
					</Form.Group>
				</Form.Row>
			</Col>
		</Form>
	);
};

export default PersonModal;
