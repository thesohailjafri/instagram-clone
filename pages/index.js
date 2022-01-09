import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <div className=" min-h-screen min-w-full">
      <Head>
        <title>Home</title>
      </Head>
      {/* HEADER */}
      <div className=" bg-white border-b border-gray-300 pt-3 pb-2">
        <Header />
      </div>
      {/* STORIES */}
      <Stories />
      {/* MAIN */}
      <Main />
    </div>
  );
}
