import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import React from 'react';
import Modal from '../Modal';

const PageCont = styled.div``;

const ItemCont = styled.form`
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 20px;
	border-radius: 10px;
	background-color: ${props => props.colors};
	align-items: center;
`;

//----------------------TOP ROW CONTAINER-----------------
const TopCont = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
`;

const Description = styled.p`
	margin-top: 10px;
	max-width: 180px;
	word-wrap: wrap;
`;

const Number = styled.input`
	display: flex;
	min-height: 35px;
	max-width: 90px;
`;

const Select = styled.select`
	display: flex;
	min-height: 35px;
	min-width: 90px;
	border-radius: 10px;
`;

const TextBox = styled.textarea`
	min-height: 60px;
	border-radius: 10px;
	padding: 10px;
`;

const Submit = styled.input`
	margin: 10px;
	padding: 10px;
	background-color: #FFC800;
	border: none;
  border-radius: 10px;
  font-weight: 600;
	&:hover {
		background-color: #E5A500;
	}
`;

// -----------------CART COMP----------------------------
const CartCont = styled.div`
	display: flex;
	border: 5px solid #003274;
	border-radius: 10px;
	flex-direction: column;
	margin-top: 10px;
`;

const TypeCont = styled.div`
	display: flex;
	margin: 10px;
	padding: 5px;
	align-items: center;
`;

//----------------------TYPE OF GARBAGE COUNTER---------------
const SquareCont = styled.div`
	min-width: 30px;
	max-width: 30px;
	min-height: 30px;
	max-height: 30px;
	border-radius: 5px;
	background-color: ${(props) => props.color};
`;
const ItemName = styled.p`
	font-weight: bold;
	margin: 10px 5px 10px 10px;
`;
const ItemQuantity = styled.p`
	font-weight: bold;
`;

//-------------------------Notes Input------------------------
const TextG = styled.p``;

const TextCont = styled.div`
	display: flex;
`;

const TopCart = styled.div`
	display: flex;
	justify-content: space-around;
	flex: 1;
`;
const BotCart = styled.div`
	display: flex;
	justify-content: space-around;
	flex: 1;
`;

const ModalText = styled.h1`
	display: flex;
	text-align: center;
	font-size: 30px;
	color: grey;
