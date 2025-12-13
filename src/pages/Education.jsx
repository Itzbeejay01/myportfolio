export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science (B.Sc.) Computer Science',
      school: 'Joseph Ayo Babalola University (JABU)',
      location: 'Ikeji-Arakeji, Osun State, Nigeria',
      year: '2025',
      icon: 'school',
      description: 'Comprehensive study of computer science fundamentals, software engineering, and advanced topics including artificial intelligence and machine learning.',
      achievements: ['Final year project on Ensemble Deep Learning for Breast Cancer Detection', 'Active member of NACOS JABU', 'Developed multiple web applications for the university']
    },
    {
      degree: 'National Diploma (ND) Computer Science',
      school: 'Federal Polytechnic Ado',
      location: 'Ado-Ekiti, Ekiti State, Nigeria',
      year: '2021',
      icon: 'school',
      description: 'Foundation in computer science principles, programming fundamentals, and practical software development skills.',
      achievements: ['Strong foundation in programming and database management', 'Participated in various tech workshops', 'Completed practical projects in web development']
    },
  ]

  const certifications = [
    { name: 'Python for Data Science', issuer: 'Online Course', year: '2024' },
    { name: 'Web Development Fundamentals', issuer: 'Self-paced Learning', year: '2023' },
    { name: 'Machine Learning Specialization', issuer: 'Online Platform', year: '2024' },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">Education</h1>
        <div className="h-1 w-24 lg:w-32 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 mb-4"></div>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          My academic journey that has shaped my technical skills and professional growth.
        </p>
        
        <div className="space-y-6 mb-12">
          {education.map((edu, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-2xl">{edu.icon}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full">
                      Graduated: {edu.year}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-emerald-400 font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-4">{edu.location}</p>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-white mb-2">Key Achievements:</p>
                    <ul className="space-y-1">
                      {edu.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="material-symbols-outlined text-emerald-400 text-sm mt-0.5">check_circle</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-6">Certifications & Courses</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
              <span className="material-symbols-outlined text-3xl text-emerald-400 mb-3">verified</span>
              <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
              <p className="text-emerald-400 text-sm mt-2">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
