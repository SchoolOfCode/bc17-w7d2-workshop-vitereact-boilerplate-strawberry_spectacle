
'use client'

import styles from './Title.module.css'
import { useState } from 'react';
import Link
 from 'next/link';
const  Title = () => {

const [ menuStatus, setMenuStatus ] = useState(false);

function handleClick() {
  setMenuStatus(!menuStatus);
 
}

return (
  <header>
    <h1 className={styles.titleContainer}> ╰(*°▽°*)╯Fireplace 🔥👩‍🚒👩‍🚒</h1>
    <button onClick={handleClick}>
      <img className={styles.burgerButton} src="menu-open-button.png" alt="Burger toggle menu" />
    </button>


    {menuStatus && (
      // <div className={menuStatus ? styles.menuOpen : styles.menuClosed}>
      <div className={menuStatus ? styles.menuOpen : styles.menuClosed}>
        <nav>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/founders">Founders Page</Link></p>
        </nav>
      </div>
    )}
  </header>
);
};

export default Title;
