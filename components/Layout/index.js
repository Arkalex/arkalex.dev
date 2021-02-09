import Main from 'components/Main'
import Footer from 'components/Footer'
import Header from 'components/Header'

import styles from './style.module.css'

export default function Layout({currentPage, children}) {
    return (
      <div className={styles.container}>
        <Header currentPage={currentPage} />

        <Main children={children} />

        <Footer />
      </div>
    )
  }
