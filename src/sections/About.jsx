import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-[#faf6f1] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-[#1a1410]/3 skew-x-6 origin-right pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#2d1f17] to-[#1a1410] rounded-sm overflow-hidden">
                <img
                  src="/foto-sobre.jpg"
                  alt="Carina Helene"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                {/* Fallback overlay (shown when no image) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-16 h-px bg-[#c8a96e] mx-auto mb-6" />
                    <p className="font-playfair text-2xl text-[#c8a96e] italic leading-relaxed">
                      "Transformando dor<br/>em propósito"
                    </p>
                    <div className="w-16 h-px bg-[#c8a96e] mx-auto mt-6" />
                  </div>
                </div>
              </div>
              {/* Border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c8a96e]/30 rounded-sm -z-10" />
              <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 border border-[#c8a96e]/15 rounded-sm -z-10" />
            </div>
          </AnimatedSection>

          {/* Text content */}
          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <p className="font-inter text-xs text-[#c8a96e] uppercase tracking-[0.3em]">Sobre mim</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#1a1410] leading-tight">
                Uma história de fé,<br />
                <span className="italic text-[#c8a96e]">dor e reconstrução</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="w-12 h-0.5 bg-[#c8a96e]" />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="font-inter text-base text-[#1a1410]/70 leading-relaxed font-light">
                Aos 40 anos, Carina Helene viveu a maior dor que uma mãe pode enfrentar — a perda de sua única filha, aos 12 anos. Diante do impensável, encontrou na fé e na força interior o caminho para a reconstrução.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <p className="font-inter text-base text-[#1a1410]/70 leading-relaxed font-light">
                Hoje, essa experiência transformadora se tornou o alicerce de um ministério voltado para mulheres que buscam cura emocional, propósito de vida e conexão espiritual profunda — tudo fundamentado nos ensinamentos bíblicos.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { number: '3+', label: 'Livros publicados' },
                  { number: '10+', label: 'Anos de ministério' },
                  { number: 'mil+', label: 'Mulheres impactadas' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-playfair text-3xl text-[#c8a96e] font-semibold">{stat.number}</p>
                    <p className="font-inter text-xs text-[#1a1410]/50 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <a
                href="https://api.whatsapp.com/send/?phone=5514997625084&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-inter text-sm text-[#c8a96e] tracking-wider hover:gap-5 transition-all duration-300 group"
              >
                Entre em contato
                <span className="w-8 h-px bg-[#c8a96e] group-hover:w-12 transition-all duration-300" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
