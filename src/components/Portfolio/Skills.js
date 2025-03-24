import React from "react";
import { Cpu, Database, Server, Globe } from "lucide-react";

const Skills = ({ registerSection }) => {
  // Skills data
  const skills = {
    frontend: [
      "React.js",
      "Redux",
      "Redux Toolkit",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material-UI",
      "Responsive Design",
      "E-Charts",
    ],
    tools: ["GitHub", "Vercel", "Netlify", "CI/CD", "Agile/Scrum", "JIRA"],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-800"
      ref={(ref) => registerSection("skills", ref)}
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-gray-100 font-bold mb-2 inline-block relative">
            My Skills
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-blue-600 mt-2"></span>
          </h2>
          <p className="text-gray-400 mt-0">
            Specialized skills and technologies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Frontend Skills */}
          <div className="bg-gray-900/50 rounded-lg p-6 transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-blue-600">
              <Globe size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 rounded text-sm text-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools Skills */}
          <div className="bg-gray-900/50 rounded-lg p-6 transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-blue-600">
              <Cpu size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Tools & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 rounded text-sm text-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
