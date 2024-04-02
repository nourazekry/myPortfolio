import Image from "next/image";
import Link from 'next/link';
import styles from './Home.module.css'; 

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.toolbar}>
        <Link href="/experience" className={styles.toolbarLink}>Experience</Link>
        <Link href="/projects" className={styles.toolbarLink}>Projects</Link>
        <Link href="/experiments" className={styles.toolbarLink}>Experiments</Link>
        <Link href="/contact" className={styles.toolbarLink}>Contact</Link>
      </nav>
      <div className={styles.content}>
        <h1 className={styles.name}>Noura Zekry</h1>
        <p className={styles.description}>Your Description</p>
      </div>
    </div>
  );
}