"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  BookOpen,
  Briefcase,
  GraduationCap,
  FileText,
  BarChart3,
  Users,
  PenTool,
  ArrowRight,
  Search,
  Sparkles,
  Target,
  BrainCircuit,
  LineChart,
} from "lucide-react";

const siteConfig = {
  domain: "luisgeraldo.academy",
  url: "https://luisgeraldo.academy",
  title: "Luis Geraldo Campos | Investigación aplicada, datos y publicación científica",
  description:
    "Sitio personal de Luis Alberto Geraldo Campos, docente investigador, RENACYT Nivel III y especialista en métodos cuantitativos avanzados, SEM, machine learning, psicometría y publicación científica.",
  photo: "/images/luis-geraldo.jpg",
};

const profileLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=RAPytkAAAAAJ&hl=es",
  },
  {
    label: "CTI Vitae / RENACYT",
    href: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=28085",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Luis-Geraldo-Campos-2",
  },
  {
    label: "Scipedia",
    href: "https://www.scipedia.com/profile/geraldo28",
  },
  {
    label: "Academia.edu",
    href: "https://upeu.academia.edu/LuisGeraldoCampos",
  },
];

const stats = [
  { value: "RENACYT", label: "Investigador Nivel III" },
  { value: "Scopus", label: "Autor ID 57194119146" },
  { value: "ORCID", label: "0000-0002-8366-689X" },
  { value: "WoS", label: "ResearcherID G-8937-2018" },
];

const brandPillars = [
  {
    icon: BrainCircuit,
    title: "Investigación aplicada",
    description: "Transformo problemas organizacionales, educativos y sociales en evidencia útil para decidir mejor.",
  },
  {
    icon: LineChart,
    title: "Analítica avanzada",
    description: "Trabajo con SEM, psicometría, machine learning, modelos predictivos y redes psicológicas.",
  },
  {
    icon: Target,
    title: "Impacto profesional",
    description: "Conecto producción científica, formación investigativa y soluciones para instituciones y equipos.",
  },
];

