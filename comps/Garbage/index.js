import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import {Button} from 'semantic-ui-react';
import EduImage from '../EduImage';
import {useState} from 'react';
import Modal from '../../pages/api/modal';

//inputs
const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 200px;
	margin-left: 80px;
	gap: 10px;
`;
//Top bar (access , garbage and recycles)
const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	justify-content: center;
	align-items: center;
`;
// The Main container
const Inside = styled.div`
	display: flex;
	width: 1206px;
	height: 688px;
	position: static;
`;
//Quick access
const Side = styled.div`
width:400px;
height:88px;
background-color:#95AFBA;
display;flex;
flex-direction:row;
border-radius: 20px 20px 0px 0px;
border:solid #95AFBA;
`;
//Garbage
const Garbage = styled.div`
width:600px;
height:88px;
background-color:white;
display;flex;
flex-direction:row;
border-radius: 20px 20px 0px 0px;
border:solid #95AFBA;
`;
//Recycle
const Recycle = styled.div`
width:600px;
height:88px;
background-color:#95AFBA;
display;flex;
flex-direction:row;
border-radius: 20px 20px 0px 0px;
border:solid #95AFBA;
justify-content:center;
align-items:center;
`;
const Text = styled.h2`
	color: #ffffff;
	text-align: center;
	margin-top: 10px;
`;
const Select = styled.h2`
	color: #95afba;
	text-align: center;
`;
// Main inputs (where u can entry the stuff)
const Inputs = styled.div`
	width: 506px;
	height: 205px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 3px 30px grey;
`;
// Buttons and click Button
const ButtonCont = styled.div`
	display: flex;
	margin-top: 10px;
`;
// button
const ClickButton = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-color: ${(props) => props.bgcolor};
	color: ${(props) => props.textcolor};
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 4px 4px grey;
	border: none;
`;

const Items = styled.div`
	display: flex;
	margin-top: 30px;
	margin-left: 50px;
`;
const Div = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 275px;
	position: absolute;
`;

const Entrydiv = styled.div`
	width: 158px;
	height: 56px;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
`;

const Headers = styled.h2`
	color: black;
	margin-bottom: -20px;
	margin-top: -1px;
`;

const Ml = styled.h3`
	color: black;
`;

const myLoader = ({src}) => {
	return `${src}`;
};

const Garbages = ({
	width = '158px',
	height = '56px',
	bgcolor = '#95AFBA',
	text = 'Add Entry',
	textcolor = 'white',
	src = 'garbagebag.png',
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const [count, setCount] = React.useState(0);

	const inc = (event) => {
		setCount(count + 1);
	};

	const dec = () => {
		setCount(count - 1);
	};

	const postData = {
		item_name: 'Garbage',
		waste_type: 'garbage',
		item_count: count,
	};

	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(postData),
	};

	const onSubmit = async () => {
		await fetch('http://localhost:8080/api/entries/add', requestOptions)
			.then((response) => {
				console.log(response);
				setIsOpen(true);
			})
			.catch((err) => {
				console.log(err);
				setIsOpen(false);
			});
	};

	return (
		<Inside>
			<Container>
				<Inputs>
					<Items>
						<EduImage src="garbagebag.png"></EduImage>
					</Items>

					<Div>
						<Headers>Garbage</Headers>
						<Ml>Number of bags</Ml>
						<Entrydiv>
							<Button onClick={dec}>-</Button>
							<input type="number" value={count}></input>
							<Button onClick={inc}>+</Button>
						</Entrydiv>
						{/* <ButtonCont> */}
							<ClickButton
								onClick={onSubmit}
								width={width}
								height={height}
								bgcolor={bgcolor}
								textcolor={textcolor}
							>
								{text}

								<Modal open={isOpen} onClose={() => setIsOpen(false)}>
									Hello testing
								</Modal>
							</ClickButton>
						{/* </ButtonCont> */}
					</Div>
				</Inputs>

				{/* <Inputs>
    <Items>
    <EduImage src="garbagebag.png"></EduImage>
    </Items>

    <Div>
    <Headers>Compost</Headers>
    <Ml>Number of Bags</Ml>

    <Entrydiv>
    <Button onClick={dec} >-</Button>
      <input type="number" value={count}></input>
    <Button onClick={inc}>+</Button>
    </Entrydiv>

    <ButtonCont>
        <ClickButton width={width} height={height} bgcolor={bgcolor} textcolor="white">{text}</ClickButton>
    </ButtonCont>
    </Div>
    </Inputs> */}
			</Container>
		</Inside>
	);
};
export default Garbages;
