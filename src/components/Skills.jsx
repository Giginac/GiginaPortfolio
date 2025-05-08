import React from "react";
import react from "../assets/react.png";
import vue from "../assets/vue.png";
import html5 from "../assets/html5.svg";
import javascript from "../assets/javascript.png";
import aws from "../assets/aws.svg";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.svg";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.svg";
import Jira from "../assets/jira.svg";
import git from "../assets/git.svg";
import figma from "../assets/Figma.png";
import php from "../assets/php.svg";
import shopify from "../assets/shopify.svg";
import wordpress from "../assets/wordpress.svg";

// Array of skill objects with image, name, and description
const skills = [
  {img: html5, name: "HTML5"},
  { img: css, name: "CSS3" },
  { img: javascript, name: "JavaScript"},
  { img: bootstrap, name: "Bootstrap"},
  { img: react, name: "React" },
  { img: tailwind, name: "Tailwind CSS"},
  { img: vue, name: "Vue" },
  { img: figma, name: "Figma" },
  { img: git, name: "Git" },
  {img: Jira, name: "Jira"},
  {img: github, name: "Github"},
  {img: aws, name: "AWS"},
  {img: php, name: "PHP"},
  {img: shopify, name: "Shopify"},
  {img: wordpress, name: "Wordpress"}

];

const Skills = () => {
  return (
    <div
      id="skills"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-16 bg-gradient-to-b from-gray-200/10 to-white relative"
    >
      {/* Semi-transparent blurred background overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 group">
        <h2 className="text-3xl font-bold text-white mb-2">
            My <span className="text-yellow-500">Skills</span>
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
          Technologies I've mastered through experience
          </p>
          
        </div>

        {/* Skills grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-8 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 rounded-2xl bg-white/70
               backdrop-blur-md shadow-lg hover:shadow-xl border border-white/20 transition-all 
               duration-300 group relative overflow-hidden hover:bg-white/90 hover:border-yellow-300
                hover:scale-[1.03]"
            >
              {/* Hover gradient light effect */}
              <div className="absolute inset-0 bg-gradient-to-br
               from-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity
                duration-300 -z-10"></div>

              {/* Skill icon */}
              <div className="mb-4 p-3 bg-white/80 rounded-xl shadow-sm group-hover:rotate-6
               group-hover:bg-red-50 transition-all duration-300">
                <img
                  src={skill.img}
                  alt={`${skill.name} Icon`}
                  className="w-14 h-10 object-contain grayscale-[20%] group-hover:grayscale-0 
                  group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Skill name */}
              <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-red-600
               transition-colors duration-200">
                {skill.name}
              </h3>

              {/* Optional animated border effect on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent
               group-hover:border-red-300/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
