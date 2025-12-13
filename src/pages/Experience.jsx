export default function Experience() {
  const experiences = [
    {
      icon: 'psychology',
      title: 'Machine Learning & Deep Learning Developer',
      company: 'BeeTechHub',
      period: '2024 – Present',
      current: true,
      description: 'Developing ensemble deep learning systems for real-world prediction tasks, including breast cancer detection and malware analysis.',
      responsibilities: [
        'Designed and trained deep learning models using TensorFlow and PyTorch',
        'Implemented data preprocessing pipelines for large datasets',
        'Built model evaluation frameworks with comprehensive metrics',
        'Deployed ML models for production use cases'
      ]
    },
    {
      icon: 'code',
      title: 'Software Developer',
      company: 'JABU_CAMS Project',
      period: '2024 – Present',
      current: true,
      description: 'Built and deployed an advanced attendance management system for JABU Chapel, integrating security features and user support.',
      responsibilities: [
        'Developed full-stack application using PHP and Laravel',
        'Implemented QR code-based attendance verification',
        'Designed database schema for efficient data management',
        'Created admin dashboard for real-time monitoring'
      ]
    },
    {
      icon: 'web',
      title: 'Web Developer',
      company: 'BeeTechHub',
      period: '2023 – Present',
      current: true,
      description: 'Designing, developing, and maintaining web solutions for various clients including NACOS JABU and personal portfolio projects.',
      responsibilities: [
        'Built responsive websites using modern frameworks',
        'Developed backend APIs with PHP and Laravel',
        'Optimized website performance and SEO',
        'Managed client relationships and project deliverables'
      ]
    },
    {
      icon: 'score',
      title: 'Student Test Score Platform Developer',
      company: 'Freelance Project',
      period: '2024',
      description: 'Designed and implemented a secure web solution allowing lecturers to upload test scores and students to check their results online.',
      responsibilities: [
        'Built secure authentication system for multiple user roles',
        'Developed intuitive interfaces for score entry and viewing',
        'Implemented data validation and error handling',
        'Created comprehensive admin controls'
      ]
    },
    {
      icon: 'palette',
      title: 'Graphics Designer & Shop Manager',
      company: 'Creative Retail Business',
      period: '2015 – 2018',
      description: 'Led branding initiatives, event collaborations, and managed daily business operations for a creative retail environment.',
      responsibilities: [
        'Created branding materials and marketing designs',
        'Managed inventory and daily operations',
        'Coordinated with vendors and event organizers',
        'Developed customer relationship strategies'
      ]
    },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">Experience</h1>
        <div className="h-1 w-24 lg:w-32 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 mb-4"></div>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          My professional journey and the roles that have shaped my expertise in software development.
        </p>
        
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-sky-500 hidden lg:block"></div>
          
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative lg:pl-16">
                <div className="hidden lg:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 items-center justify-center z-10">
                  <span className="material-symbols-outlined text-white">{exp.icon}</span>
                </div>
                
                <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="lg:hidden w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-xl">{exp.icon}</span>
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">{exp.period}</span>
                    {exp.current && (
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full">Current</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-emerald-400 font-semibold mb-3">{exp.company}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div>
                    <p className="text-sm font-semibold text-white mb-2">Key Responsibilities:</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="material-symbols-outlined text-emerald-400 text-sm mt-0.5">arrow_right</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
