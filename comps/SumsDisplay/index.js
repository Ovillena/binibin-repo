import styled from 'styled-components';
import { useState } from 'react';

const ItemCont = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 5px;
	align-items: center;
`;

const Square = styled.div`
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
	font-weight: normal;
`;

const SingleItem = styled.div`
  display:flex;
  align-items:center;
  margin:0 10px 10px; 10px;
`;

const Notes = styled.div`
	display: flex;
	width: 100%;
`;

const Text = styled.span`
	white-space: pre-line;
	word-wrap: break-word;
	width: 33%;
	margin-right: 5px;
	padding: 10px;
	background-color: ${({ color }) =>
		(color === 'garbage' && '#E9E9E9') ||
		(color === 'compost' && '#E2EED7') ||
		(color === 'recycling' && '#DFEAEF')};
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin: 10px;
`;

const Expand = styled.button`
	background-color: #ffc800;
	border: none;
	border-radius: 10px;
	font-weight: bold;
	height: 25px;
	margin-top: 8px;
	margin-left: 10px;
	cursor: pointer;
	&:hover {
		background-color: #e5a500;
	}
`;
const colours = [
	'rgba(255, 99, 132, 0.7)',
	'rgba(54, 162, 235, 0.7)',
	'rgba(255, 206, 86, 0.7)',
	'rgba(75, 192, 192, 0.7)',
	'rgba(153, 102, 255, 0.7)',
	'rgba(255, 159, 64, 0.7)',
];

const SumsDisplay = ({ sumsData }) => {
	// console.log(itemNames);
	return (
		<ItemCont>
			<Wrapper>
				<h2>Total weight for displayed period</h2>
			</Wrapper>
			<Wrapper>
				{sumsData ? (
					sumsData.map((item, i) => (
						<SingleItem key={i}>
							<Square color={colours[i]} />
							<ItemName>{item.item_name}:</ItemName>
							<ItemQuantity> { item.weight_total} kg</ItemQuantity>
						</SingleItem>
					))
				) : (
					<p>Sums are not currently being calculated</p>
				)}
				{/* <SingleItem>
					<Square color='#598B2C' />
					<ItemName>{itemNames[1]}</ItemName>
					<ItemQuantity>&times; 6 kg</ItemQuantity>
				</SingleItem>
				<SingleItem>
					<Square color='#2C5489' />
					<ItemName>{itemNames[2]}</ItemName>
					<ItemQuantity>&times; 7 kg</ItemQuantity>
				</SingleItem> */}
			</Wrapper>
		</ItemCont>
	);
};

export default SumsDisplay;
