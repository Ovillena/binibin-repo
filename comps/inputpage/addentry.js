import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import React from 'react';

const TopCont = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
`;

const ItemCont = styled.form`
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 20px;
	border-radius: 10px;
	background-color: ${props => props.colors};
	align-items: center;
`;

const Description = styled.p`
	margin-top: 10px;
	max-width: 180px;
	word-wrap: wrap;
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

const myLoader = ({ src }) => {
	return `${src}`;
};

const AddEntry = ({
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
  onButtonInteract = () => {}
}) => {
  return (
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
      <Submit type='button' value='Add Entry' onClick={()=>{onButtonInteract()}}></Submit>
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
      <Submit type='button' value='Add Entry' onClick={()=>{onButtonInteract()}}></Submit>
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
      <Submit type='button' value='Add Entry' onClick={()=>{onButtonInteract()}}></Submit>
    </ItemCont>
    </TopCont>
  );
};

export default AddEntry;