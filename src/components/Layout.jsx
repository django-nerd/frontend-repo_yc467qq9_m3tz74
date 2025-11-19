import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
      isActive ? 'bg-blue-500 text-white' : 'text-blue-100 hover:bg-white/10'
    }`

  return (
    <div className="min-h-screen bg-[#0B1020] text-blue-50">
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-[#0B1020]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-white">
            MedFlow
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink to="/admin" className={navLinkClass}>Admin</NavLink>
            <NavLink to="/doctor" className={navLinkClass}>Doctor</NavLink>
            <NavLink to="/patient" className={navLinkClass}>Patient</NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-blue-300/70">
          © {new Date().getFullYear()} MedFlow. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Layout
