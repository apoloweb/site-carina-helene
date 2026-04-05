import AnimatedSection from '../components/AnimatedSection'
import { Calendar, MapPin, Mic } from 'lucide-react'

const events = [
  {
    date: 'Abril 2025',
    title: 'Mulheres que Florescem',
    location: 'São Paulo, SP',
    type: 'Palestra',
  },
  {
    date: 'Maio 2025',
    title: 'Congresso Feminino de Fé',
    location: 'Rio de Janeiro, RJ',
    type: 'Pregação',
  },
  {
    date: 'Junho 2025',
    title: 'Retiro de Cura Interior',
    location: 'Online',
    type: 'Workshop',
  },
]

export default function Speaking() {
  return (
    <section id="palestras" className="py-32 bg-[#1a1410] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#c9a4a4]/4 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="font-inter text-xs text-[#c8a96e] uppercase tracking-[0.3em] mb-4">Agenda</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#faf6f1] leading-tight">
            Palestras & <span className="italic text-[#c8a96e]">Pregações</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c8a96e] mx-auto mt-6" />
        </AnimatedSection>

        {/* Foto palestrante + eventos lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">

          {/* Foto palestrante */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="relative h-full min-h-[400px]">
              <div className="h-full overflow-hidden bg-[#2d1f17]">
                <img
                  src="/foto-palestras.jpg"
                  alt="Carina Helene palestrando"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/foto-hero.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/70 via-transparent to-transparent" />
              </div>
              {/* Texto sobre a foto */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-playfair text-lg text-[#faf6f1] italic leading-snug">
                  "Cada palavra proferida é uma semente de transformação."
                </p>
                <p className="font-inter text-xs text-[#c8a96e] mt-2 tracking-wider">— Carina Helene</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Cards de eventos */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-center">
            {events.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.15}>
                <div className="group relative border border-[#faf6f1]/8 hover:border-[#c8a96e]/30 p-6 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c8a96e]/0 to-transparent group-hover:via-[#c8a96e]/50 transition-all duration-500" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block font-inter text-xs text-[#c8a96e] tracking-widest uppercase border border-[#c8a96e]/30 px-3 py-1 mb-3">
                        {event.type}
                      </span>
                      <h3 className="font-playfair text-xl text-[#faf6f1] group-hover:text-[#c8a96e] transition-colors duration-300 leading-tight mb-3">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-[#faf6f1]/40">
                          <Calendar size={13} />
                          <span className="font-inter text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#faf6f1]/40">
                          <MapPin size={13} />
                          <span className="font-inter text-sm">{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send/?phone=5514997625084&text=Olá%20Carina%2C%20quero%20saber%20mais%20sobre%20o%20evento!&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 font-inter text-xs text-[#c8a96e]/60 hover:text-[#c8a96e] tracking-wider transition-colors duration-300 underline underline-offset-4"
                    >
                      Inscrever-se
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA convite */}
        <AnimatedSection delay={0.4}>
          <div className="border border-[#faf6f1]/8 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-[#c8a96e]/30 flex items-center justify-center">
                <Mic size={20} className="text-[#c8a96e]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl text-[#faf6f1] mb-2">
                  Convide para seu evento
                </h3>
                <p className="font-inter text-sm text-[#faf6f1]/50 font-light max-w-md">
                  Carina está disponível para palestras, retiros, congressos e eventos femininos. Entre em contato para verificar disponibilidade.
                </p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=5514997625084&text=Olá%20Carina%2C%20gostaria%20de%20te%20convidar%20para%20um%20evento!&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-8 py-3.5 border border-[#c8a96e] text-[#c8a96e] font-inter text-sm tracking-wider hover:bg-[#c8a96e] hover:text-[#1a1410] transition-all duration-300 whitespace-nowrap"
            >
              Fazer convite via WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
