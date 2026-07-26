# PindaiLoker

PindaiLoker adalah platform untuk membantu pencari kerja Indonesia menemukan lowongan, menyesuaikan resume agar lebih ramah ATS, dan memantau proses lamaran melalui dashboard bergaya Kanban.

## Tujuan versi awal

- Menambahkan lowongan melalui tautan, teks, atau formulir manual
- Menampilkan lowongan dari sumber otomatis yang diizinkan
- Mengunggah dan menganalisis resume terhadap lowongan
- Memberikan saran perbaikan resume dengan AI
- Menyimpan perkembangan lamaran dalam dashboard Kanban
- Menjaga keamanan akun, resume, dan data pribadi pengguna

## Status

Tahap perencanaan dan persiapan fondasi. Belum terhubung dengan Vercel, Supabase, atau layanan AI.

## Teknologi yang direncanakan

- Next.js dan TypeScript
- Supabase untuk akun, database, dan penyimpanan dokumen
- Vercel untuk hosting
- GitHub untuk penyimpanan serta riwayat perubahan kode

## Prinsip pengembangan

- Proyek ini terpisah sepenuhnya dari CariSkolah
- Tidak menyimpan password, secret key, atau data rahasia di dalam repositori
- Perubahan ke layanan eksternal dilakukan setelah mendapat persetujuan pemilik
- Fitur pengambilan lowongan hanya menggunakan sumber dan metode yang diizinkan
