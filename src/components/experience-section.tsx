import { Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-16 gradient-text">
            PROFESSIONAL JOURNEY
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 h-full w-0.5 bg-gradient-to-b from-gray-700 via-emerald-500 to-gray-700"></div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12 pb-12 group last:pb-0">
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 border-4 border-gray-900 flex items-center justify-center transform transition-transform group-hover:scale-110">
                <Briefcase className="text-white" size={16} />
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg transition-all duration-300 hover:border-emerald-400/30 hover:shadow-emerald-400/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-gray-400 text-sm">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        exp.type === "Internship"
                          ? "bg-blue-900/30 text-blue-400"
                          : "bg-emerald-900/30 text-emerald-400"
                      }`}
                    >
                      {exp.type}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                      {exp.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
