import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'PawTrainer Pro',
    description: 'Plataforma completa para entrenadores caninos con gestión de clientes, planes de entrenamiento personalizados y seguimiento de progreso en tiempo real.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    gradient: 'from-[#ff8c42] to-[#e67a35]',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'K9 Academy App',
    description: 'App móvil para dueños de perros con lecciones interactivas, videos tutoriales y comunidad de apoyo para el adiestramiento en casa.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
    tech: ['React Native', 'Firebase', 'Video Streaming'],
    gradient: 'from-[#4ecdc4] to-[#38b2ac]',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Woof Wellness Dashboard',
    description: 'Dashboard analítico para centros de adiestramiento con métricas de rendimiento, reservas de clases y gestión de instalaciones.',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&h=600&fit=crop',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Recharts'],
    gradient: 'from-[#95e1d3] to-[#6dd5c3]',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Smart Collar Connect',
    description: 'Sistema IoT que integra collares inteligentes con plataforma web para monitoreo de actividad, salud y comportamiento canino.',
    image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=800&h=600&fit=crop',
    tech: ['Vue.js', 'IoT', 'AWS', 'Real-time Data'],
    gradient: 'from-[#ff6b9d] to-[#ee5a8a]',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-white">
            Proyectos <span className="text-[#ff8c42]">destacados</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff8c42] to-[#4ecdc4] mx-auto rounded-full mb-6" />
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Soluciones tecnológicas innovadoras que están transformando la industria del adiestramiento canino.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 border-2 border-zinc-800 hover:border-[#ff8c42]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff8c42]/10">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                  
                  {/* Floating buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-[#ff8c42] hover:text-white transition-colors border border-zinc-700"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-[#4ecdc4] hover:text-white transition-colors border border-zinc-700"
                      aria-label="Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl text-white group-hover:text-[#ff8c42] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="text-zinc-600 group-hover:text-[#ff8c42] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                  </div>
                  
                  <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 text-zinc-300 rounded-full text-sm hover:border-[#ff8c42]/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-5 blur-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff8c42] to-[#e67a35] text-white rounded-full hover:shadow-xl hover:shadow-[#ff8c42]/30 transition-all duration-300 group"
          >
            <Github size={20} />
            Ver todos en GitHub
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
