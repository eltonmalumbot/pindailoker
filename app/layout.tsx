import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lamarin — Lamaran kerja lebih terarah",
  description:
    "Temukan lowongan, sesuaikan resume ramah ATS, dan pantau setiap lamaran dalam satu tempat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
