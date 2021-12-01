import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import HeaderText from '../comps/HeaderText';
import Subhead from '../comps/SubheadText';
import CircleImage from '../comps/CircleImage';
import HelpfulResource from '../comps/HelpfulResource';

import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";

const PageCont = styled(motion.div)`
display:flex;
flex-direction:column;
min-height:100vh;
`

const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:50px;
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
  margin-top:50px;
`

const Row = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:30px;
`

const Member = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:10px 30px;
`

const MemberName = styled.h3`
  margin:0;
  max-width:140px;
  text-align:center;
`;

const LoadDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

export default function AboutUs(){

  //-------Loading screen-----------
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  return (
    //<div className={styles.container}>

    loading ? 

    <LoadDiv>
      <PulseLoader 
      color={'#003274'} 
      loading={loading} 
      size={20}
      />
      </LoadDiv>

      : 

      <PageCont
      initial={{opacity:0}} 
      animate={{opacity:100, transition:{ease:"easeIn", duration:2, delay:0}}}
      >

    <HeaderCont>
      <HeaderText text="Meet Our Team"></HeaderText>
    </HeaderCont>

    <Row>
      <Member>
        <motion.div whileHover={{scale:1.1 }}>
        <CircleImage image="megan.jpg"/>
        </motion.div>
        <Subhead text="Megan Kuo"/>
        <MemberName>Project Manager, Developer</MemberName>
      </Member>

      <Member>
        <motion.div whileHover={{scale:1.1 }}>
        <CircleImage image="lance.jpg"/>
        </motion.div>
        <Subhead text="Lance"/>
        <MemberName>Designer</MemberName>
      </Member>

      <Member>
        <motion.div whileHover={{scale:1.1 }}>
        <CircleImage image="octavio.jpg"/>
        </motion.div>
        <Subhead text="Octavio Villena"/>
        <MemberName>Developer</MemberName>
      </Member>
    </Row>

    <Row>
      <Member>
        <motion.div whileHover={{scale:1.1 }}>
        <CircleImage image="bonnie.jpg"/>
        </motion.div>
        <Subhead text="Bonnie Dam"/>
        <MemberName>Designer</MemberName>
      </Member>

      <Member>
        <motion.div whileHover={{scale:1.1 }}>
        <CircleImage image="catherine.jpg"/>
        </motion.div>
        <Subhead text="Catherine Lam"/>
        <MemberName>Designer</MemberName>
      </Member>

      <Member>
        <motion.div whileHover={{scale:1.1 }}>
        <CircleImage image="jojo.jpg"/>
        </motion.div>
        <Subhead text="Jo Jo Lam"/>
        <MemberName>Developer, Time Keeper</MemberName>
      </Member>
    </Row>

    <Row as={motion.div} whileHover={{scale:1.1 }}>
      <HelpfulResource text="Read Our Project Progress Report" href="https://catla.ca/binit/"></HelpfulResource>
    </Row>

    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont>


      </PageCont>

    //</div>
  )
}
