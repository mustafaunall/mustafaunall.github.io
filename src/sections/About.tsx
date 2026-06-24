export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <p className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
          // about
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-8">
          Building systems that hold up under pressure.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Full Stack developer with ~4 years of professional experience across backend,
              frontend, mobile, and infrastructure. At RSU, I build enterprise-scale cybersecurity
              platforms — vulnerability management, penetration test reporting, and DDoS simulation.
            </p>
            <p>
              On the freelance side, I shipped Impact of Art end-to-end: microservice backend
              (.NET 8 + Go), Flutter mobile app live on App Store and Google Play, React admin
              panel, and full infra with Ansible, HAProxy, and GitHub Actions CI/CD.
            </p>
            <p>
              I design multi-service architectures with ASP.NET Core, Go, PostgreSQL, and
              RabbitMQ; handle production deployments via Kubernetes/Helm and Jenkins; and
              architect auth infrastructure with Keycloak SSO and YARP API Gateway.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { label: 'currently at', value: 'RSU Bilişim A.Ş.' },
              { label: 'role', value: 'Full Stack Developer' },
              { label: 'domain', value: 'cybersecurity · mobile · microservices' },
              { label: 'stack', value: 'Go · Flutter · React · Vue' },
              { label: 'education', value: 'Computer Engineering, IGU \'23' },
              { label: 'email', value: 'mustafaunaldev@gmail.com', href: 'mailto:mustafaunaldev@gmail.com' },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex gap-4 text-sm border-b border-border pb-3">
                <span className="font-mono text-primary/60 w-28 shrink-0">{label}</span>
                {href ? (
                  <a href={href} className="text-foreground hover:text-primary transition-colors font-mono">
                    {value}
                  </a>
                ) : (
                  <span className="text-foreground font-mono">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
