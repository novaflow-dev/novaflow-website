export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-center mb-20">
          Our <span className="text-accent">Services</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-10 border border-gray-800 rounded-3xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 bg-black/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-6">Web Development</h3>
            <p className="text-gray-300 text-lg">
              High-performance Next.js & React websites, from stunning landing pages to full-scale e-commerce platforms.
            </p>
          </div>

          <div className="p-10 border border-gray-800 rounded-3xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 bg-black/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-6">Custom Apps</h3>
            <p className="text-gray-300 text-lg">
              Tailored mobile & web applications built with modern stacks for speed, scalability, and exceptional UX.
            </p>
          </div>

          <div className="p-10 border border-gray-800 rounded-3xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 bg-black/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-6">AI Integration</h3>
            <p className="text-gray-300 text-lg">
              Smart features powered by AI: chatbots, content generation, personalization, and automation tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
