import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  FileCheck2,
  Plus,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const applications = [
  {
    role: "Product Designer",
    company: "Nusantara Tech",
    stage: "Sudah dilamar",
    date: "Hari ini",
    color: "blue",
  },
  {
    role: "UX Researcher",
    company: "Ruang Digital",
    stage: "Wawancara",
    date: "Besok, 10.00",
    color: "green",
  },
  {
    role: "UI/UX Designer",
    company: "PT Kreativa",
    stage: "Akan dilamar",
    date: "2 hari lalu",
    color: "orange",
  },
];

export default function DashboardPage() {
  return (
    <>
      <div className="page-heading dashboard-welcome">
        <div>
          <span className="page-kicker">MINGGU, 26 JULI 2026</span>
          <h1>Selamat datang, Andi 👋</h1>
          <p>Ini ringkasan perjalanan lamaran kerjamu minggu ini.</p>
        </div>
        <Link href="/dashboard/lowongan" className="button button-primary">
          <Plus size={18} /> Tambah lowongan
        </Link>
      </div>

      <div className="dashboard-stats">
        <article className="dashboard-stat-card">
          <span className="stat-card-icon blue">
            <BriefcaseBusiness size={21} />
          </span>
          <div>
            <span>Lamaran aktif</span>
            <strong>12</strong>
            <small className="positive">
              <TrendingUp size={14} /> 3 baru minggu ini
            </small>
          </div>
        </article>
        <article className="dashboard-stat-card">
          <span className="stat-card-icon teal">
            <FileCheck2 size={21} />
          </span>
          <div>
            <span>Skor resume terbaik</span>
            <strong>86%</strong>
            <small>Lebih tinggi dari sebelumnya</small>
          </div>
        </article>
        <article className="dashboard-stat-card">
          <span className="stat-card-icon purple">
            <CalendarClock size={21} />
          </span>
          <div>
            <span>Jadwal wawancara</span>
            <strong>2</strong>
            <small>Terdekat besok, 10.00</small>
          </div>
        </article>
      </div>

      <div className="dashboard-grid">
        <section className="panel recent-panel">
          <div className="panel-header">
            <div>
              <h2>Lamaran terbaru</h2>
              <p>Perkembangan lamaran yang baru diperbarui.</p>
            </div>
            <Link href="/dashboard/lamaran" className="text-link">
              Lihat semua <ArrowRight size={16} />
            </Link>
          </div>
          <div className="application-list">
            {applications.map((item) => (
              <div className="application-row" key={item.company}>
                <span className={`company-avatar ${item.color}`}>
                  {item.company.charAt(0)}
                </span>
                <div className="application-main">
                  <strong>{item.role}</strong>
                  <span>{item.company}</span>
                </div>
                <span className={`stage-badge ${item.color}`}>{item.stage}</span>
                <span className="application-date">{item.date}</span>
              </div>
            ))}
          </div>
        </section>

        <aside className="panel progress-panel">
          <div className="panel-header">
            <div>
              <h2>Target mingguan</h2>
              <p>Terus jaga ritmemu.</p>
            </div>
          </div>
          <div className="progress-ring">
            <div className="ring">
              <div>
                <strong>4</strong>
                <span>dari 5</span>
              </div>
            </div>
          </div>
          <div className="progress-copy">
            <strong>Hampir tercapai!</strong>
            <p>Satu lamaran lagi untuk mencapai target minggu ini.</p>
          </div>
          <Link href="/dashboard/lowongan" className="button button-secondary full">
            Cari lowongan
          </Link>
        </aside>
      </div>

      <div className="insight-banner">
        <span className="insight-icon">
          <Sparkles size={23} />
        </span>
        <div>
          <strong>Tips untuk resume-mu</strong>
          <p>
            Tambahkan hasil kerja yang terukur agar pengalamanmu lebih mudah
            dipahami perekrut.
          </p>
        </div>
        <Link href="/dashboard/resume" className="button button-light">
          Periksa resume
        </Link>
      </div>
    </>
  );
}
