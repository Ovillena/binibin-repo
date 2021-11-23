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
  flex-direction:column;
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

//-------------------------Notes Input------------------------
const TextG = styled.p`

`

const TextCont = styled.div`
  display:flex;
`

const TopCart = styled.div`
  display:flex; 
  justify-content:space-around;
  flex:1;
`
const BotCart = styled.div`
  display:flex;
  justify-content:space-around;
  flex:1;
`


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

//-------Click garbage function-----------

  function clickGarbage(){

  //NUMBER OF GARBAGE ITEMS

    //get the selected number of garbage option and turn it into a float
    var g = parseFloat(document.getElementById("garbageSelect").value);

    if (typeof(Storage) !== "undefined"){
      //if there is something already stored in garcount,
      if (localStorage.garcount) {
        //add the selected option to the current garcount value in localstorage
        localStorage.garcount = parseFloat(localStorage.garcount) + g;
      } else {
        //if there were no garbage entries, set the garcount to zero
        localStorage.garcount = g;
      }
    }
    //display the garbage count in HTML
    document.getElementById("garbageCount").innerHTML = localStorage.garcount;

  //GARBAGE NOTES

    //get the newest inputted note for garbage
    var garinput = document.getElementById("garbageText").value; 
    
    var addGarbageNote = function (gartext, garinput, delimiter) {
      //get the existing notes stored in gartext
      var existing = localStorage.getItem(gartext);
      //add the newest inputted note to the existing notes
      var data = existing ? existing + delimiter + garinput : garinput;
      //save the new note
      localStorage.setItem(gartext, data);
    }

    addGarbageNote("gartext", garinput, ", ")

    //display the garbage note in HTML
    document.getElementById("textGarbage").innerHTML = localStorage.gartext;

  } // End of clickGarbage function


//-------Click compost function-----------

function clickCompost(){

  //NUMBER OF COMPOST ITEMS

    //get the selected number of compost option and turn it into a float
    var c = parseFloat(document.getElementById("compostSelect").value);

    if (typeof(Storage) !== "undefined"){
      //if there is something already stored in comcount,
      if (localStorage.comcount) {
        //add the selected option to the current comcount value in localstorage
        localStorage.comcount = parseFloat(localStorage.comcount) + c;
      } else {
        //if there were no compost entries, set the comcount to zero
        localStorage.comcount = c;
      }
    }
    //display the compost count in HTML
    document.getElementById("compostCount").innerHTML = localStorage.comcount;

  //COMPOST NOTES

    //get the newest inputted note for compost
    var cominput = document.getElementById("compostText").value; 
    
    var addCompostNote = function (comtext, cominput, delimiter) {
      //get the existing notes stored in comtext
      var existing = localStorage.getItem(comtext);
      //add the newest inputted note to the existing notes
      var data = existing ? existing + delimiter + cominput : cominput;
      //save the new note
      localStorage.setItem(comtext, data);
    }

    addCompostNote("comtext", cominput, ", ")

    //display the compost note in HTML
    document.getElementById("textCompost").innerHTML = localStorage.comtext;

} // End of clickCompost function

//---------CLICK RECYCLE FUNCTION-----------

function clickRecycle(){

  //NUMBER OF RECYCLABLE ITEMS

    //get the selected number of recycle option and turn it into a float
    var r = parseFloat(document.getElementById("recycleSelect").value);

    if (typeof(Storage) !== "undefined"){
      //if there is something already stored in reccount,
      if (localStorage.reccount) {
        //add the selected option to the current reccount value in localstorage
        localStorage.reccount = parseFloat(localStorage.reccount) + r;
      } else {
        //if there were no recycle entries, set the reccount to zero
        localStorage.reccount = r;
      }
    }
    //display the recycle count in HTML
    document.getElementById("recycleCount").innerHTML = localStorage.reccount;

  //RECYCLABLE NOTES

    //get the newest inputted note for recycle
    var recinput = document.getElementById("recycleText").value; 
    
    var addRecycleNote = function (rectext, recinput, delimiter) {
      //get the existing notes stored in rectext
      var existing = localStorage.getItem(rectext);
      //add the newest inputted note to the existing notes
      var data = existing ? existing + delimiter + recinput : recinput;
      //save the new note
      localStorage.setItem(rectext, data);
    }

    addRecycleNote("rectext", recinput, ", ")

    //display the recbage note in HTML
    document.getElementById("textRecycle").innerHTML = localStorage.rectext;
} // End of clickRecycle function

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
    <TextBox id="garbageText" placeholder={note}></TextBox>
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
    <TextBox id="compostText" placeholder={note}></TextBox>
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
    <TextBox id="recycleText" placeholder={note}></TextBox>
    <Submit type="button" value="Add Entry" onClick={clickRecycle}></Submit>
  </ItemCont>

  </TopCont>

{/* ----------------------CART COMPONENT------------------------- */}

  <CartCont>  

    <TopCart>

  <TypeCont>
    <SquareCont color={color}/>
    <ItemName>{item_name} &times;</ItemName>
    <ItemQuantity id="garbageCount"></ItemQuantity>
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

  </TopCart>

  <BotCart>

    <TextCont>
      <TextG id="textGarbage"></TextG>
    </TextCont>

    <TextCont>
      <TextG id="textCompost"></TextG>
    </TextCont>

    <TextCont>
      <TextG id="textRecycle"></TextG>
    </TextCont>
    
  </BotCart>

  </CartCont>


  </PageCont>
}

export default IGCR;