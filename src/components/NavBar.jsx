import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
  render() {
    return (
      <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className=" mx-2 navbar-brand text-light" to="#" ><img style={{height:"5vh"}} src="https://tse4.mm.bing.net/th?id=OIP.T8E3e7lLdvguJBJDM503WgHaHa&pid=Api&P=0&h=180" alt="" /> NewsMonkey</Link>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/">Home<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/business">Business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light " to="/sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light " to="/health">Health</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light " to="/technology">Technology</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light " to="/science">Science</Link>
      </li>
    </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

