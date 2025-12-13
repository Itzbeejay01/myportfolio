export default function Services() {
  const services = [
    { 
      icon: 'language', 
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      title: 'Web Development', 
      desc: 'I design and build modern, responsive websites and web applications that are fast, secure, and user-friendly.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility']
    },
    { 
      icon: 'dns', 
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/30',
      title: 'Back-End Development', 
      desc: 'I develop robust server-side logic, RESTful APIs, and scalable backends using PHP, Laravel, Python, and Django.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Server Optimization']
    },
    { 
      icon: 'hub', 
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      title: 'Database Management', 
      desc: 'I design, implement, and optimize SQL databases for efficient, reliable data storage and retrieval.',
      features: ['Schema Design', 'Query Optimization', 'Data Migration', 'Backup Solutions']
    },
    { 
      icon: 'psychology', 
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      title: 'AI & Machine Learning', 
      desc: 'I integrate intelligent features into products, including model training, evaluation, and deployment.',
      features: ['Model Training', 'Data Preprocessing', 'Deep Learning', 'Predictive Analytics']
    },
    { 
      icon: 'integration_instructions', 
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      title: 'Full-Stack Solutions', 
      desc: 'I deliver end-to-end solutions, from UI/UX to deployment, building complete, production-ready applications.',
      features: ['End-to-End Development', 'System Architecture', 'DevOps', 'Maintenance']
    },
    { 
      icon: 'school', 
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      title: 'Technical Consulting', 
      desc: 'I provide expert advice on technology choices, architecture decisions, and development strategies.',
      features: ['Tech Stack Selection', 'Code Review', 'Architecture Planning', 'Team Training']
    },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">What I Do</h1>
        <div className="h-1 w-24 lg:w-32 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 mb-4"></div>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          I offer comprehensive development services to help bring your ideas to life. From concept to deployment, I'm here to build solutions that matter.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className={`${s.bgColor} border ${s.borderColor} rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300`}>
              <span className={`material-symbols-outlined text-5xl ${s.color} mb-4`}>{s.icon}</span>
              <h3 className="font-bold text-xl text-white mb-3">{s.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className={`material-symbols-outlined text-sm ${s.color}`}>check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you need a complete web application, an AI-powered solution, or technical consulting, I'm here to help turn your vision into reality.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold shadow-lg hover:from-emerald-600 hover:to-sky-600 transition">
            <span className="material-symbols-outlined">mail</span>Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
