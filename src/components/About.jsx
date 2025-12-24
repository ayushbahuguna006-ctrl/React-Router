import React from 'react'

function About() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <h1 className="text-4xl font-bold mb-4">About This App</h1>
      <p className="text-lg text-center max-w-xl">
        This simple web app allows you to enter a GitHub username and instantly see the number of followers they have.
        It’s built with React, Tailwind CSS, and the GitHub API.
      </p>
    </div>
  )
}

export default About
