import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg navbar -${props.mode}`} >
  
  <div className="container-fluid"  >
    <Link className="navbar-brand" to=""><h2>{props.title}</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
      </ul>  
      <div className="d-flex">
        <div className="bg-primary  rounded mx-2" onClick={()=>props.toggleMode('primary')}  style={{height:'18px', width:'22px', cursor:"pointer"}} ></div>
        <div className="bg-danger  rounded mx-2" onClick={()=>props.toggleMode('danger')}  style={{ height:'18px', width:'22px',cursor:"pointer"}} ></div>
        <div className="bg-warning  rounded mx-2" onClick={()=>props.toggleMode('warning')}  style={{ height:'18px', width:'22px',cursor:"pointer"}} ></div>
        <div className="bg-info  rounded mx-2" onClick={()=>props.toggleMode('info')}  style={{ height:'18px', width:'22px',cursor:"pointer"}} ></div>
        <div className="bg-light  rounded mx-2" onClick={()=>props.toggleMode('light')}  style={{ height:'18px', width:'22px',cursor:"pointer"}} ></div>
        <div className="bg-dark  rounded mx-2" onClick={()=>props.toggleMode('dark')}  style={{ height:'18px', width:'22px',cursor:"pointer"}} ></div>
      </div>

     
    </div>
  </div>
  </nav>
    )
}

Navbar.proptype={title : PropTypes.string,
                  aboutText: PropTypes.string,}
export default Navbar 