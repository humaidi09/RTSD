import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Terminal from './components/Terminal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-void text-ink">
      <AmbientBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Terminal />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-neonCyan/[0.08] blur-[120px]" />

      <div className="absolute -right-[10%] bottom-0 h-[32rem] w-[32rem] rounded-full bg-neonPurple/[0.10] blur-[130px]" />

      <div className="absolute inset-0 bg-dot-grid opacity-[0.25]" />
    </div>
  )
}