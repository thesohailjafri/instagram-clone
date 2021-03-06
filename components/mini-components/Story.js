import React from 'react'

export default function Story({ username, avatar }) {
  return (
    <li className="flex flex-col gap-y-1 justify-center items-center min-w-[70px]">
      <div className=" self-center w-18 h-18 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-[3px] ">
        <div className=" bg-white p-[2px] rounded-full">
          <img
            src={avatar}
            alt={username}
            className="h-14 w-14 rounded-full overflow-hidden bg-gray-400"
          />
        </div>
      </div>
      <span className="text-xs w-14 truncate text-center">{username}</span>
    </li>
  )
}
