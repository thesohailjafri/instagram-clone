import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'
import Main from '../components/Main'
import PostModal from '../components/PostModal'
import Stories from '../components/Stories'

export default function Home() {
  return (
    <div className=" bg-slate-50 min-h-screen w-screen overflow-hidden">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/images/instagram-favicon.ico" />
      </Head>
      {/* Space */}
      <div className=" h-12 md:h-16 transition-all duration-300" />
      {/* MAIN */}
      <Main />
      <PostModal />
    </div>
  )
}
