import styled from 'styled-components';
import {useEffect, useState} from 'react';
import React from 'react';
import Modal from '../Modal';

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

const TextG = styled.p``;

const TextCont = styled.div`
	display: flex;
`;

const TopCart = styled.div`
	display: flex;
	justify-content: space-around;
	flex: 1;
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

const SaveEntry = ({
	item_name = 'Garbage',
	color = 'black',
  value = 0,
  onSubmitInteract = () => {}
}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
  <CartCont>
    <TopCart>
      <TypeCont>
        <SquareCont color={color} />
        <ItemName>{item_name} &times;</ItemName>
        <ItemQuantity id='garbageCount'>{value}</ItemQuantity>
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
    <Submit type='button' value='Save Entries' onClick={onSubmitInteract()}></Submit>
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalText>Your input has been submitted</ModalText>
    </Modal>
    </CartCont>
  );
};

export default SaveEntry;