import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header minimal */}
      <header className="fixed top-0 w-full z-50 py-6 px-8 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-blue-500">Nova</span>Flow
        </div>
        {/* Tu pourras ajouter un menu plus tard */}
      </header>

      {/* Hero principal – très centré */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            Une nouvelle ère du digital
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Studio créatif spécialisé en sites web performants, applications sur mesure et expériences digitales qui marquent.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition text-lg"
            >
              Prendre contact
            </Link>
            <Link
              href="/projets"
              className="px-8 py-4 border border-gray-700 hover:border-gray-400 text-white rounded-full font-medium transition text-lg"
            >
              Voir les projets
            </Link>
          </div>

          <p className="mt-16 text-gray-500 text-sm">
            Site en construction • Lancement prévu bientôt
          </p>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>© {new Date().getFullYear()} NovaFlow. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
