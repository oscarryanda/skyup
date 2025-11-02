import { useParams, Link } from 'react-router-dom'
import { MapPin, Mail, Instagram, Twitter, Globe, Calendar, Users, TrendingUp, ExternalLink, Crown } from 'lucide-react'
import { useState } from 'react'
import orgsData from '../data/orgs.json'
import eventsData from '../data/events.json'
import EventCard from '../components/EventCard'

export default function MicrositePage() {
  const { slug } = useParams()
  const org = orgsData.find((o) => o.slug === slug)
  const [selectedCategory, setSelectedCategory] = useState('all')

  if (!org) {
    return (
      <div className="min-h-screen bg-skyup-light flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-skyup-dark mb-4">Organisasi tidak ditemukan</h2>
          <Link to="/" className="btn-primary">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    )
  }

  // Get events from this organization
  const orgEvents = eventsData.filter(e => e.organizerId === org.id)
  
  // Filter by category
  const filteredEvents = selectedCategory === 'all' 
    ? orgEvents 
    : orgEvents.filter(e => e.category === selectedCategory)

  const categories = ['all', ...new Set(orgEvents.map(e => e.category))]

  // Apply custom theme
  const customStyles = {
    '--primary-color': org.theme.primaryColor,
    '--secondary-color': org.theme.secondaryColor,
    '--accent-color': org.theme.accentColor,
  }

  return (
    <div className="min-h-screen" style={customStyles}>
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={org.banner}
          alt={org.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div className="flex items-end space-x-6">
            {/* Logo */}
            <div className="w-32 h-32 bg-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
              <img
                src={org.logo}
                alt={org.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info */}
            <div className="pb-2">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl font-bold text-white">{org.name}</h1>
                {org.isPro && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-skyup-orange rounded-full text-white text-sm font-semibold">
                    <Crown className="w-4 h-4" />
                    <span>PRO</span>
                  </span>
                )}
              </div>
              <p className="text-xl text-white/90 mb-2">{org.tagline}</p>
              <p className="text-skyup-light flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{org.university}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b-2 border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button className="py-4 border-b-2 border-current font-semibold transition-colors" style={{ color: org.theme.primaryColor }}>
              Event
            </button>
            <button className="py-4 border-b-2 border-transparent text-skyup-secondary hover:text-skyup-dark font-semibold transition-colors">
              Tentang
            </button>
            <button className="py-4 border-b-2 border-transparent text-skyup-secondary hover:text-skyup-dark font-semibold transition-colors">
              Kontak
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="card">
              <h2 className="text-2xl font-bold text-skyup-dark mb-4">Tentang Kami</h2>
              <p className="text-skyup-secondary leading-relaxed mb-6">
                {org.description}
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2" style={{ color: org.theme.primaryColor }} />
                  <p className="text-2xl font-bold text-skyup-dark">{org.stats.totalEvents}</p>
                  <p className="text-sm text-skyup-secondary">Total Event</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2" style={{ color: org.theme.primaryColor }} />
                  <p className="text-2xl font-bold text-skyup-dark">{org.stats.totalMembers}</p>
                  <p className="text-sm text-skyup-secondary">Anggota</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2" style={{ color: org.theme.primaryColor }} />
                  <p className="text-2xl font-bold text-skyup-dark">{org.stats.foundedYear}</p>
                  <p className="text-sm text-skyup-secondary">Didirikan</p>
                </div>
              </div>
            </div>

            {/* Sponsors Section (Pro Only) */}
            {org.isPro && org.sponsors && org.sponsors.length > 0 && (
              <div className="card">
                <h2 className="text-2xl font-bold text-skyup-dark mb-6">Sponsor & Partner</h2>
                <div className="grid grid-cols-2 gap-6">
                  {org.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="bg-skyup-light rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-shadow"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-16 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Events Catalog */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-skyup-dark">Event & Kegiatan</h2>
                <span className="text-sm text-skyup-secondary">
                  {filteredEvents.length} event
                </span>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'text-white shadow-md'
                        : 'bg-white border-2 border-gray-200 text-skyup-secondary hover:border-gray-300'
                    }`}
                    style={
                      selectedCategory === category
                        ? { backgroundColor: org.theme.primaryColor }
                        : {}
                    }
                  >
                    {category === 'all' ? 'Semua' : category}
                  </button>
                ))}
              </div>

              {/* Event Grid */}
              <div className="grid grid-cols-1 gap-6">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <div className="text-center py-12 bg-skyup-light rounded-xl">
                    <Calendar className="w-16 h-16 mx-auto mb-4 text-skyup-secondary" />
                    <p className="text-skyup-secondary">Belum ada event di kategori ini</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="card sticky top-28">
              <h3 className="font-bold text-skyup-dark mb-4">Kontak</h3>
              <div className="space-y-3">
                {org.social.email && (
                  <a
                    href={`mailto:${org.social.email}`}
                    className="flex items-center space-x-3 text-skyup-secondary hover:text-skyup-dark transition-colors group"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm group-hover:underline">{org.social.email}</span>
                  </a>
                )}
                {org.social.website && (
                  <a
                    href={org.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-skyup-secondary hover:text-skyup-dark transition-colors group"
                  >
                    <Globe className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm group-hover:underline">Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {org.social.instagram && (
                  <a
                    href={`https://instagram.com/${org.social.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-skyup-secondary hover:text-skyup-dark transition-colors group"
                  >
                    <Instagram className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm group-hover:underline">{org.social.instagram}</span>
                  </a>
                )}
                {org.social.twitter && (
                  <a
                    href={`https://twitter.com/${org.social.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-skyup-secondary hover:text-skyup-dark transition-colors group"
                  >
                    <Twitter className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm group-hover:underline">{org.social.twitter}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Analytics (Pro Only) */}
            {org.isPro && org.analytics && (
              <div className="card">
                <h3 className="font-bold text-skyup-dark mb-4 flex items-center space-x-2">
                  <span>Analitik</span>
                  <Crown className="w-4 h-4 text-skyup-orange" />
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-skyup-secondary">Views (30 hari)</span>
                      <span className="font-bold text-skyup-dark">{org.analytics.monthlyViews.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="rounded-full h-2"
                        style={{
                          width: '75%',
                          backgroundColor: org.theme.primaryColor,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-skyup-secondary">Total Registrasi</span>
                      <span className="font-bold text-skyup-dark">{org.analytics.totalRegistrations.toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-skyup-secondary">Conversion Rate</span>
                      <span className="font-bold text-skyup-dark">{org.analytics.conversionRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Powered By Badge */}
            <div className="bg-skyup-light rounded-xl p-4 text-center">
              <p className="text-xs text-skyup-secondary mb-2">Powered by</p>
              <Link to="/" className="inline-flex flex-col items-center space-y-2">
                <img 
                  src="/logo.png" 
                  alt="Sky-Up Synergy" 
                  className="h-8 w-auto"
                />
                <span className="font-bold text-skyup-dark text-sm">
                  Sky-Up <span className="text-skyup-teal">Synergy</span>
                </span>
              </Link>
              <p className="text-xs text-skyup-secondary mt-2">
                Buat microsite organisasi Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

