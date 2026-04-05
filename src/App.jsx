import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import LutoMaterno from './sections/LutoMaterno'
import Books from './sections/Books'
import YouTube from './sections/YouTube'
import Therapy from './sections/Therapy'
import Speaking from './sections/Speaking'
import Project from './sections/Project'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <LutoMaterno />
      <Books />
      <YouTube />
      <Therapy />
      <Speaking />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}
