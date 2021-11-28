import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import Header from '../comps/HeaderText';
import Button from '../comps/Button';
import IGCR from '../comps/InputGCR';
import EntryItem from '../comps/EntryItem';
import { getFontDefinitionFromManifest } from 'next/dist/server/font-utils';
import UserNav from '../comps/UserNav';
import FooterComp from '../comps/footer';
import InputCounter from '../comps/InputCounter';

const Cont = styled.div`
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

export default function Home() {

  return(
    <Cont>
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