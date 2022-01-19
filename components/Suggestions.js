import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react/cjs/react.development'
let fakeSuggestions = [
  {
    id: 1,
    name: 'Itachi Uchiha',
    avatar: '/images/users/itachi.jpg',
    username: 'itachi_uchiha',
    meta: 'New to instagram',
  },
  {
    id: 2,
    name: 'Light Yagam',
    avatar: '/images/users/light.jpg',
    username: 'kira',
    meta: 'Followed by l.lawliet + 2 more',
  },
  {
    id: 3,
    name: 'C. C.',
    avatar: '/images/users/cc.jpg',
    username: 'immortal_witch',
    meta: 'Followed by lelouch_lamperouge + 12 more',
  },
  {
    id: 4,
    name: 'Roronoa Zoro',
    avatar: '/images/users/roronoa.jpg',
    username: 'roronoa.Zoro',
    meta: 'Followed by monkey.d.luffy + 9 more',
  },
]
export default function Suggestions() {
  const { data: session } = useSession()

  return (
    <div className="hidden lg:block">
      {/* my profile */}
      <div className="mt-4 mb-2 flex justify-between items-center">
        <div className=" flex gap-x-4">
          <img
            src={session?.user?.image}
            alt={session?.user?.name}
            className="h-12 w-12 bg-cover overflow-hidden rounded-full"
          />
          <div className=" my-auto inline-grid -space-y-0.5">
            <a className=" text-sm font-semibold">{session?.user?.username}</a>
            <span className=" text-[14px] text-gray-500 font-light">
              {session?.user?.name}
            </span>
          </div>
        </div>
        <Link href="/auth" passHref>
          <span className=" text-xs text-blue-500 font-semibold cursor-pointer">
            Switch
          </span>
        </Link>
      </div>
      {/* my seggestions */}
      <div className="mt-6">
        <div className=" text-gray-500 text-sm font-semibold flex justify-between items-end">
          Suggestions For You
          <a href="" className=" text-xs text-black">
            See All
          </a>
        </div>

        <ul className=" grid gap-y-4 mt-4">
          {fakeSuggestions.map((suggestion) => (
            <li key={suggestion.id}>
              <div className="flex justify-between items-center gap-x-4">
                <div className="flex gap-x-4 items-center">
                  <Image
                    className="h-10 w-10 rounded-full bg-cover"
                    src={suggestion.avatar}
                    alt={suggestion.name}
                    objectFit="contain"
                    width={'40px'}
                    height={'40px'}
                    priority={true}
                  />
                  <div className=" inline-grid">
                    <span className="text-sm font-semibold">
                      {suggestion.name}
                    </span>
                    <span className=" text-xs text-gray-500 truncate w-48">
                      {suggestion.meta}
                    </span>
                  </div>
                </div>
                <button className=" text-xs text-blue-500 font-semibold cursor-pointer">
                  Follow
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
