import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Heart } from 'lucide-react';

const PawIcon = () => (
  
//<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//  <path d="M12 22c-3.5 0-5-2-5-4.5c0-2 1.5-3 2.5-3.5c.5-.2 1.5 0 2.5.5c1-.5 2-.7 2.5-.5c1 .5 2.5 1.5 2.5 3.5c0 2.5-1.5 4.5-5 4.5z"/>
//  <path d="M3.5 12.5c-.8-1.5-.5-3.5 1-4.5c1.5-1 3.5-.5 4.2 1c.8 1.5.5 3.5-1 4.5c-1.5 1-3.5.5-4.2-1z"/>
//  <path d="M20.5 12.5c.8-1.5.5-3.5-1-4.5c-1.5-1-3.5-.5-4.2 1c-.8 1.5-.5 3.5 1 4.5c1.5 1 3.5.5 4.2-1z"/>
//  <path d="M8.5 8c-.5-1.8 0-3.5 1.5-4.2c1.5-.8 3.5-.2 4 1.5c.5 1.8 0 3.5-1.5 4.2c-1.5.8-3.5.2-4-1.5z"/>
//  <path d="M15.5 8c.5-1.8 0-3.5-1.5-4.2c-1.5-.8-3.5-.2-4 1.5c-.5 1.8 0 3.5 1.5 4.2c1.5.8 3.5.2 4-1.5z"/>
//</svg>

<svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M74.504,25.06C72.791,31.806,67.134,36.146,61.893,34.734C56.652,33.322,53.783,26.687,55.496,19.941S62.866,8.855,68.107,10.267S76.217,18.314,74.504,25.06Z"></path>
  <path d="M89.504,50.06C87.791,56.806,82.134,61.146,76.893,59.734C71.652,58.322,68.783,51.687,70.496,44.941C72.209,38.195,77.866,33.855,83.107,35.267C88.348,36.678,91.217,43.314,89.504,50.06Z"></path>
  <path d="M31.893,10.266C37.134,8.854,42.791,13.194,44.504,19.94S43.348,33.322,38.107,34.733C32.866,36.145,27.209,31.805,25.496,25.059C23.783,18.314,26.652,11.678,31.893,10.266Z"></path>
  <path d="M16.893,35.266C22.134,33.854,27.791,38.194,29.504,44.94C31.217,51.686,28.348,58.322,23.107,59.733C17.866,61.145,12.209,56.805,10.496,50.059S11.652,36.678,16.893,35.266Z"></path>
  <path d="M73.063,66.376C67.394,63.476,63.358,56.872,62.302,50.593C61.286,44.554,55.997,40,50,40S38.714,44.554,37.698,50.593C36.641,56.875,32.593,63.475,26.922,66.376C21.851,68.97,19.162,74.415,20.233,79.927C21.245,85.135,25.614,89.235,30.859,89.896C33.271,90.199,35.663,89.822,37.797,88.824C38.802,88.354,39.235,87.984,39.984,87.512C43.983,84.991,48.553,84.998,50,85C51.451,85.002,55.972,85.009,60,87.512C60.852,88.042,61.488,88.559,62.774,89.082C64.753,89.887,66.929,90.175,69.126,89.896C74.371,89.235,78.74,85.135,79.752,79.927C80.823,74.415,78.134,68.97,73.063,66.376Z"></path>
</svg>
);

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#ff8c42]/20 to-[#4ecdc4]/20 border border-[#ff8c42]/30 rounded-full backdrop-blur-sm"
          >
            <Heart size={16} className="text-[#ff8c42] fill-[#ff8c42]" />
            <span className="text-[#ff8c42] tracking-wide">Tecnología + Adiestramiento Canino</span>
            <PawIcon />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl mb-6 text-white tracking-tight"
          >
            Hola, soy{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#ff8c42] via-[#4ecdc4] to-[#95e1d3] bg-clip-text text-transparent">
                Joaquin Cordisco
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff8c42] via-[#4ecdc4] to-[#95e1d3] blur-2xl opacity-40" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-3xl text-zinc-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Desarrollo{' '}
            <span className="text-[#ff8c42]">soluciones tecnológicas innovadoras</span>{' '}
            para el mundo del adiestramiento canino, conectando entrenadores con dueños de mascotas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#ff8c42] to-[#e67a35] text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ff8c42]/30 flex items-center gap-2"
            >
              <span className="relative z-10">Ver mis proyectos</span>
              <ArrowRight
                size={20}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#4ecdc4] text-[#4ecdc4] rounded-full hover:bg-[#4ecdc4]/10 transition-all duration-300 backdrop-blur-sm"
            >
              Hablemos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/cordiscox', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/joaquin-cordisco', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:joaquincordisco@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="p-4 bg-zinc-800/50 hover:bg-[#ff8c42]/10 border border-zinc-700 hover:border-[#ff8c42] rounded-full transition-all hover:scale-110 backdrop-blur-sm group"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-zinc-400 group-hover:text-[#ff8c42] transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated paw prints */}
      <div className="absolute bottom-20 left-10 text-[#ff8c42] opacity-20">
        <PawIcon />
      </div>
      <div className="absolute top-40 right-20 text-[#4ecdc4] opacity-20 transform rotate-12">
        <PawIcon />
      </div>
      
      {/* Gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff8c42] to-transparent opacity-30" />
    </section>
  );
}
