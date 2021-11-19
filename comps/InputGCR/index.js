import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
import EntryItem from '../EntryItem';
import InputCounter from '../InputCounter';
import EduImage from '../EduImage';
import { useState } from 'react';
  
const PageCont = styled.div`

`

const ItemCont = styled.form`
  display:flex;
  flex-direction:column;
  margin:10px;
  padding:10px;
  background-color:#ccc;
`;

//----------------------TOP ROW CONTAINER-----------------
const TopCont = styled.div`
  display:flex;

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
  max-width:90px;
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
  justify-content:space-around;
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


const myLoader = ({src}) => {
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
}) => {

function clickGarbage(){
  var g = document.getElementById("garbageSelect").value;
  var resultG = parseFloat(g);
  document.getElementById("garbageCount").innerHTML = resultG;
}

function clickCompost(){
  var c = document.getElementById("compostSelect").value;
  var resultC = parseFloat(c);
  document.getElementById("compostCount").innerHTML = resultC;
}

function clickRecycle(){
  var r = document.getElementById("recycleSelect").value;
  var resultR = parseFloat(r);
  document.getElementById("recycleCount").innerHTML = resultR;
}

  return <PageCont>

{/* ----------------------GARBAGE------------------------- */}

    <TopCont>

  <ItemCont>
    <BoldText text={item_name}></BoldText>
    <Image loader={myLoader} src={'/garbagebag.png'} width={50} height={150} alt={alt}/>
    <Description>How many pieces of {waste_type} are you throwing out?</Description>
    <Select id="garbageSelect">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
    <Description>Write a note to remember this entry ({optional})</Description>
    <TextBox placeholder={note}></TextBox>
    <Submit type="button" value="Add Entry" onClick={clickGarbage}></Submit>
  </ItemCont>

{/* ----------------------COMPOST------------------------- */}

  <ItemCont>
    <BoldText text={"Compost"}></BoldText>
    <Image loader={myLoader} src={'/tea-bag.png'} width={50} height={150} alt={alt}/>
    <Description>How many pieces of {waste_type} are you throwing out?</Description>
    <Select id="compostSelect">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
    <Description>Write a note to remember this entry ({optional})</Description>
    <TextBox placeholder={note}></TextBox>
    <Submit type="button" value="Add Entry" onClick={clickCompost}></Submit>
  </ItemCont>

{/* ----------------------RECYCLE------------------------- */}

  <ItemCont>
    <BoldText text="Recycle"></BoldText>
    <Image loader={myLoader} src={'/newspaper.png'} width={50} height={150} alt={alt}/>
    <Description>How many pieces of {waste_type} are you throwing out?</Description>
    <Select id="recycleSelect">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
    <Description>Write a note to remember this entry ({optional})</Description>
    <TextBox placeholder={note}></TextBox>
    <Submit type="button" value="Add Entry" onClick={clickRecycle}></Submit>
  </ItemCont>

  </TopCont>

{/* ----------------------CART COMPONENT------------------------- */}

  <CartCont>  

  <TypeCont>
    <SquareCont color={color}/>
    <ItemName>{item_name} &times;</ItemName>
    <ItemQuantity id="garbageCount"> </ItemQuantity>
  </TypeCont>

  <TypeCont>
    <SquareCont color={"#3A7A1C"}/>
    <ItemName>{"Compost"} &times;</ItemName>
    <ItemQuantity id="compostCount"></ItemQuantity>
  </TypeCont>

  <TypeCont>
    <SquareCont color={"#3C64B1"}/>
    <ItemName>{"Recycle"} &times;</ItemName>
    <ItemQuantity id="recycleCount"></ItemQuantity>
  </TypeCont>

  </CartCont>


  </PageCont>
}

export default IGCR;