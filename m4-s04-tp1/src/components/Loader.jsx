import React from 'react'

const Loader = () => {

  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-citadel-blue rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-4 border-citadel-purple rounded-full animate-spin reverse-spin"></div>
      </div>
    </div>
  )
}

export default Loader