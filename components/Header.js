import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  ChatAlt2Icon,
  PlusCircleIcon,
  CollectionIcon,
  HeartIcon,
  CameraIcon,
} from '@heroicons/react/outline'
import { XCircleIcon, HomeIcon } from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()

  return (
    <div className=" bg-white border-b border-gray-300 h-12 md:h-16">
      <header
        className="flex max-w-4/5xl mx-auto justify-between items-center h-full
      transition-all duration-300 ease-in-out 
    px-4 lg:px-0
    "
      >
        {/* Camera */}
        <CameraIcon className="btn-lg md:hidden" />

        {/* LOGO */}
        <div className="mt-3">
          <Image
            height={29}
            width={103}
            src="/images/logo.png"
            alt="instagram logo"
          />
        </div>

        {/* SEARCH BAR */}
        <div className="hidden relative group md:flex justify-center items-center w-80 ml-36">
          <SearchIcon
            className=" absolute btn-sm left-7 text-gray-400 transition-all ease-out duration-700
     group-focus-within:hidden 
     group-focus-within:opacity-0 
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
           transition-[padding] duration-300 ease-in-out
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
                molestiae voluptas dignissimos laborum blanditiis reiciendis
                ipsum laudantium tempore magnam enim illum beatae distinctio?
              </li>

              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate, eos provident ipsa incidunt ea voluptatem eveniet
                molestiae voluptas dignissimos laborum blanditiis reiciendis
                ipsum laudantium tempore magnam enim illum beatae distinctio?
              </li>
            </ul>
          </div>
        </div>
        {/*   MESSAGES */}
        <div className=" relative group cursor-pointer md:hidden">
          <ChatAlt2Icon className="btn-lg " />
          <div
            className=" absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs inline-flex justify-center items-center text-white
        group-hover:animate-bounce  animation-duration-150 animation-iteration-count-infinite
        "
          >
            9+
          </div>
        </div>

        {/* LOGIN / MESSAGES */}
        {session?.user ? (
          <div className="hidden  md:flex items-center  space-x-4">
            <HomeIcon className="btn-lg cursor-pointer" />
            <div className=" relative group cursor-pointer ">
              <ChatAlt2Icon className="btn-lg " />
              <div
                className=" absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs inline-flex justify-center items-center text-white
        group-hover:animate-bounce  animation-duration-150 animation-iteration-count-infinite
        "
              >
                9+
              </div>
            </div>
            <PlusCircleIcon className="btn-lg cursor-pointer" />
            <CollectionIcon className="btn-lg cursor-pointer" />
            <HeartIcon className="btn-lg cursor-pointer" />
            <img
              onClick={() => {
                // signOut()
                // window.location.href = '/auth/signin'
              }}
              src={session?.user?.image}
              alt={session?.user?.name}
              className="btn-lg overflow-hidden rounded-full"
            />
          </div>
        ) : (
          <div className="hidden  md:flex items-center space-x-4">
            <Link href="/" passHref>
              <HomeIcon className="btn-lg cursor-pointer" />
            </Link>
            <Link href="/auth/signin">Sign In</Link>
          </div>
        )}
        {/* <Image
          width={100}
          height={100}
          src="/random.png"
          className="rounded-full h-8 w-8"
          alt="my-profile"
        /> */}
      </header>
    </div>
  )
}
