import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useFavorites } from '../contexts/FavoritesContext'
import { AnimatePresence, motion } from 'framer-motion'
import CharacterCard from './CharacterCard'


const FavoritesList = () => {

  const { favorites, removeFavorite } = useFavorites()

  return (
    <Disclosure as="div" className="my-12">

      {({ open }) => (

        <>

          <DisclosureButton className="w-full bg-citadel-blue text-dark-bg p-4 rounded-lg mb-4 
          hover:opacity-90 transition-all hover:scale-105 cursor-pointer hover:text-white">

            <h2 className="text-2xl font-bold flex items-center gap-2">
              {open ? 'v' : '>'} Lista de Favoritos ({favorites.length} Entries)
            </h2>

          </DisclosureButton>

          <AnimatePresence>

            {open && (
              <DisclosurePanel
                static
                as={motion.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-y-visible"
              >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                  {favorites.map(character => (
                    <div key={character.id} className="relative group">

                      <CharacterCard character={character} />

                      <button
                        onClick={() => removeFavorite(character.id)}
                        className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full opacity-0 
                        group-hover:opacity-100 transition-opacity hover:scale-110 cursor-pointer"
                      >
                        ✕
                      </button>

                    </div>
                  ))}

                </div>

              </DisclosurePanel>

            )}

          </AnimatePresence>

        </>
      )}
    </Disclosure>
  )
}

export default FavoritesList

