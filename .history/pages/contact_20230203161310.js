import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Contact.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>{"Contact Us"}</title>
        <meta name="author" content={"MDIA 2109"}/>
        <meta property='og:title' content={'Assignment #1 - Contact Us Page'}/>
        <meta property='og:description' content={"BCIT Digital Design and Development Diploma"}/>
        <link rel="icon" href={"/favicon.png"} />
      </Head>
      <main className={styles.main}>
        <div>
            <h1>Contact Us</h1>
            <p>Want to discuss? Lets chat!</p>
       </div>
    <form>
        <fieldset>
            <table>
                <thead>
                    <tr></tr>
                </thead>
                <thead>
                    <tr></tr>
                </thead>
            </table>
        </fieldset>

    </form>
     
      </main>
     <a>
        <span>
            <img></img>
        </span>
     </a>
    </>
  )
}
