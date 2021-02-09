import styles from './style.module.css';

export default function Projects({children}) {
  return (
    <div className={styles.main}>
        {children}
    </div>
  )
}
