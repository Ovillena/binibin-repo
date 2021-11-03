import styled from 'styled-components';
import React from 'react';
import JuiceBox from '/public/juiceBox.png';

//inputs
const Container = styled.div`
display:flex;
flex-direction:row;
margin-top:200px;
margin-left:100px;
gap:10px;
`
//Top bar (access , garbage and recycles)
const Bottom = styled.div`
display:flex;
flex-direction:row;
position:absolute;
`
// The Main container
const Inside = styled.div`
display:flex;
width:1206px;
height:688px;
border:solid #95AFBA;
box-shadow:0px 3px 30px grey; 
flex-direction:
`
//Quick access
const Side = styled.div`
width:400px;
height:88px;
background-color:white;
display;flex;
flex-direction:row;
border-radius: 20px 20px 0px 0px;
border:solid #95AFBA;
`
//Garbage
const Garbage = styled.div`
width:400px;
height:88px;
background-color:#95AFBA;
display;flex;
flex-direction:row;
border-radius: 20px 20px 0px 0px;
border:solid #95AFBA;

`
//Recycle
const Recycle = styled.div`
width:400px;
height:88px;
background-color:#95AFBA;
display;flex;
flex-direction:row;
border-radius: 20px 20px 0px 0px;
border:solid #95AFBA;
justify-content:center;
align-items:center;
`
const Text = styled.h2`
color:#FFFFFF;
text-align:center;
margin-top:10px;
`
const Select = styled.h2`
color:#95AFBA;
text-align:center;
`
// Main inputs (where u can entry the stuff)
const Inputs = styled.div`
width:506px;
height:200px;
background-color:blue;
display:flex;
flex-direction:column;
`
// Buttons and click Button
const ButtonCont = styled.div`
    display:flex;
    margin-top:10px;
`
// button
const ClickButton = styled.button`
    width:${props=>props.width};
    height:${props=>props.height};
    background-color:${props=>props.bgcolor};
    color:${props=>props.textcolor};
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0px 4px 4px grey; 
    border:none;
`

const Items = styled.image`
width:300px;
height:200px;
position:absolute;
`
const Div = styled.div`
 display:flex;
 flex-direction:column;
 margin-left:329px;
`

const Entrydiv = styled.div`
width:158px;
height:56px;
background-color:orange;
`

const Headers = styled.h2`
color:black;
margin-bottom:-20px;
margin-top:-1px;
`

const Ml = styled.h3`
color:black;
`


const Input = ({
  width="158px",
  height="56px",
  bgcolor="#95AFBA",
  text="Add Entry",
  textcolor="white"
})=>{
  return<Inside>
    <Bottom>
    <Side><Select>Quick Access</Select></Side>
    <Garbage><Text>Garbage/Compost</Text></Garbage>
    <Recycle><Text>Recyclable/Search</Text></Recycle>
    </Bottom>

    <Container>
    <Inputs>

    <Items></Items>

    <Div>
    <Headers>Juice box</Headers>
    <Ml>250ml</Ml>
    <Entrydiv></Entrydiv>
    <ButtonCont>
        <ClickButton onClick={()=>{}} width={width} height={height} bgcolor={bgcolor} textcolor={textcolor}>{text}</ClickButton>
    </ButtonCont>
    </Div>
    </Inputs>
    <Inputs>
    <Items src={JuiceBox}></Items>

    <Div>
    <Headers>Juice box</Headers>
    <Ml>250ml</Ml>
    <Entrydiv></Entrydiv>
    <ButtonCont>
        <ClickButton width={width} height={height} bgcolor={bgcolor} textcolor="white">{text}</ClickButton>
    </ButtonCont>
    </Div>
    </Inputs>
    </Container>

    </Inside>
    
  }
  
  export default Input;