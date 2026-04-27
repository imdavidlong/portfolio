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
                        <li>Replaced per-session gRPC connections with a multiplexed shared stream after concurrent playbooks began exhausting socket/file descriptor limits in production, reducing connection overhead by ~40%.</li>
                        <li>Designed and implemented a SignalR-based real-time communication layer with session-aware routing, enabling scalable fan-out of updates across concurrent analyst sessions in production SOC environments.</li>
                        <li>Defined and standardized Protocol Buffer contracts for chat messaging, playbook mutations, runtime status updates, and subscription flows, standardizing cross-service communication across distributed backend services in a microservice-based SOC platform.</li>
                        <li>Drove the integration of AI-assisted workflow generation into the SOAR platform, converting natural-language instructions into executable playbook logic and reducing manual scripting effort by ~70%.</li>
                        <li>Designed connection lifecycle management, health monitoring, and graceful shutdown handling for long-lived streaming sessions, improving stability in Kubernetes-based multi-tenant production environments.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-blue-400 mb-1">Production Support & Data Performance Optimization</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Owned the resolution of critical performance incidents in high-throughput ingestion pipelines (~100k events/sec), optimizing SQL Server indexing strategies and query execution plans to eliminate disk I/O contention and restore system stability under sustained enterprise workloads.</li>
                        <li>Performed deep execution plan analysis and index optimization across large-scale SQL Server ingestion workloads, eliminating missing indexes, inefficient joins, and full table scans that caused database contention under sustained high load.</li>
                        <li>Introduced batch processing, query refactoring, and transaction optimization strategies to reduce transaction log pressure and disk queue length, lowering query latency by 50–70% and stabilizing the system under continuous high-ingestion traffic.</li>
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
