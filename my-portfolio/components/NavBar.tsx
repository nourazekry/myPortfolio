"use client";

import "../app/globals.css";
import styles from '../app/Home.module.css'; 
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function NavBar() {
  const [selectedLink, setSelectedLink] = useState('/');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const links = [
    {name: 'About', url:'/'}, 
    {name: 'Experience', url:'/experience'}, 
    {name: 'Projects', url:'/projects'}, 
    {name: 'Experiments', url:'/experiments'}, 
    {name: 'Contact', url:'/contact'}
  ];

  useEffect(() => {
    const handleResize = () => {
      console.log('resize, window.innerWidth:', window.innerWidth)
      if (window.innerWidth < 450) {
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

  useEffect(() => {
    console.log('isSidebarVisible:', isSidebarVisible, 'menuVisible:', menuVisible)
  }, [isSidebarVisible, menuVisible]);

  return (
      <nav className={`${styles.toolbar} ${isSidebarVisible && menuVisible ? styles.fullscreen : ''}`}>
        {menuVisible ? 
        <button className={styles.mobileToolbar} onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
          <h1>☰ Noura Zekry</h1>
        </button>
        : ''}        
        {links.map((link, index) => (
        <div key={index} className= {isSidebarVisible ? '' : styles.sidebar}>
          <Link key={index} href={link.url} className={`${styles.toolbarLink} ${selectedLink === link.url ? styles.selected : ''}`} onClick={() => {setSelectedLink(link.url); if (menuVisible) setIsSidebarVisible(false);}}>{link.name}</Link>
        </div>))}
      </nav>
  );
}