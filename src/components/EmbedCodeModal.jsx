import { X, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function EmbedCodeModal({ onClose }) {
  const [copied, setCopied] = useState(false)

  const embedCode = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Feed - Sky-Up Synergy</title>
  <script src="https://cdn.skyup-synergy.id/widget.js"></script>
</head>
<body>
  <!-- Sky-Up Event Feed Widget -->
  <div id="skyup-feed" 
       data-org="bem-ui" 
       data-limit="6"
       data-category="all"
       data-theme="light">
  </div>
  
  <script>
    SkyUpWidget.init('#skyup-feed', {
      primaryColor: '#178A9E',
      showFilters: true,
      showSearch: true
    });
  </script>
</body>
</html>`

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-skyup-dark">Kode Embed Widget</h2>
            <p className="text-sm text-skyup-secondary mt-1">
              Salin kode lengkap untuk ditambahkan ke website kampus
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-skyup-light rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-skyup-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Code Block */}
          <div className="relative">
            <pre className="bg-skyup-dark text-skyup-light p-6 rounded-lg text-sm overflow-x-auto">
              {embedCode}
            </pre>
            <button
              onClick={handleCopy}
              className={`absolute top-4 right-4 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-skyup-teal text-white hover:bg-skyup-blue'
              }`}
            >
              {copied ? (
                <span className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Tersalin!</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <Copy className="w-4 h-4" />
                  <span>Salin Kode</span>
                </span>
              )}
            </button>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <h3 className="font-bold text-skyup-dark">Cara Penggunaan:</h3>
            <ol className="list-decimal list-inside space-y-2 text-skyup-secondary">
              <li>Salin kode di atas dengan menekan tombol "Salin Kode"</li>
              <li>Buka halaman website kampus yang ingin menampilkan event feed</li>
              <li>Tempelkan kode pada bagian HTML halaman tersebut</li>
              <li>Widget akan otomatis menampilkan event terbaru dari organisasi Anda</li>
            </ol>
          </div>

          {/* Customization */}
          <div className="bg-skyup-light p-4 rounded-lg">
            <h4 className="font-semibold text-skyup-dark mb-2">Kustomisasi Widget</h4>
            <ul className="text-sm text-skyup-secondary space-y-1">
              <li>• <code className="bg-white px-2 py-1 rounded">data-org</code> - ID organisasi</li>
              <li>• <code className="bg-white px-2 py-1 rounded">data-limit</code> - Jumlah event yang ditampilkan</li>
              <li>• <code className="bg-white px-2 py-1 rounded">data-category</code> - Filter kategori (all/seminar/workshop/kompetisi)</li>
              <li>• <code className="bg-white px-2 py-1 rounded">data-theme</code> - Tema widget (light/dark)</li>
              <li>• <code className="bg-white px-2 py-1 rounded">primaryColor</code> - Warna utama widget</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
          <button onClick={onClose} className="btn-secondary">
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}

