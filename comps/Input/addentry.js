import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
import React from 'react';

const ItemCont = styled.form`
	display: flex;
	margin: 10px;
	padding: 20px;
	border-radius: 10px;
	background-color: ${props => props.bgcolor};
	align-items: baseline;
`;

const Description = styled.label`
	margin-top: 10px;
	max-width: 180px;
	word-wrap: wrap;
  text-align: left;
`;

const Select = styled.input`
	display: flex;
	max-width: 90px;
	border-radius: 5px;
  border: solid 1px;
  padding: 5px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const myLoader = ({ src, width }) => {
	return `${src}?w=${width}`;
};


const AddEntry = ({
  item_name = 'Garbage',
	waste_type = item_name.toLowerCase().split(' ').join('_'),
	unit = 'kg',
	img_src = 'garbagebag.png',
	alt = 'garbage bag',
	color = 'black',
}) => {
  return (
    <ItemCont bgcolor={color}>
      <Image
        loader = {myLoader}
        src = {img_src}
        width = {20}
        height = {20}
        alt = {alt}
        />
      <Description htmlFor = 'weight'>
        <BoldText text={item_name}/>
      </Description>

      <Select 
        placeholder = '0' 
        min = '0'
        type = 'number' 
        id = 'weight' 
        name = 'inputweight' 
        onWheel={(event) => event.target.blur()}
        onChange = {(event) => localStorage.setItem(`${waste_type}_count`, event.target.value)}
        />
        <BoldText text={unit}/>
    </ItemCont>
  );
};

export default AddEntry;