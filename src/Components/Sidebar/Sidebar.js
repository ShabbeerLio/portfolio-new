import React from "react";
import "./Sidebar.css"
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiMobile1,CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import profileimg from "../../Assets/profile.jpg"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <div className="profile-image">
                    <img src={profileimg} alt="avatar" />
                </div>
                <h2>Md Shabbeer Ali Arif</h2>
                <span>MERN Stack Developer</span>
            </div>
            <hr />

            <div className="info">
                <div className="info-items">
                    <Link to={"mailto:mdshabbeer707@gmail.com"}>
                        <CiMail />
                        <p>
                            <span>Email</span>
                            mdshabbeer707@gmail.com
                        </p>
                    </Link>
                </div>
                <div className="info-items">
                    <Link to={"tel:9065686786"}>
                        <CiMobile1 />
                        <p>
                            <span>Phone</span>
                            +91 9065686786
                        </p>
                    </Link>
                </div>
            </div>
            <div className="info links">
                <p><Link to={"https://www.linkedin.com/in/md-shabbeer-ali-arif-8b166328b"}><FaLinkedin /></Link></p>
                <p><Link to={"https://github.com/ShabbeerLio"}><FaGithub /></Link></p>
                <p><Link to={"https://instagram.com/shabbeer_lio?igshid=NGVhN2U2NjQ0Yg=="}><FaInstagram /></Link></p>
            </div>
        </div>
    );
};

export default Sidebar;
