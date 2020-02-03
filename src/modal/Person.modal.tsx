import React, {FC, useEffect, useRef, useState} from 'react';
import {Col, Form, FormControl} from 'react-bootstrap';
import {Job} from '../model/Job';

import {Computer} from '../model/workstation/ComputerStation';
import {Telephony} from '../model/workstation/TelephonyStation';
import Options from '../model/workstation/Options';
import {Person} from '../model/Person';
import api from '../constant/api.person';

type PersonModalProps = {
	form: Person
}

type OptionsSupplies = {
	computer: Array<Options>;
	telephony: Array<Options>;
}

const PersonModal: FC<PersonModalProps> = ({form}: PersonModalProps) => {

	const { urlJob, urlComputer, urlTelephony, urlOptions } = api;
	let { firstName, lastName, job, arrivalDate } = form;

	/**
	 *  Ref List State
	 */
	const [jobsList, setJobsList] = useState(Array<Job>());
	const [computersList, setComputersList] = useState<Array<Computer>>(Array<Computer>());
	const [telephonyList, setTelephonyList] = useState<Array<Telephony>>(Array<Telephony>());
	const [optionsComputerList, setOptionsComputerList] = useState<Array<Options>>(Array<Options>());
	const [optionsTelephonyList, setOptionsTelephonyList] = useState<Array<Options>>(Array<Options>());

	/*
	 * Attribute form control limit
	 */
	const [maxOptionsComputer, setMaxOptionsComputer] = useState<number>(1);
	const [minOptionsComputer, setMinOptionsComputer] = useState<number>(0);

	/*
	 *  Ref of any form control
	 */
	const optionsComputerSelected = useRef<FormControl<React.ElementType<any>> | null>(null);
	const optionsTelephonySelected = useRef<FormControl<React.ElementType<any>>>(null);

	/*
	 *  State of value of form control
	 */
	const [firstNameInput, setFirstNameInput] = useState(form.firstName);
	const [lastNameInput, setLastNameInput] = useState(form.lastName);
	const [jobInput, setJobInput] = useState(form.job);
	const [arrivalDateInput, setArrivalDateInput] = useState(form.arrivalDate);

	/**
	 * Ref List of Job, computers, telephony, options' computer, options' telephony
	 */
	useEffect(() => {
		fetch(urlJob)
			.then((res: Response) => res.json())
			.then((data: Array<Job>) => setJobsList(data));
	}, [urlJob]);

	useEffect(() => {
		fetch(urlComputer)
			.then((res: Response) => res.json())
			.then((data: Array<Computer>) => setComputersList(data));
	}, [urlComputer]);

	useEffect(() => {
		fetch(urlTelephony)
			.then((res: Response) => res.json())
			.then((data: Array<Telephony>) => setTelephonyList(data));
	}, [urlTelephony]);

	useEffect(() => {
		fetch(urlOptions)
			.then((res: Response) => res.json())
			.then((data: OptionsSupplies) => setOptionsComputerList(data.computer));
	}, [urlOptions]);

	useEffect(() => {
		fetch(urlOptions)
			.then((res: Response) => res.json())
			.then((data: OptionsSupplies) => setOptionsTelephonyList(data.telephony));
	}, [urlOptions]);

	useEffect( () => {
		form.firstName = firstNameInput;
		form.lastName = lastNameInput;
		form.job = jobInput;
		form.arrivalDate = arrivalDateInput;
	}, [form, firstNameInput, lastNameInput, jobInput, arrivalDateInput]);

	/**
	 * Max and Min limit of options computer selected.
	 * @param e React.ChangeEvent
	 */
	const getLimitOptionsComputerSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		const index: number = optionsComputerList.findIndex(x => x.name === e.target.value);
		if (optionsComputerList[index] !== undefined) {
			setMaxOptionsComputer(optionsComputerList[index].maxNumberLimit);
			setMinOptionsComputer(1);
		} else {
			setMaxOptionsComputer(0);
			setMinOptionsComputer(0);
		}
	};

	return (
		<React.Fragment>
			<Col>
				<h2>General Information</h2>
				<Form.Row>
					<Form.Group as={Col} controlId="FormFirstName">
						<Form.Label>First name</Form.Label>
						<Form.Control type="text"
													placeholder="Enter the arrival's first name"
													defaultValue={firstName}
													onChange={ (e: any) => setFirstNameInput(e.target.value) }
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="FormLastName">
						<Form.Label>Last name</Form.Label>
						<Form.Control type="text"
													placeholder="Enter the arrival's last name"
													defaultValue={lastName}
													onChange={ (e: any) => setLastNameInput(e.target.value) }/>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="FormJob">
						<Form.Label>Job</Form.Label>
						<Form.Control as="select"
													defaultValue={job}
													onChange={ (e:any) => {
														const index = jobsList.findIndex( job => job.name === e.target.value);
														setJobInput({
															id : jobsList[index].id,
															name: e.target.value,
															maxBudget: jobsList[index].maxBudget
														});
													} }>
							<option value="none">Choose job…</option>
							{
								jobsList.map(job => (
									<option key={job.id} value={job.name}>
										{job.name} - limit: {(typeof job.maxBudget === 'number') ? job.maxBudget + ' €' : 'Unlimited' }
									</option>
								))
							}
						</Form.Control>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="FormArrivalDate">
						<Form.Label>Arrival Date</Form.Label>
						<Form.Control type="date"
													defaultValue={arrivalDate}
													onChange={ (e: any) => setArrivalDateInput(e.target.value) }
													min={new Date().toISOString().split('T')[0]}/>
					</Form.Group>
				</Form.Row>
			</Col>

			<Col>
				<h2>Computer Supplies</h2>
				<Form.Row>
					<Form.Group as={Col} controlId="FormComputer">
						<Form.Label>Computer</Form.Label>
						<Form.Control as="select">
							<option value="none">Choose one only</option>
							{
								computersList.map(computer =>
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
													ref={optionsComputerSelected}>
							<option value="none">Choose one only</option>
							{
								optionsComputerList.map(option =>
									(
										<option key={option.id} value={option.name}>
											{`${option.label} (${option.price}€)`}
										</option>)
								)
							}
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="FormOptionsNumber">
						<Form.Label>Choose a number</Form.Label>
						<Form.Control type="number"
													placeholder="Choose a number"
													defaultValue={'0'}
													min={minOptionsComputer}
													max={maxOptionsComputer}>
						</Form.Control>
					</Form.Group>
				</Form.Row>
			</Col>

			<Col>
				<h2>Telephony Supplies</h2>
				<Form.Row>
					<Form.Group as={Col} controlId="FormTelephony">
						<Form.Label>Phone</Form.Label>
						<Form.Control as="select" ref={optionsTelephonySelected}>
							<option value="none">Choose one only</option>
							{
								telephonyList.map(phone => (
									<option key={phone.id}
													value={phone.name}>
										{`${phone.label} (${phone.price} €)`}
									</option>
								))
							}
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="FormOptionsTelephony">
						<Form.Check type="checkbox" label="Headphones (250 €)" />
					</Form.Group>
				</Form.Row>
			</Col>
		</React.Fragment>
	);
};

export default PersonModal;
