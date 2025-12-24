import React from 'react';
import {Link} from "react-router-dom"

function Starting() {
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6">
      
      {/* App Title */}
      <h1 className="text-5xl font-bold mb-6 text-center">GitHub Followers Tracker</h1>

      {/* Description */}
      <p className="text-lg text-center max-w-xl mb-8">
        Discover how many followers any GitHub user has! Enter a GitHub username in the Dashboard and instantly get the follower count.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/dashboard"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Go to Dashboard
        </Link>
        <Link
          to="/about"
          className="border border-white font-semibold px-6 text-center py-3 rounded hover:bg-white hover:text-blue-600 transition"
        >
          About App
        </Link>
      </div>
    </div>
  )
}

export default Starting
