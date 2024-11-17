import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

function App() {  
  return (
    <Router>
    <div className="container">
      <header className='header'>
        <div className='title'>
        <h1>「EVOLV」</h1>
        <span className="beta-tag">now in beta!</span>
        </div>
        {/* <p className="beta-tag">now in beta!</p> */}
        <nav className="nav-links">
          <Link to="/about" style={{margin: '0 1rem' }}>about</Link>
          {/* <a href="#">about</a> */}
          <span>//</span>
          <Link to="/blog" style={{margin: '0 1rem' }}>blog</Link>
          {/* <a href="#">blog</a> */}
        </nav>
      </header>
      
      <Routes>
      <Route path="/" element={
      <>
      <main className='content'>
        <h2>「EVOLV」</h2>
      <p className="tagline">a new way forward!</p>
      <form className="subscribe-form">
        <input type="email" placeholder="enter your email here" required />
        <button type="submit">submit</button>
      </form>
      </main>

      <footer>
        <p>evolv corp © 2024</p>
        <div className="links">
          
          {/* <a href="#jobs">jobs</a> */}
          {/* <a href="#contact">contact</a> */}
          <Link to="/jobs" style={{ marginRight: '1rem' }}>jobs</Link>
          <Link to="/contact">contact</Link>
        </div>
      </footer>
      </>
      } />
      
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App
