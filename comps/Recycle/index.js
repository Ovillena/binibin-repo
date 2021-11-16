import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import InputTextComp from '../InputText';
import MyButton from '../Button';
import { Button } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import { useState } from 'react';

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
justify-content:center;
align-content:center;
`
//Quick access
// const Side = styled.div`
// width:400px;
// height:88px;
// background-color:#95AFBA;
// display;flex;
// flex-direction:row;
// border-radius: 20px 20px 0px 0px;
// border:solid #95AFBA;
// `
//Garbage
const Garbage = styled.div`
width:600px;
height:88px;
background-color:#95AFBA;
display;flex;
flex-direction:row;
border-radius: 20px 20px 0px 0px;
border:solid #95AFBA;
`
//Recycle
const Recycle = styled.div`
width:600px;
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
position:static;
gap:10px;
margin-right:130px;
`

const Cont = styled.div`
display:flex;
flex-direction:column;
margin-right:350px;
postion:static;
margin-top:200px;
margin-right:300px;
`

const Entrydiv = styled.div`
width:300px;
height:56px;
display:flex;
gap:10px;
margin-right:30px;
`

// Buttons and click Button
const ButtonCont = styled.div`
    display:flex;
    margin-top:10px;
    margin-right:40px;

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
display:flex;
`

// const Headers = styled.h2`
// color:black;
// margin-bottom:-20px;
// margin-top:-1px;
//

const Ml = styled.h3`
color:black;
`

const Headerr = styled.div`
display:flex;
flex-direction:row;
gap:225px;
margin-left:10px;
position:absolute;
`

const Title = styled.h2`
color:#95AFBA;
display:flex;
align-items:flex-start;
`
const myLoader = ({src}) => {
  return `${src}`
}

const options = [
  { key: 1, text: 'Unit', value: 1 },
  { key: 2, text: 'g', value: 2 },
  { key: 3, text: 'kg', value: 3 },
  { key: 4, text: 'ml', value: 4 },
]

const Recycles = ({
  width="158px",
  height="56px",
  bgcolor="#95AFBA",
  text="Search....",
  textcolor="white",
  src="plus.png",
})=>{
  const [count, setCount] = React.useState(0);
  
  const inc = (event) => {
    setCount(count + 1);
  };
  
  const dec = () => {
    setCount(count - 1);
  }
  return<Inside>  
    <Cont> 
    <Headerr>
    <Title>Type of Waste</Title> 
    <Title>Size</Title>
    <Title>Unit</Title>
    </Headerr>

    <Inputs>

    
    <InputTextComp placeholder="Search..." width="300px"></InputTextComp>
    

    <Entry>
    <Image loader={myLoader} src={src} width={28} height={1}/>
    </Entry>


    <InputTextComp placeholder="eg. 250" width="200px"></InputTextComp>

  
    <Dropdown clearable options={options} selection />

    
    <Entrydiv>
    <Button onClick={dec}>-</Button>
      <input type="number" value={count}></input>
    <Button onClick={inc}>+</Button>
    </Entrydiv>

    </Inputs>
   </Cont>

    <Div>    
    <ButtonCont>
        <ClickButton onClick={()=>{}} width={width} height={height} bgcolor={bgcolor} textcolor={textcolor}>{text="Add Entry"}</ClickButton>
    </ButtonCont>

    </Div>
    
    

    </Inside>
    
  }
  export default Recycles;