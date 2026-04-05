import AnimatedSection from '../components/AnimatedSection'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  { label: 'Força', description: 'Cultivar a coragem e determinação que cada mulher carrega dentro de si.' },
  { label: 'Virtude', description: 'Honrar os valores que definem quem somos e como nos relacionamos.' },
  { label: 'Compaixão', description: 'Amar ao próximo com a generosidade que transforma comunidades.' },
  { label: 'Fé', description: 'Ancorar a vida em algo maior que as circunstâncias do momento.' },
]

export default function Project() {
  const progressRef = useRef(null)

  useEffect(() => {
    if (!progressRef.current) return
    const bars = progressRef.current.querySelectorAll('.progress-bar')
    bars.forEach((bar, i) => {
      gsap.fromTo(bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
          },
        }
      )
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section id="projeto" className="py-32 bg-[#faf6f1] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#c8a96e]/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#c8a96e]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#c8a96e]/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <p className="font-inter text-xs text-[#c8a96e] uppercase tracking-[0.3em] mb-4">Iniciativa</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#1a1410] leading-tight">
            Mulheres Força<br />
            <span className="italic text-[#c8a96e]">Com Aroma Doce</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c8a96e] mx-auto mt-6 mb-8" />
          <p className="font-inter text-base text-[#1a1410]/60 max-w-2xl mx-auto leading-relaxed font-light">
            Um projeto que acredita que a verdadeira força feminina não exclui a delicadeza — pelo contrário, a inclui. Aqui, mulheres se encontram para crescer juntas em fé, sabedoria e propósito.
          </p>
        </AnimatedSection>

        <div ref={progressRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.label} delay={i * 0.1}>
              <div className="group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-playfair text-xl text-[#1a1410] group-hover:text-[#c8a96e] transition-colors duration-300">
                    {pillar.label}
                  </h3>
                  <span className="font-inter text-xs text-[#c8a96e]/60 tracking-wider">
                    0{i + 1}
                  </span>
                </div>
                <div className="w-full h-px bg-[#1a1410]/10 mb-4 overflow-hidden">
                  <div
                    className="progress-bar h-full bg-gradient-to-r from-[#c8a96e] to-[#c9a4a4] origin-left"
                    style={{ transform: 'scaleX(0)' }}
                  />
                </div>
                <p className="font-inter text-sm text-[#1a1410]/55 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-20 text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5514997625084&text=Olá%20Carina%2C%20quero%20saber%20mais%20sobre%20o%20Projeto%20Mulheres%20Força%20Com%20Aroma%20Doce!&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#c8a96e] to-[#c9a4a4] text-[#1a1410] font-inter text-sm font-medium tracking-wider hover:shadow-xl hover:shadow-[#c8a96e]/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Participar do projeto
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
