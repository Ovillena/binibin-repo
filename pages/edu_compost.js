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

export default function EduCompost(){
  return (
    //<div className={styles.container}>
      <PageCont>

        <RowCont>
          <ItemCont>
            <EduImage src="fried-egg.png"></EduImage>
            <Subhead text="Egg Shell" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="fish-bone.png"></EduImage>
            <Subhead text="Bones" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="popsicle.png"></EduImage>
            <Subhead text="Popsicle Sticks" color="black"></Subhead>
          </ItemCont>
        </RowCont>


        <RowCont>
          <ItemCont>
            <EduImage src="tea-bag.png"></EduImage>
            <Subhead text="Tea Bag" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="fruits.png"></EduImage>
            <Subhead text="Fruits" color="black"></Subhead>
          </ItemCont>
          <ItemCont>
            <EduImage src="vegetable.png"></EduImage>
            <Subhead text="Vegetables" color="black"></Subhead>
          </ItemCont>
        </RowCont>

      </PageCont>

    //</div>
  )
}
