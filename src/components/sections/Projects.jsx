import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >


      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">PortfolioHub</h3>
              <p className="text-gray-400 mb-4">
                A strategic portfolio management platform for planning and delivery teams, featuring executive dashboards,
                project lifecycle workflows, budgeting, resource planning, and governance tools in a polished SaaS experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Blazor", "C#", ".NET 10", "Entity Framework Core", "SQLite", "ASP.NET Core Identity"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 items-center">
                <a
                  href="https://portfoliohub-davidlong-e7b4c6hdg5dbdbfs.canadacentral-01.azurewebsites.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/imdavidlong/PortfolioHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">TranscriptDL</h3>
              <p className="text-gray-400 mb-4">
                A lightweight utility for extracting and organizing YouTube transcripts with translation, sentence grouping,
                and export support for easier content review and reuse.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Flask", "JavaScript", "HTML/CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 items-center">
                <a
                  href="https://youtube-transcript-app-ec39.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/imdavidlong/youtube-transcript-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> MBTI Life Solver AI Bot</h3>
              <p className="text-gray-400 mb-4">
                An AI-powered assistant that combines GPT-based reasoning with MBTI-inspired guidance to deliver personalized,
                conversational support through an interactive web experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Streamlit", "OpenAI API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imdavidlong"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Covid-19 Info Update App</h3>
              <p className="text-gray-400 mb-4">
                A full-stack information app for tracking COVID-19 updates through a responsive frontend and secure backend services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Spring Boot", "Maven", "MyBatis"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imdavidlong/covid-19-tracker-app-update"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Budget App</h3>
              <p className="text-gray-400 mb-4">
                A personal finance web app focused on clear expense tracking, budgeting workflows, and a straightforward user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "HTML", "CSS", "jQuery", "Huawei Cloud"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imdavidlong/Budget_App"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Art Gallery System</h3>
              <p className="text-gray-400 mb-4">
                A database-driven gallery platform that manages exhibits, inventory, and sales-related activities with a focus on reliability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/imdavidlong/Art_gallery_SQL"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
