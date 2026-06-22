function Experience() {
  return (
    <section id="experience" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <h3 className="text-2xl font-semibold">
                Machine Learning Intern
              </h3>

              <p className="text-blue-400">
                Cognifyz Technologies
              </p>
            </div>

            <p className="text-slate-400">
              Feb 2026 – Mar 2026
            </p>
          </div>

          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>
              Developed machine learning models for data analysis tasks.
            </li>

            <li>
              Worked with datasets to preprocess, analyze, and extract insights.
            </li>

            <li>
              Collaborated on model development and performance evaluation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;