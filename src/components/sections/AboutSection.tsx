import { profile } from '@/data/profile';

export default function AboutSection() {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">About Me</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mx-auto mb-12"></div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* About Card */}
        <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/40 hover:border-purple-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">{profile.about.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            {profile.about.description}
          </p>

          <h4 className="text-lg font-semibold text-white/90 mb-3">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {profile.about.interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Download CV Card */}
        <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/40 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-center items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Download CV</h3>
          <p className="text-gray-400 mb-6">Get my complete resume and portfolio</p>
          <a
            href={profile.cvUrl}
            download
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Experience */}
        <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/40 hover:border-purple-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Work Experience
          </h3>

          <div className="space-y-6">
            {profile.workExperience.map((exp, index) => (
              <div key={index} className="border-l-2 border-purple-500/30 pl-4">
                <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                <p className="text-purple-400 text-sm mb-2">{exp.company} • {exp.period}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="border border-white/10 rounded-2xl p-8 backdrop-blur-sm bg-black/40 hover:border-purple-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            Education
          </h3>

          <div className="space-y-6">
            {profile.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-pink-500/30 pl-4">
                <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                <p className="text-pink-400 text-sm mb-2">{edu.school}</p>
                <p className="text-purple-400 text-sm mb-2">{edu.period}</p>
                <p className="text-gray-400 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-8">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Certificates
            </h4>
            <div className="space-y-4">
              {profile.certificates.map((cert, index) => (
                <div key={index} className="border border-white/5 rounded-lg p-4 hover:border-purple-500/20 transition-colors">
                  <h5 className="font-semibold text-white text-sm">{cert.title}</h5>
                  <p className="text-gray-400 text-xs">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
