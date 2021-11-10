import styled from 'styled-components';
import React from 'react';

import EduImage from '../comps/EduImage';


const PageCont = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
`

const RowCont = styled.div`
  display:flex;
  justify-content:space-around;
  padding:20px;
`


export default function EduGarbage(){
  return (
    //<div className={styles.container}>
      <PageCont>
        <RowCont>
          <EduImage src="plastic-bag.png"></EduImage>
          <EduImage src="bubble-wrap.png"></EduImage>
          <EduImage src="candy-wrapper.png"></EduImage>
        </RowCont>


      </PageCont>

    //</div>
  )
}
