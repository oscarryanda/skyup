# Sky-Up Synergy

Platform terpadu untuk publikasi event kampus dan pembuatan website organisasi. Satu kali publikasi, tersebar di berbagai kanal.

## 🎨 Fitur Utama

### 1. Lineup System
Sistem publikasi multi-kanal yang memungkinkan event Anda tersebar otomatis ke:
- **Google Events** - Terindeks dengan schema.org markup yang valid
- **Portal Kampus** - Widget embed untuk website universitas
- **Community Feed** - Jangkau komunitas mahasiswa lebih luas

### 2. Organization Website Maker
Pembuat microsite otomatis untuk organisasi kampus dengan fitur:
- **Microsite Profesional** - URL khusus untuk setiap organisasi
- **Katalog Event** - Tampilkan semua event organisasi
- **Tema Kustom** - Sesuaikan warna dan font
- **Sponsor Slot** - Tampilkan sponsor (fitur Pro)
- **Analitik** - Monitor performa microsite (fitur Pro)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Instalasi

1. Clone repository ini
```bash
git clone https://github.com/yourusername/skyup-synergy.git
cd skyup-synergy
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## 📁 Struktur Folder

```
skyup/
├── src/
│   ├── components/          # Komponen reusable
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── EventCard.jsx
│   │   ├── EventForm.jsx
│   │   ├── IntegrationPanel.jsx
│   │   ├── EmbedCodeModal.jsx
│   │   ├── FeedWidget.jsx
│   │   └── OrgProfileForm.jsx
│   ├── pages/               # Halaman aplikasi
│   │   ├── HomePage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── CreateEventPage.jsx
│   │   ├── EventDetailPage.jsx
│   │   ├── IntegrationPage.jsx
│   │   ├── CampusPortalPage.jsx
│   │   ├── OrgProfilePage.jsx
│   │   ├── OrgEventsPage.jsx
│   │   └── MicrositePage.jsx
│   ├── data/                # Data dummy
│   │   ├── events.json
│   │   └── orgs.json
│   ├── lib/                 # Utility functions
│   │   └── utils.js
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
│   └── logo.png             # Sky-Up Synergy logo
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Branding & Design

### Logo
Logo Sky-Up Synergy terletak di `public/logo.png` dan digunakan di:
- Navbar (kiri atas)
- Footer
- Portal kampus header
- Microsite "Powered by" badge
- Browser favicon

### Color Palette
Palet warna Sky-Up Synergy yang digunakan secara konsisten:

- **Teal** (primer): `#178A9E` - CTA dan elemen penting
- **Blue** (sekunder): `#0A64A4` - Navigasi dan heading
- **Navy** (aksen): `#002D9C` - Aksen dan detail
- **Orange** (energi): `#F97902` - Highlight dan active state
- **Red** (aksi): `#F61B1B` - Badge penting
- **Dark Gray** (teks): `#3E3E3E` - Teks utama
- **Light Gray**: `#F7F9FB` - Background netral
- **White**: `#FFFFFF` - Background utama

## 🧩 Komponen Utama

### Lineup System

#### EventForm
Form multi-step untuk membuat event dengan validasi:
- Step 1: Informasi dasar (judul, tanggal, lokasi)
- Step 2: Detail event (deskripsi, kapasitas, harga)
- Step 3: Integrasi multi-kanal

#### IntegrationPanel
Panel pengaturan integrasi dengan tab:
- Google Events (schema.org markup)
- Portal Kampus (embed code generator)
- Community Feed

#### FeedWidget
Widget yang dapat di-embed ke website kampus dengan fitur:
- Filter kategori dan tanggal
- Search event
- Responsive design

### Organization Website Maker

#### OrgProfileForm
Form pengaturan profil organisasi:
- Informasi dasar (nama, universitas, deskripsi)
- Pengaturan tema (warna, font)
- Media sosial

#### MicrositePage
Halaman microsite publik untuk organisasi dengan:
- Hero banner dengan logo
- About section dengan statistik
- Katalog event dengan filter
- Sponsor slot (Pro)
- Analitik (Pro)

## 📊 Data Structure

### Event Object
```json
{
  "id": "evt-001",
  "title": "Event Title",
  "category": "Seminar|Workshop|Kompetisi|Bootcamp",
  "date": "2025-11-15",
  "time": "09:00 - 16:00 WIB",
  "location": "Event Location",
  "university": "University Name",
  "organizer": "Organizer Name",
  "organizerId": "org-slug",
  "description": "Event description",
  "capacity": 500,
  "registered": 342,
  "price": 0,
  "poster": "URL",
  "integrations": {
    "googleEvents": true,
    "campusPortal": true,
    "communityFeed": false
  }
}
```

### Organization Object
```json
{
  "id": "org-id",
  "name": "Organization Name",
  "slug": "org-slug",
  "university": "University Name",
  "description": "Description",
  "tagline": "Tagline",
  "theme": {
    "primaryColor": "#178A9E",
    "secondaryColor": "#0A64A4",
    "accentColor": "#002D9C",
    "fontFamily": "Inter"
  },
  "isPro": false,
  "sponsors": []
}
```

## 🔗 Routes

- `/` - Homepage
- `/dashboard` - Dashboard organizer
- `/dashboard/create-event` - Form buat event
- `/dashboard/integrations` - Pengaturan integrasi
- `/dashboard/org-profile` - Profil organisasi
- `/dashboard/org-events` - Daftar event organisasi
- `/event/:id` - Detail event
- `/portal/kampus` - Simulasi portal kampus
- `/o/:slug` - Microsite organisasi

## 🎯 Acceptance Criteria

### Lineup System
✅ Event terpublikasi otomatis tampil di widget kampus  
✅ JSON-LD schema.org valid di halaman event  
✅ Widget menampilkan filter dan tombol CTA aktif  
✅ UI konsisten dengan palet warna Sky-Up  
✅ Responsif dan mudah dibaca di mobile  

### Organization Website Maker
✅ Microsite terbentuk otomatis setelah profil diisi  
✅ Warna dan tema sesuai pilihan organisasi  
✅ Sponsor tampil jika Pro aktif  
✅ Katalog event responsif dengan CTA ke halaman event utama  

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **State Management**: Zustand (untuk state lokal)
- **Font**: Inter, Plus Jakarta Sans

## 📝 Development Notes

### Menambah Event Baru
Edit file `src/data/events.json` dan tambahkan objek event baru dengan struktur yang sama.

### Menambah Organisasi
Edit file `src/data/orgs.json` dan tambahkan objek organisasi baru.

### Customize Warna
Edit `tailwind.config.js` di bagian `theme.extend.colors` untuk mengubah palet warna.

## 🚀 Build & Deploy

### Build untuk production
```bash
npm run build
```

Hasil build akan tersedia di folder `dist/`

### Preview build
```bash
npm run preview
```

## 📄 License

© 2025 Sky-Up Synergy. All rights reserved.

## 🤝 Contributing

Untuk business case presentation, mockup ini siap digunakan untuk demo fitur Lineup System dan Organization Website Maker.

## 💡 Tips

1. Semua data bersifat mock/dummy untuk keperluan demo
2. Integrasi API sesungguhnya perlu diimplementasikan untuk production
3. Form validation sudah ada di level HTML, tambahkan validasi lebih kompleks sesuai kebutuhan
4. Responsive design sudah diimplementasikan dengan Tailwind breakpoints
5. Schema.org markup sudah valid dan siap untuk SEO

## 📞 Contact

Untuk pertanyaan dan demo lebih lanjut, hubungi tim Sky-Up Synergy.

