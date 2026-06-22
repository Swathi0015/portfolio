function Projects() {
  const projects = [
    {
      title: "TailorTalk-AI",
      description:
        "AI-powered Google Drive assistant that helps users search files using natural language.",
      tech: ["React", "Node.js", "Google Drive API"],
      github: "https://github.com/Swathi0015/tailortalk-ai-drive-agent.git",
      live: "#",
    },
    {
      title: "Blog Management System",
      description:
        "Web application for creating, managing, and storing blog posts efficiently.",
      tech: ["Python", "HTML", "CSS", "SQL"],
      github: "https://github.com/Swathi0015/blog-management-system.git",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;