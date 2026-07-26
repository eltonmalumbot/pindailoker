import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  FileCheck2,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Lowongan dalam satu tempat",
    description:
      "Simpan lowongan pilihan dan temukan kesempatan kerja yang lebih relevan.",
  },
  {
    icon: FileCheck2,
    title: "Resume lebih ramah ATS",
    description:
      "Bandingkan resume dengan lowongan dan lihat kata kunci yang perlu diperkuat.",
  },
  {
    icon: LayoutDashboard,
    title: "Pantau setiap lamaran",
    description:
      "Kelola proses dari disimpan hingga penawaran melalui dashboard yang rapi.",
  },
];

export default function Home() {
  return (
    <main className="landing">
      <header className="site-header container">
        <Link href="/" className="brand" aria-label="PindaiLoker beranda">
          <span className="brand-mark">
            <BriefcaseBusiness size={22} strokeWidth={2.4} />
          </span>
          <span>PindaiLoker</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <a href="#fitur">Fitur</a>
          <a href="#cara-kerja">Cara kerja</a>
          <a href="#keamanan">Keamanan</a>
        </nav>
        <div className="header-actions">
          <Link href="/dashboard" className="button button-ghost">
            Masuk
          </Link>
          <Link href="/dashboard" className="button button-primary">
            Mulai gratis
          </Link>
        </div>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            Asisten karier untuk pencari kerja Indonesia
          </div>
          <h1>
            Lamaran kerja lebih <span>terarah.</span>
          </h1>
          <p className="hero-text">
            Temukan lowongan, sesuaikan resume agar lebih ramah ATS, dan pantau
            seluruh proses lamaran—semuanya dalam satu tempat.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="button button-primary button-lg">
              Coba tampilan demo
              <ArrowRight size={18} />
            </Link>
            <a href="#cara-kerja" className="button button-secondary button-lg">
              Lihat cara kerja
            </a>
          </div>
          <div className="trust-row">
            <span>
              <Check size={16} /> Gratis untuk tahap awal
            </span>
            <span>
              <Check size={16} /> Data resume tetap privat
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Contoh dashboard PindaiLoker">
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="preview-window">
            <div className="preview-topbar">
              <div className="preview-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="preview-title">Dashboard Saya</span>
              <span className="avatar-small">AM</span>
            </div>
            <div className="preview-body">
              <div className="preview-sidebar">
                <span className="side-brand">L</span>
                <span className="side-icon active" />
                <span className="side-icon" />
                <span className="side-icon" />
                <span className="side-icon" />
              </div>
              <div className="preview-content">
                <div className="preview-heading">
                  <div>
                    <span className="skeleton short" />
                    <span className="skeleton long" />
                  </div>
                  <span className="preview-button" />
                </div>
                <div className="stat-grid">
                  <div className="mini-stat">
                    <span>Lamaran aktif</span>
                    <strong>12</strong>
                    <small>+3 minggu ini</small>
                  </div>
                  <div className="mini-stat accent">
                    <span>Kecocokan resume</span>
                    <strong>86%</strong>
                    <small>Siap dilamar</small>
                  </div>
                  <div className="mini-stat">
                    <span>Wawancara</span>
                    <strong>3</strong>
                    <small>2 akan datang</small>
                  </div>
                </div>
                <div className="mini-kanban">
                  {[
                    ["Akan dilamar", "UI/UX Designer", "PT Kreativa"],
                    ["Sudah dilamar", "Product Designer", "Nusantara Tech"],
                    ["Wawancara", "UX Researcher", "Ruang Digital"],
                  ].map(([status, role, company], index) => (
                    <div className="mini-column" key={status}>
                      <div className="mini-column-title">
                        <span>{status}</span>
                        <b>{index + 1}</b>
                      </div>
                      <div className="mini-card">
                        <span className={`company-logo logo-${index + 1}`}>
                          {company.charAt(0)}
                        </span>
                        <div>
                          <strong>{role}</strong>
                          <small>{company}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="floating-score">
            <span className="score-icon">
              <WandSparkles size={18} />
            </span>
            <div>
              <small>Skor resume</small>
              <strong>86% cocok</strong>
            </div>
          </div>
          <div className="floating-status">
            <span className="status-check">
              <Check size={16} />
            </span>
            <div>
              <small>Lamaran diperbarui</small>
              <strong>Masuk tahap wawancara</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="feature-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Semua lebih sederhana</span>
            <h2>Satu tempat untuk perjalanan kariermu</h2>
            <p>
              Tidak perlu lagi berpindah-pindah catatan, dokumen, dan portal
              untuk mengelola proses melamar kerja.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">
                  <Icon size={23} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="steps-section container">
        <div className="section-heading compact">
          <span className="section-kicker">Mulai dalam tiga langkah</span>
          <h2>Dari lowongan hingga wawancara</h2>
        </div>
        <div className="steps-grid">
          {[
            ["01", "Pilih lowongan", "Tambahkan tautan atau simpan lowongan yang menarik."],
            ["02", "Sesuaikan resume", "Lihat kecocokan dan perbaiki resume dengan bantuan AI."],
            ["03", "Pantau progres", "Catat setiap perkembangan lamaran dalam dashboard."],
          ].map(([number, title, description]) => (
            <div className="step-item" key={number}>
              <span className="step-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="keamanan" className="security-section container">
        <div className="security-card">
          <span className="security-icon">
            <ShieldCheck size={30} />
          </span>
          <div>
            <span className="section-kicker">Privasi sejak awal</span>
            <h2>Resume dan data kariermu bukan untuk dibagikan sembarangan.</h2>
            <p>
              PindaiLoker dirancang agar dokumen tetap privat dan hanya dapat
              diakses oleh pemilik akun.
            </p>
          </div>
          <Link href="/dashboard" className="button button-light">
            Jelajahi demo <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <footer className="site-footer container">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <BriefcaseBusiness size={20} />
          </span>
          <span>PindaiLoker</span>
        </Link>
        <p>Temukan kesempatan. Siapkan diri. Lacak perjalananmu.</p>
        <span>© 2026 PindaiLoker</span>
      </footer>
    </main>
  );
}
