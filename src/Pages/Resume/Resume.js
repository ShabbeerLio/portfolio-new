import React from 'react'
import "./Resume.css"
import { FaBookOpen } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import ResumeFile from "../../Assets/shabbeer-resume.pdf"

const Resume = () => {
    return (
        <div className="page">
            <h1>Resume
                <a href={ResumeFile} download="Resume" className='cv-download'>
                    <span>
                        <IoCloudDownloadOutline /> Download CV
                    </span>
                </a>
            </h1>
            {/* Experience */}
            <div className="resume-section">
                <h2 className="section-title">
                    <MdOutlineWork /> Experience
                </h2>

                <div className="timeline">

                    <div className="timeline-item">
                        <div className="dot"></div>
                        <div className="content">
                            <h3>Backend Developer — Digital Dezire Web Solutions</h3>
                            <span>Sep 2023 — Present</span>
                            <p>
                                Developing and maintaining scalable MERN-based web and mobile applications
                                for healthcare, fitness, and SaaS industries. Building secure REST APIs,
                                optimizing MongoDB queries, and deploying production environments on VPS,
                                Vercel, and Render.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="dot"></div>
                        <div className="content">
                            <h3>Frontend Developer — Stormtec Global Solution</h3>
                            <span>Aug 2022 — May 2023</span>
                            <p>
                                Designed and developed a responsive e-commerce platform improving user
                                engagement by 30%. Integrated REST APIs, optimized performance, ensured
                                cross-browser compatibility, and collaborated with product teams for UI/UX
                                improvements.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Education */}
            <div className="resume-section">
                <h2 className="section-title">
                    <FaBookOpen /> Education
                </h2>

                <div className="timeline">

                    <div className="timeline-item">
                        <div className="dot"></div>
                        <div className="content">
                            <h3>Bachelor of Computer Application (BCA)</h3>
                            <span>2021 — 2024</span>
                            <p>
                                George Group of College (MAKAUT), Kolkata — CGPA: 7.49
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="dot"></div>
                        <div className="content">
                            <h3>Higher Secondary Education</h3>
                            <span>2019 — 2021</span>
                            <p>
                                B.N College (BSEB), Bhagalpur — PCM Stream, 55%
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="dot"></div>
                        <div className="content">
                            <h3>Secondary Education</h3>
                            <span>2019</span>
                            <p>
                                St. Teresa’s School, Bhagalpur (ICSE) — Computer Stream, 75%
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Resume
