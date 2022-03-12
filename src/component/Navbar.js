import React from 'react'
import lojo from './logo.png'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            
                <nav className="navbar navbar-expand-md navbar-dark">
                    <img src={lojo} className="logo" alt="logo" height="60px" width='70px'></img>
                    <Link className="navbar-brand" to="/">CRICSCORER</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recent">Recent</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/upcoming">Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </div>
    )
}
