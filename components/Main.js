import { useSession } from 'next-auth/react'
import React from 'react'
import Feed from './mini-components/Feed'
import Stories from './Stories'
import Suggestions from './Suggestions'

const feeds = [
  {
    id: 1,
    title: 'React.js',
    url: '/images/feeds/react1.jpeg',
    likes: 0,
  },
  {
    id: 2,
    title: 'Next.js',
    url: '/images/feeds/react1.jpeg',
    likes: 0,
  },
  {
    id: 3,
    title: 'Node.js',
    url: '/images/feeds/react1.jpeg',
    likes: 0,
  },
  {
    id: 4,
    title: 'Tailwind CSS',
    url: '/images/feeds/react1.jpeg',
    likes: 0,
  },
  {
    id: 5,
    title: 'Express.js',
    url: '/images/feeds/react1.jpeg',
    likes: 0,
  },
]

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
        <div className="grid gap-y-4 md:gap-y-6 max-w-2xl mx-auto">
          {feeds.map((feed) => (
            <Feed key={feed.id} data={feed} />
          ))}
        </div>
      </div>
      {session && <Suggestions />}
    </main>
  )
}
