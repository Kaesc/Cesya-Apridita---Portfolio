import { skills } from '@/data/skills';

export default function SkillsSection() {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Skills & Expertise</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mx-auto mb-12"></div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/40 hover:border-purple-500/50 transition-all duration-500 group">
          <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">
            Technical Skills
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20 hover:border-pink-500/40 hover:bg-pink-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-red-500/10 text-red-300 border border-red-500/20 hover:border-red-500/40 hover:bg-red-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Database & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {[...skills.technical.database, ...skills.technical.tools].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Creative Skills */}
        <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/40 hover:border-purple-500/50 transition-all duration-500 group">
          <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">
            Creative Skills
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Photography
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.photography.specializations.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                Creative Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.photography.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20 hover:border-pink-500/40 hover:bg-pink-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
