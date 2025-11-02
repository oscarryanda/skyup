import { Link } from 'react-router-dom'
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react'

export default function EventCard({ event, compact = false }) {
  const registrationPercentage = (event.registered / event.capacity) * 100
  const isAlmostFull = registrationPercentage > 80

  return (
    <div className="card hover:shadow-xl transition-shadow duration-300 group">
      {/* Poster */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={event.poster}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="badge-active">{event.category}</span>
        </div>
        {isAlmostFull && (
          <div className="absolute top-3 right-3">
            <span className="badge-important">Hampir Penuh</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-skyup-dark line-clamp-2 group-hover:text-skyup-teal transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 text-sm text-skyup-secondary">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-skyup-teal" />
            <span>{new Date(event.date).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-skyup-teal" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-skyup-teal" />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-skyup-teal" />
            <span>{event.registered} / {event.capacity} peserta</span>
          </div>
        </div>

        {/* Organizer */}
        <div className="pt-3 border-t border-gray-200">
          <p className="text-xs text-skyup-secondary mb-1">Penyelenggara</p>
          <p className="text-sm font-semibold text-skyup-dark">{event.organizer}</p>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3">
          <div>
            {event.price === 0 ? (
              <span className="text-lg font-bold text-skyup-teal">Gratis</span>
            ) : (
              <div>
                <p className="text-xs text-skyup-secondary">Biaya</p>
                <span className="text-lg font-bold text-skyup-dark">
                  Rp {event.price.toLocaleString('id-ID')}
                </span>
              </div>
            )}
          </div>
          <Link
            to={`/event/${event.id}`}
            className="btn-primary py-2 px-4 text-sm inline-flex items-center space-x-2"
          >
            <span>Detail</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

