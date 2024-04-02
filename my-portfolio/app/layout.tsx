import type { Metadata } from "next";
import "./globals.css";
import styles from './Home.module.css'; 
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Noura Zekry",
  description: "Noura Zekry's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <nav className={styles.toolbar}>
        <Link href="/" className={styles.toolbarLink}>About</Link>
        <Link href="/experience" className={styles.toolbarLink}>Experience</Link>
        <Link href="/projects" className={styles.toolbarLink}>Projects</Link>
        <Link href="/experiments" className={styles.toolbarLink}>Experiments</Link>
        <Link href="/contact" className={styles.toolbarLink}>Contact</Link>
      </nav>
      <body>{children}</body>
    </html>
  );
}