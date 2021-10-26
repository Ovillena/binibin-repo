import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';


const Container = styled.div`
display:flex;
flex-grow:1;
flex-direction:column;
background-color:#95AFBA;
width:350px;
height:600px;
`

const Bar = styled.div`
background-color:white;
width:310px;
height:60px;
margin-top:40px;
margin-left:20px;
display:flex;
justify-content:center;
align-items:center;
position:static;
`
const Head = styled.h1`
color:white;
margin-left:40px;

`

const Text = styled.h2`
color:black;
`


const Signout = styled.h2`
color:White;
display:flex;
margin-top:250px;
justify-content:center;
`



const Side = ({})=>{
    return<Container>
        <Head>Account setting</Head>
        <Bar><Text>Enterprise Info</Text></Bar>
        <Bar><Text>Manage Account</Text></Bar>
        <Signout>Sign out</Signout>
     </Container>    
  }
  
  export default Side;