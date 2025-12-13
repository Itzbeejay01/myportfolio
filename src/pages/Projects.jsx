import project1 from '../assets/images/project1.jpeg'
import project2 from '../assets/images/project2.jpeg'
import project3 from '../assets/images/project3.jpeg'
import project4 from '../assets/images/project4.jpeg'
import project5 from '../assets/images/project5.jpeg'

export default function Projects() {
  const projects = [
    { 
      icon: 'public', 
      color: 'text-emerald-400',
      image: project1,
      title: 'NACOS JABU Website', 
      desc: 'A full website solution for the National Association of Computer Science Students at Joseph Ayo Babalola University. Features include announcements, member access, and comprehensive admin control panel.',
      tech: ['PHP', 'Laravel', 'MySQL', 'TailwindCSS'],
      category: 'Web Development'
    },
    { 
      icon: 'event', 
      color: 'text-indigo-400',
      image: project2,
      title: 'IBSE 1.0 Website', 
      desc: 'A modern, clean website built for the International Business & Skills Expo (IBSE). Focuses on event promotion, registration management, and information dissemination.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web Development'
    },
    { 
      icon: 'school', 
      color: 'text-emerald-400',
      image: project3,
      title: 'Covenant Ark Academy Portal', 
      desc: 'A comprehensive school website and portal for Covenant Ark Academy. Includes parent/student login, academic resources, grade tracking, and news updates.',
      tech: ['PHP', 'MySQL', 'TailwindCSS', 'HTML', 'JavaScript'],
      category: 'Full Stack'
    },
    { 
      icon: 'manage_accounts', 
      color: 'text-sky-400',
      image: project4,
      title: 'School Management Software', 
      desc: 'A full-fledged school management system featuring student enrollment, attendance tracking, fee management, results processing, and staff admin tools.',
      tech: ['PHP', 'MySQL', 'TailwindCSS', 'HTML', 'JavaScript'],
      category: 'Full Stack'
    },
    { 
      icon: 'how_to_reg', 
      color: 'text-emerald-400',
      image: project5,
      title: 'JABU Chapel Attendance System', 
      desc: 'An advanced attendance management system for the JABU Chapel with secure QR verification, real-time tracking, and detailed reporting.',
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      category: 'Full Stack'
    },
    { 
      icon: 'score', 
      color: 'text-indigo-400',
      title: 'SmartResult', 
      desc: 'A secure online platform enabling lecturers to upload test scores and students to check results, with multi-level authentication and admin controls.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      category: 'Web Development'
    },
    { 
      icon: 'alarm', 
      color: 'text-emerald-400',
      title: 'TimelyClass Reminder App', 
      desc: 'A cross-platform app that helps students manage tasks, assignments, and deadlines with smart reminders and notification system.',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      category: 'Web App'
    },
    { 
      icon: 'security', 
      color: 'text-pink-400',
      title: 'Malware Detection System', 
      desc: 'A practical system designed to detect malware using machine learning models to strengthen cybersecurity awareness and protection.',
      tech: ['Python', 'TensorFlow', 'scikit-learn'],
      category: 'AI/ML'
    },
    { 
      icon: 'favorite', 
      color: 'text-pink-400',
      title: 'Breast Cancer Detection', 
      desc: 'An ensemble deep learning project for detecting and predicting breast cancer with robust preprocessing, model training, and risk prediction features.',
      tech: ['Python', 'PyTorch', 'TensorFlow', 'Pandas'],
      category: 'AI/ML'
    },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">Featured Projects</h1>
        <div className="h-1 w-24 lg:w-32 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 mb-4"></div>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          A showcase of my recent work spanning web development, full-stack applications, and AI/ML solutions.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all hover:scale-[1.02] duration-300 flex flex-col">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              ) : (
                <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className={`material-symbols-outlined text-6xl ${p.color}`}>{p.icon}</span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-emerald-400 mb-2">{p.category}</span>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow text-justify">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
