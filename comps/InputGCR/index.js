import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
import EduImage from '../EduImage';
import { useState } from 'react';
import { colors } from '@mui/material';
import React from 'react';

const PageCont = styled.div`

`

const ItemCont = styled.form`
  display:flex;
  flex-direction:column;
  margin:10px;
  padding:10px;
  background-color:${props=>props.colors};
  align-items:center;
`;

//----------------------TOP ROW CONTAINER-----------------
const TopCont = styled.div`
  display:flex;
    gap:10px;
`

const Description = styled.p`
  margin-top:10px;
  max-width:180px;
  word-wrap:wrap;
`;

const Number = styled.input`
  display:flex;
  min-height:35px;
  max-width:90px;
`;

const Select = styled.select`
  display:flex;
  min-height:35px;
  width:90px;
`;

const TextBox = styled.textarea`
  min-height:60px;
`;

const Submit = styled.input`
  min-height:35px;
  margin-top:10px;
`;

// -----------------CART COMP----------------------------
const CartCont = styled.div`
  display:flex;
  border: 5px solid #003274;
  border-radius:10px;
  flex-direction:column;
  margin-top:10px;
`

const TypeCont = styled.div`
  display:flex;
  margin:10px;
  padding:5px;
  align-items:center;

`

//----------------------TYPE OF GARBAGE COUNTER---------------
const SquareCont = styled.div`
  min-width:30px;
  max-width:30px;
  min-height:30px;
  max-height:30px;
  border-radius:5px;
  background-color:${props=>props.color};
`

const ItemName = styled.p`
  font-weight:bold;
  margin:10px 5px 10px 10px;
`;

const ItemQuantity = styled.p`
  font-weight:bold;
`;

//-------------------------Notes Input------------------------
const TextG = styled.p`

`

const TextCont = styled.div`
  display:flex;
`

const TopCart = styled.div`
  display:flex;
  justify-content:space-around;
  flex:1;
`
const BotCart = styled.div`
  display:flex;
  justify-content:space-around;
  flex:1;
`


const myLoader = ({src}) => {

//-----------------Just coppied this to the garbage component-----------------//



	// const [count, setCount] = React.useState(0);

	// const inc = (event) => {
	// 	setCount(count + 1);
	// };

	// const dec = () => {
	// 	setCount(count - 1);
	// };

	// const postData = {
	// 	item_name: props.label,
	// 	waste_type: props.wasteType,
	// 	item_count: count,
	// };

	// const requestOptions = {
	// 	method: 'POST',
	// 	headers: {'Content-Type': 'application/json'},
	// 	body: JSON.stringify(postData),
	// };

	// const onSubmit = async (e) => {
	// 	e.preventDefault();
	// 	await fetch('https://binibin-server.herokuapp.com/api/entries/add', requestOptions)
	// 		.then((response) => {
	// 			console.log(response);
	// 			alert(`${count} bags of ${props.wasteType} has been entered :)`);
	// 			// setIsOpen(true);
	// 			setCount(0);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			// setIsOpen(false);
	// 		});
	// };



  return `${src}`
}

const IGCR = ({
  item_name="Garbage",
  waste_type="garbage",
  note="Example: two snack wrappers and a straw",
  unit="g",
  src="garbagebag.png",
  alt="garbage bag",
  optional="optional",
  color="black",
  item_count="0",
  garbage_color="#E9E9E9",
  comp_color="#E2EED7",
  recycle_color="#DFEAEF"
}) => {

function clickGarbage(){
  //Gets the selected option
  var g = document.getElementById("garbageSelect").value;
  var resultG = parseFloat(g);

  // var totalNumber = localStorage.getItem(resultG);


  // //add 1 to existing
  // var addNumber = totalNumber+ resultG;

  // //set new total
  // localStorage.setItem(resultG, addNumber)

  //TO DISPLAY IN HTML
  let sumG = resultG ;
  document.getElementById("garbageCount").innerHTML = sumG;


//To display text



  var getGarbageText = document.getElementById("garbageText").value;

  localStorage.setItem('getGarbageText', getGarbageText)

  var existing = localStorage.getItem('garbageText');

  var data = existing ? existing + getGarbageText : 'tuna';

  localStorage.setItem('garbageText', data);

  document.getElementById("TextGarbage").innerHTML = data + " " ;


} // END OF clickGarbage function


//-------Click compost function-----------

function clickCompost(){
  var c = document.getElementById("compostSelect").value;
  var resultC = parseFloat(c);
  document.getElementById("compostCount").innerHTML = resultC;

  var compostText = document.getElementById("compostText").value;
  document.getElementById("TextCompost").innerHTML = compostText;
}

//---------CLICK RECYCLE FUNCTION-----------

function clickRecycle(){
  var r = document.getElementById("recycleSelect").value;
  var resultR = parseFloat(r);
  document.getElementById("recycleCount").innerHTML = resultR;

  var recycleText = document.getElementById("recycleText").value;
  document.getElementById("TextRecycle").innerHTML = recycleText;
}

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
					<Description>How many pieces of {waste_type} are you throwing out?</Description>
					<Select id='garbageSelect'>
						<option disabled value='0'>
							0
						</option>
						<option value='1'>1</option>
						<option value='2'>1</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
					</Select>
					<Description>Write a note to remember this entry ({optional})</Description>
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
					<Description>How many pieces of {waste_type} are you throwing out?</Description>
					<Select id='compostSelect'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>1</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
					</Select>
					<Description>Write a note to remember this entry ({optional})</Description>
					<TextBox id='compostText' placeholder={note}></TextBox>
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
					<Description>How many pieces of {waste_type} are you throwing out?</Description>
					<Select id='recycleSelect'>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>1</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
						<option value='10'>10</option>
					</Select>
					<Description>Write a note to remember this entry ({optional})</Description>
					<TextBox id='recycleText' placeholder={note}></TextBox>
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
						<TextG id='TextGarbage'></TextG>
					</TextCont>

					<TextCont>
						<TextG id='TextCompost'></TextG>
					</TextCont>

					<TextCont>
						<TextG id='TextRecycle'></TextG>
					</TextCont>
				</BotCart>
			</CartCont>
			<Submit type='button' value='Submit'></Submit>
		</PageCont>
  );
}

export default IGCR;