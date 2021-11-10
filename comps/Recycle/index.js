import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import InputTextComp from '../InputText';
import MyButton from '../Button';

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
justify-content:center;
align-items:center;
`
// The Main container
const Inside = styled.div`
display:flex;
width:1203px;
height:688px;
border:solid #95AFBA;
box-shadow:0px 3px 30px grey; 
border-radius: 30px 30px 20px 20px;
justify-content:center;
align-content:center;
`
//Quick access
const Side = styled.div`
width:400px;
height:88px;
background-color:#95AFBA;
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
background-color:white;
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
display:flex;
align-items:center;
flex-direction:row;
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

// const Items = styled.image`
// width:300px;
// height:200px;
// position:absolute;
// display:flex;
// align-content:center;
// align-items:center;
// justify-content:center;
// `

const Div = styled.div`
 display:flex;
 align-items:flex-end;
 gap:30px;
 margin-bottom:30px;
`

const Entry = styled.div`
width:158px;
height:56px;
background-color:orange;
display:flex;
`

// const Headers = styled.h2`
// color:black;
// margin-bottom:-20px;
// margin-top:-1px;
// `

// const Ml = styled.h3`
// color:black;
// `

const Title = styled.h2`
color:#95AFBA;
display:flex;
align-items:flex-start;

`
const myLoader = ({src}) => {
  return `${src}`
}

const Recycles = ({
  width="158px",
  height="56px",
  bgcolor="#95AFBA",
  text="Search....",
  textcolor="white",
  src="plus.png",
})=>{
  return<Inside>
    <Bottom>
    <Side><Text>Quick Access</Text></Side>
    <Garbage><Text>Garbage/Compost</Text></Garbage>
    <Recycle><Select>Recyclable/Search</Select></Recycle>
    </Bottom>
    

    <Container>
      
    <Inputs>
    <Title>Type of Waste</Title>
    <InputTextComp placeholder="Search..." width="400px"></InputTextComp>
    <Title>Size</Title>
    <Entry>
    <Image loader={myLoader} src={src} width={28} height={1}/>
    </Entry>
    <InputTextComp placeholder="eg. 250" width="200px"></InputTextComp>
    </Inputs>
   

    <Div>
    <ButtonCont>
        <ClickButton onClick={()=>{}} width={width} height={height} bgcolor={bgcolor} textcolor={textcolor}>{text="Add Entry"}</ClickButton>
    </ButtonCont>
    <ButtonCont>
        <ClickButton width={"273px"} height={height} bgcolor={bgcolor} textcolor="white">{text="Save to Quick Access"}</ClickButton>
    </ButtonCont>
    </Div>
    
    </Container>

    </Inside>
    
  }
  export default Recycles;