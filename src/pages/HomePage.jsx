import { Link } from 'react-router-dom'
import { Calendar, Users, Globe, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'
import EventCard from '../components/EventCard'
import eventsData from '../data/events.json'

export default function HomePage() {
  const featuredEvents = eventsData.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-skyup-teal via-skyup-blue to-skyup-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Publikasi Event Kampus<br />
                <span className="text-skyup-light">Sekali Klik, Multi-Kanal</span>
              </h1>
              <p className="text-xl text-skyup-light mb-8">
                Platform terpadu untuk publikasi event dan pembuatan website organisasi kampus. 
                Satu kali publikasi, tersebar di Google Events, portal kampus, dan komunitas.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/dashboard/create-event" className="bg-white text-skyup-teal hover:bg-skyup-light font-semibold py-4 px-8 rounded-2xl transition-colors inline-flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Buat Event Sekarang</span>
                </Link>
                <Link to="/portal/kampus" className="bg-transparent border-2 border-white hover:bg-white hover:text-skyup-teal text-white font-semibold py-4 px-8 rounded-2xl transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Lihat Portal Kampus</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-skyup-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lineup System</h3>
                      <p className="text-skyup-light text-sm">Publikasi multi-kanal otomatis ke Google Events dan portal kampus</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-skyup-red rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Website Maker</h3>
                      <p className="text-skyup-light text-sm">Microsite profesional untuk organisasi dengan katalog event</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-skyup-navy rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Community Feed</h3>
                      <p className="text-skyup-light text-sm">Jangkau lebih banyak mahasiswa melalui komunitas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-skyup-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-skyup-dark mb-4">
              Kenapa Memilih Sky-Up Synergy?
            </h2>
            <p className="text-xl text-skyup-secondary max-w-2xl mx-auto">
              Solusi lengkap untuk mengelola dan mempromosikan event kampus Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-skyup-teal/10 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-skyup-teal" />
              </div>
              <h3 className="text-2xl font-bold text-skyup-dark mb-4">SEO Ready</h3>
              <p className="text-skyup-secondary">
                Event Anda otomatis terindeks Google dengan schema.org markup yang valid. 
                Muncul di hasil pencarian dengan rich results.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-skyup-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-skyup-blue" />
              </div>
              <h3 className="text-2xl font-bold text-skyup-dark mb-4">Multi-Kanal</h3>
              <p className="text-skyup-secondary">
                Publikasi sekali, tersebar di berbagai kanal: Google Events, portal kampus, 
                dan komunitas mahasiswa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-skyup-navy/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-skyup-navy" />
              </div>
              <h3 className="text-2xl font-bold text-skyup-dark mb-4">Microsite Otomatis</h3>
              <p className="text-skyup-secondary">
                Setiap organisasi mendapat website profesional dengan katalog event, 
                profil, dan sponsor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-skyup-dark mb-4">
                Event Terbaru
              </h2>
              <p className="text-xl text-skyup-secondary">
                Event populer dari berbagai universitas
              </p>
            </div>
            <Link to="/portal/kampus" className="btn-primary hidden md:inline-flex items-center space-x-2">
              <span>Lihat Semua</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/portal/kampus" className="btn-primary inline-flex items-center space-x-2">
              <span>Lihat Semua Event</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-skyup-teal to-skyup-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Membawa Event Anda ke Level Berikutnya?
          </h2>
          <p className="text-xl text-skyup-light mb-8">
            Bergabung dengan ratusan organisasi kampus yang sudah mempercayai Sky-Up Synergy
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/dashboard/create-event" className="bg-white text-skyup-teal hover:bg-skyup-light font-semibold py-4 px-8 rounded-2xl transition-colors inline-flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Buat Event Gratis</span>
            </Link>
            <Link to="/dashboard/org-profile" className="bg-transparent border-2 border-white hover:bg-white hover:text-skyup-teal text-white font-semibold py-4 px-8 rounded-2xl transition-colors inline-flex items-center justify-center">
              <span>Buat Website Organisasi</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

