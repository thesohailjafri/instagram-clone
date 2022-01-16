import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Stories from '../components/Stories'

export default function Home() {
  return (
    <div className=" bg-slate-50 min-h-screen w-screen overflow-hidden">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/images/instagram-favicon.ico" />
      </Head>
      {/* HEADER */}
      <Header />
      {/* MAIN */}
      <Main />
    </div>
  )
}
