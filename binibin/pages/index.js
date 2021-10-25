import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comp/footer'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Hero from '../comp/hero'
import Side from '../comp/Side'


const Container = styled.div`
display:flex;

`

export default function Home() {
  return <Container>

  <Hero></Hero>
  {/* <Footer></Footer> */}
  {/* <Side></Side> */}
  </Container>
  
  
}
