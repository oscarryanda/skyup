import { Link } from 'react-router-dom'
import { Calendar, Mail, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-skyup-light border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Sky-Up Synergy" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-skyup-dark">
                Sky-Up <span className="text-skyup-teal">Synergy</span>
              </span>
            </div>
            <p className="text-skyup-secondary text-sm mb-4 max-w-md">
              Platform terpadu untuk publikasi event kampus dan pembuatan website organisasi. 
              Satu kali publikasi, tersebar di berbagai kanal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-skyup-dark mb-4">Produk</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard/create-event" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                  Lineup System
                </Link>
              </li>
              <li>
                <Link to="/dashboard/org-profile" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                  Website Maker
                </Link>
              </li>
              <li>
                <Link to="/portal/kampus" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                  Portal Kampus
                </Link>
              </li>
              <li>
                <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                  Upgrade Pro
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-skyup-dark mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-skyup-secondary hover:text-skyup-teal transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-sm text-skyup-secondary">
            © 2025 Sky-Up Synergy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

