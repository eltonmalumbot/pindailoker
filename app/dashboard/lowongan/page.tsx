import {
  Bookmark,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Clock3,
  ExternalLink,
  Filter,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const jobs = [
  {
    role: "Product Designer",
    company: "Nusantara Tech",
    location: "Jakarta Selatan",
    type: "Penuh waktu",
    salary: "Rp12–18 juta",
    age: "2 jam lalu",
    match: 91,
    letter: "N",
    color: "blue",
    tags: ["Figma", "Design System", "UX Research"],
  },
  {
    role: "UI/UX Designer",
    company: "PT Kreativa Indonesia",
    location: "Bandung · Hybrid",
    type: "Penuh waktu",
    salary: "Rp9–14 juta",
    age: "5 jam lalu",
    match: 86,
    letter: "K",
    color: "orange",
    tags: ["UI Design", "Prototyping", "Mobile App"],
  },
  {
    role: "UX Researcher",
    company: "Ruang Digital",
    location: "Jakarta · Remote",
    type: "Kontrak",
    salary: "Rp10–15 juta",
    age: "1 hari lalu",
    match: 78,
    letter: "R",
    color: "green",
    tags: ["User Interview", "Research", "Analytics"],
  },
  {
    role: "Junior Product Designer",
    company: "Langkah Bersama",
    location: "Tangerang",
    type: "Penuh waktu",
    salary: "Rp7–10 juta",
    age: "1 hari lalu",
    match: 74,
    letter: "L",
    color: "purple",
    tags: ["Fresh Graduate", "Figma", "Wireframing"],
  },
];

export default function LowonganPage() {
  return (
    <>
      <div className="page-heading">
        <div>
          <span className="page-kicker">TEMUKAN KESEMPATANMU</span>
          <h1>Lowongan untukmu</h1>
          <p>Rekomendasi berdasarkan profil dan pengalamanmu.</p>
        </div>
        <button className="button button-secondary">
          <ExternalLink size={17} /> Tambah dari tautan
        </button>
      </div>

      <div className="jobs-search-panel">
        <label className="large-search">
          <Search size={20} />
          <input placeholder="Posisi, keahlian, atau nama perusahaan" />
        </label>
        <button className="filter-button">
          <MapPin size={18} />
          Semua lokasi
          <ChevronDown size={16} />
        </button>
        <button className="button button-primary search-button">Cari lowongan</button>
      </div>

      <div className="filter-row">
        <button className="chip active">
          Semua <span>128</span>
        </button>
        <button className="chip">Penuh waktu</button>
        <button className="chip">Remote</button>
        <button className="chip">Fresh graduate</button>
        <button className="chip">
          <SlidersHorizontal size={15} /> Filter
        </button>
      </div>

      <div className="jobs-layout">
        <aside className="filters-panel panel">
          <div className="filters-title">
            <strong>Filter lowongan</strong>
            <button>Hapus</button>
          </div>
          <div className="filter-group">
            <span>Lokasi kerja</span>
            {["Jakarta", "Bandung", "Tangerang", "Remote"].map((label, index) => (
              <label key={label} className="check-row">
                <input type="checkbox" defaultChecked={index === 0} />
                <span>{label}</span>
                <small>{[42, 18, 14, 36][index]}</small>
              </label>
            ))}
          </div>
          <div className="filter-group">
            <span>Tingkat pengalaman</span>
            {["Fresh graduate", "1–3 tahun", "3–5 tahun"].map((label, index) => (
              <label key={label} className="check-row">
                <input type="checkbox" defaultChecked={index < 2} />
                <span>{label}</span>
              </label>
            ))}
          </div>
          <div className="filter-group">
            <span>Rentang gaji</span>
            <div className="salary-inputs">
              <input aria-label="Gaji minimum" placeholder="Min" />
              <span>–</span>
              <input aria-label="Gaji maksimum" placeholder="Maks" />
            </div>
          </div>
        </aside>

        <section className="job-results">
          <div className="results-heading">
            <div>
              <strong>128 lowongan ditemukan</strong>
              <span>Diperbarui beberapa menit lalu</span>
            </div>
            <button className="sort-button">
              Terbaru <ChevronDown size={15} />
            </button>
          </div>
          <div className="job-card-list">
            {jobs.map((job) => (
              <article className="job-card" key={`${job.role}-${job.company}`}>
                <div className="job-card-top">
                  <span className={`company-avatar large ${job.color}`}>
                    {job.letter}
                  </span>
                  <div className="job-title">
                    <h2>{job.role}</h2>
                    <span>
                      <Building2 size={14} /> {job.company}
                    </span>
                  </div>
                  <button className="bookmark-button" aria-label="Simpan lowongan">
                    <Bookmark size={19} />
                  </button>
                </div>
                <div className="job-meta">
                  <span>
                    <MapPin size={15} /> {job.location}
                  </span>
                  <span>
                    <BriefcaseBusiness size={15} /> {job.type}
                  </span>
                  <span>{job.salary}</span>
                </div>
                <div className="job-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="job-card-footer">
                  <span className="job-age">
                    <Clock3 size={14} /> {job.age}
                  </span>
                  <span className="match-badge">{job.match}% cocok</span>
                  <button className="button button-primary compact-button">
                    Lihat detail
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
