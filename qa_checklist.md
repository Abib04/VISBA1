# QA Checklist: Executive Strategic Leadership (Landing Page)

**Jenis Website**: Mobile-First Landing Page (Single Page Application)
**URL**: http://localhost:3000

## 🎯 Fokus Pengujian
1. **Penyesuaian Layout**: Pengecekan grid sistem pada 4 pilar, pricing card, dan gallery.
2. **Navigasi**: Hamburger menu pada mobile dan sticky navigation.
3. **Media**: Ukuran logo, gambar hero, dan ikon-ikon.
4. **Interaksi**: Tombol CTA (Call to Action) dan redirection.
5. **Performa**: Loading time awal dan kelancaran scroll.

---

## 📱 Skenario Resolusi Layar

### 1. Mobile (360px - 414px)
*Target Device: iPhone SE, Samsung S20, iPhone 12/13*
- [ ] **Hero Section**: Apakah text "AI Tidak Akan Menggantikan Anda" terbaca jelas tanpa terpotong?
- [ ] **Hero Height**: Apakah background menutupi 100% layar (tidak ada whitespace putih di bawah)?
- [ ] **Navigation**: Apakah logo terlihat proporsional? Apakah menu berubah menjadi hamburger?
- [ ] **Hamburger Menu**: Saat diklik, apakah menu terbuka dengan lancar? Apakah link bisa diklik?
- [ ] **Pricing Card**: Apakah kartu harga tampil vertikal (ditumpuk ke bawah)?
- [ ] **Spacing**: Apakah jarak antar section (margin/padding) tidak terlalu lebar/sempit?

### 2. Tablet / Landscape Mobile (768px - 820px)
*Target Device: iPad Mini, Tablet Android*
- [ ] **Four Pillars**: Apakah layout berubah menjadi Grid 2x2 atau tetap 1 kolom yang rapi?
- [ ] **Font Size**: Apakah ukuran judul section (`h2`) tidak terlalu besar?
- [ ] **Padding**: Apakah container memiliki margin kiri-kanan yang cukup (tidak mepet layar)?

### 3. Laptop / Desktop Kecil (1024px - 1366px)
- [ ] **Navigation**: Apakah menu hamburger hilang dan berubah menjadi link navbar biasa?
- [ ] **Hero Section**: Apakah gambar dan konten layoutnya seimbang (kiri-kanan atau centered)?
- [ ] **Cards**: Apakah "Pain Points" cards berjejer rapi horisontal (3 atau 4 kolom)?

### 4. Large Desktop / Monitor Wide (1920px +)
- [ ] **Container Max-Width**: Apakah konten tetap di tengah (tidak melebar sampai ujung layar)?
- [ ] **Background Image**: Apakah gambar background Hero tidak pecah/blur?

---

### ✅ Checklist QA Responsif (Siap Pakai)

### [x] Visual Check (Tampilan)
- [x] Apakah konten menyesuaikan layar tanpa **horizontal scrollbar**? (Verified via CSS)
- [x] Apakah teks mudah dibaca dan kontras warna cukup (terutama teks putih di background navy)? (Verified via CSS variables)
- [x] Apakah gambar (logo, ilustrasi roket, foto) ter-resize proporsional dan tidak gepeng? (Verified `object-fit: cover/contain`)
- [x] Apakah consisteny padding/margin terjaga antar section? (Verified mobile padding adjustments)

### [x] Navigasi & Interaksi
- [x] **(Mobile)** Apakah hamburger menu berfungsi (Buka/Tutup)? (Verified logic in `Navigation.tsx`)
- [x] **(Mobile)** Apakah tombol CTA "Daftar Sekarang" mudah dijangkau jari (thumb zone)? (Full width on mobile)
- [x] Apakah link CTA "Lihat Detail Program" scroll ke Section Solusi dengan mulus? (Verified via code)
- [x] Apakah link CTA "Pelajari 4 Pilar" scroll ke Section Four Pillars dengan mulus? (Verified via code)
- [x] Apakah Sticky Navbar muncul saat scroll ke bawah dan tidak menghalangi konten? (Verified `position: fixed`)

### [ ] Fungsionalitas
- [ ] Apakah formulir (jika ada) input field-nya tidak zoom-in otomatis di iPhone (font-size >= 16px)?
- [ ] Apakah Accordion (FAQ/Materi) bisa dibuka tutup dengan mudah di layar sentuh?
- [ ] Apakah Footer Copyright berada di paling bawah dan tertata rapi?

### [ ] Performa & Media
- [ ] Apakah gambar dimuat dengan teknik `lazy-load` (tidak bikin lag saat scroll)?
- [ ] Apakah animasi (framer-motion) berjalan mulus di HP mid-range, atau bikin patah-patah?
