import { useState } from 'react'
import { CheckCircle2, Copy, Code, Globe, Network } from 'lucide-react'
import EmbedCodeModal from './EmbedCodeModal'

export default function IntegrationPanel({ eventId = 'evt-001' }) {
  const [activeTab, setActiveTab] = useState('google')
  const [showEmbedModal, setShowEmbedModal] = useState(false)

  const integrations = [
    {
      id: 'google',
      name: 'Google Events',
      icon: Globe,
      status: 'active',
      description: 'Event Anda otomatis terindeks di Google Search dan Google Maps',
      color: 'text-skyup-teal'
    },
    {
      id: 'campus',
      name: 'Portal Kampus',
      icon: Network,
      status: 'active',
      description: 'Generate kode embed untuk ditampilkan di website kampus',
      color: 'text-skyup-blue'
    },
    {
      id: 'community',
      name: 'Community Feed',
      icon: Code,
      status: 'available',
      description: 'Bagikan event ke komunitas dan grup mahasiswa',
      color: 'text-skyup-navy'
    }
  ]

  const activeIntegration = integrations.find(i => i.id === activeTab)

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-skyup-dark mb-6">Integrasi Multi-Kanal</h2>
      
      {/* Tabs */}
      <div className="flex space-x-2 mb-6 border-b border-gray-200">
        {integrations.map((integration) => (
          <button
            key={integration.id}
            onClick={() => setActiveTab(integration.id)}
            className={`px-4 py-3 font-medium transition-colors border-b-2 ${
              activeTab === integration.id
                ? 'border-skyup-teal text-skyup-teal'
                : 'border-transparent text-skyup-secondary hover:text-skyup-dark'
            }`}
          >
            <div className="flex items-center space-x-2">
              <integration.icon className="w-5 h-5" />
              <span>{integration.name}</span>
              {integration.status === 'active' && (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`text-xl font-bold ${activeIntegration.color} mb-2`}>
              {activeIntegration.name}
            </h3>
            <p className="text-skyup-secondary">{activeIntegration.description}</p>
          </div>
          <div>
            {activeIntegration.status === 'active' ? (
              <span className="badge-active">✓ Aktif</span>
            ) : (
              <span className="badge-neutral">Tersedia</span>
            )}
          </div>
        </div>

        {/* Google Events Content */}
        {activeTab === 'google' && (
          <div className="bg-skyup-light p-6 rounded-lg space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-skyup-dark mb-2">Schema.org Markup Aktif</h4>
                <p className="text-sm text-skyup-secondary">
                  Event Anda menggunakan structured data JSON-LD yang sesuai dengan standar schema.org/Event. 
                  Google dapat mengindeks dan menampilkan event ini di hasil pencarian.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-skyup-dark mb-2">Rich Results Ready</h4>
                <p className="text-sm text-skyup-secondary">
                  Event Anda siap tampil dengan format rich results di Google Search dengan informasi tanggal, lokasi, dan harga.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Campus Portal Content */}
        {activeTab === 'campus' && (
          <div className="space-y-4">
            <div className="bg-skyup-light p-6 rounded-lg">
              <h4 className="font-semibold text-skyup-dark mb-3">Kode Embed Widget</h4>
              <p className="text-sm text-skyup-secondary mb-4">
                Salin kode di bawah ini dan tempelkan di website kampus untuk menampilkan event feed secara otomatis.
              </p>
              <div className="relative">
                <pre className="bg-skyup-dark text-skyup-light p-4 rounded-lg text-xs overflow-x-auto">
{`<script src="https://cdn.skyup-synergy.id/widget.js"></script>
<div id="skyup-feed" data-org="bem-ui" data-limit="6"></div>
<script>SkyUpWidget.init('#skyup-feed');</script>`}
                </pre>
              </div>
            </div>
            <button
              onClick={() => setShowEmbedModal(true)}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Code className="w-5 h-5" />
              <span>Lihat Kode Lengkap & Demo</span>
            </button>
          </div>
        )}

        {/* Community Feed Content */}
        {activeTab === 'community' && (
          <div className="bg-skyup-light p-6 rounded-lg space-y-4">
            <p className="text-sm text-skyup-secondary">
              Fitur ini memungkinkan event Anda dibagikan otomatis ke berbagai komunitas mahasiswa dan grup Telegram/WhatsApp yang terdaftar.
            </p>
            <button className="btn-primary">
              Aktifkan Community Feed
            </button>
          </div>
        )}
      </div>

      {showEmbedModal && (
        <EmbedCodeModal onClose={() => setShowEmbedModal(false)} />
      )}
    </div>
  )
}

