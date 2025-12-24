import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to GitHub Followers Tracker</h1>
      <p className="text-lg text-center max-w-xl">
        Enter a GitHub username in the Dashboard to see how many followers they have. 
        Stay updated with your favorite developers and friends!
      </p>
    </div>
  )
}

export default Home
