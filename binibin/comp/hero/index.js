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
position: absolute;
`


const Hero = ({})=>{
    return<Container>
    
    
        <Image src={Herro} width={2000} alt="idk">
        </Image>
    
        
    </Container>    
  }
  
  export default Hero;