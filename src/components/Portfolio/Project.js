import React from "react";
import lms from "../assets/images/lms.png";
import doors from "../assets/images/doorsAdvaisor.png";

const Project = ({ registerSection }) => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Certainty Rank Academy",
      description:
        "A comprehensive Learning Management System (LMS) for students preparing for competitive exams like JEE, NEET, and KCET.",
      image: lms,
      tech: [
        "React.js",
        "Redux Toolkit",
        "JavaScript",
        "CSS",
        "HTML",
        "Material-UI",
        "JWT",
      ],
      features: [
        "Secure authentication with JWT",
        "Dynamic course management",
        "Interactive learning materials",
        "Student progress tracking",
        "Real-time notifications",
        "Responsive design",
      ],
    },
    {
      id: 2,
      title: "Doors Advisor",
      description:
        "A property platform providing spaces for rent, lease, and office use, allowing entrepreneurs to compare prices for office and coworking spaces.",
      image: doors,
      tech: ["React.js", "CSS", "JavaScript", "RESTful APIs"],
      features: [
        "Property listings",
        "Advanced search filters",
        "Price comparison tool",
        "Interactive maps",
        "User-friendly interface",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900"
      ref={(ref) => registerSection("projects", ref)}
    >
      <div className="container mx-auto px-6">
        <div className="mb-3">
          <h2 className="text-3xl font-bold  inline-block relative text-gray-100">
            My Projects
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-blue-600"></span>
          </h2>
          <p className="text-gray-400 mt-6">Showcasing my best work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
                  <h3 className="text-xl font-bold text-gray-100">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>

                <h4 className="font-medium mb-2 text-gray-200">
                  Key Features:
                </h4>
                <ul className="mb-4 space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-400">
                      <span className="mr-2 text-blue-600 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
