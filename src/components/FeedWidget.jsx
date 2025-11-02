import { useState } from 'react'
import { Search, Filter, Calendar, MapPin, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FeedWidget({ events, showFilters = true }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDate, setSelectedDate] = useState('all')

  const categories = ['all', 'Seminar', 'Workshop', 'Kompetisi', 'Bootcamp']
  const dateFilters = [
    { value: 'all', label: 'Semua' },
    { value: 'today', label: 'Hari Ini' },
    { value: 'week', label: 'Minggu Ini' },
    { value: 'month', label: 'Bulan Ini' },
  ]

  // Filter events
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    // For demo purposes, we'll just filter by category and search
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      {showFilters && (
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-skyup-secondary" />
            <input
              type="text"
              placeholder="Cari event atau penyelenggara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
            />
          </div>

          {/* Category & Date Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Kategori
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-skyup-teal text-white'
                        : 'bg-white border-2 border-gray-200 text-skyup-secondary hover:border-skyup-teal'
                    }`}
                  >
                    {category === 'all' ? 'Semua' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Filter */}
            <div className="w-full sm:w-48">
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Tanggal
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              >
                {dateFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-skyup-secondary">
          Menampilkan <span className="font-semibold text-skyup-dark">{filteredEvents.length}</span> event
        </p>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-skyup-teal transition-all duration-300"
          >
            {/* Poster */}
            <div className="relative">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="badge-active">{event.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <h3 className="font-bold text-skyup-dark line-clamp-2">
                {event.title}
              </h3>

              <div className="space-y-2 text-sm text-skyup-secondary">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-skyup-teal" />
                  <span>{new Date(event.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-skyup-teal" />
                  <span className="line-clamp-1">{event.university}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-skyup-teal" />
                  <span>{event.organizer}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                to={`/event/${event.id}`}
                className="block w-full text-center bg-skyup-teal hover:bg-skyup-blue text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Daftar di Sky-Up
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Powered by Badge */}
      <div className="text-center pt-6 border-t border-gray-200">
        <p className="text-xs text-skyup-secondary">
          Powered by{' '}
          <Link to="/" className="text-skyup-teal font-semibold hover:underline">
            Sky-Up Synergy
          </Link>
        </p>
      </div>
    </div>
  )
}

