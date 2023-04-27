import React from 'react'

const WspIcono = () => {
  return (
    <a
    href="https://api.whatsapp.com/send?phone=1133856648"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 w-16 h-16 flex justify-center items-center shadow-lg hover:bg-green-600 transition-all duration-300 z-10"
  >
    <img src="/src/components/homeCarpeta/imagenes/whatsapp.png" alt="Icono de Whatsapp" className="w-full h-full object-contain" />
  </a>
  )
}

export default WspIcono