import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { ShoppingCart, Download } from 'lucide-react'

const WA_LINK = 'https://api.whatsapp.com/send/?phone=5514997625084&text&type=phone_number&app_absent=0'

const books = [
  {
    title: 'O Deus que Age na História',
    subtitle: 'Carina Helene',
    description: 'Deus atua nos momentos mais difíceis da nossa história pessoal, transformando dor em propósito e reconstruindo vidas pela fé.',
    year: '2024',
    cover: '/livro-principal.jpg',
    buyLink: 'https://a.co/d/3h958Ld',
    label: 'Comprar',
    free: false,
  },
  {
    title: 'Um Momento Com Ele',
    subtitle: 'Carina Helene',
    description: 'Momentos singulares com Deus que trazem cura e reconstrução. Experiências espirituais que transformam a alma de dentro para fora.',
    year: '2023',
    cover: '/livro-momento.jpg',
    buyLink: 'https://a.co/d/064WZWtF',
    label: 'Comprar',
    free: false,
  },
  {
    title: 'O Dia',
    subtitle: 'Devocional gratuito',
    description: 'Sete mensagens devocionais inspiradas em ensinamentos bíblicos. Cada novo dia é "o dia" — um presente para sua caminhada de fé.',
    year: '2023',
    cover: '/livro-odia.jpg',
    buyLink: 'https://drive.google.com/file/d/1mfStJUQeW0DdFBpUFo2jf67LqRX1URgd/view',
    label: 'Baixar grátis',
    free: true,
  },
]

function BookCard({ book, delay }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <AnimatedSection delay={delay}>
      <div className="group relative h-full">
        <div className="h-full border border-[#faf6f1]/8 hover:border-[#c8a96e]/30 transition-all duration-500 p-8 flex flex-col">

          {/* Capa do livro */}
          <div className="aspect-[3/4] mb-8 relative overflow-hidden bg-[#2d1f17]">
            {!imgError && (
              <img
                src={book.cover}
                alt={book.title}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            )}

            {/* Fallback só aparece se imagem não carregou */}
            {(!imgLoaded || imgError) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-10 h-px bg-[#c8a96e]/40 mb-5" />
                <p className="font-playfair text-lg text-[#faf6f1]/80 leading-snug">{book.title}</p>
                <p className="font-inter text-xs text-[#c8a96e]/60 mt-2 tracking-widest uppercase">{book.subtitle}</p>
                <div className="w-10 h-px bg-[#c8a96e]/40 mt-5" />
              </div>
            )}

            {/* Badge grátis */}
            {book.free && (
              <div className="absolute top-3 right-3 bg-[#c8a96e] text-[#1a1410] font-inter text-xs font-semibold px-2.5 py-1 tracking-wider">
                GRÁTIS
              </div>
            )}
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-playfair text-xl text-[#faf6f1] group-hover:text-[#c8a96e] transition-colors duration-300 leading-snug">
                {book.title}
              </h3>
              <p className="font-inter text-xs text-[#c8a96e] tracking-wider mt-1">{book.year}</p>
            </div>
            <p className="font-inter text-sm text-[#faf6f1]/50 leading-relaxed font-light">
              {book.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#faf6f1]/8">
            <a
              href={book.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-xs text-[#c8a96e] tracking-widest uppercase hover:text-[#d4b87a] transition-colors group/btn"
            >
              {book.free ? <Download size={13} /> : <ShoppingCart size={13} />}
              {book.label}
              <span className="w-4 h-px bg-[#c8a96e] group-hover/btn:w-8 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Books() {
  return (
    <section id="livros" className="py-32 bg-[#1a1410] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="font-inter text-xs text-[#c8a96e] uppercase tracking-[0.3em] mb-4">Publicações</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#faf6f1] leading-tight">
            Palavras que <span className="italic text-[#c8a96e]">curam</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c8a96e] mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <BookCard key={book.title} book={book} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
