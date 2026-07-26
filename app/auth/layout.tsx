import Link from "next/link";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="auth-page">
      <section className="auth-showcase">
        <Link href="/" className="brand auth-brand">
          <span className="brand-mark">
            <BriefcaseBusiness size={22} />
          </span>
          <span>PindaiLoker</span>
        </Link>
        <div>
          <span className="auth-showcase-kicker">Asisten karier Indonesia</span>
          <h2>Kelola proses melamar kerja tanpa kehilangan arah.</h2>
          <ul>
            <li><CheckCircle2 size={19} /> Simpan lowongan pilihan</li>
            <li><CheckCircle2 size={19} /> Siapkan resume ramah ATS</li>
            <li><CheckCircle2 size={19} /> Pantau progres dalam satu dashboard</li>
          </ul>
        </div>
        <small>Data akun dan resume dirancang tetap privat.</small>
      </section>
      <section className="auth-content">{children}</section>
    </main>
  );
}
