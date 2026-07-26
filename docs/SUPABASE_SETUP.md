# Menghubungkan PindaiLoker ke Supabase

Jangan kirim password atau secret key melalui chat. Lakukan pengaturan
langsung di akun Supabase dan Vercel milik Anda.

## 1. Buat proyek Supabase

1. Buka dashboard Supabase dan pilih **New project**.
2. Isi nama proyek, misalnya `pindailoker`.
3. Buat password database yang kuat dan simpan secara pribadi.
4. Pilih wilayah terdekat dengan pengguna Indonesia.
5. Tunggu sampai proyek selesai dibuat.

## 2. Buat tabel dan keamanan

1. Buka **SQL Editor → New query**.
2. Buka `supabase/migrations/001_initial_schema.sql` dari repository.
3. Salin seluruh isinya ke SQL Editor.
4. Klik **Run** satu kali.

Ini membuat profil, lowongan, resume, lamaran, peran pengguna, catatan admin,
dan aturan agar pengguna hanya melihat datanya sendiri. Penyimpanan resume
bersifat privat, maksimal 5 MB, serta hanya menerima PDF atau DOCX.

## 3. Ambil informasi aplikasi

Di **Project Settings → API**, salin:

- Project URL
- Publishable key

Jangan gunakan `service_role`. Key itu dapat melewati aturan keamanan dan
tidak boleh dimasukkan ke kode browser.

## 4. Masukkan ke Vercel

1. Buka proyek PindaiLoker di Vercel.
2. Pilih **Settings → Environment Variables**.
3. Tambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL` = Project URL
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` = Publishable key
4. Aktifkan untuk Production, Preview, dan Development.
5. Simpan, lalu redeploy deployment terbaru.

## 5. Atur tautan konfirmasi email

Di **Authentication → URL Configuration**, isi:

- Site URL: `https://pindailoker.vercel.app`
- Redirect URL: `https://pindailoker.vercel.app/auth/callback`

Uji dengan email Anda sendiri: daftar di `/auth/daftar`, konfirmasi email,
masuk di `/auth/masuk`, lalu pastikan dashboard hanya terbuka setelah masuk.

Jika Supabase belum dihubungkan, website tetap berjalan sebagai demo. Form
akun akan memberi penjelasan dan dashboard demo masih dapat dibuka.
