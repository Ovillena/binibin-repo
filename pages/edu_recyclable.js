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

export default function EduRecycle(){
  return (
    //<div className={styles.container}>
      <PageCont
      initial={{opacity:0}} 
      animate={{opacity:1, transition:{duration:2, delay:0}}}
      >  
        <RowCont>
          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="newspaper.png"></EduImage>
            <Subhead text="Newspaper" color="black"></Subhead>
          </ItemCont>

          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="open-box.png"></EduImage>
            <Subhead text="Cardboard" color="black"></Subhead>
          </ItemCont>

          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="wine-bottles.png"></EduImage>
            <Subhead text="Glass Bottle" color="black"></Subhead>
          </ItemCont>
        </RowCont>


        <RowCont>
          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="eggs.png"></EduImage>
            <Subhead text="Egg Carton" color="black"></Subhead>
          </ItemCont>
          
          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="milk-box.png"></EduImage>
            <Subhead text="Milk Container" color="black"></Subhead>
          </ItemCont>

          <ItemCont as={motion.div} whileHover={{scale:1.1 }}>
            <EduImage src="water.png"></EduImage>
            <Subhead text="Water Bottle" color="black"></Subhead>
          </ItemCont>
        </RowCont>


      </PageCont>

    //</div>
  )
}
