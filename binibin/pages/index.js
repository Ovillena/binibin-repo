import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Hero from '../comps/Hero'
import Side from '../comps/Side'
import Card from '../comps/Card'


const Container = styled.div`
display:flex;
flex-direction:column;
`

export default function Home() {
  return <Container>
    {/* <Card></Card> */}
  {/* <Hero></Hero> */}
  {/*<Footer></Footer> */}
  <Side></Side>
  </Container>
  
  
}
