import { useState } from 'react';
import Link from 'next/link';
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
                <li>
                    <Link href='/'><a>About</a></Link>
                </li>
                <li><Link href='/work'><a>Work</a></Link></li>
                <li><Link href='/projects'><a>Projects</a></Link></li>
                <li><Link href='/contact'><a>Contact</a></Link></li>
            </ul>
        </nav>
    );
}