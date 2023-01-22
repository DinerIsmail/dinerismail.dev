import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import 'cal-sans'

import theme from '../src/theme'
import Layout from '@/components/layout'

import '../style.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Diner Ismail - Software Engineer, Open Source Contributor, Coding Mentor"
        description="Experienced Frontend Engineer. Using my skills to make the world a better place."
        twitter={{
          cardType: 'summary_large_image',
          handle: '@DinerIsmail',
        }}
        openGraph={{
          url: 'https://dinerismail.dev',
          title:
            'Diner Ismail - Software Engineer, Open Source Contributor, Coding Mentor',
          description:
            'Experienced Frontend Engineer. Using my skills to make the world a better place.',
          locale: 'en_GB',
          images: [
            {
              url: 'https://dinerismail.dev/assets/images/social.png',
              width: 1200,
              height: 630,
              alt: 'Diner Ismail',
              type: 'image/png',
            },
          ],
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
