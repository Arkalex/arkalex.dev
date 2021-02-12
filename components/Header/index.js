import Head from 'next/head'
import NavBar from '../NavBar'


export default function Header({currentPage}) {
  const partialTitle = currentPage && `${currentPage} | `;

  return (
    <>
      <Head>
        <title>{partialTitle}Alex Ayllon | Frontend Developer</title>
        <link rel="icon" href="/me.webp" />
      </Head>
      <NavBar />
    </>
  )
}
