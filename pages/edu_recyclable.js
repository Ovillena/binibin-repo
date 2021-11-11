import styled from 'styled-components';
import React from 'react';

import EduImage from '../comps/EduImage';
import Subhead from '../comps/SubheadText';

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

const ItemCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export default function EduRecycle(){
  return (
    //<div className={styles.container}>
      <PageCont>
        
        <RowCont>
          <ItemCont>
            <EduImage src="newspaper.png"></EduImage>
            <Subhead text="Newspaper" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="open-box.png"></EduImage>
            <Subhead text="Cardboard" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="wine-bottles.png"></EduImage>
            <Subhead text="Glass Bottles" color="black"></Subhead>
          </ItemCont>
        </RowCont>

        <RowCont>
          <ItemCont>
            <EduImage src="newspaper.png"></EduImage>
            <Subhead text="Newspaper" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="open-box.png"></EduImage>
            <Subhead text="Cardboard" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="wine-bottles.png"></EduImage>
            <Subhead text="Glass Bottles" color="black"></Subhead>
          </ItemCont>
        </RowCont>


      </PageCont>

    //</div>
  )
}
