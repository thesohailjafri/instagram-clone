import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { HeartIcon } from '@heroicons/react/outline'
export default function Comment({ data }) {
  const { comment, username, userImage, timestamp } = data.data()
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-2 items-center">
        <img
          className="btn-md rounded-full overflow-hidden bg-gray-400"
          src={userImage}
          alt={username}
        />
        <span>
          <strong className="font-semibold mr-2">{username}</strong>
          {comment}
        </span>

        <HeartIcon className="btn-sm ml-auto mr-4" />
      </div>
      <div className="flex gap-x-2 ml-8 text-gray-500 text-xs">
        <span className=" capitalize">
          {timestamp &&
            formatDistanceToNow(new Date(timestamp?.seconds * 1000))}
        </span>
        <span>0 like</span>
        <span>Reply</span>
      </div>
    </div>
  )
}
