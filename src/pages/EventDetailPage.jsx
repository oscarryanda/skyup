import { useParams, Link } from 'react-router-dom'
import { Calendar, MapPin, Users, Clock, Share2, Bookmark, DollarSign, CheckCircle2, Globe, Building2 } from 'lucide-react'
import eventsData from '../data/events.json'
import { useEffect } from 'react'

export default function EventDetailPage() {
  const { id } = useParams()
  const event = eventsData.find((e) => e.id === id)

  useEffect(() => {
    // Add JSON-LD schema for SEO
    if (event) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": event.title,
        "description": event.description,
        "startDate": `${event.date}T${event.time.split(' - ')[0]}`,
        "endDate": `${event.date}T${event.time.split(' - ')[1]?.split(' ')[0]}`,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": event.location,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": event.location
          }
        },
        "image": event.poster,
        "organizer": {
          "@type": "Organization",
          "name": event.organizer,
          "url": `https://skyup-synergy.id/o/${event.organizerId}`
        },
        "offers": {
          "@type": "Offer",
          "price": event.price,
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
          "url": `https://skyup-synergy.id/event/${event.id}`
        }
      })
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [event])

  if (!event) {
    return (
      <div className="min-h-screen bg-skyup-light flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-skyup-dark mb-4">Event tidak ditemukan</h2>
          <Link to="/" className="btn-primary">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    )
  }

  const registrationPercentage = (event.registered / event.capacity) * 100

  return (
    <div className="min-h-screen bg-skyup-light">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-skyup-teal to-skyup-blue overflow-hidden">
        <img
          src={event.poster}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-skyup-dark/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="badge-active">{event.category}</span>
              {event.integrations.googleEvents && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                  <Globe className="w-3 h-3 mr-1" />
                  Terindeks Google Events
                </span>
              )}
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{event.title}</h1>
            <p className="text-xl text-skyup-light">Oleh {event.organizer}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Info */}
            <div className="card">
              <h2 className="text-2xl font-bold text-skyup-dark mb-6">Informasi Event</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-skyup-teal flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-skyup-secondary mb-1">Tanggal</p>
                    <p className="font-semibold text-skyup-dark">
                      {new Date(event.date).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-skyup-teal flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-skyup-secondary mb-1">Waktu</p>
                    <p className="font-semibold text-skyup-dark">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-skyup-teal flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-skyup-secondary mb-1">Lokasi</p>
                    <p className="font-semibold text-skyup-dark">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-skyup-teal flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-skyup-secondary mb-1">Kapasitas</p>
                    <p className="font-semibold text-skyup-dark">
                      {event.registered} / {event.capacity} peserta terdaftar
                    </p>
                    <div className="mt-2 w-64 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-skyup-teal rounded-full h-2"
                        style={{ width: `${registrationPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="card">
              <h2 className="text-2xl font-bold text-skyup-dark mb-4">Tentang Event</h2>
              <p className="text-skyup-secondary leading-relaxed">{event.description}</p>
            </div>

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="card">
                <h2 className="text-2xl font-bold text-skyup-dark mb-4">Pembicara</h2>
                <ul className="space-y-2">
                  {event.speakers.map((speaker, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-skyup-teal flex-shrink-0" />
                      <span className="text-skyup-dark">{speaker}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="card">
              <h2 className="text-2xl font-bold text-skyup-dark mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span key={index} className="badge-neutral">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <div className="card sticky top-24">
              <div className="text-center mb-6">
                {event.price === 0 ? (
                  <div>
                    <p className="text-sm text-skyup-secondary mb-2">Tiket</p>
                    <p className="text-4xl font-bold text-skyup-teal">GRATIS</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-skyup-secondary mb-2">Harga Tiket</p>
                    <p className="text-4xl font-bold text-skyup-dark">
                      Rp {event.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                )}
              </div>

              <button className="btn-primary w-full mb-4 py-4 text-lg">
                Daftar Sekarang
              </button>

              <div className="flex space-x-3">
                <button className="flex-1 btn-secondary py-3 inline-flex items-center justify-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Bagikan</span>
                </button>
                <button className="flex-1 btn-secondary py-3 inline-flex items-center justify-center space-x-2">
                  <Bookmark className="w-5 h-5" />
                  <span>Simpan</span>
                </button>
              </div>

              {registrationPercentage > 80 && (
                <div className="mt-4 bg-skyup-orange/10 border border-skyup-orange rounded-lg p-3">
                  <p className="text-sm text-skyup-orange font-semibold text-center">
                    ⚠️ Kursi hampir penuh! Daftar sekarang.
                  </p>
                </div>
              )}
            </div>

            {/* Organizer Card */}
            <div className="card">
              <h3 className="font-bold text-skyup-dark mb-4">Penyelenggara</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-skyup-teal/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-skyup-teal" />
                </div>
                <div>
                  <p className="font-semibold text-skyup-dark">{event.organizer}</p>
                  <p className="text-sm text-skyup-secondary">{event.university}</p>
                </div>
              </div>
              <Link
                to={`/o/${event.organizerId}`}
                className="text-skyup-teal hover:text-skyup-blue font-semibold text-sm inline-flex items-center"
              >
                Lihat Profil Organisasi →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

