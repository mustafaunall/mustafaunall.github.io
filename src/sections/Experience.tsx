const EXPERIENCE = [
  {
    company: 'RSU Bilişim ve Danışmanlık Hizmetleri A.Ş.',
    role: 'Software Developer',
    period: 'Aug 2022 – Present',
    bullets: [
      'Built RVAM (Vulnerability & Asset Management) and Pentex (Pen Test Report Management) — enterprise cybersecurity platforms used in production.',
      'Designed multi-service ASP.NET Core 8.0 microservice architectures: YARP API Gateway, Keycloak SSO, RabbitMQ async messaging.',
      'Developed Dodis, a DDoS/attack simulation management platform with real-time SignalR notifications and DigitalOcean API integration.',
      'Managed Kubernetes/RKE2 deployments via Helm and Jenkins CI/CD pipelines; maintained Harbor registry, HAProxy, and observability stack (Prometheus, Grafana, VictoriaMetrics).',
      'Built Go-based CVE data collection services (ThreatWatch) feeding into RVAM.',
    ],
  },
  {
    company: 'Intime Info Yazılım Çözümleri A.Ş.',
    role: 'Software Specialist',
    period: 'Nov 2021 – Jul 2022',
    bullets: [
      'Developed backend modules for PMP enterprise project management platform (.NET Core 3.1/5.0, Dapper, EF Core) — expense, HR, task, and CRM modules.',
      'Built REST APIs consumed by React Native iOS/Android mobile clients.',
      'Designed and delivered an Asterisk-based PBX management system from scratch (.NET 6 MVC, EF Core 6) — call records, pricing, and extension management.',
      'Contributed to a debt collection system (BTS) as full-stack with Vue.js/Vuetify.',
    ],
  },
  {
    company: 'Yupana, Inc.',
    role: 'Software Specialist Assistant',
    period: 'Oct 2019 – Jan 2020',
    bullets: [
      'Built desktop apps and MsSQL reporting tools with .NET.',
      'Designed and delivered an RRU machine configuration management tool using ElectronJS and MongoDB.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <p className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
          // experience
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-12">Work history.</h2>

        <div className="space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <div className="shrink-0">
                <p className="font-mono text-xs text-primary mb-1">{job.period}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{job.company}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-3">{job.role}</p>
                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-primary/50 shrink-0 mt-0.5 font-mono text-xs">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
