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
          <a className={styles.pdf} href='https://drive.google.com/file/d/1hcW8msoMLi1DV3RInpwbvms02ecVth8y/view?usp=sharing' target='_blank'>Take a look at my CV!</a>
          <img src='/pdf.png' /> 
        </span>
      </div>
      <div>
        <img
          className={styles.photo}
          alt='Picture of me'
          src='/me.jpg'
        />
      </div>
    </div>
  )
}
