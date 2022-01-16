import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import Header from '../../components/Header'
export async function getServerSideProps() {
  let providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default function signinPage({ providers }) {
  return (
    <>
      <Header />
      <div className="grid place-items-center">
        <Image
          height={400}
          width={400}
          src="/images/instagram.ico"
          alt="instagram logo"
        />

        {Object.values(providers).map((provider) => {
          return (
            <button
              className=" text-lg flex items-center gap-x-2 bg-black text-white p-3 rounded-md shadow-sm"
              key={provider.name}
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              <FcGoogle className="inline btn-lg" />
              Sign in with {provider.name}
            </button>
          )
        })}
        <h6 className="mt-4 max-w-md p-4 text-center">
          This is application is my attempt to create{' '}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className=" font-bold text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-fuchsia-600"
          >
            Instagram
          </a>{' '}
          clone with some basic functionality. This is not a real thing!!!
        </h6>
      </div>
    </>
  )
}
