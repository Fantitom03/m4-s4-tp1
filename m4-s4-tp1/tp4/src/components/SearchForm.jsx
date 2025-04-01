import React from 'react'

const SearchForm = ({ searchTerm, setSearchTerm }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="mb-8 bg-dark-bg p-6 rounded-lg shadow-md border-2 border-citadel-purple">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search characters..."
                className="flex-1 p-2 border rounded"
              />
            </div>
          </form>
    </div>
  )
}





export default SearchForm