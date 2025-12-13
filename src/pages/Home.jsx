import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import mainImg from '../assets/images/main.png'

const titles = ['Full Stack Developer', 'Front-End Developer', 'Back-End Developer', 'ML Engineer', 'Database Developer']

function TypedTitle() {
  const [text, setText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentTitle.substring(0, text.length + 1))
        if (text === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setText(currentTitle.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setTitleIndex((titleIndex + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [text, titleIndex, isDeleting])

  return (
    <div className="flex items-center text-lg lg:text-3xl text-emerald-300 mb-4 font-semibold">
      <span>I'm a&nbsp;</span>
      <span className="text-emerald-400">{text}</span>
      <span className="text-emerald-400 animate-pulse">|</span>
    </div>
  )
}

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="bg-gray-800/60 border border-gray-700 rounded-3xl shadow-2xl p-8 flex flex-col items-center lg:p-16 w-full max-w-6xl relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-emerald-500 to-sky-500 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500 to-emerald-500 opacity-15 rounded-full blur-2xl"></div>
        
        <img 
          src={mainImg} 
          alt="Omolayo Ayokanmi" 
          className="w-36 h-36 lg:w-56 lg:h-56 rounded-full object-contain border-4 border-emerald-400 mb-6 shadow-[0_0_40px_0_rgba(16,255,200,0.4)] hover:scale-105 transition-transform duration-300" 
        />
        
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2 text-center">Omolayo Ayokanmi</h1>
        <p className="text-emerald-400 text-lg lg:text-xl mb-4">BeeTechHub</p>
        
        <TypedTitle />
        
        <div className="flex gap-4 mb-6">
          <a href="mailto:ayokanmiomolayo1@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500 rounded-lg text-emerald-400 font-semibold hover:bg-emerald-500/30 transition">
            <span className="material-symbols-outlined">mail</span>Email
          </a>
          <a href="tel:+2349066514347" className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 border border-sky-500 rounded-lg text-sky-400 font-semibold hover:bg-sky-500/30 transition">
            <span className="material-symbols-outlined">call</span>Call
          </a>
        </div>
        
        <p className="text-gray-300 text-center text-base lg:text-xl max-w-3xl mb-8 leading-relaxed">
          I'm a passionate developer who crafts seamless digital experiences. My expertise spans web development, backend systems, and AI-powered solutions, helping businesses and individuals turn ideas into reality with technology that's beautiful, robust, and scalable.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold shadow-lg hover:from-emerald-600 hover:to-sky-600 transition flex items-center gap-2">
            <span className="material-symbols-outlined">folder</span>View Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 rounded-lg border-2 border-emerald-400 text-emerald-400 font-bold hover:bg-emerald-400/10 transition flex items-center gap-2">
            <span className="material-symbols-outlined">handshake</span>Let's Work Together
          </Link>
        </div>
      </div>
      
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl">
        {[
          { number: '5+', label: 'Years Experience' },
          { number: '20+', label: 'Projects Completed' },
          { number: '15+', label: 'Happy Clients' },
          { number: '10+', label: 'Technologies' },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
            <p className="text-3xl lg:text-4xl font-bold text-emerald-400">{stat.number}</p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
