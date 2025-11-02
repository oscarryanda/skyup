import { useState } from 'react'
import { Building2, Palette, Globe, Mail, Instagram, Twitter } from 'lucide-react'

export default function OrgProfileForm({ onSubmit, initialData = null }) {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    fullName: '',
    university: '',
    description: '',
    tagline: '',
    logo: '',
    banner: '',
    theme: {
      primaryColor: '#178A9E',
      secondaryColor: '#0A64A4',
      accentColor: '#002D9C',
      fontFamily: 'Inter',
    },
    social: {
      instagram: '',
      twitter: '',
      email: '',
      website: '',
    },
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  const universities = [
    'Universitas Indonesia',
    'Institut Teknologi Bandung',
    'Universitas Gadjah Mada',
    'Universitas Diponegoro',
    'Universitas Brawijaya',
    'Universitas Bina Nusantara',
  ]

  const fontOptions = ['Inter', 'Plus Jakarta Sans', 'Poppins', 'Roboto']

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Info */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <Building2 className="w-6 h-6 text-skyup-teal" />
          <h2 className="text-2xl font-bold text-skyup-dark">Informasi Organisasi</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Nama Singkat *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Contoh: BEM UI"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Nama Lengkap *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Contoh: Badan Eksekutif Mahasiswa UI"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              Universitas *
            </label>
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
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

          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              Tagline *
            </label>
            <input
              type="text"
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              required
              placeholder="Contoh: Bergerak Bersama, Membangun Indonesia"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              Deskripsi *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Ceritakan tentang organisasi Anda..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                URL Logo
              </label>
              <input
                type="url"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                placeholder="https://example.com/logo.png"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                URL Banner
              </label>
              <input
                type="url"
                name="banner"
                value={formData.banner}
                onChange={handleChange}
                placeholder="https://example.com/banner.jpg"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Theme Settings */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <Palette className="w-6 h-6 text-skyup-blue" />
          <h2 className="text-2xl font-bold text-skyup-dark">Pengaturan Tema</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Warna Primer
              </label>
              <div className="flex space-x-2">
                <input
                  type="color"
                  name="theme.primaryColor"
                  value={formData.theme.primaryColor}
                  onChange={handleChange}
                  className="w-16 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  name="theme.primaryColor"
                  value={formData.theme.primaryColor}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Warna Sekunder
              </label>
              <div className="flex space-x-2">
                <input
                  type="color"
                  name="theme.secondaryColor"
                  value={formData.theme.secondaryColor}
                  onChange={handleChange}
                  className="w-16 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  name="theme.secondaryColor"
                  value={formData.theme.secondaryColor}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                Warna Aksen
              </label>
              <div className="flex space-x-2">
                <input
                  type="color"
                  name="theme.accentColor"
                  value={formData.theme.accentColor}
                  onChange={handleChange}
                  className="w-16 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  name="theme.accentColor"
                  value={formData.theme.accentColor}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-skyup-dark mb-2">
              Font Family
            </label>
            <select
              name="theme.fontFamily"
              value={formData.theme.fontFamily}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
            >
              {fontOptions.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <Globe className="w-6 h-6 text-skyup-navy" />
          <h2 className="text-2xl font-bold text-skyup-dark">Media Sosial</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                <Instagram className="w-4 h-4 inline mr-2" />
                Instagram
              </label>
              <input
                type="text"
                name="social.instagram"
                value={formData.social.instagram}
                onChange={handleChange}
                placeholder="@namaakunanda"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                <Twitter className="w-4 h-4 inline mr-2" />
                Twitter
              </label>
              <input
                type="text"
                name="social.twitter"
                value={formData.social.twitter}
                onChange={handleChange}
                placeholder="@namaakunanda"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email
              </label>
              <input
                type="email"
                name="social.email"
                value={formData.social.email}
                onChange={handleChange}
                placeholder="contact@organisasi.ac.id"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-skyup-dark mb-2">
                <Globe className="w-4 h-4 inline mr-2" />
                Website
              </label>
              <input
                type="url"
                name="social.website"
                value={formData.social.website}
                onChange={handleChange}
                placeholder="https://organisasi.ac.id"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-skyup-teal focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end space-x-4">
        <button type="button" className="btn-secondary">
          Batal
        </button>
        <button type="submit" className="btn-primary">
          Simpan Profil
        </button>
      </div>
    </form>
  )
}

