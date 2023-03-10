import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{'Contact Us'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={'MDIA 2109'} />
        <meta property='og:title' content={'Assignment #1 - Contact Us Page'} />
        <meta property='og:description' content={'BCIT Digital Design and Development Diploma'} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        
      </main>
    </>
  )
}
