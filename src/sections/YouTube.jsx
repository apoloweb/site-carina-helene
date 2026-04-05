import AnimatedSection from '../components/AnimatedSection'
import { Play, ExternalLink } from 'lucide-react'

const CHANNEL_ID = 'UCvIfHCwldBsU-cyoNxXSmdA'
// Playlist de uploads do canal (UC → UU)
const PLAYLIST_ID = 'UUvIfHCwldBsU-cyoNxXSmdA'

export default function YouTube() {
  return (
    <section id="videos" className="py-32 bg-[#faf6f1] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#1a1410]/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="font-inter text-xs text-[#c8a96e] uppercase tracking-[0.3em] mb-4">Canal no YouTube</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#1a1410] leading-tight">
            Mensagens que <span className="italic text-[#c8a96e]">tocam a alma</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c8a96e] mx-auto mt-6 mb-6" />
          <p className="font-inter text-base text-[#1a1410]/55 max-w-xl mx-auto leading-relaxed font-light">
            Pregações, reflexões e palavras de encorajamento para mulheres que buscam cura e propósito.
          </p>
        </AnimatedSection>

        {/* Player principal — últimos vídeos do canal */}
        <AnimatedSection delay={0.1}>
          <div className="relative w-full aspect-video bg-[#1a1410] shadow-2xl shadow-black/20 mb-10">
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&rel=0&modestbranding=1`}
              title="Carina Helene - Canal YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </AnimatedSection>

        {/* Linha inferior: descrição + CTA */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1a1410]/8 p-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-[#1a1410] flex items-center justify-center flex-shrink-0">
                <Play size={18} className="text-[#c8a96e] ml-0.5" />
              </div>
              <div>
                <p className="font-playfair text-lg text-[#1a1410]">Assine o canal</p>
                <p className="font-inter text-sm text-[#1a1410]/50 font-light">
                  Novos vídeos com mensagens de cura, fé e fortalecimento feminino.
                </p>
              </div>
            </div>
            <a
              href={`https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 px-8 py-3.5 bg-[#1a1410] text-[#faf6f1] font-inter text-sm tracking-wider hover:bg-[#2d1f17] transition-all duration-300"
            >
              <ExternalLink size={14} />
              Acessar canal
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
