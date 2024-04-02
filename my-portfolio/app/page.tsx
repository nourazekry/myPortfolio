import Image from "next/image";
import Link from 'next/link';
import styles from './home.css'; 

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.toolbar}>
        <Link href="/projects">
          <a className={styles.toolbarLink}>Projects</a>
        </Link>
        <Link href="/experiments">
          <a className={styles.toolbarLink}>Experiments</a>
        </Link>
      </nav>
      <div className={styles.content}>
        <h1 className={styles.name}>Your Name</h1>
        <p className={styles.description}>Your Description</p>
      </div>
    </div>
  );
}