
'use client'

import styles from './Title.module.css'
import { useState } from 'react';
import Link from 'next/link';

const  Title = () => {

const [ menuStatus, setMenuStatus ] = useState(false);

function handleClick() {
  setMenuStatus(!menuStatus);
 
}

return (
  <header className={styles.headerContainer}>
    <h1 className={styles.titleContainer}> ╰(*°▽°*)╯Fireplace Palace🔥👩‍🚒</h1>
    <button onClick={handleClick} className={styles.burgerButton}>
      <img className={styles.burgerButtonImg} src="menu-open-button.png" alt="Burger toggle menu" />
    </button>

    {menuStatus && (
      <div className={menuStatus ? styles.menuOpen : styles.menuClosed}>
        <nav className={styles.contentMenu}>
          <p className={styles.linkMenu}><Link href="/">Home</Link></p>
          <p className={styles.linkMenu}><Link href="/founders">Founders Page</Link></p>
          <p className={styles.linkMenu}><Link href="/design-booking">Design Booking</Link></p>
        </nav>
      </div>
    )}
  </header>
);
};

export default Title;
