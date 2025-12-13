import logoImg from '../assets/images/logo.png'

export default function MobileNav({ onMenuClick }) {
  return (
    <div className="lg:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-gradient-to-r from-gray-900 to-black px-4 py-3 z-40">
      <div className="flex items-center gap-2">
        <img src={logoImg} alt="Logo" className="w-10" />
        <span className="text-white font-bold text-lg">Omolayo Ayokanmi</span>
      </div>
      <button onClick={onMenuClick} className="text-white text-3xl focus:outline-none">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  )
}
