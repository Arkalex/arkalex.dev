import styles from './style.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href='https://github.com/Arkalex' target='_blank' rel='noopener'>Made with 💙 by <span className={styles.name}> Alex Ayllon</span></a>
      </footer>
    </>
  )
}
