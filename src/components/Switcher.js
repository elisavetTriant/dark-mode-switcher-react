import React from 'react';

const Switcher = ({ darkMode, toggle }) => {
    return (
        <form>
            <div className="switch">
                <input type="radio" id="on" name="status" value="on" {...!darkMode ? 'checked' : ''} onClick={toggle} />
                <label for="on">Light</label>
                <input type="radio" id="off" name="status" value="off" onClick={toggle} {...darkMode ? 'checked' : ''} />
                <label for="off">Dark</label>
                <span className="toggle-outside"><span className="toggle-inside"></span></span>
            </div>
        </form>
    )
}

export default Switcher