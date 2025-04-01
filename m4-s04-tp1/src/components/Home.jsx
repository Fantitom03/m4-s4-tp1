import React from 'react'

import CharacterCarousel from './CharacterCarousel'
import FavoritesList from './FavoritesList'
import SearchedCharacter from './SearchedCharacter'


const Home = () => {
    

    return (
        <main className="container mx-auto px-4 py-8">
            <section className="mb-16">
                <div className="text-center mb-12 space-y-4">
                <p className="text-xl text-citadel-blue">
                    <p className=' text-amber-500'>
                    ⚠️ ADVERTENCIA ⚠️
                    </p>
                     TODO ACCESO SIN AUTORIZACIÓN A LA BASE DE DATOS DE LA CIUDADELA 
                    SERÁ CASTIGADO CON LA ERRADICACIÓN INSTANTÁNEA DE TODAS LAS LINEAS DE TIEMPO
                </p>
                <p className="text-lg">
                    Accediento a los datos de {Math.floor(Math.random() * 1000)} dimensiones paralelas 🌀...
                </p>
                </div>

                <CharacterCarousel />
            </section>

            <FavoritesList />

            <SearchedCharacter />

        </main>
    )
}

export default Home