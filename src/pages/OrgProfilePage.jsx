import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import OrgProfileForm from '../components/OrgProfileForm'
import { ArrowLeft, CheckCircle2, Eye, Crown } from 'lucide-react'
import orgsData from '../data/orgs.json'

export default function OrgProfilePage() {
  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedOrg, setSelectedOrg] = useState(null)

  // For demo, we'll use existing org data
  const existingOrg = orgsData[0]

  const handleSubmit = (formData) => {
    console.log('Organization data:', formData)
    setShowSuccess(true)
    
    setTimeout(() => {
      navigate('/dashboard/org-events')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-skyup-light py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Profil Organisasi
              </h1>
              <p className="text-skyup-secondary">
                Buat dan kelola microsite organisasi Anda
              </p>
            </div>
            <Link
              to={`/o/${existingOrg.slug}`}
              className="btn-secondary hidden md:inline-flex items-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>Preview Microsite</span>
            </Link>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 bg-green-50 border-2 border-green-500 rounded-xl p-6 flex items-center space-x-4">
            <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-green-900 mb-1">Profil Berhasil Disimpan! 🎉</h3>
              <p className="text-sm text-green-700">
                Microsite organisasi Anda sudah aktif dan dapat diakses. Mengalihkan ke halaman event...
              </p>
            </div>
          </div>
        )}

        {/* Pro Upgrade Banner */}
        <div className="mb-8 bg-gradient-to-r from-skyup-navy to-skyup-blue rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Crown className="w-8 h-8 text-skyup-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Upgrade ke Sky-Up Pro</h3>
                <p className="text-skyup-light text-sm">
                  Dapatkan custom domain, slot sponsor, analitik mendalam, dan fitur premium lainnya
                </p>
              </div>
            </div>
            <button className="bg-skyup-orange hover:bg-skyup-red text-white font-bold py-3 px-8 rounded-2xl transition-colors whitespace-nowrap">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Form */}
        <OrgProfileForm 
          onSubmit={handleSubmit}
          initialData={existingOrg}
        />

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-skyup-teal rounded-xl p-6">
            <h4 className="font-bold text-skyup-teal mb-2 text-lg">✓ Microsite Otomatis</h4>
            <p className="text-sm text-skyup-secondary">
              Website profesional terbentuk otomatis dengan URL: skyup-synergy.id/o/[nama-org]
            </p>
          </div>
          <div className="bg-white border-2 border-skyup-blue rounded-xl p-6">
            <h4 className="font-bold text-skyup-blue mb-2 text-lg">✓ Katalog Event</h4>
            <p className="text-sm text-skyup-secondary">
              Semua event organisasi Anda tampil dalam katalog yang menarik dan mudah ditemukan
            </p>
          </div>
          <div className="bg-white border-2 border-skyup-navy rounded-xl p-6">
            <h4 className="font-bold text-skyup-navy mb-2 text-lg">✓ Tema Kustom</h4>
            <p className="text-sm text-skyup-secondary">
              Sesuaikan warna, font, dan tampilan microsite dengan identitas organisasi Anda
            </p>
          </div>
        </div>

        {/* Example Organizations */}
        <div className="mt-12 card">
          <h3 className="text-2xl font-bold text-skyup-dark mb-6">
            Contoh Microsite Organisasi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orgsData.map((org) => (
              <Link
                key={org.id}
                to={`/o/${org.slug}`}
                className="border-2 border-gray-200 rounded-xl p-4 hover:border-skyup-teal hover:shadow-lg transition-all group"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-skyup-dark group-hover:text-skyup-teal transition-colors">
                      {org.name}
                    </h4>
                    <p className="text-xs text-skyup-secondary">{org.university}</p>
                  </div>
                  {org.isPro && (
                    <Crown className="w-5 h-5 text-skyup-orange" />
                  )}
                </div>
                <p className="text-sm text-skyup-secondary line-clamp-2 mb-3">
                  {org.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-skyup-secondary">
                    {org.stats.totalEvents} event
                  </span>
                  <span className="text-skyup-teal font-semibold group-hover:underline">
                    Lihat Microsite →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

