import styled from 'styled-components';
import React from 'react';
import BoldText from '../BoldText';

const SectionCont = styled.div`
  display: flex;
	border: 5px solid #003274;
	border-radius: 10px;
	margin-top: 10px;
  align-items: baseline;
  padding: 22px 10px 30px 0;
  flex-wrap: wrap;
  flex-direction: column;
`;

const ItemCont = styled.div`
  display: flex;
  align-items: baseline;
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
  margin: 0 0 23px 23px;
`;

const Account = styled.input`
	display: flex;
	max-width: 180px;
	border-radius: 5px;
  border: solid 1px;
  padding: 5px;
`;

const AllEntries = () => {
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
        <Account placeholder='select an account' type = 'text' id = 'subacct' name = 'inputsubacct' list = 'inputsubacct' 
          onChange = {(event) => localStorage.setItem('subacct', event.target.value)}
        />
      </ItemCont>
      <datalist id = 'inputsubacct'>
        <option value='client 1'/>
        <option value='client 2'/>
        <option value='client 3'/>
      </datalist>
    </SectionCont>
  )
}

export default AllEntries;