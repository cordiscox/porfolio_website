import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CaseStudies } from './components/CaseStudies';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GridBackground } from './components/GridBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      <GridBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <CaseStudies />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
