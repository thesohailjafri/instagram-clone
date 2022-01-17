import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Layout from '../components/Layout'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
