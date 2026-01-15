import React, { useState } from "react";
import "./About.css"
import { CiMobile1, CiUser } from "react-icons/ci";
import { LuBrush, LuCodeXml } from "react-icons/lu";
import { FaBrain } from "react-icons/fa";
import Slider from "react-slick";


const About = () => {
    const WhatdoData = [
        {
            id: 1,
            title: "Web Design",
            description:
                "Modern, user-friendly and responsive UI/UX designs focused on accessibility, performance, and visual consistency across all devices.",
            icon: <LuBrush />,
        },
        {
            id: 2,
            title: "Web Development",
            description:
                "Full-stack MERN development with secure APIs, optimized databases, and scalable architecture for business applications.",
            icon: <LuCodeXml />,
        },
        {
            id: 3,
            title: "Mobile Apps",
            description:
                "Progressive and mobile-first web applications for Android and iOS using modern frontend frameworks and API integrations.",
            icon: <CiMobile1 />,
        },
        {
            id: 4,
            title: "AI Integration",
            description:
                "AI-powered features including recommendation systems, automation, data analysis, and personalized user experiences using modern AI APIs.",
            icon: <FaBrain />,
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Nawaz Akhtar",
            text: "Shabbeer delivered a highly scalable MERN application with clean UI and secure backend. His problem-solving skills and communication made the entire process smooth and professional.",
        },
        {
            id: 2,
            name: "Ram Kishan",
            text: "Working with Shabbeer was a great experience. He transformed our requirements into a fast, responsive, and visually appealing web platform.",
        },
        {
            id: 3,
            name: "Aditya Jain",
            text: "Excellent developer with strong technical expertise in React and Node. The project was delivered on time with outstanding quality.",
        },
    ];

    const testimonialSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    const clientSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 2 } }
        ]
    };


    return (
        <div className="page">
            <h1>About Me</h1>
            <p>
                Innovative MERN Stack Developer with 2+ years of experience building AI-powered, healthcare,
                and SaaS-based web applications. Skilled in React.js, Node.js, Express.js, and MongoDB, with a
                strong focus on creating scalable, secure, and high-performance solutions.
            </p>
            <p>Proven expertise in
                developing platforms such as astrology systems, medicine management dashboards, AI meal and
                workout planners, donation-based apps, and matrimonial web apps. Passionate about delivering
                intuitive UI/UX, seamless API integrations, and responsive designs that enhance business efficiency
                and user engagement.</p>

            <h2>What I'm Doing</h2>
            <div className="grid">
                {WhatdoData.map((item) => (
                    <div className="card">
                        {item.icon}
                        <div className="card-item">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* ---------------- Testimonials ---------------- */}

            {/* Testimonials */}

            <h2>Testimonials</h2>
            <Slider {...testimonialSettings} className="testimonial">
                {testimonials.map((t, i) => (
                    <div key={i}>
                        <div className="card">
                            <CiUser />
                            <div>
                                <h3>{t.name}</h3>
                                <p>{t.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Clients */}

            {/* <h2>Clients</h2>
            <Slider {...clientSettings}>
                {clients.map((c, i) => (
                    <div key={i}>
                        <div className="client-logo">{c}</div>
                    </div>
                ))}
            </Slider> */}
        </div>
    );
};

export default About;
