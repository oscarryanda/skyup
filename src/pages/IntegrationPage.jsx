import IntegrationPanel from '../components/IntegrationPanel'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function IntegrationPage() {
  return (
    <div className="min-h-screen bg-skyup-light py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center space-x-2 text-skyup-teal hover:text-skyup-blue font-semibold mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Dashboard</span>
          </Link>
          <h1 className="text-4xl font-bold text-skyup-dark mb-2">
            Pengaturan Integrasi
          </h1>
          <p className="text-skyup-secondary">
            Kelola integrasi multi-kanal untuk event Anda
          </p>
        </div>

        {/* Integration Panel */}
        <IntegrationPanel />

        {/* Info Section */}
        <div className="mt-8 bg-white rounded-xl border-2 border-skyup-teal/20 p-6">
          <h3 className="font-bold text-skyup-dark mb-4">💡 Tips Integrasi</h3>
          <ul className="space-y-3 text-sm text-skyup-secondary">
            <li className="flex items-start">
              <span className="text-skyup-teal mr-2">•</span>
              <span>
                <strong className="text-skyup-dark">Google Events:</strong> Pastikan semua field event terisi lengkap untuk hasil optimal di Google Search.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-skyup-teal mr-2">•</span>
              <span>
                <strong className="text-skyup-dark">Portal Kampus:</strong> Koordinasikan dengan admin website kampus untuk memasang kode embed widget.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-skyup-teal mr-2">•</span>
              <span>
                <strong className="text-skyup-dark">Community Feed:</strong> Aktifkan untuk jangkauan maksimal ke komunitas mahasiswa dan grup Telegram/WhatsApp.
              </span>
            </li>
          </ul>
        </div>

        {/* Preview Link */}
        <div className="mt-8 text-center">
          <Link
            to="/portal/kampus"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Lihat Preview Portal Kampus</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

