import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header minimal */}
      <header className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-black/30 backdrop-blur-md border-b border-gray-900/50">
        <div className="text-3xl font-bold tracking-tight">
          <span className="text-accent">Nova</span>Flow
        </div>
        <nav className="hidden md:flex gap-8 text-gray-300">
          <Link href="/services" className="hover:text-accent transition">Services</Link>
          <Link href="/projects" className="hover:text-accent transition">Projects</Link>
          <Link href="/contact" className="hover:text-accent transition">Contact</Link>
        </nav>
      </header>

      {/* Hero principal */}
      <main className="flex-1">
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="text-center max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 typewriter">
              Ignite the Future
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              High-performance websites, custom applications & AI-powered experiences that push boundaries and captivate audiences.
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

            {/* Notify form */}
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl font-medium text-gray-200 mb-8">Launching Very Soon – Stay Tuned!</p>
              
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
        </section>

        {/* What We Do */}
        <section className="py-24 px-6 bg-black/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              What <span className="text-accent">We Do</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-10 border border-gray-800 rounded-3xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 bg-black/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-accent">Web Mastery</h3>
                <p className="text-gray-300 text-lg">
                  Blazing-fast Next.js sites, responsive designs, and e-commerce solutions that convert visitors into customers.
                </p>
              </div>
              <div className="p-10 border border-gray-800 rounded-3xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 bg-black/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-accent">Custom Apps</h3>
                <p className="text-gray-300 text-lg">
                  Tailored web & mobile applications built for scalability, performance, and seamless user experiences.
                </p>
              </div>
              <div className="p-10 border border-gray-800 rounded-3xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 bg-black/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-accent">AI Integration</h3>
                <p className="text-gray-300 text-lg">
                  Smart features like chatbots, predictive analytics, content generation, and personalized experiences powered by AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              Featured <span className="text-accent">Work</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="group relative overflow-hidden rounded-3xl border border-gray-800 hover:border-accent transition-all duration-300">
                <div className="aspect-video bg-gray-900/80 flex items-center justify-center">
                  <p className="text-gray-500 text-2xl">Project 1</p>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">E-Commerce Revolution</h3>
                  <p className="text-gray-400">Next.js + Stripe + AI recommendations – 3x conversion boost</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-gray-800 hover:border-accent transition-all duration-300">
                <div className="aspect-video bg-gray-900/80 flex items-center justify-center">
                  <p className="text-gray-500 text-2xl">Project 2</p>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">AI-Powered Dashboard</h3>
                  <p className="text-gray-400">Real-time analytics & predictive insights for enterprise clients</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-gray-800 hover:border-accent transition-all duration-300">
                <div className="aspect-video bg-gray-900/80 flex items-center justify-center">
                  <p className="text-gray-500 text-2xl">Project 3</p>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">SaaS Landing Platform</h3>
                  <p className="text-gray-400">High-conversion design with interactive elements & animations</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/projects" className="text-xl text-accent hover:underline">
                View All Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 bg-black/40">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
              Why <span className="text-accent">NovaFlow</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="text-6xl mb-6 text-accent">01</div>
                <h3 className="text-3xl font-bold mb-4">Performance First</h3>
                <p className="text-gray-300 text-lg">Sites that load under 1s, optimized for Core Web Vitals & SEO from day one.</p>
              </div>
              <div>
                <div className="text-6xl mb-6 text-accent">02</div>
                <h3 className="text-3xl font-bold mb-4">Future-Proof Tech</h3>
                <p className="text-gray-300 text-lg">Next.js, TypeScript, Tailwind, AI integrations – built to evolve with your business.</p>
              </div>
              <div>
                <div className="text-6xl mb-6 text-accent">03</div>
                <h3 className="text-3xl font-bold mb-4">Creative + Strategic</h3>
                <p className="text-gray-300 text-lg">Design that captivates + strategy that converts. No fluff, just results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-32 px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-10">
            Ready to <span className="text-accent">Ignite</span>?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the waitlist or drop us a message – let's build something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-6 bg-accent text-black font-bold text-2xl rounded-full hover:bg-accent-hover transition shadow-2xl shadow-accent/40"
          >
            Let's Talk
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 border-t border-gray-900/50 bg-black/50">
        <p>© {new Date().getFullYear()} NovaFlow. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-accent">Twitter</a>
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
