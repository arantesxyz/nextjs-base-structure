import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages'
import Logo from '../assets/logo.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Arantes Template</title>
      </Head>

      <Logo />
      <h1>Next.js React Structure</h1>
      <p>This is a next.js structure template!</p>
    </Container>
  )
}

export default Home
