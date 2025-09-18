import './index.css'
import Header from './components/Header'
import LandingHero from './components/LandingHero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <LandingHero />
      </main>
      <Footer />
    </div>
  )
}

export default App
