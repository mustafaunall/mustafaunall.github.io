import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

type Project = {
  title: string
  description: string
  tags: string[]
  github: string | null
  live: string | null
  appStore?: string | null
  playStore?: string | null
  company: string
}

const PROJECTS: Project[] = [
  {
    title: 'Impact of Art — Art Platform & Mobile App',
    description:
      'End-to-end freelance platform for Cappadocia Biennial and art events. Microservice backend behind a .NET 8 / YARP API Gateway: Content Service (Go + Fiber), Media Service (Go + Fiber + MinIO/S3), Newsletter Service (.NET 8 + MassTransit), and a Notification Worker (Go + RabbitMQ consumer). Flutter mobile app published on App Store and Google Play — Clean Architecture, Riverpod 2.x state management, GoRouter, Dio, Freezed. Admin panel built with React 18 + Vite. Infrastructure: Docker Compose (layered infra + services), HAProxy for TLS termination with Cloudflare IP whitelisting, Ansible for automated server provisioning and deployment, GitHub Actions CI/CD.',
    tags: ['.NET 8', 'YARP', 'Go', 'Fiber', 'Flutter', 'React 18', 'TypeScript', 'PostgreSQL', 'RabbitMQ', 'MassTransit', 'MinIO/S3', 'Redis', 'Docker', 'HAProxy', 'Ansible', 'Riverpod'],
    github: null,
    live: 'https://impactofart.tr',
    appStore: 'https://apps.apple.com/us/app/sinemasal-impact-of-art/id6761755799',
    playStore: 'https://play.google.com/store/apps/details?id=com.sinemasal.impactofartapp',
    company: 'Freelance',
  },
  {
    title: 'RVAM — Vulnerability & Asset Management',
    description:
      'Enterprise vulnerability and asset management platform for cybersecurity teams. Multi-service ASP.NET Core 8.0 architecture behind a YARP API Gateway, React SPA, and Go-based ThreatWatch service that collects CVE data from external sources. Keycloak OIDC for SSO, RabbitMQ for async messaging, QuestPDF/iText7 for report generation, MinIO/S3 for file storage.',
    tags: ['ASP.NET Core 8', 'React 18', 'TypeScript', 'Go', 'PostgreSQL', 'RabbitMQ', 'YARP', 'Keycloak', 'Docker', 'Redis', 'Elasticsearch'],
    github: null,
    live: null,
    company: 'RSU',
  },
  {
    title: 'Pentex — Penetration Test Report Management',
    description:
      'Platform for managing and distributing penetration test reports. Layered Architecture ASP.NET Core 8.0 backend, Vue 3 SPA with Vuetify 3. Per-client async report distribution via MassTransit/RabbitMQ, in-browser PDF preview with PDF.js, and TR/EN i18n support.',
    tags: ['ASP.NET Core 8', 'Vue 3', 'TypeScript', 'Vuetify 3', 'PostgreSQL', 'RabbitMQ', 'MassTransit', 'QuestPDF', 'MinIO/S3', 'Keycloak'],
    github: null,
    live: null,
    company: 'RSU',
  },
  {
    title: 'Dodis — Attack Simulation Management Platform',
    description:
      'DDoS and attack simulation orchestration platform. Real-time notifications via SignalR, scheduled tasks with Quartz.NET, cloud infrastructure provisioning through DigitalOcean API, and Prometheus metrics collection.',
    tags: ['ASP.NET Core 8', 'PostgreSQL', 'SignalR', 'Quartz.NET', 'RabbitMQ', 'Prometheus', 'MinIO/S3', 'Keycloak', 'Docker'],
    github: null,
    live: null,
    company: 'RSU',
  },
  {
    title: 'FarmaKariyer.net — Pharmacy Career Platform',
    description:
      'Freelance project: first Turkish job platform connecting pharmacies and job seekers, with a small e-commerce module for consumables. Built MVP first, then evolved with RabbitMQ messaging and Hangfire-based worker modules for job listing lifecycle management. Full journey from development to production.',
    tags: ['.NET Core', 'MVC', 'REST API', 'RabbitMQ', 'Hangfire', 'PostgreSQL'],
    github: null,
    live: 'https://farmakariyer.net',
    appStore: null,
    playStore: null,
    company: 'Freelance',
  },
  {
    title: 'Asterisk PBX Management System',
    description:
      'Full management layer built on top of Asterisk\'s existing SQL database — designed to be non-invasive. Covers call records, audio logs, per-user extension pricing, and service breakdown. Architecture, development, and delivery handled end-to-end.',
    tags: ['.NET 6 MVC', 'EF Core 6', 'Asterisk SQL', 'PostgreSQL'],
    github: null,
    live: null,
    company: 'Intime Info',
  },
  {
    title: 'Keycloak SPI Plugin & Custom Theme',
    description:
      'Custom Java Keycloak Event Listener SPI plugin: auto-notification on user registration, hierarchical group creation, and automatic role assignment — covering cases Keycloak doesn\'t handle out-of-the-box. Deployed across all RSU platforms.',
    tags: ['Java 17', 'Keycloak SPI', 'Docker'],
    github: null,
    live: null,
    company: 'RSU',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <p className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
          // projects
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-12">Selected work.</h2>

        <div className="space-y-5">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-lg border border-border bg-surface hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-primary/60">{project.company}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-primary hover:underline"
                    >
                      live ↗
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-primary hover:underline"
                    >
                      App Store ↗
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-primary hover:underline"
                    >
                      Play Store ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="outline" asChild>
            <a href="https://github.com/mustafaunall" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              more on github
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
