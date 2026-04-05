import AnimatedSection from '../components/AnimatedSection'
import { Heart, MessageCircle, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  {
    icon: Heart,
    title: 'Acolhimento sem julgamento',
    description: 'Um espaço seguro para compartilhar sua dor, sem pressa, sem cobranças — apenas com presença e cuidado.',
  },
  {
    icon: MessageCircle,
    title: 'Suporte terapêutico',
    description: 'Abordagem especializada para processar a culpa, a saudade e a reorganização da vida após a perda de um filho.',
  },
  {
    icon: Calendar,
    title: 'Memória viva',
    description: 'Transformar o luto em memória viva e amor que permanece — integrando a perda sem precisar superá-la.',
  },
]

export default function LutoMaterno() {
  return (
    <section id="luto-materno" className="py-32 bg-[#1a1410] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#c9a4a4]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div className="space-y-8">
            <AnimatedSection>
              <p className="font-inter text-xs text-[#c9a4a4] uppercase tracking-[0.3em] mb-4">Luto Materno</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#faf6f1] leading-tight">
                A dor de uma ausência<br />
                <span className="italic text-[#c9a4a4]">que transforma</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="w-12 h-0.5 bg-[#c9a4a4]" />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="font-inter text-base text-[#faf6f1]/60 leading-relaxed font-light">
                Perder um filho é atravessar uma dor sem nome. Não é apenas uma ausência física — é a ruptura de um amor profundo que reorganiza tudo: a vida, a rotina, os sonhos e a própria identidade.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="font-inter text-base text-[#faf6f1]/60 leading-relaxed font-light">
                O luto materno não precisa ser superado. Ele precisa ser <em className="text-[#c9a4a4]">integrado</em> — com tempo, escuta, acolhimento e segurança para sentir e reconstruir.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <blockquote className="border-l-2 border-[#c9a4a4]/50 pl-6 py-2">
                <p className="font-playfair text-lg text-[#c9a4a4]/80 italic leading-relaxed">
                  "Muitas vezes não é a situação que nos mata, mas a situação traz o cheiro do que já está morto dentro de nós."
                </p>
                <footer className="font-inter text-xs text-[#faf6f1]/30 mt-3 tracking-wider">— Carina Helene</footer>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_Y6fnLkpQAN0sgU3A1u_iOFfg-q3opnGnXwecr6KEY2SWew/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-[#c9a4a4] text-[#1a1410] font-inter text-sm font-medium tracking-wider hover:bg-[#d4afaf] transition-all duration-300 text-center"
                >
                  Quero ser acolhida
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5514997625084&text=Olá%20Carina%2C%20gostaria%20de%20agendar%20uma%20sessão%20de%20apoio%20ao%20luto%20materno.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border border-[#faf6f1]/20 text-[#faf6f1]/70 font-inter text-sm font-light tracking-wider hover:border-[#c9a4a4]/50 hover:text-[#c9a4a4] transition-all duration-300 text-center"
                >
                  Agendar minha sessão
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.15} direction="left">
                <div className="group flex gap-6 p-7 border border-[#faf6f1]/8 hover:border-[#c9a4a4]/30 transition-all duration-500">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[#c9a4a4]/30 group-hover:bg-[#c9a4a4] group-hover:border-[#c9a4a4] transition-all duration-300">
                    <pillar.icon
                      size={18}
                      className="text-[#c9a4a4] group-hover:text-[#1a1410] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-[#faf6f1] mb-2 group-hover:text-[#c9a4a4] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="font-inter text-sm text-[#faf6f1]/50 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Foto luto */}
            <AnimatedSection delay={0.5}>
              <div className="relative overflow-hidden aspect-video bg-[#2d1f17]">
                <img
                  src="/foto-sobre.jpg"
                  alt="Carina Helene"
                  className="w-full h-full object-cover object-top opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="font-playfair text-sm text-[#faf6f1]/80 italic">
                    Carina acompanha mães que perderam filhos com cuidado, presença e profissionalismo.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
