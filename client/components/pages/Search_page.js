import React from 'react'
import Head from '../head'

const SearchPage = () => {
  return (
    <div>
      <Head title="Search github user" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Search
        </div>
      </div>
    </div>
  )
}

SearchPage.propTypes = {}

export default SearchPage
