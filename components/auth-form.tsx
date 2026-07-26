"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Mode = "masuk" | "daftar" | "lupa";

const copy = {
  masuk: {
    title: "Selamat datang kembali",
    description: "Masuk untuk melanjutkan perjalanan kariermu.",
    submit: "Masuk",
  },
  daftar: {
    title: "Buat akun gratis",
    description: "Mulai simpan lowongan dan pantau setiap lamaran.",
    submit: "Daftar sekarang",
  },
  lupa: {
    title: "Atur ulang kata sandi",
    description: "Kami akan mengirimkan tautan pemulihan ke emailmu.",
    submit: "Kirim tautan",
  },
};

export function AuthForm({ mode }: { mode: Mode }) {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const content = copy[mode];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    const supabase = createClient();
    if (!supabase) {
      setIsError(true);
      setMessage(
        "Sistem akun belum diaktifkan. Ikuti panduan Supabase yang disertakan, atau buka tampilan demo.",
      );
      return;
    }

    setLoading(true);
    try {
      if (mode === "masuk") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        const next = searchParams.get("next");
        window.location.href =
          next && next.startsWith("/") && !next.startsWith("//")
            ? next
            : "/dashboard";
      } else if (mode === "daftar") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name },
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });
        if (error) throw error;
        setMessage(
          "Pendaftaran berhasil. Periksa emailmu untuk mengaktifkan akun.",
        );
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth/callback?next=/dashboard/profil`,
        });
        if (error) throw error;
        setMessage("Tautan pemulihan sudah dikirim. Silakan periksa emailmu.");
      }
    } catch (error) {
      setIsError(true);
      setMessage(
        error instanceof Error
          ? error.message
          : "Terjadi kendala. Silakan coba lagi.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-card">
      <div className="auth-heading">
        <span className="auth-kicker">PindaiLoker</span>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {mode === "daftar" && (
          <label>
            Nama lengkap
            <input
              required
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Contoh: Andi Maulana"
            />
          </label>
        )}
        <label>
          Email
          <input
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nama@email.com"
          />
        </label>
        {mode !== "lupa" && (
          <label>
            <span className="label-row">
              Kata sandi
              {mode === "masuk" && (
                <Link href="/auth/lupa-password">Lupa kata sandi?</Link>
              )}
            </span>
            <input
              required
              minLength={8}
              type="password"
              autoComplete={mode === "masuk" ? "current-password" : "new-password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Minimal 8 karakter"
            />
          </label>
        )}
        {message && (
          <p className={`auth-message ${isError ? "error" : "success"}`}>
            {message}
          </p>
        )}
        <button
          type="submit"
          className="button button-primary button-lg full"
          disabled={loading}
        >
          {loading ? <LoaderCircle className="spin" size={19} /> : content.submit}
          {!loading && <ArrowRight size={18} />}
        </button>
      </form>

      <div className="auth-footer">
        {mode === "masuk" && (
          <p>
            Belum punya akun? <Link href="/auth/daftar">Daftar gratis</Link>
          </p>
        )}
        {mode === "daftar" && (
          <p>
            Sudah punya akun? <Link href="/auth/masuk">Masuk</Link>
          </p>
        )}
        {mode === "lupa" && (
          <p>
            Ingat kata sandimu? <Link href="/auth/masuk">Kembali masuk</Link>
          </p>
        )}
        <Link href="/dashboard" className="demo-link">
          Buka tampilan demo
        </Link>
      </div>
    </div>
  );
}
