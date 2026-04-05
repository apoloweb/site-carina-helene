import { Mail } from 'lucide-react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const socials = [
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/carina_helene40/',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/carinahelene',
  },
  {
    icon: Mail,
    label: 'E-mail',
    href: 'mailto:contato@carinahelene.com.br',
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0c09] py-12 border-t border-[#faf6f1]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-playfair text-lg text-[#c8a96e]">Carina Helene</p>
            <p className="font-inter text-xs text-[#faf6f1]/30 mt-1 tracking-wider">
              Autora · Terapeuta · Palestrante
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                title={label}
                className="w-9 h-9 border border-[#faf6f1]/10 flex items-center justify-center text-[#faf6f1]/30 hover:border-[#c8a96e]/50 hover:text-[#c8a96e] transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="font-inter text-xs text-[#faf6f1]/20 text-center md:text-right">
            © {new Date().getFullYear()} Carina Helene.<br className="md:hidden" /> Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
