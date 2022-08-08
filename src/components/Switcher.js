import React from 'react'

const Switcher = (props) => {

    const lightOrDarkText = props.darkMode ? 'Light' : 'Dark';

    return (
        <div className='switch_wrappper'>
            <form>
                <div className="switch">
                    <input type="radio" id="on" name="status" value="on" onClick={props.toggle} checked={!props.darkMode} />
                    <label htmlFor="on">Light</label>
                    <input type="radio" id="off" name="status" value="off" onClick={props.toggle} checked={props.darkMode} />
                    <label htmlFor="off">Dark</label>
                    <span className="toggle-outside"><span className="toggle-inside"></span></span>
                </div>
            </form>
            <span className="tooltiptext">Change to <span>{lightOrDarkText}</span> Mode By Clicking <span>{lightOrDarkText}</span></span>
        </div>
    )
}

export default Switcher