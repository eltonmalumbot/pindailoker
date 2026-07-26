"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  BriefcaseBusiness,
  FileText,
  LayoutDashboard,
  Search,
  Settings,
  UserRound,
} from "lucide-react";

const items = [
  { href: "/dashboard", label: "Ringkasan", icon: LayoutDashboard },
  { href: "/dashboard/lowongan", label: "Lowongan", icon: Search },
  { href: "/dashboard/resume", label: "Resume Saya", icon: FileText },
  { href: "/dashboard/lamaran", label: "Lamaran Saya", icon: BriefcaseBusiness },
  { href: "/dashboard/profil", label: "Profil", icon: UserRound },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <Link href="/" className="brand sidebar-brand">
          <span className="brand-mark">
            <BriefcaseBusiness size={21} />
          </span>
          <span>PindaiLoker</span>
        </Link>
        <nav className="sidebar-nav" aria-label="Navigasi dashboard">
          <span className="nav-caption">MENU UTAMA</span>
          {items.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/dashboard" ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                href={href}
                key={href}
                className={`sidebar-link ${active ? "active" : ""}`}
              >
                <Icon size={19} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="sidebar-bottom">
          <Link href="/dashboard/profil" className="sidebar-link">
            <Settings size={19} />
            <span>Pengaturan</span>
          </Link>
          <div className="sidebar-profile">
            <span className="avatar">AM</span>
            <div>
              <strong>Andi Maulana</strong>
              <small>Pencari kerja</small>
            </div>
          </div>
        </div>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-header">
          <Link href="/" className="brand mobile-brand">
            <span className="brand-mark">
              <BriefcaseBusiness size={20} />
            </span>
            <span>PindaiLoker</span>
          </Link>
          <div className="header-search">
            <Search size={18} />
            <input aria-label="Cari" placeholder="Cari lowongan atau perusahaan..." />
          </div>
          <div className="dashboard-header-actions">
            <button className="icon-button" aria-label="Notifikasi">
              <Bell size={19} />
              <span className="notification-dot" />
            </button>
            <span className="avatar">AM</span>
          </div>
        </header>
        <div className="dashboard-content">{children}</div>
      </div>

      <nav className="mobile-bottom-nav" aria-label="Navigasi ponsel">
        {items.slice(0, 4).map(({ href, label, icon: Icon }) => {
          const active =
            href === "/dashboard" ? pathname === href : pathname.startsWith(href);
          return (
            <Link href={href} key={href} className={active ? "active" : ""}>
              <Icon size={19} />
              <span>{label.replace(" Saya", "")}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
