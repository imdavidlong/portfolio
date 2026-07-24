import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Experience
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Arts in Mathematics & Computer Science</strong>
                  {" "}- The University of British Columbia (September 2017 – May 2021)
                </li>
                <li>
                  Coursework included database systems, algorithm design, computer graphics, and operating systems,
                  creating a strong foundation for software engineering and systems thinking.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">
                    Software Developer — D3 Security, Vancouver, BC (August 2021 – June 2026)
                  </h4>
                  <div className="mt-3 space-y-4">
                    <div>
                      <p className="font-medium text-blue-400 mb-1">AI-Driven Security Operations Platform</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Built and improved real-time backend systems for a multi-tenant SOC platform, supporting chat, playbook execution, and live status updates at scale.</li>
                        <li>Designed streaming architecture and connection management for long-lived sessions, improving stability and reducing production overhead.</li>
                        <li>Integrated AI-assisted workflow generation into the platform, helping analysts convert natural-language instructions into executable logic faster.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-blue-400 mb-1">Performance and Reliability Engineering</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Resolved high-throughput ingestion issues under sustained load, optimizing queries and indexing for large SQL Server workloads.</li>
                        <li>Improved database performance and reduced latency through execution plan analysis, batching, and transaction optimization.</li>
                        <li>Helped maintain production reliability for systems processing large volumes of events and supporting critical operational workflows.</li>
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
