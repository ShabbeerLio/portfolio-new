import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Topbar.css"

const Topbar = () => {
    const location = useLocation();
    console.log(location, "location")
    return (
        <div className='topbar'>
            <ul>
                <li>
                    <Link className={`top-itms ${location.pathname === "/" ? "active" : ""}`} to={"/"}>About</Link>
                    <Link className={`top-itms ${location.pathname === "/resume" ? "active" : ""}`} to={"/resume"}>Resume</Link>
                    <Link className={`top-itms ${location.pathname === "/projects" ? "active" : ""}`} to={"/projects"}>Projects</Link>
                    <Link className={`top-itms ${location.pathname === "/contact" ? "active" : ""}`} to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Topbar
