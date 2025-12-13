import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import MobileNav from './MobileNav'
import Footer from './Footer'

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen w-full font-roboto flex bg-gradient-to-br from-black to-gray-900">
      <Sidebar isMobile={false} isOpen={true} onClose={() => {}} />
      <Sidebar isMobile={true} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <MobileNav onMenuClick={() => setMobileMenuOpen(true)} />
      
      <main className="flex-1 flex flex-col lg:ml-64 mt-12 lg:mt-0 relative overflow-x-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-28 h-28 bg-emerald-300 opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-sky-400 opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-10 w-12 h-12 bg-indigo-400 opacity-10 rounded-full blur-2xl"></div>
        </div>
        
        <Outlet />
        <Footer />
      </main>
      
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  )
}
