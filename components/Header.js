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
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Header() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)

  return (
    <div className=" bg-white border-b border-gray-300 h-12 md:h-16 fixed top-0 left-0 w-full z-10 ">
      <header
        className="flex max-w-4/5xl mx-auto justify-between items-center h-full
      transition-all duration-300 ease-in-out 
    px-4 lg:px-0
    "
      >
        {/* Camera */}
        <Link href="/" passHref className=" cursor-pointer">
          <CameraIcon className="btn-lg md:hidden cursor-pointer" />
        </Link>

        {/* LOGO */}
        <Link href="/" passHref className="mt-3 cursor-pointer">
          <Image
            height={29}
            width={103}
            src="/images/logo.png"
            alt="instagram logo"
            className="cursor-pointer"
          />
        </Link>

        {/* SEARCH BAR */}
        <div className="hidden relative group md:flex justify-center items-center w-80 ml:34 lg:ml-36">
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
            flex
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
              <li>This Feature will come in v1.1</li>

              <li>This Feature will come in v1.1</li>
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
          <>
            <div className="hidden  md:flex items-center  space-x-4">
              <Link href="/" passHref>
                <HomeIcon className="btn-lg cursor-pointer" />
              </Link>
              <Link href="/messages" passHref>
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
              </Link>

              <Link href="/" passHref>
                <PlusCircleIcon
                  className="btn-lg cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              </Link>
              <Link href="/explore" passHref>
                <CollectionIcon
                  className="btn-lg cursor-pointer"
                  href="/explore"
                />
              </Link>
              <Link href="/interaction" passHref>
                <HeartIcon className="btn-lg cursor-pointer" />
              </Link>
              <Link href="/auth" passHref>
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  className="btn-lg rounded-full overflow-hidden bg-gray-400 cursor-pointer"
                />
              </Link>
            </div>
            <div className=" flex justify-evenly items-center border-t border-gray-300 fixed bottom-0 left-0 h-11 w-full md:hidden bg-white z-10">
              <HomeIcon className="btn-lg cursor-pointer" />

              <SearchIcon className="btn-lg cursor-pointer" />

              <Link href="/" passHref>
                <PlusCircleIcon
                  className="btn-lg cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              </Link>

              <Link href="/interaction" passHref>
                <HeartIcon className="btn-lg cursor-pointer" />
              </Link>

              <Link href="/auth" passHref>
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  className="btn-lg overflow-hidden rounded-full cursor-pointer"
                />
              </Link>
            </div>
          </>
        ) : (
          <div className="hidden  md:flex items-center space-x-4 font-semibold">
            <Link href="/" passHref>
              <HomeIcon className="btn-lg cursor-pointer" />
            </Link>
            <Link href="/auth">Sign In</Link>
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
