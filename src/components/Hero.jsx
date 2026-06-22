function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm Niddena Swathi
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-6">
          Computer Science student focused on Full-Stack Development, AI, and
          Machine Learning.
        </p>

        <p className="text-slate-400 mb-8">
          I build web applications and intelligent solutions that solve
          real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}

export default Hero;