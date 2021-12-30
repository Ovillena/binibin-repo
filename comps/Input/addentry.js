import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

//change date, new waste type, new weight unit
const ItemCont = styled.form`
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 20px;
	border-radius: 10px;
	background-color: ${props => props.colors};
	align-items: center;
`;

const Description = styled.label`
	margin-top: 10px;
	max-width: 180px;
	word-wrap: wrap;
  text-align: left;
`;

const Select = styled.input`
	display: flex;
	max-width: 180px;
	border-radius: 10px;
  border: solid 1px;
  padding: 20px;
`;

const TextBox = styled.textarea`
	min-height: 60px;
	border-radius: 10px;
	padding: 10px;
`;

const Submit = styled.button`
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

const myLoader = ({ src, width }) => {
	return `${src}?w=${width}`;
};


const AddEntry = ({
  item_name = 'Garbage',
	waste_type = item_name.toLowerCase(),
	unit = 'kg',
	img_src = 'garbagebag.png',
	alt = 'garbage bag',
	color = 'black',
	// itemcount = 0,
  g = 0,
  onButtonInteract = () => {
    
    // console.log(item_count);
    // setValue(Select.currentTarget.value);
    // console.log(value);
  }
}) => {
  const [gar, setgar] = useState(g);

  // const [value, setValue] = useState(item_count);
  return (
    <ItemCont colors={color}>
      <BoldText text={item_name}></BoldText>
      <Image
        loader = {myLoader}
        src = {img_src}
        width = {150}
        height = {150}
        alt = {alt}
        />
      <Description htmlFor = 'weight'>How many <b>{unit}</b> of <b>{waste_type}</b> have you collected?</Description>
      
      {/* <Select type='text' list='inputnumber' onButtonInteract={e => {setValue(e.currentTarget.value);}}/> */}
      {/* <Select type='text' list='inputnumber' gar={gar} onChange={ e => {setgar(e.currentTarget.value)} } onKeyDown={(event) => console.log(gar)} /> */}
      <Select placeholder="0" type = 'text' id = 'weight' name = 'inputweight' list = 'inputweight' 
        // onChange = { (e) => {setgar(gar, e.target.value)} } 
        // onKeyUp = {(event) => console.log(event.target.value)} 
        onChange = {(event) => localStorage.setItem(`${waste_type}Count`, event.target.value)}
        // onSubmit = { () => {onButtonInteract(gar)} }
        />
        <datalist id='inputweight'>
          <option value='0'/>
          <option value='1'/>
          <option value='2'/>
          <option value='3'/>
          <option value='4'/>
          <option value='5'/>
          <option value='6'/>
          <option value='7'/>
          <option value='8'/>
          <option value='9'/>
          <option value='10'/>
        </datalist>
      <Description htmlFor = 'textnote'> Add an optional note </Description>
      <TextBox id = 'textnote' placeholder = 'subaccount'
      onChange = {(event) => localStorage.setItem(`${waste_type}Text`, JSON.stringify(event.target.value))} />
      {/* <Submit type = 'button' value = 'Add Entry' onClick = { () => {onButtonInteract()} }/> */}
      {/* <Submit type = 'submit' onClick = { () => {onButtonInteract()} }> Add Entry </Submit> */}
    </ItemCont>
  );
};

export default AddEntry;