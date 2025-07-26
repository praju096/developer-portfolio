import { projects } from '../data/portfolio-data';
import { Button } from '../components/ui/button';
import { Github } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-12 lg:mb-16 gradient-text">FEATURED PROJECTS</h2>

        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="glassmorphism rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/10 transition-all duration-300">
              <div className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={project.image}
                    alt={`${project.title} Development`}
                    className="rounded-xl shadow-lg w-full h-48 sm:h-64 lg:h-80 object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-4">
                    <h3 className={`text-xl sm:text-2xl font-bold ${index % 3 === 0 ? 'text-[#00ff88]' :
                        index % 3 === 1 ? 'text-[#ff0080]' :
                          'text-[#00d4ff]'
                      }`}>
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm self-start ${index % 3 === 0 ? 'bg-[#00ff88]/20 text-[#00ff88]' :
                        index % 3 === 1 ? 'bg-[#ff0080]/20 text-[#ff0080]' :
                          'bg-[#00d4ff]/20 text-[#00d4ff]'
                      }`}>
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${techIndex % 3 === 0 ? 'bg-[#00d4ff]/20 text-[#00d4ff]' :
                            techIndex % 3 === 1 ? 'bg-[#ff0080]/20 text-[#ff0080]' :
                              'bg-[#00ff88]/20 text-[#00ff88]'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {project.type === 'research' ? (
                      <>
                          {/* <Button className="border border-[#ff0080] text-[#ff0080] px-4 sm:px-6 py-2 rounded-full hover:bg-[#ff0080] hover:text-black transition-all duration-300 bg-transparent text-sm">
                          <FileText className="mr-2" size={14} />
                          Research Paper
                        </Button> */}
                          <a href={project.githubcode}>
                            <Button className="border border-[#00d4ff] text-[#00d4ff] px-4 sm:px-6 py-2 rounded-full hover:bg-[#00d4ff] hover:text-black transition-all duration-300 bg-transparent text-sm">
                              <Github className="mr-2" size={14} />
                              Source Code
                            </Button>
                          </a>
                        </>
                        ) : (
                        <>
                          <a href={project.githubcode}>
                            <Button className="border border-[#00ff88] text-[#00ff88] px-4 sm:px-6 py-2 rounded-full hover:bg-[#00ff88] hover:text-black transition-all duration-300 bg-transparent text-sm">
                              <Github className="mr-2" size={14} />
                              View Code
                            </Button>
                          </a>
                          {/* <Button className="border border-[#00d4ff] text-[#00d4ff] px-4 sm:px-6 py-2 rounded-full hover:bg-[#00d4ff] hover:text-black transition-all duration-300 bg-transparent text-sm">
                          <ExternalLink className="mr-2" size={14} />
                          Live Demo
                        </Button> */}
                        </>
                    )}
                      </div>
                  </div>
                </div>
              </div>
          ))}
            </div>
      </div>
    </section>
  );
}
