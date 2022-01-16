import Image from 'next/image'
import React from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import {
  HeartIcon,
  ChatAltIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from '@heroicons/react/outline'
export default function Feed(props) {
  return (
    <div className="bg-white w-full border border-gray-200 rounded-sm">
      <div className="flex py-2 px-3 justify-between items-center">
        <div className="flex space-x-3 items-center">
          <div className=" bg-black w-9 h-9 rounded-full" />
          <h6 className=" font-semibold">user</h6>
        </div>
        <DotsHorizontalIcon className="btn-sm text-gray-800" />
      </div>
      <img
        className="w-full object-contain"
        src={props.data.url}
        alt={props.data.title}
      />
      <div className="p-3">
        <div className="flex justify-between">
          <div className="flex space-x-3 items-center">
            <HeartIcon className="btn-lg" />
            <ChatAltIcon className="btn-lg" />
            <PaperAirplaneIcon className="btn-lg" />
          </div>
          <BookmarkIcon className="btn-lg" />
        </div>
      </div>
    </div>
  )
}
