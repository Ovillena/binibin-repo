import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    display:flex;
    height:80px;
    background-color:#95AFBA;
`

const TitleCont = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
`

const Title = styled.h3`
    color:#ffffff;
    background-color:red;
`


const Footer = ({})=>{
    return<Container>

        <TitleCont>
            <Title>Learn more</Title>
            <Title>About us</Title>
            <Title>Contact us</Title>
        </TitleCont>
           
    </Container>
  }
  
  export default Footer;