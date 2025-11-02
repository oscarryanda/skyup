import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Calendar, LayoutDashboard } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/portal/kampus', label: 'Portal Kampus' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Sky-Up Synergy" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-skyup-dark">
              Sky-Up <span className="text-skyup-teal">Synergy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-skyup-teal'
                    : 'text-skyup-secondary hover:text-skyup-teal'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/dashboard/create-event"
              className="btn-primary py-2 px-5 text-sm"
            >
              Buat Event
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-skyup-light"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-skyup-dark" />
            ) : (
              <Menu className="w-6 h-6 text-skyup-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-skyup-teal'
                      : 'text-skyup-secondary hover:text-skyup-teal'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/dashboard/create-event"
                onClick={() => setIsOpen(false)}
                className="btn-primary py-2 px-5 text-sm text-center"
              >
                Buat Event
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

