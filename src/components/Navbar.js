import React from 'react'

export default function (props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`} style={{backgroundColor:props.mode}}>
      <div className="container-fluid">
          <a className="navbar-brand" style={{color:props.label}}  href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" style={{color:props.label}} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" style={{color:props.label}} href="#">About</a>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className={`form-check col-auto text-${props.label}`}>
            <input className="form-check-input" onClick={props.toggleGreen} type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Green Mode
            </label>
          </div>
          <div className={`form-check col-auto text-${props.label}`}>
            <input className="form-check-input" onClick={props.togglePurple} type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Purple Mode
            </label>
          </div>
          <div className={`form-check col-auto text-${props.label}`}>
            <input className="form-check-input" onClick={props.toggleBlue} type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Blue Mode
            </label>
          </div>
          <div className={`form-check col-auto text-${props.label}`}>
            <input className="form-check-input" onClick={props.toggleRed} type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Red Mode
            </label>
          </div>
          <div className={`form-check col-auto text-${props.label}`}>
            <input className="form-check-input" onClick={props.toggleDark} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Dark Mode
            </label>
          </div>
          <div className={`form-check col-auto text-${props.label}`}>
            <input className="form-check-input" onClick={props.toggleLight} type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Light Mode
            </label>
          </div>
        
        </div>
        {/* <div className={`form-check form-switch text-${props.label}`}>
          <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" onClick={props.toggle} htmlFor="flexSwitchCheckDefault">enable dark mode</label>
        </div> */}
      </div>
      
    </nav>
  )
}
