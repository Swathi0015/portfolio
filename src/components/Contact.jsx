function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-slate-300 mb-10">
          I'm currently looking for internships and opportunities in Full-Stack Development, AI, and Machine Learning.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:swathiniddena@gmail.com"
            className="text-blue-400 hover:text-blue-300"
          >
            swathiniddena@gmail.com
          </a>

          <a
            href="https://github.com/Swathi0015"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/swathi-niddena-453164337/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;