import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import Header from '../comps/HeaderText';
import Button from '../comps/Button';
import IGCR from '../comps/InputGCR';
import EntryItem from '../comps/EntryItem';
import { getFontDefinitionFromManifest } from 'next/dist/server/font-utils';
import UserNav from '../comps/UserNav';
import FooterComp from '../comps/footer';
import InputCounter from '../comps/InputCounter';

import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";

const Cont = styled(motion.div)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-height: 100vh;
`;

const TopRow = styled.div`
  display:flex;
  width:100vw;
`;

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
  width:100vw;
`;

const SubCont = styled.div`
  display:flex;
`;

const CartCont = styled.div`
  display:flex;
  border: 5px solid #003274;
  border-radius:10px;
`

const TypeCont = styled.div`
  display:flex;
`

const LoadDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

export default function Home() {

    //-------Loading screen-----------
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }, [])

  return(

    loading ? 
    <LoadDiv>
      <PulseLoader 
      color={'#003274'} 
      loading={loading} 
      size={20}
      />
      </LoadDiv>
      : 
      
    <Cont
    initial={{opacity:0}} 
    animate={{opacity:100, transition:{ease:"easeIn", duration:3, delay:0}}}
    >
			<SubCont>
				<Header text='Record New Entries'></Header>
			</SubCont>
      <SubCont>
        <IGCR/>
      </SubCont>
      <FooterCont>
        <FooterComp></FooterComp>
      </FooterCont>
  </Cont>
  )
}