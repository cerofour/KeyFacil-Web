"use client"

import type React from "react"
import { useState } from "react"

interface ContactFormProps {
  onClose: () => void
}



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Show success popup message
    alert("Nos pondremos en contacto contigo pronto")

    // Reset form and close modal
    setFormData({
      nombre: "",
      ruc: "",
      telefono: "",
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-semibold">¿Necesitas información?</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">
            ×
          </button>
        </div>

        <p className="text-gray-300 text-sm mb-6">Ingresa tus datos y nos comunicaremos contigo</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre*"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="ruc"
              placeholder="RUC*"
              value={formData.ruc}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono*"
              value={formData.telefono}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Información
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
