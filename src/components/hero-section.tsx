import { personalInfo } from '../data/portfolio-data';
import { Button } from '../components/ui/button';
import { Download, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 via-transparent to-[#ff0080]/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-10 lg:gap-16">

          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="gradient-text">PRAJESH</span><br />
              <span className="text-white">PRAJAPATI</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
              {personalInfo.title.split("&")[0]} &{" "}
              <span className="text-[#00d4ff]">
                {personalInfo.title.split("&")[1]}
              </span>
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 px-2 sm:px-0">
              {personalInfo.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <a href={personalInfo.downloadcv}>
                <Button className="glassmorphism px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold hover:bg-[#00ff88]/20 transition-all duration-300 group border-0 bg-transparent">
                  <Download
                    className="mr-2 sm:mr-3 group-hover:text-[#00ff88] transition-colors"
                    size={18}
                  />
                  Download CV
                </Button>
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <Button
                  className="border-2 border-[#ff0080] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[#ff0080] font-semibold hover:bg-[#ff0080] hover:text-black transition-all duration-300 bg-transparent"
                >
                  <Mail className="mr-2 sm:mr-3" size={18} />
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <div
              className="
            rounded-full overflow-hidden border-4 border-[#00ff88] animate-glow shadow-lg
            w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[22rem] lg:h-[22rem] xl:w-[24rem] xl:h-[24rem]
            max-w-full max-h-full
          "
            >
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} - Professional Developer`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
