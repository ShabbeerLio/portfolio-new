import React, { useState } from "react";
import "./Portfolio.css";
import Project1 from "../../Assets/Projects/project1.png"
import Project2 from "../../Assets/Projects/project2.png"
import Project3 from "../../Assets/Projects/project3.png"
import Project4 from "../../Assets/Projects/project4.png"
import Project5 from "../../Assets/Projects/project5.png"
import Project6 from "../../Assets/Projects/project6.png"
import Project7 from "../../Assets/Projects/project7.png"
import Project8 from "../../Assets/Projects/project8.png"
import Project9 from "../../Assets/Projects/project9.png"

const data = [
  {
    id: 1,
    title: "Nikha-e-Muslim",
    type: "Matrimonial Web App",
    category: ["web", "design"],
    img: Project1,
    link: "https://nikahemuslim.com",
  },
  {
    id: 2,
    title: "Print Kaar",
    type: "Business Management System",
    category: ["web", "app", "design"],
    img: Project2,
    link: "https://printkaarcreation.shop",
  },
  {
    id: 3,
    title: "YOU Chat",
    type: "Chating system with audio and video",
    category: ["web", "app", "design"],
    img: Project5,
    link: "https://talkzzz.netlify.app/",
  },
  {
    id: 4,
    title: "FeastIQ",
    type: "AI Meal & Workout Planner",
    category: ["app", "design"],
    img: Project3,
    link: "https://feastiq.online/",
  },
  {
    id: 5,
    title: "Sadaqah App India",
    type: "Donation Platform",
    category: ["app","web", "design"],
    img: Project4,
    link: "https://sadaqah-ababil.netlify.app/",
  },
  {
    id: 6,
    title: "Digital Dezire",
    type: "Company Website",
    category: ["web"],
    img: Project6,
    link: "https://digital-dezire.netlify.app",
  },
  {
    id: 7,
    title: "Astrology Web App",
    type: "Astrology Application",
    category: ["app"],
    img: Project7,
    link: "https://astronivesh.com",
  },
  {
    id: 8,
    title: "Rackon Biotech",
    type: "Medicine Management System",
    category: ["web"],
    img: Project8,
    link: "https://reckkonbiotech.com",
  },
  
  {
    id: 9,
    title: "Zestrine View",
    type: "Doctor Showcase Website",
    category: ["web", "design"],
    img: Project9,
    link: "https://zestrineview.com",
  },
  {
    id: 10,
    title: "50+ Static Websites",
    type: "HTML / CSS / JS / React.js Projects",
    category: ["web", "design"],
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    link: "https://github.com/ShabbeerLio",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? data
      : data.filter((item) => item.category.includes(filter));
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="portfolio-tabs">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "design" ? "active" : ""}
          onClick={() => setFilter("design")}
        >
          Web design
        </button>
        <button
          className={filter === "app" ? "active" : ""}
          onClick={() => setFilter("app")}
        >
          Applications
        </button>
        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web development
        </button>
      </div>

      <div className="portfolio-grid">
        {filtered.map((item) => (
          <div
            className="portfolio-card"
            key={item.id}
            onClick={() => window.open(item.link, "_blank")}
          >
            <img src={item.img} alt={item.title} />
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
