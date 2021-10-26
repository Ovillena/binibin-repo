import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import Herro from '/public/herro.png'

const Container = styled.div`
display:flex;
flex-grow:1;
justify-content:center;
align-items: center;
`
const Title = styled.h3`
color:#FFFFFF;
position: absolute;
z-index: 1;
font-size:96px;
`


const Hero = ({})=>{
    return<Container>
    
        <Title>See how your actions have an impacts</Title>
        <Image src={Herro} width={2000} alt="idk">
        </Image>
    
        
    </Container>    
  }
  
  export default Hero;