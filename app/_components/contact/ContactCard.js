export default function ContactCard({ item }) {
  return (
    <a
      key={item.title}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-400/60 dark:hover:bg-slate-900/80"
    >
      <h2 className="text-xl font-semibold text-cyan-500 transition group-hover:text-cyan-600 dark:text-cyan-400 dark:group-hover:text-cyan-300">
        {item.title}
      </h2>

      <p className="mt-3 break-all text-sm font-medium text-slate-900 dark:text-white">
        {item.value}
      </p>

      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
        {item.description}
      </p>
    </a>
  );
}
