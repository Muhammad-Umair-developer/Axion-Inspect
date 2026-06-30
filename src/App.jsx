import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IndustrialBanner from './components/IndustrialBanner'
import About from './components/About'
import CorporateStructure from './components/CorporateStructure'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Industries from './components/Industries'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <IndustrialBanner />
        <About />
        <CorporateStructure />
        <Services />
        <HowWeWork />
        <Industries />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
