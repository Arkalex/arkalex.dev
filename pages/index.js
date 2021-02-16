
import Header from 'components/Header';
import Bio from 'components/Bio';
import Footer from 'components/Footer';
import { Job } from 'components/Job';

import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header currentPage={''} />
      <div className={styles.container}>
        <Bio />
        <Job />
      </div>
      <Footer />
    </>
  )
}
