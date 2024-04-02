import Image from "next/image";
import Link from 'next/link';
import styles from './Home.module.css'; 

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.name}>Noura Zekry</h1>
        <p className={styles.description}>Your Description</p>
      </div>
    </div>
  );
}