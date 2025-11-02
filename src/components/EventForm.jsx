import { useState } from 'react'
import { Calendar, MapPin, Users, Image as ImageIcon, DollarSign, CheckCircle2 } from 'lucide-react'

export default function EventForm({ onSubmit, initialData = null }) {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    category: 'Seminar',
    date: '',
    time: '',
    location: '',
    university: '',
    organizer: '',
    description: '',
    capacity: 100,
    price: 0,
    poster: '',
    enableIntegrations: true,
  })

  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  const categories = ['Seminar', 'Workshop', 'Kompetisi', 'Bootcamp']
  const universities = [
    'Universitas Indonesia',
    'Institut Teknologi Bandung',
    'Universitas Gadjah Mada',
    'Universitas Diponegoro',
    'Universitas Brawijaya',
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= s
                  ? 'bg-skyup-teal text-white'
                  : 'bg-gray-200 text-skyup-secondary'
              }`}
            >
              {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  step > s ? 'bg-skyup-teal' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-skyup-dark">Informasi Dasar Event</h2>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              Judul Event *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              placeholder="Contoh: Workshop Web Development 2025"
            />
          </div>

          {/* Category & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Kategori *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Tanggal *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>
          </div>

          {/* Time & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Waktu *
              </label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                placeholder="09:00 - 16:00 WIB"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Universitas *
              </label>
              <select
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              >
                <option value="">Pilih Universitas</option>
                {universities.map((uni) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              Lokasi *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Contoh: Auditorium Universitas Indonesia, Depok"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
            />
          </div>

          {/* Organizer */}
          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              Penyelenggara *
            </label>
            <input
              type="text"
              name="organizer"
              value={formData.organizer}
              onChange={handleChange}
              required
              placeholder="Contoh: BEM UI"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="btn-primary w-full"
          >
            Lanjut ke Detail Event
          </button>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-skyup-dark">Detail & Deskripsi</h2>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              Deskripsi Event *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              placeholder="Jelaskan tentang event Anda..."
            />
          </div>

          {/* Capacity & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Kapasitas Peserta *
              </label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Harga Tiket (Rp) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
                placeholder="0 untuk gratis"
              />
            </div>
          </div>

          {/* Poster URL */}
          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              URL Poster Event
            </label>
            <input
              type="url"
              name="poster"
              value={formData.poster}
              onChange={handleChange}
              placeholder="https://example.com/poster.jpg"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-secondary flex-1"
            >
              Kembali
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="btn-primary flex-1"
            >
              Lanjut ke Integrasi
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Integration */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-skyup-dark">Integrasi Multi-Kanal</h2>

          {/* Integration Toggle */}
          <div className="bg-skyup-light p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <input
                type="checkbox"
                name="enableIntegrations"
                checked={formData.enableIntegrations}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-skyup-teal"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-skyup-dark mb-2">
                  Aktifkan Integrasi Multi-Kanal
                </h3>
                <p className="text-sm text-skyup-secondary mb-4">
                  Event Anda akan otomatis:
                </p>
                <ul className="space-y-2 text-sm text-skyup-secondary">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-skyup-teal" />
                    <span>Terindeks di Google Events dengan schema.org markup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-skyup-teal" />
                    <span>Tersedia dalam format embed untuk portal kampus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-skyup-teal" />
                    <span>Muncul di feed komunitas mahasiswa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-skyup-dark mb-4">Preview Event</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Judul:</strong> {formData.title || '(belum diisi)'}</p>
              <p><strong>Kategori:</strong> {formData.category}</p>
              <p><strong>Tanggal:</strong> {formData.date || '(belum diisi)'}</p>
              <p><strong>Lokasi:</strong> {formData.location || '(belum diisi)'}</p>
              <p><strong>Harga:</strong> {formData.price === 0 ? 'Gratis' : `Rp ${formData.price.toLocaleString('id-ID')}`}</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-secondary flex-1"
            >
              Kembali
            </button>
            <button
              type="submit"
              className="btn-primary flex-1"
            >
              Publikasikan Event
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

