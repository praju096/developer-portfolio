import { softSkills, languages } from "../data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-8 sm:mb-12 md:mb-16 gradient-text animate-slide-up">
          ABOUT ME
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern Developer Workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6 animate-slide-up">
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#00ff88] mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Quick learner with excellent problem-solving skills,
                collaborative mindset, and keen interest in learning new
                technologies. Strong grasp of RESTful API development, MVC
                architecture, and modern UI libraries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00d4ff]">5+</div>
                  <div className="text-sm text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ff0080]">8.92</div>
                  <div className="text-sm text-gray-400">CGPA (Masters)</div>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-[#ff0080] mb-3">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm ${index === 0
                        ? "bg-[#00ff88]/20 text-[#00ff88]"
                        : index === 1
                          ? "bg-[#00d4ff]/20 text-[#00d4ff]"
                          : "bg-[#ff0080]/20 text-[#ff0080]"
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-[#00d4ff] mb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
