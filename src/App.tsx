"use client"

import { useState } from "react"
import "./index.css"
import Header from "./components/Header"
import LandingHero from "./components/LandingHero"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"

function App() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header onContactClick={() => setShowContactForm(true)} />
      <main className="flex-grow">
        <LandingHero />
      </main>
      <Footer />
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  )
}

export default App
