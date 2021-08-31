import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg navbar -${props.mode}`} >
  <div className="container-fluid"  >
    <a className="navbar-brand" href="#"><h2>{props.title}</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>  
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckChecked" />
  <label className="form-check-label"  style={{color:props.mode==='dark'?'white':'black'}}   htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    )
}

Navbar.proptype={title : PropTypes.string,
                  aboutText: PropTypes.string,}
export default Navbar 