import React, {useState} from 'react'
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'
import Loader from './Loader'

import { useFetchCharacters } from '../hooks/useFetchCharacters'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'




const SearchedCharacter = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { data: characters, loading, error, hasMore, loadMore } = useFetchCharacters(searchTerm)

  return (
    <div>
      <Disclosure as="section" className="mb-12">
        {({ open }) => (
          <>
            <DisclosureButton className="w-full bg-citadel-purple p-4 rounded-lg hover:opacity-80 transition-all mb-6 cursor-pointer hover:scale-105 hover:text-black">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                {open ? 'v' : '>'} Interfaz de Búsqueda Multiversal (v3.2.1)
              </h2>
            </DisclosureButton>

            <AnimatePresence>
              {open && (
                <DisclosurePanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                  />

                  {loading ? (
                    <Loader />
                  ) : error ? (
                    <div className="text-center space-y-4">
                      <p className="text-red-400 text-xl">
                        {error.message === 'No characters found'
                          ? '🔍 No se encontraron entidades en esta dimensión'
                          : '⚠️ La conexión multiversal falló'}
                      </p>
                      {error.message === 'No characters found' && (
                        <p className="text-citadel-blue">
                          Trata buscando en otra realidad
                        </p>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {characters.map(character => (
                          <CharacterCard
                            key={`${character.id}-${Date.now()}`}
                            character={character}
                            isCarrousel={true}
                          />
                        ))}
                      </div>

                      {searchTerm && hasMore && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-center mt-8"
                        >
                          <button
                            onClick={loadMore}
                            disabled={loading}
                            className="bg-citadel-blue text-dark-bg px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all 
                            font-bold flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                          >
                            {loading ? (
                              <>
                                <span className="animate-spin">🌀</span>
                                Escaneando Dimensiones
                              </>
                            ) : (
                              '▼ Cargar más fragmentos de realidad ▼'
                            )}
                          </button>
                        </motion.div>
                      )}
                    </>
                  )}
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default SearchedCharacter