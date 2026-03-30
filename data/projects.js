export const projects = [
  // {
  //   slug: "ecommerce-platform",
  //   title: "E-commerce Platform",
  //   shortDescription:
  //     "Applicazione web con gestione utenti, prodotti, ordini e ruoli multipli.",
  //   description:
  //     "Una piattaforma e-commerce progettata per gestire catalogo prodotti, autenticazione utenti, ordini e diversi ruoli applicativi in modo scalabile e ordinato.",
  //   image: null,
  //   stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  //   github: "https://github.com/tuousername/ecommerce-platform",
  //   demo: "https://tuodominio-ecommerce.com",
  //   role: "Full Stack Developer",
  //   duration: "3 mesi",
  //   year: "2026",
  //   overview:
  //     "Questo progetto nasce con l’obiettivo di costruire una piattaforma moderna e pulita per la gestione di un flusso e-commerce completo, dalla navigazione dei prodotti fino alla gestione degli ordini.",
  //   problem:
  //     "L’obiettivo era realizzare un’applicazione capace di supportare diverse tipologie di utenti e processi, mantenendo però il codice leggibile, modulare e semplice da estendere.",
  //   solution:
  //     "Ho strutturato il progetto separando chiaramente interfaccia, logica applicativa e gestione dati. Ho realizzato componenti riutilizzabili, pagine ben organizzate e una base pronta per funzionalità più avanzate come pagamenti, dashboard amministrativa e analytics.",
  //   challenges: [
  //     "Organizzare il progetto in modo scalabile fin dalle prime fasi",
  //     "Gestire la separazione tra componenti UI e logica dati",
  //     "Mantenere una buona esperienza utente su dispositivi diversi",
  //   ],
  //   learnings: [
  //     "Ho migliorato l’organizzazione dei progetti frontend complessi",
  //     "Ho consolidato l’uso di Next.js per applicazioni strutturate",
  //     "Ho capito meglio come progettare componenti riutilizzabili",
  //   ],
  // },
  // {
  //   slug: "healthcare-dashboard",
  //   title: "Healthcare Dashboard",
  //   shortDescription:
  //     "Dashboard per gestione dati, processi backend e aggiornamenti realtime.",
  //   description:
  //     "Una dashboard orientata alla gestione di dati applicativi e processi backend, con attenzione alla chiarezza operativa e all’integrazione tra servizi.",
  //   image: null,
  //   stack: [".NET", "Angular", "SignalR", "SQL Server"],
  //   github: "https://github.com/tuousername/healthcare-dashboard",
  //   demo: "",
  //   role: "Backend & Frontend Developer",
  //   duration: "6 mesi",
  //   year: "2025",
  //   overview:
  //     "Il progetto era focalizzato sulla costruzione di una dashboard professionale capace di mostrare dati, processi e stati operativi in modo chiaro ed efficiente.",
  //   problem:
  //     "Era necessario gestire informazioni complesse e processi asincroni, offrendo allo stesso tempo una UI leggibile e una struttura backend robusta.",
  //   solution:
  //     "Ho contribuito alla realizzazione di una dashboard organizzata per sezioni, con particolare attenzione all’integrazione con i servizi backend e alla gestione di aggiornamenti in tempo reale.",
  //   challenges: [
  //     "Coordinare frontend e backend in scenari più strutturati",
  //     "Gestire stati, aggiornamenti e processi asincroni",
  //     "Mantenere la UI chiara nonostante la complessità del dominio",
  //   ],
  //   learnings: [
  //     "Ho approfondito la progettazione di dashboard tecniche",
  //     "Ho migliorato il lavoro con realtime updates e processi backend",
  //     "Ho consolidato l’approccio a progetti enterprise",
  //   ],
  // },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
