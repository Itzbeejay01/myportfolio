export default function Skills() {
  const skillCategories = [
    {
      icon: 'web',
      title: 'Front-End',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / TailwindCSS', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'React.js', level: 85 },
      ]
    },
    {
      icon: 'dns',
      title: 'Back-End',
      color: 'from-sky-500 to-blue-500',
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'Laravel', level: 82 },
        { name: 'Python', level: 88 },
        { name: 'Django', level: 80 },
      ]
    },
    {
      icon: 'hub',
      title: 'Databases',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'SQLite', level: 85 },
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Supabase', level: 78 },
      ]
    },
    {
      icon: 'psychology',
      title: 'ML & Deep Learning',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 72 },
        { name: 'scikit-learn', level: 80 },
        { name: 'Data Preprocessing', level: 85 },
      ]
    },
  ]

  const tools = [
    { name: 'Git & GitHub', icon: 'code' },
    { name: 'VS Code', icon: 'edit' },
    { name: 'Postman', icon: 'api' },
    { name: 'Docker', icon: 'deployed_code' },
    { name: 'Linux', icon: 'terminal' },
    { name: 'Figma', icon: 'palette' },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">My Tech Stack</h1>
        <div className="h-1 w-24 lg:w-32 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 mb-4"></div>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          A comprehensive overview of the technologies and tools I work with to build powerful, scalable applications.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-white text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-emerald-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-6">Tools & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 flex flex-col items-center hover:border-emerald-500/50 transition-colors">
              <span className="material-symbols-outlined text-3xl text-emerald-400 mb-2">{tool.icon}</span>
              <span className="text-gray-300 text-sm text-center">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
