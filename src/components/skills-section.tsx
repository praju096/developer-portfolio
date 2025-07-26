import { skillLevels, certifications, training } from '../data/portfolio-data';
// import { Code, Database, Server, Wrench, Brain, Award } from 'lucide-react';
import htmlIcon from "/assets/html.svg"
import cssIcon from "/assets/css.svg"
import reactjsIcon from "/assets/react.svg"
import nodejsIcon from "/assets/nodejs.svg"
import mongodbIcon from "/assets/mongoDB.svg"
import expressjsIcon from "/assets/expressjs.svg"

const skillIcons = {
  'HTML5': <img src={htmlIcon} alt="HTML5" width={50} />,
  'CSS3': <img src={cssIcon} alt="CSS3" width={50} />,
  'ReactJS': <img src={reactjsIcon} alt="CSS3" width={50} />,
  'NodeJS': <img src={nodejsIcon} alt="NodeJS" width={90} />,
  'MongoDB': <img src={mongodbIcon} alt="MongoDB" width={30} />,
  'ExpressJS': <img src={expressjsIcon} alt="MongoDB" width={130} />,
};

export default function SkillsSection() {
  const mainSkills = ['HTML5', 'CSS3', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'];

  return (
    <section id="skills" className="py-15 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 gradient-text">TECHNICAL SKILLS</h2>
        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {mainSkills.map((skill, index) => {
            const levels = [95, 90, 88, 85, 82, 80];
            const colors = ['#00ff88', '#00d4ff', '#00ff88', '#ff0080', '#00d4ff', '#00ff88'];

            return (
              <div key={skill} className="skill-card">
                <div className="skill-card-inner relative h-32">
                  <div className="skill-card-front absolute inset-0 glassmorphism rounded-xl p-4 flex flex-col items-center justify-center">
                    <div className="text-3xl mb-2" style={{ color: colors[index] }}>
                      {skillIcons[skill as keyof typeof skillIcons] || '💻'}
                    </div>
                    <span className="text-sm font-semibold text-center">{skill}</span>
                  </div>
                  <div
                    className="skill-card-back absolute inset-0 glassmorphism rounded-xl p-4 flex flex-col items-center justify-center"
                    style={{ backgroundColor: `${colors[index]}10` }}
                  >
                    <div className="text-2xl font-bold" style={{ color: colors[index] }}>
                      {levels[index]}%
                    </div>
                    <div className="text-xs text-center">
                      {levels[index] >= 90 ? 'Expert Level' : 'Advanced'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bars */}
        <div className="space-y-6 mb-16">
          <h3 className="text-2xl font-bold text-center text-[#ff0080] mb-8">Skill Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism p-6 rounded-xl">
              <div className="space-y-4">
                {skillLevels.slice(0, 3).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className={`text-sm text-[#${skill.color === 'neon-green' ? '00ff88' : skill.color === 'neon-blue' ? '00d4ff' : 'ff0080'}]`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <div
                        className="progress-bar rounded-full h-2"
                        style={{
                          width: `${skill.level}%`,
                          background: skill.color === 'neon-green' ? 'linear-gradient(90deg, #00ff88, #00d4ff)' :
                            skill.color === 'neon-blue' ? 'linear-gradient(90deg, #00d4ff, #ff0080)' :
                              'linear-gradient(90deg, #ff0080, #00ff88)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glassmorphism p-6 rounded-xl">
              <div className="space-y-4">
                {skillLevels.slice(3).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className={`text-sm text-[#${skill.color === 'neon-green' ? '00ff88' : skill.color === 'neon-blue' ? '00d4ff' : 'ff0080'}]`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <div
                        className="progress-bar rounded-full h-2"
                        style={{
                          width: `${skill.level}%`,
                          background: skill.color === 'neon-green' ? 'linear-gradient(90deg, #00ff88, #00d4ff)' :
                            skill.color === 'neon-blue' ? 'linear-gradient(90deg, #00d4ff, #ff0080)' :
                              'linear-gradient(90deg, #ff0080, #00ff88)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-[#00d4ff] mb-8">Certifications & Training</h3>
          <div className="glassmorphism p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[#00ff88] mb-4">Professional Training</h4>
                <div className="bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg p-4">
                  <div className="font-medium">{training.company}</div>
                  <div className="text-sm text-gray-400">{training.duration} Intensive Training</div>
                  <div className="text-xs text-[#00ff88] mt-1">{training.specialization} Specialization</div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#ff0080] mb-4">Certifications</h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <span
                      key={cert}
                      className={`inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 ${index % 3 === 0 ? 'bg-[#ff0080]/20 text-[#ff0080]' :
                          index % 3 === 1 ? 'bg-[#00d4ff]/20 text-[#00d4ff]' :
                            'bg-[#00ff88]/20 text-[#00ff88]'
                        }`}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
