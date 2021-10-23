import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
display:flex;
flex-grow:1;
width:100%;
height:80px;
justify-content:center;
background-color:#95AFBA;

`
const Title = styled.h3`
display:flex;
flex-direction:row;
margin-left:140px;
color:#ffffff;
`


const Footer = ({})=>{
    return<Container>
        <Title>Learn more</Title>
        <Title>About us</Title>
        <Title>Contact us</Title>
    </Container>
  }
  
  export default Footer;