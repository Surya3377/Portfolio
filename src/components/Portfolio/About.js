import React from "react";
import { Linkedin, Mail } from "lucide-react";

const About = ({ registerSection, typedText, getAnimationClass }) => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 relative overflow-hidden"
        ref={(ref) => registerSection("home", ref)}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-blue-600 text-lg font-medium mb-4 block animate-fade-in">
              Welcome to my Portfolio
            </span>
            <h1 className="text-5xl font-bold leading-tight mb-6 animate-slide-up delay-300">
              Hi, I'm <span className="text-blue-600">Surya Prakash Polu</span>
            </h1>
            <h2 className="text-3xl text-gray-300 mb-6 flex animate-slide-up delay-500">
              I'm a <span className="text-orange-500 ml-2">{typedText}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 animate-slide-up delay-700 max-w-2xl">
              A passionate Full Stack Web Developer with 3 years of experience
              in building robust and scalable web applications using MERN stack.
              Let's work together to bring your ideas to life!
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up delay-1000">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-white rounded font-medium transition-all hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg"
              >
                View Projects
              </a>
            </div>
            <div className="flex space-x-4 animate-slide-up delay-1200">
              <a
                href="https://www.linkedin.com/in/suryaprakashpolu"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Surya3377"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="mailto:suryapolu35@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-48 h-48 bg-blue-600 rounded-full top-1/4 left-1/5 opacity-10 animate-float"></div>
          <div className="absolute w-32 h-32 bg-blue-600 rounded-full bottom-1/4 left-1/6 opacity-10 animate-float-delay"></div>
          <div className="absolute w-24 h-24 bg-blue-600 rounded-full top-1/4 right-1/5 opacity-10 animate-float-delay-more"></div>
        </div>
      </section>
      <section
        id="about"
        className="py-20 relative"
        ref={(ref) => registerSection("about", ref)}
      >
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block relative">
              About Me
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-blue-600 mt-2"></span>
            </h2>
            <p className="text-gray-400 mt-6">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`relative transition-all duration-700 transform -translate-x-10 opacity-0 ${getAnimationClass(
                "left"
              )}`}
            >
              <div className="overflow-hidden rounded-lg bg-gray-800/20 relative z-10">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.A789e5WoR6rdfQuFU1KDzAHaIB&pid=Api&P=0&h=180"
                  alt="Surya Prakash Polu"
                  className="w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-blue-600 rounded-lg z-0"></div>
            </div>

            <div
              className={`transition-all duration-700 transform translate-x-10 opacity-0 ${getAnimationClass(
                "right"
              )}`}
            >
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hello! I'm Surya Prakash Polu, a Full Stack Web Developer with 3
                years of experience specializing in the MERN stack. I enjoy
                transforming complex problems into elegant, efficient, and
                intuitive solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey in web development started with a strong foundation
                in Electrical and Electronics Engineering from JNTUK University.
                Since then, I've been passionate about creating responsive,
                user-friendly applications that deliver exceptional user
                experiences.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Siepl Innovations, I've had the opportunity to work on
                diverse projects, from learning management systems to property
                platforms, allowing me to refine my skills across the entire
                development stack.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h5 className="font-medium mb-1">Name</h5>
                  <p className="text-gray-400">Surya Prakash Polu</p>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Email</h5>
                  <p className="text-gray-400">suryapolu35@gmail.com</p>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Phone</h5>
                  <p className="text-gray-400">+91 7816017181</p>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Experience</h5>
                  <p className="text-gray-400">3+ Years</p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
