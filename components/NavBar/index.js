import ReactDOM, { useState } from 'react';
import styles from './style.module.css';

export default function NavBar () {
    const [navActive, setNavActive] = useState(false);

    const handleClick = () => {
        setNavActive(!navActive);
    }

    let navClassName = styles.navlinks;
    let burgerClassName = styles.burger;
    if(navActive) {
        navClassName += ` ${styles.navActive}`;
        burgerClassName += ` ${styles.toggle}`
    }

    return (
        <nav className={styles.navbar}>
            <div className={burgerClassName} onClick={handleClick}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul className={navClassName}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Work</a></li>
                <li><a href='#'>Projects</a></li>
            </ul>
        </nav>
    );
}