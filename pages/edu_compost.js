import styled from 'styled-components';
import React from 'react';

import EduImage from '../comps/EduImage';
import Subhead from '../comps/SubheadText';

import { motion } from 'framer-motion';

const PageCont = styled(motion.div)`
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
      <PageCont
      initial={{opacity:0}} 
      animate={{opacity:1, transition:{duration:0.5, delay:0}}}
      >
        <RowCont>
          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="fried-egg.png"></EduImage>
            <Subhead text="Egg Shell" color="black"></Subhead>
          </ItemCont>

          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="fish-bone.png"></EduImage>
            <Subhead text="Bones" color="black"></Subhead>
          </ItemCont>

          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="popsicle.png"></EduImage>
            <Subhead text="Popsicle Sticks" color="black"></Subhead>
          </ItemCont>
        </RowCont>


        <RowCont>
          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="tea-bag.png"></EduImage>
            <Subhead text="Tea Bag" color="black"></Subhead>
          </ItemCont>

          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="fruits.png"></EduImage>
            <Subhead text="Fruits" color="black"></Subhead>
          </ItemCont>

          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="vegetable.png"></EduImage>
            <Subhead text="Vegetables" color="black"></Subhead>
          </ItemCont>
        </RowCont>

      </PageCont>

    //</div>
  )
}
