import { Camera, Check, ShieldCheck } from "lucide-react";

export default function ProfilPage() {
  return (
    <>
      <div className="page-heading">
        <div>
          <span className="page-kicker">AKUN DAN PREFERENSI</span>
          <h1>Profil Saya</h1>
          <p>
            Informasi ini membantu PindaiLoker memberikan rekomendasi yang sesuai.
          </p>
        </div>
        <button className="button button-primary">
          <Check size={17} /> Simpan perubahan
        </button>
      </div>

      <div className="profile-layout">
        <aside className="panel profile-card">
          <div className="profile-avatar-wrap">
            <span className="profile-avatar">AM</span>
            <button aria-label="Ubah foto profil">
              <Camera size={16} />
            </button>
          </div>
          <h2>Andi Maulana</h2>
          <p>Product Designer</p>
          <span className="profile-location">Jakarta, Indonesia</span>
          <div className="profile-completion">
            <div>
              <span>Kelengkapan profil</span>
              <strong>80%</strong>
            </div>
            <div className="completion-track">
              <span />
            </div>
          </div>
        </aside>

        <section className="panel profile-form">
          <div className="panel-header">
            <div>
              <h2>Informasi dasar</h2>
              <p>Perbarui informasi yang tampil pada profil kariermu.</p>
            </div>
          </div>
          <div className="form-grid">
            <label>
              Nama lengkap
              <input defaultValue="Andi Maulana" />
            </label>
            <label>
              Posisi yang dicari
              <input defaultValue="Product Designer" />
            </label>
            <label>
              Email
              <input type="email" defaultValue="andi@example.com" />
            </label>
            <label>
              Nomor telepon
              <input defaultValue="+62 812 3456 7890" />
            </label>
            <label>
              Kota domisili
              <input defaultValue="Jakarta" />
            </label>
            <label>
              Pengalaman
              <select defaultValue="1-3">
                <option value="fresh">Fresh graduate</option>
                <option value="1-3">1–3 tahun</option>
                <option value="3-5">3–5 tahun</option>
                <option value="5+">Lebih dari 5 tahun</option>
              </select>
            </label>
            <label className="full-field">
              Ringkasan profil
              <textarea
                rows={5}
                defaultValue="Product Designer dengan pengalaman merancang produk digital yang mudah digunakan dan berorientasi pada kebutuhan pengguna."
              />
            </label>
          </div>
        </section>

        <section className="panel security-settings">
          <span className="security-settings-icon">
            <ShieldCheck size={24} />
          </span>
          <div>
            <h2>Privasi dan keamanan</h2>
            <p>
              Resume dan data lamaran akan bersifat privat. Fitur ini akan aktif
              setelah sistem akun dan Supabase dihubungkan.
            </p>
          </div>
          <button className="button button-secondary">Lihat pengaturan</button>
        </section>
      </div>
    </>
  );
}
