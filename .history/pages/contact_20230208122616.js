import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Contact.module.css";
import Bg from "public/background-images/backgroundMountainUpsideDown.jpg";
import upArrow from "public/icons/upwardArrow.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Contact Us"}</title>
        <meta name="author" content={"MDIA 2109"} />
        <meta property="og:title" content={"Assignment #1 - Contact Us Page"} />
        <meta
          property="og:description"
          content={"BCIT Digital Design and Development Diploma"}
        />
        <link rel="icon" href={"/favicon.png"} />
      </Head>
      <main className={styles.main}>
        <div>
          <div className={styles.cntacthead}>
            <hr className={styles.line}></hr>
            <h1 className={styles.header}>Contact Us</h1>
            <hr className={styles.line}></hr>
          </div>
          <p className={styles.subhead}>Want to discuss? Lets chat!</p>
          <Image
            src={Bg}
            fill
            style={{
              zIndex: -1,
            }}
          ></Image>
        </div>
      </main>
      <form>
        <fieldset>
          <table>
            <thead>
              <tr></tr>
              <tr></tr>
            </thead>
            <thead></thead>
          </table>
        </fieldset>
      </form>
      <a>
        <span>
          <Image src={upArrow} width={40} height={50} />
        </span>
      </a>
    </>
  );
}
