import { profile } from '@/data/profile';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Left Column - Text */}
        <div className="md:col-span-6 md:col-start-2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slideUp">
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-slideUp">
            {profile.headline}
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed animate-slideUp">
            {profile.bio}
          </p>
          <div className="flex flex-wrap gap-4 animate-slideUp">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:col-span-4 flex justify-center animate-slideUp">
          <div className="relative w-80 h-80 group">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-purple-500/50 transition-all duration-500 transform group-hover:scale-105">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
