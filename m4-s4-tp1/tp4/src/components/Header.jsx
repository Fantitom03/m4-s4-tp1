import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header className="bg-dark-bg py-4 border-b-2 border-citadel-blue shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="container mx-auto flex justify-center items-center"
          >
            <img 
              src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" 
              alt="Citadel Database" 
              className="h-20 object-contain hover:scale-110 cursor-pointer"
            />

            <div className="ml-4 text-citadel-blue">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-citadel-blue from-30% to-citadel-purple to-90%
                 bg-clip-text text-transparent">
                Base de Datos Multiversal de La Ciudadela
                </h1>
              <p className="text-sm">Version XJ9 - Aprobado por el Consejo de Ricks</p>
            </div>

            <img 
              src="/sticker.png"
              alt="Logo de la Ciudadela" 
              className="h-30 object-contain hover:scale-105 cursor-pointer transition-transform duration-300 drop-shadow-lg hover:drop-shadow-xl"
            />

          </motion.div>
        </header>
      )
}

export default Header