import Switcher from './components/Switcher'
import './sass/App.scss'
import { storageAvailable } from './utils/helpers'
import React, { useState, useEffect } from 'react'
import Home from './pages/Home'


function App() {

  const initialState = (storageAvailable('localStorage') && localStorage.getItem('dark-mode-test') && JSON.parse(localStorage.getItem('dark-mode-test')).darkModeOn) ? true : false

  const [darkMode, setDarkMode] = useState(initialState)

  const toggleDarkMode = (e) => {
    // Switch to Dark Mode
    if (e.currentTarget.value === "off") {
      setDarkMode(true)
      return
    }
    /* Light Mode */
    setDarkMode(false)
  }

  useEffect(() => {
    // Sets the user's preference in local storage for
    if (storageAvailable('localStorage')) {
      const storeMe = {
        darkModeOn: darkMode
      }
      localStorage.setItem('dark-mode-test', JSON.stringify(storeMe))
    }
  }, [darkMode]);


  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="wrapper">
        <header className="main-head">
          <h1>Toggle Light/Dark Mode Demo</h1>
        </header>
        <div className="head-widgets">
          <Switcher darkMode={darkMode} toggle={toggleDarkMode} />
        </div>
        <Home />
        <footer className="main-footer">
          <p>Made with love by <a href="https://elissavet.me" target="_blank" rel="noreferrer">Elissavet Triantafyllopoulou</a>.</p>
          <p>Thank you for visiting!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
