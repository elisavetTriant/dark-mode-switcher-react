import Switcher from './components/Switcher';
import './sass/App.scss';
import React, { useState } from 'react';


function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = (e) =>{
		console.log(e.currentTarget.value);
		// Switch to Dark Mode
		if (e.currentTarget.value === "off") {	
      setDarkMode(true)
			return
		}
		/* Light Mode */
    setDarkMode(false);
	};



  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="wrapper">
        <header className="main-head">
          <h1>Toggle Light/Dark Mode</h1>
        </header>
        <div className="head-widgets">
          <Switcher darkMode={darkMode} toggle={toggleDarkMode} />
        </div>
        <article className="content">
          <h2>So Light Mode or Dark Mode?</h2>
          <h3>It’s in your eyes</h3>
          <p>Black text on a white background makes for the best readability, hence the best comprehension and retention. Why? Because the color white reflects all wavelengths of the visible spectrum. The iris does not need to widen in order to absorb more light.</p>
          <blockquote>"In a series of experiments, proofreading performance was consistently better with positive polarity (dark text on light background) than with negative polarity displays (light text on dark background). This positive polarity advantage was independent of ambient lighting (darkness vs. typical oﬃce illumination) and of chromaticity (black and white vs. blue and yellow). A ﬁnal experiment showed that colour contrast (red text on green background) could not compensate for a lack of luminance contrast."</blockquote>
          <h2>In conclusion...</h2>
          <p>...people with normal vision (or corrected-to-normal vision), visual performance tends to be better with light mode, whereas some people with cataract and related disorders may perform better with dark mode. On the flip side, long-term reading in light mode may be associated with myopia.</p>
        </article>
        <aside className="side">
          <h2>Information</h2>
          <p>This small <a href="https://reactjs.org/" target="_blank" rel="noreferrer">ReactJs Application</a> is an adaptation to React from a pen that showcases an on and off microinteraction, which is the <a href="https://codepen.io/elisavetTriant/pen/xxgMJMa" target="_blank" rel="noreferrer">dark/light mode switching of the site's theme</a>. You can find at that pen a different approach, where a data attribute is used instead of React's State Handling, in vanilla JavaScript.</p>
          <p>You can find the <a href="https://github.com/elisavetTriant/dark-mode-switcher-react" target="_blank" rel="noreferrer">source code at this repository</a>.</p>
          
          <h2>Credits</h2>
          <p>Read about <a href="https://material.io/design/color/the-color-system.html#color-theme-creation" target="_blank" rel="noreferrer">Theming</a> and the <a href="https://material.io/design/color/dark-theme.html" target="_blank" rel="noreferrer">Dark theme</a> on <a href="https://material.io/" target="_blank" rel="noreferrer">Material Design</a>.</p>
          <p>Special thanks to Ryan Feigenbaum for his excellent article on <a href="https://ryanfeigenbaum.com/dark-mode/" target="_blank" rel="noreferrer">Dark Mode Toggle</a>.</p>
          <p>Cheers to Nick Bottomley
            for his pen on <a href="https://codepen.io/nickbottomley/pen/uhfmn" target="_blank" rel="noreferrer">On-Off Switches</a>.</p>
          
        </aside>
        <footer className="main-footer">
          <p>Made with love by <a href="https://elissavet.me" target="_blank" rel="noreferrer">Elissavet Triantafyllopoulou</a>.</p>
          <p>Thank you for visiting!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
