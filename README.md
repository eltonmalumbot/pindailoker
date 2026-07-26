# PindaiLoker

PindaiLoker adalah platform untuk membantu pencari kerja Indonesia menemukan
lowongan, menyesuaikan resume agar lebih ramah ATS, dan memantau proses
lamaran melalui dashboard bergaya Kanban.

## Tujuan versi awal

- Menambahkan lowongan melalui tautan, teks, atau formulir manual
- Menampilkan lowongan dari sumber otomatis yang diizinkan
- Mengunggah dan menganalisis resume terhadap lowongan
- Memberikan saran perbaikan resume dengan AI
- Menyimpan perkembangan lamaran dalam dashboard Kanban
- Menjaga keamanan akun, resume, dan data pribadi pengguna

## Status

Tampilan awal sudah aktif di Vercel. Fondasi akun, database, aturan privasi,
dan penyimpanan resume Supabase sudah tersedia dalam kode dan menunggu
pengaturan environment variable oleh pemilik.

## Teknologi

- Next.js dan TypeScript
- Supabase untuk akun, database, dan penyimpanan dokumen
- Vercel untuk hosting
- GitHub untuk penyimpanan serta riwayat perubahan kode

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Tanpa Supabase, aplikasi berjalan dalam mode demo. Untuk mengaktifkan akun,
database, dan penyimpanan resume privat, ikuti
[`docs/SUPABASE_SETUP.md`](docs/SUPABASE_SETUP.md).

## Pemeriksaan sebelum rilis

```bash
npm run lint
npm run build
```

Jangan memasukkan password, service-role key, atau secret lain ke repository.

## Prinsip pengembangan

- Proyek ini terpisah sepenuhnya dari CariSkolah
- Tidak menyimpan password, secret key, atau data rahasia di repository
- Perubahan layanan eksternal dilakukan setelah persetujuan pemilik
- Pengambilan lowongan hanya memakai sumber dan metode yang diizinkan
