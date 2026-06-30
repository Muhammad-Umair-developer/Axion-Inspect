import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IndustrialBanner from './components/IndustrialBanner'
import About from './components/About'
import CorporateStructure from './components/CorporateStructure'
import Industries from './components/Industries'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Certifications from './components/Certifications'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        {/* 1 — Hero (light) */}
        <Hero />
        {/* 2 — Dark banner */}
        <IndustrialBanner />
        {/* 3 — About */}
        <About />
        {/* 4 — Corporate structure (navy + counters) */}
        <CorporateStructure />
        {/* 5 — Industries (bright blue, follows corporate block) */}
        <Industries />
        {/* 6 — Comprehensive Inspection Solutions + project thumbnails */}
        <Services />
        {/* 7 — How We Work (dual-row workflow) */}
        <HowWeWork />
        {/* 8 — Technical Certifications */}
        <Certifications />
        {/* 9 — Partners & Recognition */}
        <Partners />
        {/* 10 — Contact */}
        <Contact />
      </main>
      {/* 11 — Footer */}
      <Footer />
    </div>
  )
}
