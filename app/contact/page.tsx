export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-6xl md:text-7xl font-bold text-center mb-16">
          Let&apos;s <span className="text-accent">Create</span> Together
        </h1>

        <form className="space-y-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-5 bg-gray-900/70 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-5 bg-gray-900/70 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full px-6 py-5 bg-gray-900/70 border border-gray-700 rounded-3xl text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          ></textarea>

          <button
            type="submit"
            className="w-full py-6 bg-accent text-black font-bold text-xl rounded-full hover:bg-accent-hover transition shadow-lg shadow-accent/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
