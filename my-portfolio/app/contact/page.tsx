import React from 'react';
import styles from './Contact.module.css';
import Link from 'next/link';
export default function Contact() {
  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <p>Noura Zekry</p>
        <p> nourazekryart@gmail.com</p>
        <a className={styles.text} href="https://www.linkedin.com/in/nourazekry" target="_blank" rel="noopener noreferrer">in/nourazekry</a>
      </div>
    </main>
  );
}