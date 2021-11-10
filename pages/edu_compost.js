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

export default function EduCompost(){
  return (
    //<div className={styles.container}>
      <PageCont>

    <RowCont>
      <EduImage src="fried-egg.png"></EduImage>
    </RowCont>

      </PageCont>

    //</div>
  )
}
