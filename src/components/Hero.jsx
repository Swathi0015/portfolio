function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Niddena Swathi
          </h1>

          <p className="text-xl text-slate-300 mb-4">
            Computer Science student focused on Full-Stack Development, AI, and
            Machine Learning.
          </p>

          <p className="text-slate-400 mb-8">
            I build web applications and intelligent solutions that solve
            real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-500 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Swathi Niddena"
            className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;