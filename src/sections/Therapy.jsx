import AnimatedSection from '../components/AnimatedSection'
import { Heart, Brain, Sparkles, Shield } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Terapia do Luto',
    description: 'Suporte especializado para mulheres que vivenciam perdas — um espaço seguro para processar a dor e encontrar caminhos de cura.',
  },
  {
    icon: Brain,
    title: 'Inteligência Emocional',
    description: 'Sessões focadas no desenvolvimento da autoconsciência, autorregulação e relacionamentos mais saudáveis e genuínos.',
  },
  {
    icon: Sparkles,
    title: 'Cura Interior',
    description: 'Trabalho profundo de ressignificação de experiências, crenças e padrões que impedem o florescimento pleno.',
  },
  {
    icon: Shield,
    title: 'Fortalecimento Feminino',
    description: 'Um processo de redescoberta da identidade e propósito, unindo fé, psicologia e sabedoria bíblica.',
  },
]

export default function Therapy() {
  return (
    <section id="terapia" className="py-32 bg-[#faf6f1] relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#c9a4a4]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: foto + header sticky */}
          <div className="lg:sticky lg:top-32 space-y-10">
            <AnimatedSection direction="right">
              {/* Foto terapia */}
              <div className="relative mb-10">
                <div className="aspect-[4/3] overflow-hidden bg-[#1a1410]">
                  <img
                    src="/foto-terapia.jpg"
                    alt="Carina Helene"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/foto-sobre.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/40 to-transparent" />
                </div>
                {/* Badge sobre a foto */}
                <div className="absolute bottom-0 left-6 translate-y-1/2 bg-[#faf6f1] border border-[#c8a96e]/30 px-5 py-3">
                  <p className="font-playfair text-sm text-[#1a1410] italic">Sessões online e presenciais</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="font-inter text-xs text-[#c8a96e] uppercase tracking-[0.3em] mb-4">Terapia</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#1a1410] leading-tight mb-6">
                Um espaço de<br />
                <span className="italic text-[#c8a96e]">cura e transformação</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#c8a96e] mb-8" />
              <p className="font-inter text-base text-[#1a1410]/60 leading-relaxed font-light mb-8">
                Com uma abordagem que integra psicologia e espiritualidade cristã, Carina acompanha mulheres em processos de cura emocional profunda. Cada sessão é um passo em direção à sua melhor versão.
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=5514997625084&text=Olá%20Carina%2C%20gostaria%20de%20agendar%20uma%20sessão%20de%20terapia!&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-[#1a1410] text-[#faf6f1] font-inter text-sm tracking-wider hover:bg-[#2d1f17] transition-all duration-300 border border-[#faf6f1]/10 hover:border-[#c8a96e]/30"
              >
                Agendar sessão via WhatsApp
              </a>
            </AnimatedSection>
          </div>

          {/* Right: services */}
          <div className="space-y-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.12} direction="left">
                <div className="group flex gap-6 p-6 border border-[#1a1410]/8 hover:border-[#c8a96e]/30 hover:bg-white/50 transition-all duration-500">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[#c8a96e]/30 group-hover:bg-[#c8a96e] group-hover:border-[#c8a96e] transition-all duration-300">
                    <service.icon
                      size={18}
                      className="text-[#c8a96e] group-hover:text-[#1a1410] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-[#1a1410] mb-2 group-hover:text-[#c8a96e] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-inter text-sm text-[#1a1410]/60 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
