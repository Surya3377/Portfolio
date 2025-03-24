import React from "react";
import { Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Contact = ({ registerSection }) => {
  return (
    <>
      <section
        id="contact"
        className="py-3"
        ref={(ref) => registerSection("contact", ref)}
      >
        <section className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold inline-block relative">
              Get In Touch
              <span className="absolute left-0 right-0 mx-auto bottom-0 w-20 h-1 bg-blue-600"></span>
            </h2>
            <p className="text-gray-400 mt-1">Let's work together</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {/* Location */}
              <div className="flex flex-col items-center text-center w-40">
                <div className="bg-gray-800 rounded-full p-3 text-blue-600 mb-3">
                  <MapPin size={24} />
                </div>
                <h4 className="text-lg font-medium mb-1">Location</h4>
                <p className="text-gray-400 text-sm">
                  Available for remote work globally
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center w-40">
                <div className="bg-gray-800 rounded-full p-3 text-blue-600 mb-3">
                  <Mail size={24} />
                </div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <a
                  href="mailto:suryapolu35@gmail.com"
                  className="text-gray-400 hover:text-blue-600 transition-colors text-sm"
                >
                  suryapolu35@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center w-40">
                <div className="bg-gray-800 rounded-full p-3 text-blue-600 mb-3">
                  <Phone size={24} />
                </div>
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <a
                  href="tel:+17816017181"
                  className="text-gray-400 hover:text-blue-600 transition-colors text-sm"
                >
                  +91 7816017181
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center text-center w-40">
                <div className="bg-gray-800 rounded-full p-3 text-blue-600 mb-3">
                  <Linkedin size={24} />
                </div>
                <h4 className="text-lg font-medium mb-1">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/suryaprakashpolu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors text-sm"
                >
                  linkedin.com/in/suryaprakashpolu
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
