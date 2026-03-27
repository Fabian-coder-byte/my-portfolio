import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fabian | Web Developer",
  description:
    "Portfolio personale di Fabian, web developer focalizzato su frontend, backend e applicazioni web moderne.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-lg font-bold tracking-tight">
                Fabian
              </Link>

              <nav className="flex items-center gap-6 text-sm text-slate-300">
                <Link href="/" className="transition hover:text-cyan-400">
                  Home
                </Link>
                <Link href="/about" className="transition hover:text-cyan-400">
                  About
                </Link>
                <Link
                  href="/projects"
                  className="transition hover:text-cyan-400"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="transition hover:text-cyan-400"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Fabian. Tutti i diritti riservati.</p>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/tuousername"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-cyan-400"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/tuousername"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-cyan-400"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:tuaemail@example.com"
                  className="transition hover:text-cyan-400"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>
        </div>

        <SpeedInsights />
      </body>
    </html>
  );
}
