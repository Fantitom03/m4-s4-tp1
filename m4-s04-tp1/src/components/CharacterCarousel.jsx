import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import { toast } from 'react-toastify'

const CharacterCarousel = () => {
    const [characters, setCharacters] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState('right')

    const fetchRandomCharacters = async () => {

        try {
            const randomIds = Array.from({ length: 20 }, () => Math.floor(Math.random() * 826) + 1)
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${randomIds}`)

            // Filtrar personajes duplicados
            const uniqueCharacters = response.data.reduce((listado, nuevo) => {
                if (!listado.find(item => item.id === nuevo.id)) {
                    listado.push(nuevo)
                }
                return listado
            }, [])

            setCharacters(uniqueCharacters.slice(0, 10)) // Asegurar mínimo 10 personajes
            toast.success('New characters generated!')

        } catch (error) {
            toast.error('Failed to load characters')
        }
    }

    useEffect(() => {
        fetchRandomCharacters()
    }, [])

    const flechaNext = () => {
        setDirection('right')
        setCurrentIndex(prev => (prev + 5) % characters.length)
    }

    const flechaPrev = () => {
        setDirection('left')
        setCurrentIndex(prev => (prev - 5 + characters.length) % characters.length)
    }

    // Manejar el caso cuando characters está vacío
    const visibleCharacters = characters.length > 0 
        ? [...characters, ...characters].slice(currentIndex, currentIndex + 5)
        : []

    return (
        <section className="my-12 relative">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-citadel-blue">
                    <span className="border-b-2 border-citadel-purple">Tu Nuevo Personaje Favorito</span>
                </h2>
                <button
                    onClick={fetchRandomCharacters}
                    className="bg-citadel-purple hover:opacity-80 text-white px-4 py-2 rounded-lg transition-all 
                    cursor-pointer hover:scale-105 hover:bg-citadel-blue"
                >
                    Cambiar de Dimensión ↗
                </button>
            </div>

            <div className="relative h-140 overflow-y-visible p-2">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial={{ x: direction === 'right' ? '100%' : '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === 'right' ? '-100%' : '100%', opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 grid grid-cols-5 gap-6 p-2"
                    >
                        {visibleCharacters.map((character) => (
                            <CharacterCard 
                                key={`${character.id}-${currentIndex}`} 
                                character={character}
                                isCarrousel={false}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
                
                <button
                    onClick={flechaPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-dark-bg p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                    disabled={characters.length <= 5}
                >
                    ❮
                </button>
                <button
                    onClick={flechaNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-dark-bg p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                    disabled={characters.length <= 5}
                >
                    ❯
                </button>
            </div>
        </section>
    )
}

export default CharacterCarousel