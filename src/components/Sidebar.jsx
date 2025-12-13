import { NavLink } from 'react-router-dom'
import logoImg from '../assets/images/logo.png'

const navItems = [
  { path: '/', label: 'Home', icon: 'home', color: 'text-emerald-400' },
  { path: '/about', label: 'About', icon: 'person', color: 'text-sky-400' },
  { path: '/services', label: 'What I Do', icon: 'lightbulb', color: 'text-emerald-400' },
  { path: '/skills', label: 'My Tech Stack', icon: 'star', color: 'text-sky-400' },
  { path: '/projects', label: 'Projects', icon: 'folder', color: 'text-emerald-400' },
  { path: '/education', label: 'Education', icon: 'school', color: 'text-indigo-400' },
  { path: '/experience', label: 'Experience', icon: 'work', color: 'text-emerald-400' },
  { path: '/contact', label: 'Contact', icon: 'mail', color: 'text-sky-400' },
]

export default function Sidebar({ isMobile, isOpen, onClose }) {
  return (
    <aside className={`${isMobile ? 'fixed top-0 left-0 w-64 h-full z-50 transform transition-transform duration-300' : 'hidden lg:flex flex-col fixed top-0 left-0 h-full w-64 z-40'} ${isMobile && !isOpen ? '-translate-x-full' : ''} bg-gradient-to-br from-gray-900 to-black shadow-xl`}>
      <div className="flex flex-col items-center py-8">
        <img src={logoImg} alt="Logo" className="w-20 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Omolayo Ayokanmi</h1>
        <p className="text-emerald-100 text-sm">Full Stack Developer</p>
      </div>
      <nav className="flex-1 flex flex-col gap-2 px-6">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) => 
              `flex items-center gap-3 py-3 px-4 rounded-lg text-white transition ${isActive ? 'bg-emerald-400/30' : 'hover:bg-emerald-400/20'}`
            }
          >
            <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
