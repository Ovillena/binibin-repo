import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Hero from '../comps/Hero'
import Side from '../comps/Side'
import Card from '../comps/Quickaccess'
import Input from '../comps/Quickaccess'
import Garbages from '../comps/Garbage'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import HeroImage from '../comps/Hero'
import CircleIcon from '../comps/CircleImage';
import MyButton from '../comps/Button';
import Login from './login'
import { Image } from 'semantic-ui-react';
import Subhead from '../comps/SubheadText';


const PageCont = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
`

const TopRow = styled.div`
  display:flex;
`

const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
`

const MissionCont = styled.div`
  width:273px;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const MissionRow = styled.div`
  display:flex;
  flex:1;
  justify-content:space-around;
  flex-direction:row;
  padding:20px;
  flex-wrap:wrap;
`

const ParagraphSec = styled.div`
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  text-align:center;
  padding:20px;
`

const BodyText = styled.p`
  width:50%;
`
const ButtonCont = styled.div`
  display:flex;
  justify-content:center;
  padding:20px;
`

<<<<<<< HEAD
export default function Home() {
  return <Container>
    {/* <Input></Input> */}
  {/* <Hero></Hero> */}
  {/*<Footer></Footer> */}
  {/* <Side></Side> */}
  <Garbages></Garbages>
  </Container>
