import React, { useState } from 'react';
import eventsData from './data/events';
import BlogsPage from './components/BlogsPage';
import HomePage from './components/HomePage';
import FindEventsPage from './components/FindEventsPage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="top-navbar">
        <div className="logo-section">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/BRIDGE.png`} alt="BRIDGE Logo" className="logo-icon" />

          </div>
        </div>

        <div className="nav-buttons">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('find')}>Find Events</button>
          <button onClick={() => setPage('blogs')}>Blogs</button>
          <button onClick={() => setPage('contact')}>Contact Us</button>
        </div>

        <div className="theme-toggle">
          <button className="darkModeToggle" onClick={toggleTheme}>
            <img
              src={darkMode ? 'toggle-light-mode.png' : 'toggle-dark-mode.png'}
              alt="Toggle Theme"
              className="theme-icon"
            />
          </button>
        </div>
      </div>

      <div className="app-container">
        {page === 'home' && <HomePage />}
        {page === 'find' && (
          <FindEventsPage
            events={eventsData}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {page === 'contact' && <ContactPage />}
        {page === 'blogs' && <BlogsPage />}

      </div>
    </div>
  );
}

export default App;
