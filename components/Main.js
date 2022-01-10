import React from 'react'
import Feed from './mini-components/Feed'
import Stories from './Stories'

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
  return (
    <main className="grid">
      {/* STORIES */}
      <Stories />
      <div className="bg-white grid grid-col">
        <div className=" col-span-1">
          {feeds.map((feed) => (
            <Feed key={feed.id} data={feed} />
          ))}
        </div>
        <div className="hidden"></div>
      </div>
    </main>
  )
}
