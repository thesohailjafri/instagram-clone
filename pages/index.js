import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'
import Main from '../components/Main'
import PostModal from '../components/PostModal'
import Stories from '../components/Stories'

export default function Home() {
  return (
    <div className=" bg-gray-50 min-h-screen w-screen overflow-hidden">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/images/instagram-favicon.ico" />
        {/* <!-- Geo Positioning Meta Tags. --> */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="18;74" />
        <meta name="ICBM" content="18, 74" />
        {/* <!-- Search Eengine and Browser Meta Tags. --> */}
        <meta
          name="description"
          content="Instagram clone build with Next.js, TailwindCSS, Firebase v9"
        />
        <meta
          name="abstract"
          content="A instagram clone build by Sohail Jafri"
        />
        <meta name="rating" content="General" />
        {/* <!-- Open Graph Meta Tags (ogp.me) --> */}
        <meta property="og:image" content="./meta/thumbnail.png" />
        <meta property="og:site_name" content="Instagram Clone" />
      </Head>
      {/* Space */}
      <div className=" h-12 md:h-16 transition-all duration-300" />
      {/* MAIN */}
      <Main />
      <PostModal />
    </div>
  )
}
