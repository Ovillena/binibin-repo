import styled from 'styled-components';
import React from 'react';
import router, { useRouter } from "next/router";

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


const FooterComp = ({})=>{

   // routeTo = "/"

    return<Container>

        <TitleCont>
            <Title onClick={()=>router.push("/education")}>Learn more</Title>
        </TitleCont>

        <TitleCont>
            <Title onClick={()=>router.push("/aboutus")}>About us</Title>
        </TitleCont>

        <TitleCont>
            <Title onClick={()=>router.push("/customerservice")}>Contact us</Title>
        </TitleCont>
           
    </Container>
  }
  
  export default FooterComp;