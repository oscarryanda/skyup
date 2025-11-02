import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Plus, Eye, EyeOff, BarChart3, Calendar, Users } from 'lucide-react'
import eventsData from '../data/events.json'
import orgsData from '../data/orgs.json'

export default function OrgEventsPage() {
  const [events, setEvents] = useState(eventsData.slice(0, 6))
  
  // For demo, assume we're managing BEM UI
  const currentOrg = orgsData[0]

  const toggleMicrosite = (eventId) => {
    setEvents(events.map(e => {
      if (e.id === eventId) {
        return { ...e, showInMicrosite: !e.showInMicrosite }
      }
      return e
    }))
  }

  return (
    <div className="min-h-screen bg-skyup-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center space-x-2 text-skyup-teal hover:text-skyup-blue font-semibold mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Dashboard</span>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-skyup-dark mb-2">
                Event Saya
              </h1>
              <p className="text-skyup-secondary">
                Kelola event dan tampilan di microsite {currentOrg.name}
              </p>
            </div>
            <div className="flex space-x-3">
              <Link
                to={`/o/${currentOrg.slug}`}
                className="btn-secondary hidden md:inline-flex items-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>Lihat Microsite</span>
              </Link>
              <Link
                to="/dashboard/create-event"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Buat Event</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <Calendar className="w-6 h-6 text-skyup-teal mb-2" />
            <p className="text-3xl font-bold text-skyup-dark mb-1">
              {events.length}
            </p>
            <p className="text-sm text-skyup-secondary">Total Event</p>
          </div>
          <div className="card">
            <Users className="w-6 h-6 text-skyup-blue mb-2" />
            <p className="text-3xl font-bold text-skyup-dark mb-1">
              {events.reduce((sum, e) => sum + e.registered, 0)}
            </p>
            <p className="text-sm text-skyup-secondary">Total Peserta</p>
          </div>
          <div className="card">
            <Eye className="w-6 h-6 text-skyup-orange mb-2" />
            <p className="text-3xl font-bold text-skyup-dark mb-1">
              {events.filter(e => e.showInMicrosite !== false).length}
            </p>
            <p className="text-sm text-skyup-secondary">Tampil di Microsite</p>
          </div>
          <div className="card">
            <BarChart3 className="w-6 h-6 text-skyup-navy mb-2" />
            <p className="text-3xl font-bold text-skyup-dark mb-1">
              {((events.reduce((sum, e) => sum + e.registered, 0) / events.reduce((sum, e) => sum + e.capacity, 0)) * 100).toFixed(0)}%
            </p>
            <p className="text-sm text-skyup-secondary">Fill Rate</p>
          </div>
        </div>

        {/* Events Table */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-skyup-dark">Daftar Event</h2>
            <div className="flex items-center space-x-2">
              <select className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none text-sm">
                <option>Semua Status</option>
                <option>Aktif</option>
                <option>Selesai</option>
                <option>Draft</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-skyup-dark">
                    Event
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-skyup-dark">
                    Tanggal
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-skyup-dark">
                    Peserta
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-skyup-dark">
                    Status
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-skyup-dark">
                    Microsite
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-skyup-dark">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => {
                  const showInMicrosite = event.showInMicrosite !== false
                  return (
                    <tr key={event.id} className="border-b border-gray-200 hover:bg-skyup-light transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={event.poster}
                            alt={event.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-skyup-dark mb-1">
                              {event.title}
                            </h4>
                            <p className="text-xs text-skyup-secondary">
                              {event.category} • {event.location}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-skyup-secondary">
                        {new Date(event.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div>
                          <p className="font-semibold text-skyup-dark">
                            {event.registered} / {event.capacity}
                          </p>
                          <p className="text-xs text-skyup-secondary">
                            {((event.registered / event.capacity) * 100).toFixed(0)}%
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="badge-active text-xs">
                          {event.status || 'Published'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => toggleMicrosite(event.id)}
                          className={`inline-flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                            showInMicrosite
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {showInMicrosite ? (
                            <>
                              <Eye className="w-3 h-3" />
                              <span>Visible</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3 h-3" />
                              <span>Hidden</span>
                            </>
                          )}
                        </button>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Link
                            to={`/event/${event.id}`}
                            className="text-skyup-teal hover:text-skyup-blue text-sm font-semibold"
                          >
                            Detail
                          </Link>
                          <span className="text-gray-300">|</span>
                          <button className="text-skyup-secondary hover:text-skyup-dark text-sm font-semibold">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-skyup-teal/10 border-2 border-skyup-teal/30 rounded-xl p-6">
          <h3 className="font-bold text-skyup-dark mb-3">💡 Tips Mengelola Event di Microsite</h3>
          <ul className="space-y-2 text-sm text-skyup-secondary">
            <li className="flex items-start">
              <span className="text-skyup-teal mr-2">•</span>
              <span>Aktifkan toggle "Visible" untuk menampilkan event di microsite organisasi</span>
            </li>
            <li className="flex items-start">
              <span className="text-skyup-teal mr-2">•</span>
              <span>Event yang ditampilkan akan muncul di katalog event microsite dengan urutan terbaru</span>
            </li>
            <li className="flex items-start">
              <span className="text-skyup-teal mr-2">•</span>
              <span>Upgrade ke Pro untuk mendapat analitik mendalam dan slot sponsor di microsite</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

