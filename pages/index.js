import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Ayllon - Frontend Developer</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <NavBar />
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        Made with 💖 by Alex Ayllon
      </footer>
    </div>
  )
}
