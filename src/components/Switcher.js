import React from 'react'

const Switcher = (props) => {

    return (
        <form>
            <div className="switch">
                <input type="radio" id="on" name="status" value="on" onClick={props.toggle} checked={!props.darkMode} />
                <label htmlFor="on">Light</label>
                <input type="radio" id="off" name="status" value="off" onClick={props.toggle} checked={props.darkMode} />
                <label htmlFor="off">Dark</label>
                <span className="toggle-outside"><span className="toggle-inside"></span></span>
            </div>
        </form>
    )
}

export default Switcher