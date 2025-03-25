import React from "react";

const Experience = ({ registerSection }) => {
  return (
    <section
      id="experience"
      className="py-5 bg-gray-800"
      ref={(ref) => registerSection("experience", ref)}
    >
      <div className="container mx-auto px-6">
        <div className="mb-2">
          <h2 className="text-3xl font-bold mb-2 inline-block text-gray-100 relative">
            Work Experience
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-blue-600 mt-2"></span>
          </h2>
          <p className="text-gray-300 mt-1">My professional journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gray-700 transform md:translate-x-px"></div>

          <div className="space-y-12">
            {/* Experience Item */}
            <div className="relative">
              <div className="md:w-1/2 md:pr-12 pr-10">
                <div className="absolute top-0 left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2"></div>
                <div className="absolute top-0 left-10 md:left-auto md:right1/2 md:mr-10 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  Mar 2023 - Present
                </div>
                <div className="mt-8 md:mt-0 bg-gray-900/50 rounded-lg p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-100 mb-1">
                    React Developer
                  </h3>
                  <p className="text-blue-600 mb-4">Siepl Innovations</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600 mt-1">•</span>
                      <span>
                        Developed and maintained responsive web applications
                        using <b>React.js</b>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600 mt-1">•</span>
                      <span>
                        Integrated and optimized <b>RESTful APIs</b> using Axios
                        for seamless data fetching.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600 mt-1">•</span>
                      <span>
                        Developed <b>reusable UI components</b> with Tailwind
                        CSS for a scalable design system.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600 mt-1">•</span>
                      <span>
                        Implemented global state management using{" "}
                        <b>Redux Toolkit</b> and Context API.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600 mt-1">•</span>
                      <span>
                        Improved application performance using{" "}
                        <b>React.memo, useMemo, and lazy loading</b>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600 mt-1">•</span>
                      <span>
                        Ensured high code quality by implementing{" "}
                        <b>ESLint, Prettier, and Git hooks</b>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600 mt-1">•</span>
                      <span>
                        Implemented <b>authentication & authorization</b> with
                        JWT tokens and role-based access.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="relative">
              <div className="md:ml-auto md:w-1/2 md:pl-12 pl-1">
                <div className="absolute top-0 left-0 md:left-1/2 w-4 h-4 rounded-full bg-gray-900 transform -translate-x-1/2"></div>
                <div className="absolute top-0  md:right1/2 bg-gray-700 text-white px-3 py-1 rounded text-sm">
                  Education
                </div>
                <div className="mt-8 md:mt-0 bg-gray-900/50 rounded-lg p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl text-gray-100 font-semibold mb-1">
                    B. Tech (Electrical And Electronics Engineering)
                  </h3>
                  <p className="text-blue-600 mb-4">JNTUK University</p>
                  <p className="text-gray-300">
                    Built a strong foundation in engineering principles,
                    problem-solving, and technical skills that complement my web
                    development expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
