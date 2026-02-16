import React, { useState } from "react";
import portfolio from '../assets/portfolio.png';
import portfolio1 from '../assets/Portfolio1.png';
import portfolio2 from '../assets/ecommerce.png';
import Flowcraft from '../assets/Flowcraft.png';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
   {
    id: 1,
    title: "FlowCraft",
    description: "A scalable performant digital marketing website built in webflow using reusable components and CMS collections. Adding custom animations using GSAP made it more interactive.",
    technologies: ["Webflow", "HTML5" ,"CSS3", "GSAP"],
    github: "",
    demo: "https://www.flowcraft-tech.online//",
    image: Flowcraft
  },
  {
    id: 2,
    title: "Rise Estates",
    description: "A modern, responsive real estate site built with React for dynamic, component-based architecture and Tailwind CSS for clean, utility-first styling.",
    technologies: ["React", "Tailwind Css"],
    github: "https://github.com/Giginac/RealEstate_ReactApp",
    demo: "https://www.riseestates.online/",
    image: portfolio
  },
  {
    id: 3,
    title: "Fitness center",
    description: "The Fitness site includes multiple sections such as a hero banner, membership plans, testimonials. Emphasis was placed on user engagement with subtle motion effects.",
    technologies: ["React", "Framer motion", "Tailwind CSS"],
    github: "https://github.com/Giginac/GymWebsite_React",
    demo: "https://www.fitnesscenter.space/",
    image: portfolio1
  },
  {
    id: 4,
    title: "Diorra Jewels",
    description:"E-commerce Shopify Site designed for a modern jewelry brand. It features intuitive navigation, secure checkout, mobile responsiveness, and elegant product showcases.",
    technologies: ["Shopify", "Liquid Html", "HTML5", "CSS3"],
    github: "",
    demo: "https://www.diorra.store/?pb=0",
    image: portfolio2
  },
  // {
  //   id: 5,
  //   title: "Designer Portfolio",
  //   description: "clean, intuitive, and interactive portfolio site. Built with React, Tailwind, Three.js, and Framer Motion, blends thoughtful design with dynamic, immersive tech.",
  //   technologies: ["React", "Framer Motion", "Three.js", "Tailwind Css"],
  //   github: "https://github.com/Giginac/UXportfolio_React",
  //   demo: "https://u-xportfolio-react-9ok2.vercel.app/",
  //   image: portfolio3
  // },
  
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - projectsPerPage : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <section data-aos="fade-up" data-aos-delay="250" id="projects" className="w-full py-20 px-4 sm:px-8 
    relative bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold text-gray-100 mb-2">
            Latest <span className="text-yellow-500">Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works and contributions
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-300 p-2
             rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <FiChevronLeft className="text-gray-700 text-xl" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gray-300 p-2 
            rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <FiChevronRight className="text-gray-700 text-xl" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow
                 duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-red-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    {/* <a 
                      href={project.github} target="_blank"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a> */}
                    <a 
                      href={project.demo} target="-blank"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full ${currentIndex === index * projectsPerPage ? 'bg-blue-600' 
                : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;