const publications = [
  {
    year: "2026",
    type: "Artículo científico",
    title:
      "Anxiety as a mediator in the relationship of perceived stress and social support with emotional eating in female university teachers",
    journal: "BMC Public Health",
    area: "Ciencias del comportamiento",
    doi: "10.1186/S12889-025-25677-7",
    href: "https://doi.org/10.1186/S12889-025-25677-7",
  },
  {
    year: "2025",
    type: "Artículo científico",
    title:
      "Is there a relationship between organisational climate and job satisfaction? A view from a systematic review and meta-analysis",
    journal: "World Review of Entrepreneurship, Management and Sustainable Development",
    area: "Clima organizacional y satisfacción laboral",
    doi: "10.1504/WREMSD.2025.148297",
    href: "https://doi.org/10.1504/WREMSD.2025.148297",
  },
  {
    year: "2025",
    type: "Artículo científico",
    title:
      "Transformational leadership and corporate social responsibility: The mediating role of digital transformation",
    journal: "Problems and Perspectives in Management",
    area: "Liderazgo, RSE y transformación digital",
    doi: "10.21511/PPM.23(3).2025.53",
    href: "https://doi.org/10.21511/PPM.23(3).2025.53",
  },
  {
    year: "2025",
    type: "Conference paper",
    title: "Machine learning models for predicting mortgage payment difficulties in Peru",
    journal: "Proceedings of the LACCEI International Multi-Conference",
    area: "Machine learning aplicado a riesgo crediticio",
    doi: "10.18687/LEIRD2025.1.1.105",
    href: "https://doi.org/10.18687/LEIRD2025.1.1.105",
  },
  {
    year: "2024",
    type: "Artículo científico",
    title: "Psychometric properties of the digital competences scale in regular basic education teachers",
    journal: "International Journal of Educational Research Open",
    area: "Psicometría y competencias digitales",
    doi: "10.1016/J.IJEDRO.2024.100327",
    href: "https://doi.org/10.1016/J.IJEDRO.2024.100327",
  },
  {
    year: "2024",
    type: "Artículo científico",
    title:
      "Work Team Effectiveness: Importance of Organizational Culture, Work Climate, Leadership, Creative Synergy, and Emotional Intelligence in University Employees",
    journal: "Administrative Sciences",
    area: "Cultura organizacional y equipos de trabajo",
    doi: "10.3390/ADMSCI14110280",
    href: "https://doi.org/10.3390/ADMSCI14110280",
  },
  {
    year: "2023",
    type: "Artículo científico",
    title:
      "Psychometric evidence and network analysis of the emotional intelligence scale in students of denominational institutions",
    journal: "Bordón",
    area: "Redes psicológicas e inteligencia emocional",
    doi: "10.13042/BORDON.2023.98104",
    href: "https://doi.org/10.13042/BORDON.2023.98104",
  },
  {
    year: "2022",
    type: "Artículo científico",
    title:
      "Machine Learning for Credit Risk in the Reactive Peru Program: A Comparison of the Lasso and Ridge Regression Models",
    journal: "Economies",
    area: "Riesgo crediticio y aprendizaje automático",
    doi: "10.3390/ECONOMIES10080188",
    href: "https://doi.org/10.3390/ECONOMIES10080188",
  },
  {
    year: "2022",
    type: "Artículo científico",
    title: "Effects of work-family conflict on university staff. A case study",
    journal: "Revista Venezolana de Gerencia",
    area: "Conflicto trabajo-familia y desempeño laboral",
    doi: "10.52080/RVGLUZ.27.7.8",
    href: "https://doi.org/10.52080/RVGLUZ.27.7.8",
  },
  {
    year: "2020",
    type: "Artículo científico",
    title:
      "SEM model based on organizational values and intellectual capital: a study conducted in entities of the Peruvian financial system",
    journal: "Retos",
    area: "SEM, valores organizacionales y capital intelectual",
    doi: "10.17163/RET.N19.2020.01",
    href: "https://doi.org/10.17163/RET.N19.2020.01",
  },
];

const services = [
  {
    icon: Search,
    title: "Diseño metodológico",
    description:
      "Convierto una idea de investigación en un diseño sólido: problema, objetivos, hipótesis, variables, instrumentos y ruta analítica.",
    badge: "Tesis · Artículos · Proyectos",
  },
  {
    icon: BarChart3,
    title: "Analítica estadística",
    description:
      "Proceso e interpreto datos con SEM, psicometría, machine learning, modelos predictivos y análisis multivariado.",
    badge: "SEM · ML · Psicometría",
  },
  {
    icon: FileText,
    title: "Publicación científica",
    description:
      "Acompaño la estructuración de artículos, revisión metodológica, estrategia de revista y respuesta a revisores.",
    badge: "Scopus · WoS · Indexación",
  },
  {
    icon: Users,
    title: "Formación investigativa",
    description:
      "Diseño talleres prácticos para docentes, semilleros, estudiantes y equipos que desean publicar y analizar mejor.",
    badge: "Talleres · Mentorías",
  },
];

const researchAreas = [
  "Ciencias empresariales",
  "Comportamiento organizacional",
  "Psicometría aplicada",
  "Ecuaciones estructurales",
  "Machine learning aplicado",
  "Redes psicológicas",
  "Investigación formativa",
  "Riesgo crediticio",
];

