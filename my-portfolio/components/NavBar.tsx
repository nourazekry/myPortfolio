"use client";

import "../app/globals.css";
import styles from '../app/Home.module.css'; 
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function NavBar() {
  const [selectedLink, setSelectedLink] = useState('/');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [links, setLinks] = useState(['/', '/experience', '/projects', '/experiments', '/contact']);

  useEffect(() => {
    const handleResize = () => {
      console.log('window.innerWidth', window.innerWidth);

      if (window.innerWidth < 550) {
        setMenuVisible(true);
        setIsSidebarVisible(false); // Hide the sidebar when the window is small
      } else {
        setMenuVisible(false);
        setIsSidebarVisible(true); // Show the sidebar when the window is large
      }
    };

    window.addEventListener('resize', handleResize);
    // Call the handleResize function to set the initial state
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <nav className={`${styles.toolbar}`}>
        {menuVisible ? <button onClick={() => setIsSidebarVisible(!isSidebarVisible)} className={styles.hamburger}>☰</button> : ''}        
        {links.map(link => (
          <div className= {isSidebarVisible ? '' : styles.sidebar}><Link key={link} href={link} className={`${styles.toolbarLink} ${selectedLink === link ? styles.selected : ''}`} onClick={() => setSelectedLink(link)}>{link.slice(1) || 'About'}</Link>
        </div>))}
      </nav>
  );
}