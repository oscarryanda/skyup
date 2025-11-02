# Quick Start Guide - Sky-Up Synergy

## 🚀 Menjalankan Proyek dalam 3 Langkah

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Jalankan Development Server
```bash
npm run dev
```

### 3️⃣ Buka Browser
Akses `http://localhost:5173`

---

## 🎯 Demo Features

### Feature 1: Lineup System (Multi-Channel Publication)

**Step-by-step demo:**

1. **Buat Event**
   - Klik "Buat Event" di navbar
   - Atau akses `/dashboard/create-event`
   - Isi form 3 langkah: Info Dasar → Detail → Integrasi
   - Aktifkan "Integrasi Multi-Kanal"
   - Submit untuk publikasi

2. **Lihat Event Detail**
   - Event otomatis dapat diakses di `/event/[id]`
   - Schema.org JSON-LD sudah terintegrasi (buka DevTools → Elements → cari `<script type="application/ld+json">`)
   - Badge "Terindeks Google Events" muncul

3. **Kelola Integrasi**
   - Akses `/dashboard/integrations`
   - Lihat status Google Events (✓ Aktif)
   - Tab Portal Kampus: Salin kode embed widget
   - Preview integrasi

4. **Simulasi Portal Kampus**
   - Akses `/portal/kampus`
   - Lihat widget event feed yang dapat di-embed
   - Filter berdasarkan kategori dan tanggal
   - Semua event dengan `campusPortal: true` muncul di sini

---

### Feature 2: Organization Website Maker

**Step-by-step demo:**

1. **Setup Profil Organisasi**
   - Akses `/dashboard/org-profile`
   - Isi informasi organisasi
   - Pilih warna tema (primary, secondary, accent)
   - Pilih font family
   - Tambahkan social media
   - Save profil

2. **Kelola Event Organisasi**
   - Akses `/dashboard/org-events`
   - Lihat daftar event organisasi
   - Toggle "Visible/Hidden" untuk mengatur tampil/tidaknya event di microsite
   - Monitor statistik: total event, peserta, fill rate

3. **Lihat Microsite Publik**
   - Akses `/o/[slug]` (contoh: `/o/bem-ui`)
   - Lihat hero banner dengan logo organisasi
   - About section dengan statistik
   - Katalog event dengan filter kategori
   - Sponsor section (untuk akun Pro)
   - Analitik dashboard (untuk akun Pro)

---

## 📍 URL & Routes Penting

### Public Pages
- `/` - Homepage dengan fitur overview
- `/event/:id` - Detail event dengan schema.org markup
- `/portal/kampus` - Simulasi portal kampus dengan widget
- `/o/:slug` - Microsite organisasi (contoh: `/o/bem-ui`, `/o/ukm-musik-ugm`)

### Dashboard Pages
- `/dashboard` - Dashboard utama organizer
- `/dashboard/create-event` - Form buat event baru
- `/dashboard/integrations` - Pengaturan integrasi multi-kanal
- `/dashboard/org-profile` - Edit profil organisasi
- `/dashboard/org-events` - Daftar & kelola event organisasi

---

## 🎨 Contoh Microsite

Buka URL berikut untuk melihat microsite dengan konfigurasi berbeda:

1. **BEM UI** - `/o/bem-ui`
   - Tema: Teal & Blue
   - Standard account (non-Pro)
   - 12 total events

2. **HIMTI BINUS** - `/o/himti-binus`
   - Tema: Orange & Gray
   - Standard account
   - 8 total events

3. **UKM Musik UGM** - `/o/ukm-musik-ugm` ⭐ **PRO ACCOUNT**
   - Tema: Navy & Red
   - Pro features aktif:
     - Sponsor slot (Yamaha, Tokopedia)
     - Analytics dashboard
     - Custom domain ready
   - 25 total events

---

## 🧪 Testing Points

### Lineup System
✅ Event form validation (3-step process)  
✅ Schema.org markup di event detail page  
✅ Widget campus portal dengan filter  
✅ Integration panel dengan tabs  
✅ Embed code modal dengan copy button  

### Organization Website Maker
✅ Organization profile form (basic info, theme, social)  
✅ Event management dengan visibility toggle  
✅ Microsite dengan custom theme colors  
✅ Sponsor section (Pro only)  
✅ Analytics dashboard (Pro only)  
✅ Responsive design di semua pages  

---

## 💡 Tips untuk Presentasi

1. **Start dengan Homepage** untuk overview fitur
2. **Demo Lineup System:**
   - Create event → Show integration panel → Visit campus portal
3. **Demo Website Maker:**
   - Show org profile → Show event management → Visit microsite
4. **Highlight differentiator:**
   - Schema.org markup untuk SEO
   - Embed widget untuk portal kampus
   - Custom theme per organisasi
   - Pro features (sponsor, analytics)

---

## 🎯 Business Value Points

### Untuk Organisasi Kampus:
- ✅ Publikasi 1x, tersebar multi-kanal
- ✅ SEO-ready dengan Google Events
- ✅ Microsite profesional tanpa coding
- ✅ Analitik untuk monitor performa

### Untuk Universitas:
- ✅ Widget embed untuk portal kampus
- ✅ Centralized event management
- ✅ Konsisten branding antar organisasi

### Untuk Mahasiswa:
- ✅ Mudah temukan event di Google
- ✅ One-stop platform untuk semua event kampus
- ✅ Filter & search yang powerful

---

## 📊 Data Dummy

Project ini menggunakan data dummy di:
- `src/data/events.json` - 8 event sample
- `src/data/orgs.json` - 3 organisasi sample

Untuk menambah data, edit file JSON tersebut dengan struktur yang sama.

---

## 🐛 Troubleshooting

**Port sudah digunakan?**
```bash
# Edit vite.config.js dan tambahkan:
server: {
  port: 3000 // atau port lain
}
```

**Module not found?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styling tidak muncul?**
- Pastikan Tailwind config sudah benar
- Restart dev server dengan `npm run dev`

---

## 📞 Support

Untuk pertanyaan lebih lanjut, hubungi tim Sky-Up Synergy.

**Happy Presenting! 🚀**

