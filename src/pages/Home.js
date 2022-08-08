import React from 'react'

const Home = () => {

    return (
        <div className='article_wrapper'>
            <article className="content">
                <h2>So Light Mode or Dark Mode?</h2>
                <h3>It’s in your eyes</h3>
                <p>Black text on a white background makes for the best readability, hence the best comprehension and retention. Why? Because the color white reflects all wavelengths of the visible spectrum. The iris does not need to widen in order to absorb more light.</p>
                <blockquote>"In a series of experiments, proofreading performance was consistently better with positive polarity (dark text on light background) than with negative polarity displays (light text on dark background). This positive polarity advantage was independent of ambient lighting (darkness vs. typical oﬃce illumination) and of chromaticity (black and white vs. blue and yellow). A ﬁnal experiment showed that colour contrast (red text on green background) could not compensate for a lack of luminance contrast."</blockquote>
                <h2>In conclusion...</h2>
                <p>...people with normal vision (or corrected-to-normal vision), visual performance tends to be better with light mode, whereas some people with cataract and related disorders may perform better with dark mode. On the flip side, long-term reading in light mode may be associated with myopia.</p>
                <h2>Read on</h2>
                <p>If you're interested to learn more, head to my <a href="https://elissavet.me/blog/dark-theme-mode-toggle-switcher-examples/" target="_blank" rel="noreferrer">blog</a>.</p>

            </article>
            <aside className="side">
                <h2>Information</h2>
                <p>You can find the <a href="https://github.com/elisavetTriant/dark-mode-switcher-react" target="_blank" rel="noreferrer">source code at this repository</a>.</p>
                <p>This <a href="https://reactjs.org/" target="_blank" rel="noreferrer">ReactJs Demo</a> is an adaptation to React from <a href="https://codepen.io/elisavetTriant/pen/eYgLbQB" target="_blank" rel="noreferrer">a pen</a> that showcases an on and off microinteraction, which is the dark/light mode switching of the site's theme. You can find at that pen a different approach, where a data attribute is used instead of React's State Handling, in vanilla JavaScript.</p>
                
                <h2>Credits</h2>
                <p>Read about <a href="https://material.io/design/color/the-color-system.html#color-theme-creation" target="_blank" rel="noreferrer">Theming</a> and the <a href="https://material.io/design/color/dark-theme.html" target="_blank" rel="noreferrer">Dark theme</a> on <a href="https://material.io/" target="_blank" rel="noreferrer">Material Design</a>.</p>
                <p>Special thanks to Ryan Feigenbaum for his excellent article on <a href="https://ryanfeigenbaum.com/dark-mode/" target="_blank" rel="noreferrer">Dark Mode Toggle</a>.</p>
                <p>Cheers to Nick Bottomley
                    for his pen on <a href="https://codepen.io/nickbottomley/pen/uhfmn" target="_blank" rel="noreferrer">On-Off Switches</a>.</p>
            </aside>
        </div>
    )
}

export default Home