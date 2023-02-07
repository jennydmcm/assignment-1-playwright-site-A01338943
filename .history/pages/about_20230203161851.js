import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{"About Us"}</title>
        <meta name="author" content={"MDIA 2109"} />
        <meta name="og:title" content={"Assignment #1 - About Us Page"}/>
        <meta name="og:description" content={"BCIT Digital Design and Development Diploma"} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <header>
          <div>
            <h1>About Us</h1>
            <h1></h1>
          </div>
          <div>
            <p>We are proud to deliver an education that goes beyond books and classrooms.</p>
            <p>Our students gain the technical skills, real-world experience, and problem solving ability <br></br>
            needed to embrace complexity and lead innovation in a rapidly changing workplace.</p>
            <p>Through close collaboration with industry, our network of alumni and partners continue to <br></br>
            achieve global success</p>
            <p>Information Sessions are a simple way to figure out the next step along your career path. <br></br>
            Learn more about the programs that interests you.</p>
            <p>Big info is the largest program expo and information session at BCIT. It's your chance to find<br></br>
            out about all our programs - from business, computing, and health to engineering, trades,<br></br>
            and applied sciences.</p>
            <p>If you missed our fall event the next Big Info</p>
            <p></p>
          </div>
          <div>
            <h2></h2>
            <h2></h2>
          </div>
          <div>
            <h3></h3>
          </div>
    </header>
      </main>

      <a>
        <span>
          <img></img>
          <img></img>
        </span>
      </a>
    

    </>
  )
}
