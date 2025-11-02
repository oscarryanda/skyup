import { Link } from 'react-router-dom'
import { Calendar, Settings, Building2, BarChart3, Plus, ArrowRight } from 'lucide-react'
import eventsData from '../data/events.json'

export default function DashboardPage() {
  const myEvents = eventsData.slice(0, 4)

  const stats = [
    { label: 'Total Event', value: '12', icon: Calendar, color: 'text-skyup-teal' },
    { label: 'Total Peserta', value: '2,456', icon: BarChart3, color: 'text-skyup-blue' },
    { label: 'Event Aktif', value: '8', icon: Calendar, color: 'text-skyup-orange' },
    { label: 'Organisasi', value: '1', icon: Building2, color: 'text-skyup-navy' },
  ]

  return (
    <div className="min-h-screen bg-skyup-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-skyup-dark mb-2">Dashboard</h1>
          <p className="text-skyup-secondary">Kelola event dan organisasi Anda</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link to="/dashboard/create-event" className="card hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-skyup-teal/10 rounded-2xl flex items-center justify-center group-hover:bg-skyup-teal transition-colors">
                  <Plus className="w-7 h-7 text-skyup-teal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-skyup-dark group-hover:text-skyup-teal transition-colors">
                    Buat Event Baru
                  </h3>
                  <p className="text-sm text-skyup-secondary">
                    Publikasi event ke multi-kanal
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-skyup-secondary group-hover:text-skyup-teal transition-colors" />
            </div>
          </Link>

          <Link to="/dashboard/org-profile" className="card hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-skyup-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-skyup-blue transition-colors">
                  <Building2 className="w-7 h-7 text-skyup-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-skyup-dark group-hover:text-skyup-blue transition-colors">
                    Profil Organisasi
                  </h3>
                  <p className="text-sm text-skyup-secondary">
                    Kelola microsite organisasi
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-skyup-secondary group-hover:text-skyup-blue transition-colors" />
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <p className="text-3xl font-bold text-skyup-dark mb-1">{stat.value}</p>
              <p className="text-sm text-skyup-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* My Events */}
        <div className="card mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-skyup-dark">Event Saya</h2>
            <Link to="/dashboard/org-events" className="text-skyup-teal hover:text-skyup-blue font-semibold inline-flex items-center space-x-1">
              <span>Lihat Semua</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {myEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-skyup-light rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-skyup-dark mb-1">{event.title}</h3>
                    <p className="text-sm text-skyup-secondary mb-2">
                      {new Date(event.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="badge-active text-xs">{event.category}</span>
                      {event.integrations.googleEvents && (
                        <span className="badge-neutral text-xs">✓ Google Events</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-skyup-dark">{event.registered}</p>
                  <p className="text-xs text-skyup-secondary">peserta terdaftar</p>
                  <Link to={`/event/${event.id}`} className="text-skyup-teal hover:text-skyup-blue text-sm font-semibold mt-2 inline-block">
                    Lihat Detail →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/dashboard/integrations" className="card hover:shadow-lg transition-shadow">
            <Settings className="w-8 h-8 text-skyup-teal mb-3" />
            <h3 className="font-bold text-skyup-dark mb-2">Integrasi</h3>
            <p className="text-sm text-skyup-secondary">Kelola integrasi multi-kanal</p>
          </Link>

          <Link to="/portal/kampus" className="card hover:shadow-lg transition-shadow">
            <Calendar className="w-8 h-8 text-skyup-blue mb-3" />
            <h3 className="font-bold text-skyup-dark mb-2">Portal Kampus</h3>
            <p className="text-sm text-skyup-secondary">Lihat simulasi portal kampus</p>
          </Link>

          <Link to="/dashboard/org-events" className="card hover:shadow-lg transition-shadow">
            <BarChart3 className="w-8 h-8 text-skyup-navy mb-3" />
            <h3 className="font-bold text-skyup-dark mb-2">Analitik</h3>
            <p className="text-sm text-skyup-secondary">Monitor performa event</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

