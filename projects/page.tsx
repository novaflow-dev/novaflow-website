export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-center mb-20">
          Featured <span className="text-accent">Projects</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Exemple de carte projet – duplique et personnalise */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-800 hover:border-accent transition-all duration-300">
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <p className="text-gray-500 text-xl">Project Image</p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">E-Commerce Platform</h3>
              <p className="text-gray-400">Next.js + Stripe + AI recommendations</p>
            </div>
          </div>

          {/* Ajoute 2-5 cartes similaires ici */}
        </div>
      </div>
    </div>
  );
}
