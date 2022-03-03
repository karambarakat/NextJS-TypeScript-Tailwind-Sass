import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tailwind + Sass + NextJS + TypeScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-screen grid place-items-center'><h1>hello world</h1></div>
    </div>
  )
}

export default Home
