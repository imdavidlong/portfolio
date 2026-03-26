import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "jQuery",
    "HTML",
    "CSS",
  ];

  const backendSkills = [
    "C#",
    ".NET 8",
    "Python",
    "Java",
    "PHP",
    "REST APIs",
    "gRPC",
    "SQL Server",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ];

  const tools = [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Argo CD",
    "Git",
  ];

  const aiSkills = [
    "Controlled LLM Integration",
    "Prompt Orchestration",
    "Response Validation",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Software Engineer with 4+ years of experience building distributed backend systems,
              real-time streaming infrastructure, and AI-assisted automation platforms for enterprise SaaS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend & Platform</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">AI & Automation</h3>
                <div className="flex flex-wrap gap-2">
                  {aiSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Arts in Mathematics & Computer Science</strong>
                  {" "}- The University of British Columbia (September 2017 – May 2021)
                </li>
                <li>
                  Relevant Coursework: Database Systems, Algorithm Design and Analysis, Computer Graphics,
                  Computer Hardware and Operating Systems.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">
                    Software Developer — D3 Security, Vancouver, BC (August 2021 – Present)
                  </h4>
                  <div className="mt-3 space-y-4">
                    <div>
                      <p className="font-medium text-blue-400 mb-1">AI SOC Platform (Morpheus)</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Architected a multiplexed bidirectional gRPC streaming layer for concurrent analyst sessions, reducing connection overhead by ~40%.</li>
                        <li>Implemented SignalR-based persistent connection management with session-aware message routing for real-time fan-out across multi-tenant environments.</li>
                        <li>Extended the SOAR platform with AI-assisted workflow generation, reducing manual scripting effort by ~70%.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-blue-400 mb-1">SOAR Automation Platform & Backend</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Re-architected the Python/Jinja2 automation execution engine powering enterprise SOC playbooks, reducing authoring complexity by ~70%.</li>
                        <li>Led modernization of legacy backend services to .NET 8, reducing technical debt and improving production stability.</li>
                        <li>Designed and maintained RESTful and gRPC APIs for distributed microservices handling security data processing and workflow execution.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-blue-400 mb-1">Production Support & Data Performance</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Resolved critical performance issues in high-throughput ingestion pipelines (~100k events/sec) via SQL Server index optimization and query tuning.</li>
                        <li>Introduced batch processing and transaction optimization strategies, lowering query latency by 50–70% under sustained high load.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
