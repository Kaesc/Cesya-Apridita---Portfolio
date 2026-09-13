import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  onDetailsClick?: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  onDetailsClick,
}: ProjectCardProps) {
  return (
    <div
      className="group relative border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-black/60 cursor-pointer"
      onClick={onDetailsClick}
    >
      {/* Image Section */}
      <div className="relative w-full overflow-hidden bg-white/5 group-hover:bg-black/60 transition-all duration-300">
        {imageUrl ? (
          <div className="relative w-full h-64">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-red-900/30 flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold text-white/90">{title}</h3>
            </div>
          </div>
        )}

        {/* Always Visible Overlay with Title and Pills */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

          {/* Tech Pills */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section (Always Visible) */}
      <div className="p-5 space-y-3">
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 px-4 py-2 text-sm rounded-full border border-white/20 text-white/80 hover:border-purple-500/50 hover:text-white transition-colors duration-200 text-center"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 px-4 py-2 text-sm rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 text-center"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