`;
//-----------------On submit stuff-----------------//
let formData = {};

const resetStore = () => {
	// creating default state for localStorage
	console.log('------------------------store is being reset!');
	localStorage.garbageCount = 0;
	localStorage.garbageText = '';
	localStorage.compostCount = 0;
	localStorage.compostText = '';
	localStorage.recyclingCount = 0;
	localStorage.recyclingText = '';
};

const myLoader = ({ src }) => {
	return `${src}`;
};

const IGCR = ({
	item_name = 'Garbage',
	waste_type = 'garbage',
	note = 'Example: two snack wrappers and a straw',
	unit = 'g',
	src = 'garbagebag.png',
	alt = 'garbage bag',
	color = 'black',
	item_count = '0',
	garbage_color = '#E9E9E9',
	comp_color = '#E2EED7',
	recycle_color = '#DFEAEF',

}) => {



	//-------Click garbage function-----------

	function clickGarbage() {



		//NUMBER OF GARBAGE ITEMS

		//get the selected number of garbage option and turn it into a float
		var g = parseFloat(document.getElementById('garbageSelect').value);

		if (typeof Storage !== 'undefined') {
			//if there is something already stored in garbageCount,
			if (localStorage.garbageCount) {
				//add the selected option to the current garbageCount value in localstorage
				localStorage.garbageCount = parseFloat(localStorage.garbageCount) + g;
				document.getElementById('garbageSelect').selectedIndex = 0;
			} else {
				//if there were no garbage entries, set the garbageCount to zero
				localStorage.garbageCount = g;
				document.getElementById('garbageSelect').selectedIndex = 0;
			}
		}
		//display the garbage count in HTML
		document.getElementById('garbageCount').innerHTML = localStorage.garbageCount;

		//GARBAGE NOTES

		//get the newest inputted note for garbage
		var setGarbage = document.getElementById('garbageText').value;

		var addGarbageNote = function (garbageText, garinput, delimiter) {
			//get the existing notes stored in garbageText
			var existing = localStorage.getItem(garbageText);
			//add the newest inputted note to the existing notes
			var data = existing ? existing + delimiter + garinput : garinput;
			//save the new note
			localStorage.setItem(garbageText, data);
		};
		if (setGarbage !== '') {
			addGarbageNote('garbageText', setGarbage, ', ');
			document.getElementById('garbageText').value = '';
		}

		//display the garbage note in HTML
		document.getElementById('textGarbage').innerHTML = localStorage.garbageText;
	} // End of clickGarbage function

	//-------Click compost function-----------

	function clickCompost() {
		//NUMBER OF COMPOST ITEMS

		//get the selected number of compost option and turn it into a float
		var c = parseFloat(document.getElementById('compostSelect').value);

		if (typeof Storage !== 'undefined') {
			//if there is something already stored in compostCount,
			if (localStorage.compostCount) {
				//add the selected option to the current compostCount value in localstorage
				localStorage.compostCount = parseFloat(localStorage.compostCount) + c;
				document.getElementById('compostSelect').selectedIndex = 0;
			} else {
				//if there were no compost entries, set the compostCount to zero
				localStorage.compostCount = c;
				document.getElementById('compostSelect').selectedIndex = 0;
			}
		}
		//display the compost count in HTML
		document.getElementById('compostCount').innerHTML = localStorage.compostCount;

		//COMPOST NOTES

		//get the newest inputted note for compost
		var cominput = document.getElementById('compostText').value;

		var addCompostNote = function (compostText, cominput, delimiter) {
			//get the existing notes stored in compostText
			var existing = localStorage.getItem(compostText);
			//add the newest inputted note to the existing notes
			var data = existing ? existing + delimiter + cominput : cominput;
			//save the new note
			localStorage.setItem(compostText, data);
		};
		if (cominput !== '') {
			addCompostNote('compostText', cominput, ', ');
			document.getElementById('compostText').value = '';
		}

		//display the compost note in HTML
		document.getElementById('textCompost').innerHTML = localStorage.compostText;
	} // End of clickCompost function

	//---------CLICK RECYCLE FUNCTION-----------

	function clickRecycle() {
		//NUMBER OF RECYCLABLE ITEMS

		//get the selected number of recycle option and turn it into a float
		var r = parseFloat(document.getElementById('recycleSelect').value);

		if (typeof Storage !== 'undefined') {
			//if there is something already stored in recyclingCount,
			if (localStorage.recyclingCount) {
				//add the selected option to the current recyclingCount value in localstorage
				localStorage.recyclingCount = parseFloat(localStorage.recyclingCount) + r;
				document.getElementById('recycleSelect').selectedIndex = 0;
			} else {
				//if there were no recycle entries, set the recyclingCount to zero
				localStorage.recyclingCount = r;
				document.getElementById('recycleSelect').selectedIndex = 0;
			}
		}
		//display the recycle count in HTML
		document.getElementById('recycleCount').innerHTML = localStorage.recyclingCount;

		//RECYCLABLE NOTES

		//get the newest inputted note for recycle
		var recinput = document.getElementById('recycleText').value;

		var addRecycleNote = function (recyclingText, recinput, delimiter) {
			//get the existing notes stored in recyclingText
			var existing = localStorage.getItem(recyclingText);
			//add the newest inputted note to the existing notes
			var data = existing ? existing + delimiter + recinput : recinput;
			//save the new note
			localStorage.setItem(recyclingText, data);
		};
		if (recinput !== '') {
			addRecycleNote('recyclingText', recinput, ', ');
			document.getElementById('recycleText').value = '';
		}

		//display the recbage note in HTML
		document.getElementById('textRecycle').innerHTML = localStorage.recyclingText;
	} // End of clickRecycle function

	useEffect(() => {
		// creating default state for localStorage
		resetStore();
	}, []);
		// Modal Function
	const [isOpen, setIsOpen] = useState(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		formData = {
			garbage_text: localStorage.garbageText,
			garbage_count: parseInt(localStorage.garbageCount),
			compost_text: localStorage.compostText,
			compost_count: parseInt(localStorage.compostCount),
			recycling_text: localStorage.recyclingText,
			recycling_count: parseInt(localStorage.recyclingCount),
			account_id: '2',
		};
		console.log(`i am form data~~~~ from on submit${formData}`);
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'https://binibinapp.vercel.app/',
			},
			body: JSON.stringify(formData),
		};
		// await fetch('http://localhost:8080/api/entries/add', requestOptions)
		await fetch('https://binibin-server.herokuapp.com/api/entries/add', requestOptions)
			.then((response) => {
				if (response.ok) {
					console.log(response);
					resetStore();
					setIsOpen(true);
				} else {
					throw new Error('Unable to perform POST request');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<PageCont>
			{/* ----------------------GARBAGE------------------------- */}

			<TopCont>
				<ItemCont colors={garbage_color}>
					<BoldText text={item_name}></BoldText>
					<Image
						loader={myLoader}
						src={'/garbagebag.png'}
						width={150}
						height={150}
						alt={alt}
					/>
					<Description>How many bags of garbage are you throwing out?</Description>
					<Select id='garbageSelect'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
					</Select>
					<Description>Write a note to remember this entry</Description>
					<TextBox id='garbageText' placeholder={note}></TextBox>
					<Submit type='button' value='Add Entry' onClick={clickGarbage}></Submit>
				</ItemCont>

				{/* ----------------------COMPOST------------------------- */}

				<ItemCont colors={comp_color}>
					<BoldText text={'Compost'}></BoldText>
					<Image
						loader={myLoader}
						src={'/tea-bag.png'}
						width={150}
						height={150}
						alt={alt}
					/>
					<Description>How many bags of compost are you throwing out?</Description>
					<Select id='compostSelect'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
					</Select>
					<Description>Write a note to remember this entry</Description>
					<TextBox
						id='compostText'
						placeholder='Example: one apple core and one banana peel'
					></TextBox>
					<Submit type='button' value='Add Entry' onClick={clickCompost}></Submit>
				</ItemCont>

				{/* ----------------------RECYCLE------------------------- */}

				<ItemCont colors={recycle_color}>
					<BoldText text='Recycle'></BoldText>
					<Image
						loader={myLoader}
						src={'/newspaper.png'}
						width={150}
						height={150}
						alt={alt}
					/>
					<Description>How many pieces of recycling are you throwing out?</Description>
					<Select id='recycleSelect'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
					</Select>
					<Description>Write a note to remember this entry</Description>
					<TextBox
						id='recycleText'
						placeholder='Example: one juice box and two yogurt containers'
					></TextBox>
					<Submit type='button' value='Add Entry' onClick={clickRecycle}></Submit>
				</ItemCont>
			</TopCont>

			{/* ----------------------CART COMPONENT------------------------- */}

			<CartCont>
				<TopCart>
					<TypeCont>
						<SquareCont color={color} />
						<ItemName>{item_name} &times;</ItemName>
						<ItemQuantity id='garbageCount'></ItemQuantity>
					</TypeCont>

					<TypeCont>
						<SquareCont color={'#3A7A1C'} />
						<ItemName>{'Compost'} &times;</ItemName>
						<ItemQuantity id='compostCount'></ItemQuantity>
					</TypeCont>

					<TypeCont>
						<SquareCont color={'#3C64B1'} />
						<ItemName>{'Recycle'} &times;</ItemName>
						<ItemQuantity id='recycleCount'></ItemQuantity>
					</TypeCont>
				</TopCart>

				<BotCart>
					<TextCont>
						<TextG id='textGarbage'></TextG>
					</TextCont>

					<TextCont>
						<TextG id='textCompost'></TextG>
					</TextCont>

					<TextCont>
						<TextG id='textRecycle'></TextG>
					</TextCont>
				</BotCart>
				<Submit type='button' value='Save Entries' onClick={onSubmit}></Submit>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<ModalText>Your Input has been confirm and has been submitted</ModalText>
				</Modal>
			</CartCont>
		</PageCont>
	);
};

export default IGCR;
