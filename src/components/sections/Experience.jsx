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
