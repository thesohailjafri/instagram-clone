import Image from "next/image"
import React from "react"
import {
  SearchIcon,
  ChatIcon,
  PlusCircleIcon,
  CollectionIcon,
  HeartIcon,
  CameraIcon,
} from "@heroicons/react/outline"
import { XCircleIcon, HomeIcon } from "@heroicons/react/solid"

export default function Header() {
  return (
    <header
      className="flex max-w-5xl mx-auto justify-between items-center h-full
    px-4 lg:px-10
    "
    >
      {/* Camera */}
      <CameraIcon className="btn-lg  md:hidden" />

      {/* LOGO */}
      <Image
        height={29}
        width={103}
        src="/images/logo.png"
        alt="instagram logo"
      />

      {/* SEARCH BAR */}
      <div className="hidden relative group md:flex justify-center items-center w-80">
        <SearchIcon
          className=" absolute btn-sm left-7 text-gray-400 transition-all duration-100 ease-in
     group-focus-within:hidden
        "
        />
        <input
          type="text"
          placeholder="Search"
          className=" w-72  bg-gray-100 
          font-medium 
          border-0
          focus:outline-none
           focus:ring-0
           group-focus-within:pl-3
           transition-[padding] duration-200 ease-in-out
             focus:text-gray-900 rounded-lg py-2 pl-12 pr-3 placeholder-gray-600"
        />
        <XCircleIcon
          className="absolute btn-sm right-7 text-gray-300 transition-all duration-100 ease-in
    hidden
         group-focus-within:block
        "
        />

        {/* search results */}
        <div
          className=" absolute top-14 z-50
         hidden group-focus-within:flex
         justify-center items-center rounded-md shadow-lg bg-white pl-4 pr-4 pb-4
          text-center
         "
        >
          <ul className="w-full h-80 overflow-y-scroll">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, eos provident ipsa incidunt ea voluptatem eveniet
              molestiae voluptas dignissimos laborum blanditiis reiciendis ipsum
              laudantium tempore magnam enim illum beatae distinctio?
            </li>

            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, eos provident ipsa incidunt ea voluptatem eveniet
              molestiae voluptas dignissimos laborum blanditiis reiciendis ipsum
              laudantium tempore magnam enim illum beatae distinctio?
            </li>
          </ul>
        </div>
      </div>
      {/*   MESSAGES */}
      <div className=" relative group cursor-pointer md:hidden">
        <ChatIcon className="btn-lg " />
        <div
          className=" absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs inline-flex justify-center items-center text-white
        group-hover:animate-bounce  animation-duration-150 animation-iteration-count-infinite
        "
        >
          9+
        </div>
      </div>

      {/* LOGIN / MESSAGES */}
      <div className="hidden  md:flex space-x-4">
        <HomeIcon className="btn-lg" />
        <ChatIcon className="btn-lg" />
        <PlusCircleIcon className="btn-lg" />
        <CollectionIcon className="btn-lg" />
        <HeartIcon className="btn-lg" />
        <div className=" bg-black w-7 h-7 rounded-full" />
        {/* <Image
          width={100}
          height={100}
          src="/random.png"
          className="rounded-full h-8 w-8"
          alt="my-profile"
        /> */}
      </div>
    </header>
  )
}