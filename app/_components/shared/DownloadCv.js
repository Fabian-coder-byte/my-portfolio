import Link from "next/link";

export default function DownloadCv() {
  return (
    <Link
      href="/CV_Fabian_Sartini.docx"
      download
      className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
    >
      Scarica CV
    </Link>
  );
}
