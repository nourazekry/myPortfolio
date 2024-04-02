import Image from "next/image";
import Link from 'next/link';
import styles from './Home.module.css'; 

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
      <h1 className={`${styles.name} ${styles.typewriterEffect} ${styles.nameEffect}`}>Noura Zekry</h1>
<p className={`${styles.description} ${styles.typewriterEffect} ${styles.descriptionEffect}`}>Creating works at the intersection of technology and art</p>     </div>
    </div>
  );
}