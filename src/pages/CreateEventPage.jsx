import { useNavigate } from 'react-router-dom'
import EventForm from '../components/EventForm'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function CreateEventPage() {
  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (formData) => {
    console.log('Event data:', formData)
    // In real app, this would send to API
    setShowSuccess(true)
    
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-skyup-light py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-skyup-dark mb-2">Buat Event Baru</h1>
          <p className="text-skyup-secondary">
            Isi formulir di bawah ini untuk mempublikasikan event ke berbagai kanal
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 bg-green-50 border-2 border-green-500 rounded-xl p-6 flex items-center space-x-4">
            <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-green-900 mb-1">Event Berhasil Dipublikasikan! 🎉</h3>
              <p className="text-sm text-green-700">
                Event Anda telah aktif dan tersedia di Google Events, portal kampus, dan feed komunitas.
                Mengalihkan ke dashboard...
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="card">
          <EventForm onSubmit={handleSubmit} />
        </div>

        {/* Info Boxes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-skyup-teal rounded-xl p-4">
            <h4 className="font-bold text-skyup-teal mb-2">✓ Google Events</h4>
            <p className="text-xs text-skyup-secondary">
              Otomatis terindeks dengan schema.org markup
            </p>
          </div>
          <div className="bg-white border-2 border-skyup-blue rounded-xl p-4">
            <h4 className="font-bold text-skyup-blue mb-2">✓ Portal Kampus</h4>
            <p className="text-xs text-skyup-secondary">
              Widget embed siap digunakan di website kampus
            </p>
          </div>
          <div className="bg-white border-2 border-skyup-navy rounded-xl p-4">
            <h4 className="font-bold text-skyup-navy mb-2">✓ Community Feed</h4>
            <p className="text-xs text-skyup-secondary">
              Dibagikan ke berbagai komunitas mahasiswa
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

