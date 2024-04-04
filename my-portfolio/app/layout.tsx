import type { Metadata } from "next";
import "./globals.css";
import styles from './Home.module.css'; 
import Link from 'next/link';
import NavBar from "../components/NavBar";
export const metadata: Metadata = {
  title: "Noura Zekry",
  description: "Noura Zekry's Portfolio",
  icons: {
    icon: [
      {
        url: '/swirl2.ico',
        href: '/swirl2.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body>{children}</body>
    </html>
  );
}