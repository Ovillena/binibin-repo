import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Hero from '../comps/hero'
import Side from '../comps/Side'


const Container = styled.div`
display:flex;
flex-direction:column;
`

export default function Home() {
  return <Container>

  {/* <Hero></Hero> */}
  {/*<Footer></Footer> */}
  <Side></Side>
  </Container>
  
  
}
