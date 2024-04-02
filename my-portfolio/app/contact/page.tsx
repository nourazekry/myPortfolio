import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <main className={styles.container}>
      <h1>Contact Information</h1>
      <div className={styles.info}>
        <p><strong>Name:</strong> Noura Zekry</p>
        <p><strong>Email:</strong> nourazekryart@gmail.com</p>
      </div>
    </main>
  );
}