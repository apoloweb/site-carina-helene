import AnimatedSection from '../components/AnimatedSection'
import { Mail, Phone } from 'lucide-react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { useState } from 'react'

const WA_PHONE = '5514997625084'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Olá Carina!\n\n` +
      `Nome: ${form.name}\n` +
      `E-mail: ${form.email}\n` +
      `Assunto: ${form.subject}\n\n` +
      `Mensagem:\n${form.message}`
    )
    window.open(`https://api.whatsapp.com/send/?phone=${WA_PHONE}&text=${text}&type=phone_number&app_absent=0`, '_blank')
    setSent(true)
  }

  return (
    <section id="contato" className="py-32 bg-[#1a1410] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#c8a96e]/30 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23c8a96e%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <p className="font-inter text-xs text-[#c8a96e] uppercase tracking-[0.3em] mb-4">Contato</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#faf6f1] leading-tight">
            Vamos conversar<br />
            <span className="italic text-[#c8a96e]">sobre sua jornada</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c8a96e] mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact info */}
          <AnimatedSection direction="right">
            <div className="space-y-10">
              <div>
                <h3 className="font-playfair text-2xl text-[#faf6f1] mb-4">
                  Pronta para dar o próximo passo?
                </h3>
                <p className="font-inter text-sm text-[#faf6f1]/50 leading-relaxed font-light">
                  Seja para agendar uma sessão terapêutica, convidar para uma palestra ou simplesmente saber mais sobre o trabalho — estou aqui para você.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: 'WhatsApp',
                    value: '+55 (14) 99762-5084',
                    href: `https://api.whatsapp.com/send/?phone=${WA_PHONE}&text&type=phone_number&app_absent=0`,
                  },
                  {
                    icon: FaInstagram,
                    label: 'Instagram',
                    value: '@carinahelene',
                    href: 'https://www.instagram.com/carina_helene40/',
                  },
                  {
                    icon: FaFacebook,
                    label: 'Facebook',
                    value: '/carinahelene',
                    href: 'https://www.facebook.com/carinahelene',
                  },
                  {
                    icon: Mail,
                    label: 'E-mail',
                    value: 'contato@carinahelene.com.br',
                    href: 'mailto:contato@carinahelene.com.br',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 border border-[#faf6f1]/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 transition-colors duration-300">
                      <item.icon size={16} className="text-[#c8a96e]/60 group-hover:text-[#c8a96e] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-[#faf6f1]/30 tracking-wider uppercase">{item.label}</p>
                      <p className="font-inter text-sm text-[#faf6f1]/70 group-hover:text-[#c8a96e] transition-colors duration-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-[#faf6f1]/8">
                <p className="font-playfair text-lg text-[#c8a96e]/80 italic leading-relaxed">
                  "Toda jornada de cura começa com um único passo corajoso."
                </p>
                <p className="font-inter text-xs text-[#faf6f1]/30 mt-2">— Carina Helene</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form → WhatsApp */}
          <AnimatedSection direction="left" delay={0.2}>
            {sent ? (
              <div className="h-full flex items-center justify-center border border-[#c8a96e]/20 p-12 text-center">
                <div>
                  <div className="w-16 h-16 border border-[#c8a96e] mx-auto flex items-center justify-center mb-6">
                    <Phone size={24} className="text-[#c8a96e]" />
                  </div>
                  <h3 className="font-playfair text-2xl text-[#faf6f1] mb-3">WhatsApp aberto!</h3>
                  <p className="font-inter text-sm text-[#faf6f1]/50 font-light mb-6">
                    Sua mensagem foi preparada. Confirme o envio no WhatsApp.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="font-inter text-xs text-[#c8a96e] tracking-widest uppercase hover:text-[#d4b87a] transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name', label: 'Seu nome', type: 'text', placeholder: 'Como posso te chamar?' },
                  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                  { name: 'subject', label: 'Assunto', type: 'text', placeholder: 'Terapia, palestra, livros...' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-inter text-xs text-[#faf6f1]/40 tracking-wider uppercase mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-transparent border border-[#faf6f1]/10 focus:border-[#c8a96e]/50 text-[#faf6f1] placeholder-[#faf6f1]/20 font-inter text-sm px-4 py-3 outline-none transition-colors duration-300"
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-inter text-xs text-[#faf6f1]/40 tracking-wider uppercase mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre você e o que está buscando..."
                    required
                    rows={5}
                    className="w-full bg-transparent border border-[#faf6f1]/10 focus:border-[#c8a96e]/50 text-[#faf6f1] placeholder-[#faf6f1]/20 font-inter text-sm px-4 py-3 outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c8a96e] text-[#1a1410] font-inter text-sm font-medium tracking-wider hover:bg-[#d4b87a] transition-all duration-300 hover:shadow-lg hover:shadow-[#c8a96e]/20 mt-2 flex items-center justify-center gap-2"
                >
                  <Phone size={15} />
                  Enviar via WhatsApp
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
