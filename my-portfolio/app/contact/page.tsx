import React from 'react';
import styles from './Contact.module.css';
import Link from 'next/link';
import Image from 'next/image';
export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <div className={styles.info}>
        <p>Noura Zekry</p>
        <div className={styles.linkContainer}>
  <Image className={styles.lighterIcon} src="/mail.png" width={35} height={35} alt="Mail Icon" />
  <a href="mailto:nourazekryart@gmail.com">nourazekryart@gmail.com</a>
</div>

        <div className={styles.linkContainer}>
            <Image className={styles.lighterIcon} src="/linkedinicon.png" width={35} height={35} alt="Linked Icon" />
            <a href="https://www.linkedin.com/in/nourazekry" target="_blank" rel="noopener noreferrer">in/nourazekry</a>
        </div>
        <div className={styles.linkContainer}>
            <Image className={styles.lighterIcon} src="/github.png" width={35} height={35} alt="GitHub Icon" />
            <a href="https://www.github.com/in/nourazekry" target="_blank" rel="noopener noreferrer">github.com/nourazekry</a>
        </div>
        </div>
        </div>
    </main>
  );
}