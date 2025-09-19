"use client"

import type React from "react"

interface HeaderProps {
  onContactClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="keyfacillogo.png" alt="KeyFacil Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-bold">KeyFacil</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-blue-200 transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-blue-200 transition-colors">
              Servicios
            </a>
            <a href="#precios" className="hover:text-blue-200 transition-colors">
              Precios
            </a>
            <button onClick={onContactClick} className="hover:text-blue-200 transition-colors">
              Contacto
            </button>
          </nav>

          <div className="flex space-x-4">
            <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors">
              Iniciar Sesión
            </button>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
