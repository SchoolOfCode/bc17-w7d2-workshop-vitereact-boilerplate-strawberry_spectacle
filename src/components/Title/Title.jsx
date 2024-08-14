//import header.css
 import styles from './Title.module.css'

export default function Title ({title}) {
    return (        
        <header>
              <h1 className={styles.titleContainer}>{title}</h1>
            </header>
    );
}

