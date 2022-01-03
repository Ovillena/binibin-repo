import styled from 'styled-components';
import React from 'react';
import BoldText from '../BoldText';

const SectionCont = styled.div`
  display: flex;
	border: 5px solid #003274;
	border-radius: 10px;
	margin-top: 10px;
  align-items: baseline;
  padding: 5px 10px 12px 0;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;
`;
  
const ItemCont = styled.div`
  display: flex;
  align-items: baseline;
  :first-child {
    margin-left:23px;
  }
`;

const Description = styled.label`
  margin-top: 10px;
	max-width: 180px;
	word-wrap: wrap;
  text-align: left;
`;

const Calendar = styled.input`
  border: solid 1px;
  border-radius: 5px;
`;

const Account = styled.input`
	display: flex;
	max-width: 180px;
	border-radius: 5px;
  border: solid 1px;
  padding: 5px;
`;

const SetEntries = () => {
  return (
    <SectionCont>
      <ItemCont>
        <Description htmlFor = 'date'> <BoldText text='Date'/> </Description>
        <Calendar type = 'date' id = 'date'
          onChange = {(event) => localStorage.setItem('date', event.target.value)}
        />
      </ItemCont>
      <ItemCont>
        <Description htmlFor = 'subacct'> <BoldText text='Account'/> </Description>
        <Account placeholder='Select an account' type = 'text' id = 'subacct' name = 'inputsubacct' list = 'inputsubacct' 
          onChange = {(event) => localStorage.setItem('subacct', event.target.value.toLowerCase().split(' ').join('_'))}
        />
      </ItemCont>
      <datalist id = 'inputsubacct'>
        <option value='Client 1'/>
        <option value='Client 2'/>
        <option value='Client 3'/>
      </datalist>
    </SectionCont>
  )
}

export default SetEntries;