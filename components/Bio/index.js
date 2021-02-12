import Image from 'next/image';
import styles from './style.module.css'

export default function Bio() {
  return (
    <div className={styles.bio}>
      <div className={styles.presentation}>
        <h2 className={styles.title}>Hi there! <span>👋</span></h2>
        <div className={styles.desc}>
          <p>
            I’m a frontend developer with 6+ years of experience creating well crafted sites with the latest stack. I’m a person that doesn’t really like to be stuck,
            I always try to keep learning and keep growing, I’m excited to learn about new technologies and I don’t mind to change for a new one if it’s required!
          </p>
          <p>
            So let’s keep growing together!
          </p>
        </div>
        <span className={styles.download}>
          <a className={styles.pdf} href='https://drive.google.com/file/d/1hcW8msoMLi1DV3RInpwbvms02ecVth8y/view?usp=sharing' rel='noopener' target='_blank'>Take a look at my CV!</a>
          <img src='/pdf.webp' alt='pdf icon' />
        </span>
      </div>
      <div className={styles.photo}>
        <Image
          src="/me.webp"
          alt="Picture of me"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