const projects = [
  {
    title: "Predicción de la informalidad laboral en el Perú",
    period: "2026–2027",
    description:
      "Modelo de clasificación supervisada con factores sociodemográficos, educativos, territoriales y ocupacionales usando microdatos ENAHO.",
  },
  {
    title: "Apoyo organizacional, empleabilidad sostenible y resiliencia",
    period: "2025–2026",
    description:
      "Análisis multivariado sobre interacciones dinámicas en servidores de una universidad pública.",
  },
  {
    title: "Comportamiento crediticio y crédito hipotecario en hogares peruanos",
    period: "2024–2025",
    description:
      "Estudio de factores socioeconómicos, fuentes de financiamiento y crédito hipotecario mediante lógica difusa.",
  },
  {
    title: "Riesgo crediticio del Programa Reactiva Perú",
    period: "2022",
    description:
      "Modelo predictivo de machine learning para estimar riesgo crediticio en empresas beneficiarias del programa.",
  },
];

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className = "", variant = "default", size = "default", asChild = false }) {
  const base =
    "inline-flex items-center justify-center font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-slate-950 text-white hover:bg-slate-800",
    outline: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50",
    ghost: "hover:bg-slate-100",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8",
  };
  const child = React.Children.only(children);
  if (asChild && React.isValidElement(child)) {
    return React.cloneElement(child, {
      className: `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className} ${child.props.className || ""}`,
    });
  }
  return <button className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`}>{children}</button>;
}

function LinkedInMark({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.94 8.98H3.78v10.1h3.16V8.98Z" fill="currentColor" />
      <path d="M5.36 7.6a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68Z" fill="currentColor" />
      <path d="M12.02 13.78c0-1.42.66-2.27 1.92-2.27 1.16 0 1.72.82 1.72 2.27v5.3h3.16v-5.7c0-3.05-1.63-4.52-3.91-4.52-1.8 0-2.61.99-3.06 1.69V8.98H8.82v10.1h3.2v-5.3Z" fill="currentColor" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f3ec] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f3ec]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="group flex items-center gap-3 text-base font-black tracking-tight text-slate-950" aria-label="Ir al inicio">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm text-white shadow-lg shadow-slate-900/20">LG</span>
            <span className="hidden sm:inline">Luis Geraldo Campos</span>
          </a>
          <nav className="hidden items-center gap-2 rounded-full bg-white/70 p-1 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-black/5 md:flex" aria-label="Navegación principal">
            <a href="#sobre-mi" className="rounded-full px-4 py-2 hover:bg-slate-950 hover:text-white">Perfil</a>
            <a href="#publicaciones" className="rounded-full px-4 py-2 hover:bg-slate-950 hover:text-white">Publicaciones</a>
            <a href="#proyectos" className="rounded-full px-4 py-2 hover:bg-slate-950 hover:text-white">Proyectos</a>
            <a href="#servicios" className="rounded-full px-4 py-2 hover:bg-slate-950 hover:text-white">Servicios</a>
          </nav>
          <Button asChild className="hidden rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800 md:inline-flex">
            <a href="#contacto">Contactar</a>
          </Button>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden px-6 py-12 md:py-20">
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute left-[-10%] top-10 h-96 w-96 rounded-full bg-amber-300/40 blur-3xl" />
            <div className="absolute right-[-10%] top-32 h-[28rem] w-[28rem] rounded-full bg-cyan-300/35 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-300/25 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Investigación aplicada · Datos · Publicación científica
              </p>
              <h1 className="max-w-5xl text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-7xl">
                Convierto datos e investigación en evidencia que impulsa decisiones.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                Soy Luis Alberto Geraldo Campos, docente investigador, RENACYT Nivel III y especialista en métodos cuantitativos avanzados. Ayudo a instituciones, investigadores y equipos académicos a diseñar estudios, analizar datos y publicar conocimiento con impacto.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-slate-950 px-7 py-6 text-base text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800">
                  <a href="#servicios">Ver cómo puedo ayudarte <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-slate-300 bg-white/70 px-7 py-6 text-base hover:bg-white">
                  <a href="#publicaciones">Explorar mi producción</a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {researchAreas.slice(0, 5).map((area) => (
                  <span key={area} className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-black/5">{area}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-[2rem] bg-slate-950" />
              <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-amber-300" />
              <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/25">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/25 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-2xl" />
                <div className="relative grid gap-5">
                  <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-black/20">
                    <img src={siteConfig.photo} alt="Luis Alberto Geraldo Campos" className="h-[420px] w-full rounded-[1.5rem] object-cover object-top" />
                  </div>
                  <div className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-300">Sitio oficial</p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight">{siteConfig.domain}</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-300">Dr. en formación · Investigador · Mentor metodológico</p>
                      </div>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-white text-slate-950">
                        <GraduationCap className="h-7 w-7" />
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {stats.map((item) => (
                      <div key={item.label} className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur">
                        <p className="text-2xl font-black">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-3xl bg-white p-5 text-slate-950">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Especialidad</p>
                    <p className="mt-2 text-lg font-black">SEM · Machine Learning · Psicometría · Redes psicológicas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-5 md:grid-cols-3">
            {brandPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} className="rounded-[2rem] border-0 bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon className="h-6 w-6" /></div>
                    <h3 className="text-xl font-black tracking-tight">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-slate-500">Perfil</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Una voz académica moderna para unir ciencia, datos e impacto profesional.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>Me desempeño como docente investigador en la Universidad Tecnológica del Perú. Mi trayectoria combina docencia universitaria, coordinación de investigación, dirección de innovación, edición académica, asesoría de tesis y producción científica indexada.</p>
              <p>Mi trabajo se enfoca en ciencias empresariales y del comportamiento, con énfasis en metodología multivariada, modelamiento de ecuaciones estructurales, técnicas de machine learning y redes psicológicas para explicar y predecir fenómenos organizacionales, educativos y sociales.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {researchAreas.map((area) => (
                  <span key={area} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-black/5">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <div>
                <p className="font-black uppercase tracking-[0.25em] text-cyan-200">Servicios</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Servicios para investigar, analizar y publicar mejor.</h2>
              </div>
              <p className="text-lg leading-8 text-slate-300">Trabajo con universidades, investigadores, semilleros, estudiantes de posgrado e instituciones que necesitan acompañamiento técnico, claridad metodológica y resultados comunicables.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="rounded-[2rem] border-white/10 bg-white/10 text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-slate-950 hover:shadow-2xl">
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950"><Icon className="h-6 w-6" /></div>
                      <span className="rounded-full bg-cyan-300/20 px-3 py-1 text-xs font-bold text-cyan-100 ring-1 ring-cyan-200/20">{service.badge}</span>
                      <h3 className="mt-4 text-xl font-black">{service.title}</h3>
                      <p className="mt-3 leading-7 opacity-80">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="publicaciones" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-black uppercase tracking-[0.25em] text-slate-500">Publicaciones</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Producción científica destacada</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Una selección de trabajos indexados sobre comportamiento organizacional, psicometría, educación, machine learning y ciencias empresariales.</p>
              </div>
              <Button asChild className="rounded-full bg-slate-950 px-6 py-6 text-white hover:bg-slate-800">
                <a href={profileLinks[0].href} target="_blank" rel="noreferrer">Ver Google Scholar <ExternalLink className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
            <div className="grid gap-5">
              {publications.map((pub, index) => (
                <Card key={`${pub.year}-${pub.title}`} className="group overflow-hidden rounded-[2rem] border-0 bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="grid gap-5 p-0 md:grid-cols-[150px_1fr_190px] md:items-stretch">
                    <div className="flex flex-row items-center gap-4 bg-slate-950 p-6 text-white md:flex-col md:items-start md:justify-between">
                      <p className="text-3xl font-black">{pub.year}</p>
                      <p className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">{pub.type}</p>
                    </div>
                    <div className="p-6">
                      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Publicación #{index + 1}</p>
                      <h3 className="text-xl font-black tracking-tight text-slate-950">{pub.title}</h3>
                      <p className="mt-3 text-slate-600">{pub.journal}</p>
                      <p className="mt-2 text-sm font-bold text-slate-500">{pub.area}</p>
                      <p className="mt-2 text-xs text-slate-500">DOI: {pub.doi}</p>
                    </div>
                    <div className="flex items-center p-6 pt-0 md:p-6">
                      <Button asChild variant="outline" className="w-full rounded-full border-slate-300 bg-white group-hover:bg-slate-950 group-hover:text-white">
                        <a href={pub.href} target="_blank" rel="noreferrer">Ver DOI <ExternalLink className="ml-2 h-4 w-4" /></a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="font-black uppercase tracking-[0.25em] text-slate-500">Proyectos</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Investigación aplicada con impacto académico e institucional.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Proyectos orientados a modelar, explicar y predecir fenómenos vinculados al trabajo, la educación, las finanzas y el comportamiento social.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title} className="rounded-[2rem] border-0 bg-[#f7f3ec] shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-7">
                    <p className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">{project.period}</p>
                    <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">{project.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="divulgacion" className="relative overflow-hidden bg-[#f7f3ec] py-20">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative">
              <p className="font-black uppercase tracking-[0.25em] text-slate-500">Divulgación</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Ciencia aplicada en lenguaje claro.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Un espacio para compartir notas breves, guías metodológicas, recursos de análisis de datos, materiales de capacitación y reflexiones sobre producción científica.</p>
            </div>
            <div className="relative grid gap-5">
              <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <BookOpen className="mb-4 h-7 w-7 text-slate-950" />
                <h3 className="text-xl font-black">Notas de investigación</h3>
                <p className="mt-2 text-slate-600">Resúmenes de publicaciones, modelos, métodos y hallazgos relevantes.</p>
              </div>
              <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl shadow-slate-900/20">
                <PenTool className="mb-4 h-7 w-7" />
                <h3 className="text-xl font-black">Guías metodológicas</h3>
                <p className="mt-2 text-slate-300">Materiales sobre SEM, psicometría, machine learning, análisis multivariado y redacción científica.</p>
              </div>
              <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <Briefcase className="mb-4 h-7 w-7 text-slate-950" />
                <h3 className="text-xl font-black">Conferencias y talleres</h3>
                <p className="mt-2 text-slate-600">Actividades de formación para fortalecer competencias de investigación y producción científica.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 py-20">
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-2xl shadow-slate-900/20">
            <div className="grid gap-10 p-8 md:grid-cols-[1fr_0.9fr] md:items-center md:p-12">
              <div>
                <p className="font-black uppercase tracking-[0.25em] text-cyan-200">Contacto</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Trabajemos en una investigación con método, datos e impacto.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Escríbeme para colaboraciones académicas, asesorías metodológicas, análisis de datos, talleres, publicaciones científicas o proyectos institucionales.</p>
                <Button asChild className="mt-8 rounded-full bg-white px-7 py-6 text-base text-slate-950 hover:bg-slate-100">
                  <a href="mailto:albert.adm91@gmail.com">Escribirme ahora <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-5 ring-1 ring-white/10">
                <div className="space-y-3">
                  <a href="mailto:albert.adm91@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-900 shadow-sm hover:bg-cyan-50"><Mail className="h-5 w-5" /> albert.adm91@gmail.com</a>
                  <a href="https://www.researchgate.net/profile/Luis-Geraldo-Campos-2" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-900 shadow-sm hover:bg-cyan-50"><LinkedInMark className="h-5 w-5" /> ResearchGate / perfil académico</a>
                  {profileLinks.slice(0, 4).map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-900 shadow-sm hover:bg-cyan-50"><ExternalLink className="h-5 w-5" /> {link.label}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f7f3ec] py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm font-semibold text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Luis Alberto Geraldo Campos. Todos los derechos reservados.</p>
          <p>{siteConfig.domain} · Investigación aplicada · Analítica de datos · Publicación científica</p>
        </div>
      </footer>
    </div>
  );
}
