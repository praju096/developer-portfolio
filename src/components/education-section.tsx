import { education, achievements } from '../data/portfolio-data';
import { GraduationCap, Trophy, Shield } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-16 gradient-text">EDUCATION & ACHIEVEMENTS</h2>
        
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={edu.degree} className="glassmorphism rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div>
                  <div className="text-center">
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-gradient-to-br from-[#00ff88] to-[#00d4ff]' : 'bg-gradient-to-br from-[#ff0080] to-[#00d4ff]'
                    }`}>
                      <GraduationCap className="text-2xl text-white" size={32} />
                    </div>
                    <div className={`text-3xl font-bold ${index === 0 ? 'text-[#00ff88]' : 'text-[#ff0080]'}`}>
                      {edu.cgpa}
                    </div>
                    <div className="text-sm text-gray-400">CGPA / 10</div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold ${index === 0 ? 'text-[#00ff88]' : 'text-[#ff0080]'}`}>
                      {edu.degree}
                    </h3>
                    <span className={`px-4 py-2 rounded-full text-sm ${
                      index === 0 ? 'bg-[#00ff88]/20 text-[#00ff88]' : 'bg-[#ff0080]/20 text-[#ff0080]'
                    }`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xl text-gray-300 mb-2">{edu.field}</p>
                  <p className="text-gray-400 mb-4">{edu.institution}, {edu.location}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="glassmorphism rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-[#00d4ff] mb-8">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className={`border rounded-xl p-6 ${
                  index === 0 ? 'bg-[#00ff88]/10 border-[#00ff88]/30' : 'bg-[#00d4ff]/10 border-[#00d4ff]/30'
                }`}
              >
                <div className="flex items-center mb-4">
                  {achievement.icon === 'trophy' ? (
                    <Trophy className={`text-2xl mr-4 ${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'}`} size={32} />
                  ) : (
                    <Shield className={`text-2xl mr-4 ${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'}`} size={32} />
                  )}
                  <h4 className={`text-xl font-bold ${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'}`}>
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-gray-300 mb-2">
                  <span className={`font-semibold ${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'}`}>
                    {'rank' in achievement ? achievement.rank : achievement.status}
                  </span>
                  {' '}
                  {'participants' in achievement ? `out of nearly ${achievement.participants}` : `in ${achievement.field}`}
                </p>
                <p className="text-sm text-gray-400">{achievement.date}</p>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
