import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'



function App() {


  return (
    <div 
      className="min-h-screen text-gray-100 relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(9, 9, 121, 0.85) 50%, rgba(74, 20, 140, 0.85) 90%),
          url('/fondo.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
        
      <Header />

      <Home />

      <Footer />
        
        
    </div>

  )
  
}

export default App
