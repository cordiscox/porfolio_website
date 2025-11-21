import { motion } from 'motion/react';
import { Code2, Heart, Zap, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Desarrollo Web',
      description: 'Apps modernas y escalables',
      color: '#ff8c42',
    },
    {
      icon: Heart,
      title: 'Pasión Canina',
      description: 'Amante de los perros',
      color: '#4ecdc4',
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Soluciones creativas',
      color: '#95e1d3',
    },
    {
      icon: Award,
      title: 'Experiencia',
      description: 'Proyectos exitosos',
      color: '#ff6b9d',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-white">
            Sobre <span className="text-[#ff8c42]">mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff8c42] to-[#4ecdc4] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=800&fit=crop"
              alt="Adiestramiento canino profesional"
              className="rounded-3xl shadow-2xl shadow-[#ff8c42]/20 w-full border-4 border-[#ff8c42]/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl text-zinc-300 leading-relaxed">
              ¡Hola! Soy un desarrollador web especializado en crear{' '}
              <span className="text-[#ff8c42]">plataformas digitales para el mundo del adiestramiento canino</span>.
              Mi pasión por la tecnología y el amor por los perros se unen en cada proyecto.
            </p>

            <p className="text-xl text-zinc-300 leading-relaxed">
              He trabajado con entrenadores profesionales, veterinarios y dueños de mascotas para crear{' '}
              <span className="text-[#4ecdc4]">herramientas que simplifican el aprendizaje</span> y fortalecen 
              el vínculo entre humanos y sus compañeros caninos.
            </p>

            <p className="text-xl text-zinc-300 leading-relaxed">
              Desde apps de seguimiento de entrenamiento hasta plataformas de gestión de clases grupales, 
              mi objetivo es hacer que el{' '}
              <span className="text-[#95e1d3]">adiestramiento sea accesible y efectivo</span> para todos.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all backdrop-blur-sm">
                    <div
                      className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon size={24} style={{ color: item.color }} />
                    </div>
                    <h4 className="text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
