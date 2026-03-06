import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-gray-900/50">
        <div className="text-3xl font-bold tracking-tight">
          <span className="text-accent">Nova</span>Flow
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-5xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 typewriter">
  Ignite the Future
</h1>
          
<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
  High-performance sites, custom apps & AI experiences that stand out.
</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/contact"
              className="px-10 py-5 bg-accent text-black font-semibold rounded-full text-lg hover:bg-accent-hover transition shadow-lg shadow-accent/30"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="px-10 py-5 border-2 border-accent text-accent font-semibold rounded-full text-lg hover:bg-accent hover:text-black transition"
            >
              Explore Projects
            </Link>
          </div>

          {/* Coming Soon section */}
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl font-medium text-gray-200 mb-8">Launching Very Soon – Stay Tuned!</p>
            
            {/* Countdown statique (exemple) */}
            <div className="flex justify-center gap-10 md:gap-16 mb-12">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-accent">14</div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Days</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-accent">08</div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Hours</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-accent">37</div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Mins</p>
              </div>
            </div>

            {/* Formulaire notify me */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-5 bg-gray-900/70 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                required
              />
              <button
                type="submit"
                className="px-10 py-5 bg-accent text-black font-semibold rounded-full hover:bg-accent-hover transition shadow-lg shadow-accent/20"
              >
                Notify Me
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              We promise no spam – just exciting updates.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 border-t border-gray-900/50">
        <p>&copy; {new Date().getFullYear()} NovaFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}
