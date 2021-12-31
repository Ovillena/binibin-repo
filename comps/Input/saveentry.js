import styled from 'styled-components';
import React from 'react';

const CartCont = styled.div`
	display: flex;
	border: 5px solid #003274;
	border-radius: 10px;
	flex-direction: column;
	margin-top: 10px;
  min-width: 277px;
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

const SaveEntry = ({
  onSubmitInteract = (e) => {}
}) => {
  return (
  <CartCont>
    <Submit type='button' value='Save Entries' onClick={ (e) => {onSubmitInteract(e)} }></Submit>
    </CartCont>
  );
};

export default SaveEntry;