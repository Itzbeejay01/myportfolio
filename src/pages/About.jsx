import mainImg from '../assets/images/main.png'

export default function About() {
  const highlights = [
    { icon: 'code', title: 'Clean Code', desc: 'I write maintainable, well-documented code following best practices and industry standards.' },
    { icon: 'speed', title: 'Fast Delivery', desc: 'I prioritize efficient workflows to deliver high-quality solutions on time.' },
    { icon: 'security', title: 'Security First', desc: 'Security is built into every layer of my applications from the ground up.' },
    { icon: 'support', title: 'Ongoing Support', desc: 'I provide continuous support and maintenance to ensure your project thrives.' },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">About Me</h1>
        <div className="h-1 w-24 lg:w-32 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 mb-8"></div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 flex flex-col items-center lg:items-start">
            <img 
              src={mainImg} 
              alt="Omolayo Ayokanmi" 
              className="w-full h-full rounded-2xl object-cover border-4 border-emerald-400 shadow-lg mb-6"
            />
            <h2 className="text-2xl font-bold text-emerald-400 mb-2">Omolayo Ayokanmi</h2>
            <p className="text-gray-400 mb-4">Full Stack Developer | AI Engineer | BeeTechHub</p>
            <div className="flex gap-3">
              <a href="https://github.com/itzbeejay01" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="http://linkedin.com/in/omolayo-ayokanmi-15b312395" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">My Story</h3>
            <div className="space-y-4 text-gray-300 text-lg text-justify leading-relaxed">
              <p>
                My name is <span className="text-emerald-400 font-semibold">Omolayo Ayokanmi</span>, known as <span className="text-emerald-400 font-semibold">BeeTechHub</span>. I am a dedicated and forward-thinking developer with a strong respect for solid foundations and a modern approach to technology.
              </p>
              <p>
                I build practical, real-world solutions with careful attention to detail, clear structure, and clean, maintainable code. My work spans web development with <span className="text-sky-400">React</span>, <span className="text-sky-400">Laravel</span>, and <span className="text-sky-400">Django</span>, with growing expertise in applying modern technologies to solve real problems.
              </p>
              <p>
                I believe in doing things properly with discipline, integrity, and a commitment to seeing projects through from concept to completion. I value clear communication, reliable delivery, and collaboration that brings out the best in people and ideas.
              </p>
              <p className="text-emerald-400 font-semibold">
                If you are looking for someone who combines traditional work ethic with modern development skills, I am ready to build with you.
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-6">Why Work With Me?</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
              <span className="material-symbols-outlined text-4xl text-emerald-400 mb-4">{item.icon}</span>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
