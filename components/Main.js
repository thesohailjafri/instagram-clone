import { useSession } from 'next-auth/react'
import React from 'react'
import Feeds from './Feeds'
import Stories from './Stories'
import Suggestions from './Suggestions'

export default function Main() {
  const { data: session } = useSession()

  return (
    <main
      className={`grid grid-cols-1 gap-x-6 ${
        session && 'lg:grid-cols-3'
      } gap-y-6 max-w-4/5xl mx-auto md:my-6 lg:my-8`}
    >
      {/* STORIES */}
      <div className=" col-span-1 lg:col-span-2 grid grid-col ">
        <Stories />
        <Feeds />
      </div>
      {session && <Suggestions />}
    </main>
  )
}
