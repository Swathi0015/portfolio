function Skills() {
  const skills = {
    Languages: ["Python", "Java", "C", "SQL"],
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MySQL", "MongoDB"],
    Tools: ["Git", "GitHub", "VS Code"],
  };

  return (
    <section id="skills" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-800 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-700 px-3 py-2 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;