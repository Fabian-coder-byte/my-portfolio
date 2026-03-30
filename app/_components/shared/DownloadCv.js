import Link from "next/link";

export default function DownloadCv() {
  return (
    <Link
      href="/CV_Fabian_Sartini.docx"
      download
      className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
    >
      Scarica CV
    </Link>
  );
}
