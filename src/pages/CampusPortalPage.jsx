import { useState } from 'react'
import FeedWidget from '../components/FeedWidget'
import { Link } from 'react-router-dom'
import { Calendar, Zap } from 'lucide-react'
import eventsData from '../data/events.json'

export default function CampusPortalPage() {
  // Filter events that have campus portal integration enabled
  const campusEvents = eventsData.filter(e => e.integrations.campusPortal)

  return (
    <div className="min-h-screen">
      {/* Campus Portal Header - Simulated */}
      <div className="bg-gradient-to-r from-skyup-blue to-skyup-navy text-white py-8 border-b-4 border-skyup-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                <img 
                  src="/logo.png" 
                  alt="Sky-Up Synergy" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Portal Kampus</h1>
                <p className="text-skyup-light">Universitas Indonesia - Agenda & Event</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="hover:text-skyup-light transition-colors">Beranda</a>
              <a href="#" className="hover:text-skyup-light transition-colors">Akademik</a>
              <a href="#" className="hover:text-skyup-light transition-colors font-semibold border-b-2 border-skyup-orange">Event</a>
              <a href="#" className="hover:text-skyup-light transition-colors">Berita</a>
              <a href="#" className="hover:text-skyup-light transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-skyup-secondary">
            Portal / <span className="text-skyup-dark font-semibold">Agenda Event Kampus</span>
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-skyup-light border-b-2 border-skyup-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-skyup-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-skyup-teal" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-skyup-dark mb-2">
                Simulasi: Agenda Event Kampus
              </h2>
              <p className="text-skyup-secondary text-sm">
                Ini adalah simulasi tampilan widget Sky-Up Event Feed yang dapat diintegrasikan ke website kampus. 
                Event yang ditampilkan di-update otomatis dari platform Sky-Up Synergy.
              </p>
            </div>
            <Link to="/dashboard/integrations" className="btn-primary text-sm whitespace-nowrap hidden md:block">
              Kelola Integrasi
            </Link>
          </div>
        </div>
      </div>

      {/* Event Feed Widget */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-skyup-dark mb-2">
              Event & Kegiatan Kampus
            </h2>
            <p className="text-skyup-secondary">
              Temukan berbagai event menarik dari organisasi mahasiswa se-Indonesia
            </p>
          </div>

          {/* Widget Container with Border to Show Embed Area */}
          <div className="border-4 border-dashed border-skyup-teal/30 rounded-2xl p-8 bg-skyup-light/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-skyup-secondary">Live Widget - Powered by Sky-Up Synergy</span>
              </div>
              <span className="badge-neutral text-xs">Widget Embed Area</span>
            </div>
            
            <FeedWidget events={campusEvents} showFilters={true} />
          </div>
        </div>
      </div>

      {/* Campus Footer - Simulated */}
      <div className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Portal Kampus UI</h3>
              <p className="text-gray-400 text-sm">
                Sistem informasi terpadu Universitas Indonesia untuk mahasiswa dan dosen.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Link Cepat</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Portal Akademik</a></li>
                <li><a href="#" className="hover:text-white">E-Learning</a></li>
                <li><a href="#" className="hover:text-white">Perpustakaan</a></li>
                <li><a href="#" className="hover:text-white">Event & Agenda</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Kontak</h3>
              <p className="text-gray-400 text-sm">
                Kampus UI Depok<br />
                Jawa Barat, Indonesia<br />
                Email: info@ui.ac.id
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 Universitas Indonesia. Event Feed powered by{' '}
            <Link to="/" className="text-skyup-teal hover:underline font-semibold">
              Sky-Up Synergy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

