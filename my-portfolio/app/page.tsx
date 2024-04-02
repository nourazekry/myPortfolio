import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css'; // Assuming you have a CSS file named Page.css

const Page = () => {
  return (
    <div className="page">
      <nav className="toolbar">
        <Link to="/projects" className="toolbar-link">Projects</Link>
        
        <Link to="/experiments" className="toolbar-link">Experiments</Link>
      </nav>
      <div className="content">
        <h1 className="name">Your Name</h1>
        <p className="description">Your Description</p>
      </div>
    </div>
  );
};

export default Page;
