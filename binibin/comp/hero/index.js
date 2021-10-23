import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import Herro from '/public/herro.png'

const Container = styled.div`
display:flex;
flex-grow:1;
justify-content:center;


`
const Title = styled.h3`
color:#00000;
display:flex;
align-items:center;
text-align:center;
`


const Hero = ({})=>{
    return<Container>
    
    <Title>
        <Image src={Herro} width={2000} alt="idk"/>
    </Title>
        
    </Container>    
  }
  
  export default Hero;