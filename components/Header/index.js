import Head from 'next/head'
import NavBar from '../NavBar'


export default function Header({currentPage}) {
  const partialTitle = currentPage && `${currentPage} | `;

  return (
    <>
      <Head>
        <title>{partialTitle}Alex Ayllon | Frontend Developer</title>
        <link rel="icon" href="/me.webp" />
        <meta name="description" content="Alex Ayllon porfolio front end developer" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Frontend, Developer"></meta>
        <meta name="author" content="Alex Ayllon"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <NavBar />
    </>
  )
}
