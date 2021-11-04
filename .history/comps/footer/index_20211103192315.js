import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    display:flex;
    background-color:#95AFBA;
    display:flex;
    flex:1;
    height:80px;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`

const TitleCont = styled.div`
    padding:20px;
`

const Title = styled.h3`
    color:#ffffff;
`


const Footer = ()=>{
    return<Container>

        <TitleCont>
            <Title>Learn more</Title>
        </TitleCont>

        <TitleCont>
            <Title>About us</Title>
        </TitleCont>

        <TitleCont>
            <Title>Contact us</Title>
        </TitleCont>
           
    </Container>
  }
  
  export default Footer;