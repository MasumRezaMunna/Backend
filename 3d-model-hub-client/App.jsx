import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Toast notifications provider */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Main Header */}
      <Header />

      {/* Main content area, pages will be rendered here */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 mt-8">
        {/* Outlet renders the matched route component */}
        <Outlet />
      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  )
}

export default App