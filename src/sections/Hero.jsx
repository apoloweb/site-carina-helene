import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const particles = particlesRef.current
    if (!particles) return

    const items = particles.querySelectorAll('.particle')
    items.forEach((p, i) => {
      gsap.to(p, {
        y: `${-30 - i * 10}px`,
        x: `${(i % 2 === 0 ? 1 : -1) * 15}px`,
        opacity: 0.3 + (i % 3) * 0.2,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4,
      })
    })
  }, [])

  const titleWords = ['Autora.', 'Terapeuta.', 'Palestrante.']

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1410]"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/foto-back.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/50 via-[#1a1410]/75 to-[#1a1410]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a4a4]/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: i % 2 === 0 ? '#c8a96e' : '#c9a4a4',
              left: `${10 + i * 7.5}%`,
              top: `${20 + (i % 5) * 15}%`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Thin decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent -translate-y-32 origin-left"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-inter text-xs text-[#c8a96e] uppercase tracking-[0.3em] mb-8"
        >
          Bem-vinda
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-playfair text-6xl md:text-8xl lg:text-9xl font-light text-[#faf6f1] mb-4 leading-none"
        >
          Carina
          <br />
          <span className="italic text-[#c8a96e]">Helene</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.2 }}
              className="font-inter text-sm md:text-base text-[#faf6f1]/60 tracking-widest font-light"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-inter text-base md:text-lg text-[#faf6f1]/50 max-w-xl mx-auto leading-relaxed font-light mb-12"
        >
          "A dor carrega o poder de trazer reconstrução rumo a algo melhor dentro de nós."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#sobre"
            className="px-8 py-3.5 bg-[#c8a96e] text-[#1a1410] font-inter text-sm font-medium tracking-wider hover:bg-[#d4b87a] transition-all duration-300 hover:shadow-lg hover:shadow-[#c8a96e]/20"
          >
            Conheça minha história
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5514997625084&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-[#faf6f1]/20 text-[#faf6f1]/70 font-inter text-sm font-light tracking-wider hover:border-[#c8a96e]/50 hover:text-[#c8a96e] transition-all duration-300"
          >
            Agendar sessão
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#c8a96e]/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
