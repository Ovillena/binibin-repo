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


export default function EduGarbage(){
  return (
    //<div className={styles.container}>
      <PageCont>
        
        <RowCont>
          <ItemCont>
            <EduImage src="plastic-bag.png"></EduImage>
            <Subhead text="Plastic Bags" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="bubble-wrap.png"></EduImage>
            <Subhead text="Bubble Wrap" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="candy-wrapper.png"></EduImage>
            <Subhead text="Candy Wrapper" color="black"></Subhead>
          </ItemCont>
        </RowCont>


        <RowCont>
          <ItemCont>
            <EduImage src="snacks.png"></EduImage>
            <Subhead text="Chip Bags" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="face-mask.png"></EduImage>
            <Subhead text="Face Mask" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="straw.png"></EduImage>
            <Subhead text="Plastic Straws" color="black"></Subhead>
          </ItemCont>
        </RowCont>



      </PageCont>

    //</div>
  )
}
