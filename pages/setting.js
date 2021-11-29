import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React from 'react';

import HeaderText from '../comps/HeaderText';
//import Side from '../comps/Side';



const PageCont = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
`


const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
`

export default function Setting(){
  return (
    //<div className={styles.container}>
      <PageCont>



    <HeaderCont>
      <HeaderText>Our Mission</HeaderText>
    </HeaderCont>




    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont>


      </PageCont>

    //</div>
  )
}
