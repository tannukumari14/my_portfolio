import React from 'react';
import './globals.css';

const projects = [
  {
    title: "Project 1",
    subtitle: "Todo Project",
    description: "This is a Todo project designed to help you track future tasks. Once a task is completed, it will be marked as done. This project helps manage tasks by allowing users to add, track, and mark tasks as complete. It ensures efficient organization and progress monitoring for future work.",
    link: "https://todolist-lovat-beta.vercel.app/"
  },
  {
    title: "Project 2",
    subtitle: "Amazon",
    description: "This project is a replication of the real Amazon web page. It aims to mimic the functionality and design of Amazon's website, including features such as product listings, search functionality, user authentication, and a shopping cart system.",
    link: "https://amazon-nt53.vercel.app/"
  },
  {
    title: "Project 3",
    subtitle: "Movie Review",
    description: "This project fetches movie reviews from a database or API and displays them on the browser. Users can view detailed reviews, ratings, and summaries for various movies.",
    link: "https://moviecritic-3vzd.vercel.app/"
  },
  {
    title: "Project 4",
    subtitle: "Movie Catalog App",
    description: "Discover and manage your favorite films with our Movie Catalog app. Effortlessly browse, organize, and review movies—all in one convenient place.",
    link: "https://catalog-wheat-pi.vercel.app/"
  },
  {
    title: "Project 5",
    subtitle: "Newz API",
    description: "This is a Newz API project that displays the data with fetch, and on search it displays the news headline and image and more information.",
    link: "https://news-api-seven-rho.vercel.app/"
  },
  {
    title: "Project 6",
    subtitle: "Weather App",
    description: "This is a React-based weather application that allows users to view current weather conditions and forecasts for different locations. Users can search for locations, select countries from a dropdown menu, or click on country flags to view weather data. The app includes a login screen for user authentication.",
    link: "https://weather-app-react-three-cyan.vercel.app/"
  }
];

const Projects = () => (
  <div className="projects-container" id="projects">
    <h2 className="projects-title">Projects</h2>
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3 className="project-title">{project.title}</h3>
        <h4 className="project-subtitle">{project.subtitle}</h4>
        <p className="project-description">{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        )}
      </div>
    ))}
  </div>
);

export default Projects;
