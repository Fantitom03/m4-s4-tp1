import React from 'react'
import { useFavorites } from '../contexts/FavoritesContext'
import { motion } from 'framer-motion'


const CharacterCard = ({ character, isCarrousel }) => {

  const { addFavorite, favorites } = useFavorites()
    const isFavorite = favorites.some(fav => fav.id === character.id)

    const handleClick = (e) => {
        if (isCarrousel) {
            e.stopPropagation()
            e.preventDefault()
        }
        if (!isFavorite) {
            addFavorite(character)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className={`bg-dark-bg rounded-xl p-6 border-2 ${
              isCarrousel ? 'border-citadel-blue' : 'border-citadel-purple'
            } hover:border-citadel-blue transition-all shadow-lg hover:shadow-xl hover:shadow-citadel-blue/20`}
        >
            <img 
                src={character.image} 
                alt={character.name}
                className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-citadel-blue"
            />
            <h3 className="text-xl font-bold text-citadel-blue mb-2">{character.name}</h3>
            <div className="space-y-2 text-sm">
                <p>Especie: <span className="text-citadel-purple">{character.species}</span></p>
                <p>Estado: <span className="text-citadel-purple">{character.status}</span></p>
                <p>Dimension: <span className="text-citadel-purple">{character.location.name}</span></p>
            </div>
            <button
                onClick={handleClick}
                disabled={isFavorite}
                className={`mt-4 w-full py-2 rounded-lg font-bold transition-all ${
                    isFavorite 
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-citadel-purple hover:bg-citadel-blue hover:scale-105 cursor-pointer'
                }`}
            >
                {isFavorite ? '◉ En Favoritos' : '+ Añadir a Favoritos'}
            </button>
        </motion.div>
    )
}

export default CharacterCard