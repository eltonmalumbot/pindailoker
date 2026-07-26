"use client";

import { useState } from "react";
import {
  Check,
  FileCheck2,
  FileText,
  Sparkles,
  UploadCloud,
  WandSparkles,
} from "lucide-react";

export function ResumeDemo() {
  const [fileName, setFileName] = useState("Resume-Andi-Maulana.pdf");
  const [analyzed, setAnalyzed] = useState(true);

  return (
    <div className="resume-layout">
      <section className="resume-workspace panel">
        <div className="panel-header">
          <div>
            <h2>Resume utama</h2>
            <p>Unggah resume PDF atau DOCX dengan ukuran maksimal 5 MB.</p>
          </div>
          <span className="demo-label">DEMO</span>
        </div>

        <label className="upload-zone">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(event) => {
              const selected = event.target.files?.[0];
              if (selected) {
                setFileName(selected.name);
                setAnalyzed(false);
              }
            }}
          />
          <span className="upload-icon">
            <UploadCloud size={26} />
          </span>
          <strong>Pilih resume atau tarik ke area ini</strong>
          <span>PDF atau DOCX · Maksimal 5 MB</span>
        </label>

        {fileName && (
          <div className="selected-file">
            <span className="pdf-icon">
              <FileText size={21} />
            </span>
            <div>
              <strong>{fileName}</strong>
              <span>Terakhir diperbarui hari ini</span>
            </div>
            <span className="file-ready">
              <Check size={15} /> Siap
            </span>
          </div>
        )}

        <div className="job-target">
          <label htmlFor="target-job">Lowongan tujuan</label>
          <select id="target-job" defaultValue="product">
            <option value="product">Product Designer — Nusantara Tech</option>
            <option value="uiux">UI/UX Designer — PT Kreativa</option>
            <option value="research">UX Researcher — Ruang Digital</option>
          </select>
        </div>

        <button
          className="button button-primary full analyze-button"
          onClick={() => setAnalyzed(true)}
        >
          <WandSparkles size={18} />
          Analisis kecocokan resume
        </button>
        <p className="demo-note">
          Ini simulasi tampilan. Analisis AI akan diaktifkan setelah layanan AI
          dan database dihubungkan.
        </p>
      </section>

      <section className="resume-score panel">
        {analyzed ? (
          <>
            <div className="score-header">
              <div>
                <span className="page-kicker">HASIL ANALISIS</span>
                <h2>Kecocokan resume</h2>
              </div>
              <span className="score-status">Bagus</span>
            </div>
            <div className="big-score">
              <div className="big-score-ring">
                <strong>86</strong>
                <span>/100</span>
              </div>
              <p>
                Resume-mu sudah cukup sesuai. Beberapa perbaikan dapat
                meningkatkan peluang dibaca perekrut.
              </p>
            </div>
            <div className="score-breakdown">
              {[
                ["Kata kunci", 90],
                ["Pengalaman", 82],
                ["Keterbacaan", 88],
                ["Dampak hasil kerja", 74],
              ].map(([label, score]) => (
                <div className="score-row" key={label}>
                  <div>
                    <span>{label}</span>
                    <strong>{score}%</strong>
                  </div>
                  <div className="score-track">
                    <span style={{ width: `${score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-analysis">
            <FileCheck2 size={42} />
            <h2>Resume baru siap diperiksa</h2>
            <p>Pilih lowongan tujuan lalu mulai analisis untuk melihat hasil.</p>
          </div>
        )}
      </section>

      {analyzed && (
        <section className="recommendations panel">
          <div className="panel-header">
            <div>
              <h2>Saran perbaikan</h2>
              <p>Prioritas yang paling berpengaruh pada resume ini.</p>
            </div>
            <span className="suggestion-count">3 saran</span>
          </div>
          <div className="recommendation-list">
            <article>
              <span className="recommendation-icon high">
                <Sparkles size={18} />
              </span>
              <div>
                <span className="priority high">PRIORITAS TINGGI</span>
                <h3>Tambahkan hasil kerja yang terukur</h3>
                <p>
                  Ubah “membuat desain aplikasi” menjadi hasil yang menunjukkan
                  dampak, misalnya peningkatan konversi atau penyelesaian tugas.
                </p>
              </div>
              <button>Terapkan</button>
            </article>
            <article>
              <span className="recommendation-icon">
                <FileText size={18} />
              </span>
              <div>
                <span className="priority">KATA KUNCI</span>
                <h3>Tambahkan “design system” dan “user research”</h3>
                <p>
                  Kedua istilah muncul pada lowongan tetapi belum cukup jelas di
                  bagian pengalamanmu.
                </p>
              </div>
              <button>Terapkan</button>
            </article>
          </div>
        </section>
      )}
    </div>
  );
}
