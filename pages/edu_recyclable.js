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

export default function EduRecycle(){
  return (
    //<div className={styles.container}>
      <PageCont>

        <RowCont>
          <EduImage src="newspaper.png"></EduImage>
          <EduImage src="wine-bottles.png"></EduImage>
        </RowCont>


      </PageCont>

    //</div>
  )
}
