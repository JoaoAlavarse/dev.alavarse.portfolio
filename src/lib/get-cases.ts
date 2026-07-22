import type {
  CaseSection,
  CaseSectionId,
  EngineeringDecision,
  ICase,
  IProject,
  Locale,
} from "@/interfaces";
import { kerooticaEvidence } from "@/lib/cases/kerootica";
import { getProjects } from "@/lib/get-projects";

const SECTION_ORDER: CaseSectionId[] = [
  "executiveSummary",
  "context",
  "problem",
  "restrictions",
  "role",
  "responsibilities",
  "stakeholders",
  "successCriteria",
  "alternatives",
  "decision",
  "architecture",
  "flow",
  "technologies",
  "tradeoffs",
  "execution",
  "challenges",
  "result",
  "impact",
  "limitations",
  "learnings",
  "principles",
];

const labels = {
  pt: {
    unavailable: "Informação não publicada no portfólio atual.",
    gap: (text: string) => `Lacuna: ${text}`,
    objective:
      "Demonstrar competência em Engenharia de Software a partir de evidências reais do projeto.",
    competencies: [
      "Engenharia de software em sistemas reais",
      "Execução Full Stack",
      "Comunicação técnica",
    ],
    sections: {
      executiveSummary: "Resumo executivo",
      context: "Contexto",
      problem: "Problema",
      restrictions: "Restrições",
      role: "Meu papel",
      responsibilities: "Responsabilidades",
      stakeholders: "Stakeholders",
      successCriteria: "Critérios de sucesso",
      alternatives: "Alternativas consideradas",
      decision: "Decisão tomada",
      architecture: "Arquitetura",
      flow: "Fluxo da solução",
      technologies: "Tecnologias utilizadas",
      tradeoffs: "Trade-offs",
      execution: "Execução",
      challenges: "Principais desafios",
      result: "Resultado",
      impact: "Impacto",
      limitations: "Limitações",
      learnings: "Aprendizados",
      principles: "Princípios de Engenharia extraídos do case",
    } satisfies Record<CaseSectionId, string>,
  },
  en: {
    unavailable: "Information not published in the current portfolio.",
    gap: (text: string) => `Gap: ${text}`,
    objective:
      "Demonstrate Software Engineering competence through real project evidence.",
    competencies: [
      "Software engineering in real systems",
      "Full Stack execution",
      "Technical communication",
    ],
    sections: {
      executiveSummary: "Executive summary",
      context: "Context",
      problem: "Problem",
      restrictions: "Restrictions",
      role: "My role",
      responsibilities: "Responsibilities",
      stakeholders: "Stakeholders",
      successCriteria: "Success criteria",
      alternatives: "Alternatives considered",
      decision: "Decision made",
      architecture: "Architecture",
      flow: "Solution flow",
      technologies: "Technologies used",
      tradeoffs: "Trade-offs",
      execution: "Execution",
      challenges: "Main challenges",
      result: "Result",
      impact: "Impact",
      limitations: "Limitations",
      learnings: "Learnings",
      principles: "Engineering principles extracted from the case",
    } satisfies Record<CaseSectionId, string>,
  },
  es: {
    unavailable: "Información no publicada en el portfolio actual.",
    gap: (text: string) => `Brecha: ${text}`,
    objective:
      "Demostrar competencia en Ingeniería de Software a partir de evidencias reales del proyecto.",
    competencies: [
      "Ingeniería de software en sistemas reales",
      "Ejecución Full Stack",
      "Comunicación técnica",
    ],
    sections: {
      executiveSummary: "Resumen ejecutivo",
      context: "Contexto",
      problem: "Problema",
      restrictions: "Restricciones",
      role: "Mi rol",
      responsibilities: "Responsabilidades",
      stakeholders: "Stakeholders",
      successCriteria: "Criterios de éxito",
      alternatives: "Alternativas consideradas",
      decision: "Decisión tomada",
      architecture: "Arquitectura",
      flow: "Flujo de la solución",
      technologies: "Tecnologías utilizadas",
      tradeoffs: "Trade-offs",
      execution: "Ejecución",
      challenges: "Principales desafíos",
      result: "Resultado",
      impact: "Impacto",
      limitations: "Limitaciones",
      learnings: "Aprendizajes",
      principles: "Principios de Ingeniería extraídos del caso",
    } satisfies Record<CaseSectionId, string>,
  },
};

const strongestCompetenciesByProject: Record<
  string,
  Partial<Record<Locale, string[]>>
> = {
  hemoup: {
    pt: ["Produto e inovação", "Liderança técnica", "Validação com stakeholders"],
    en: ["Product and innovation", "Technical leadership", "Stakeholder validation"],
    es: ["Producto e innovacion", "Liderazgo tecnico", "Validacion con stakeholders"],
  },
  zshop: {
    pt: ["Sistemas distribuídos", "Infraestrutura", "Integrações"],
    en: ["Distributed systems", "Infrastructure", "Integrations"],
    es: ["Sistemas distribuidos", "Infraestructura", "Integraciones"],
  },
  pupilens: {
    pt: ["Performance mobile", "Manipulação visual complexa", "Experiência de usuário"],
    en: ["Mobile performance", "Complex visual manipulation", "User experience"],
    es: ["Performance mobile", "Manipulación visual compleja", "Experiencia de usuario"],
  },
  batterycommerce: {
    pt: ["Regras de negócio", "Integrações externas", "Documentação técnica"],
    en: ["Business rules", "External integrations", "Technical documentation"],
    es: ["Reglas de negocio", "Integraciones externas", "Documentación técnica"],
  },
};

const projectRelations: Record<string, string[]> = {
  hemoup: ["batterycommerce"],
  zshop: ["batterycommerce"],
  pupilens: ["kerootica"],
  kerootica: ["pupilens"],
  batterycommerce: ["zshop", "hemoup"],
};

const projectObjectives: Partial<Record<string, Record<Locale, string>>> = {
  hemoup: {
    pt: "Demonstrar ownership de produto e liderança técnica desde a validação do problema até a definição do MVP em um contexto de pré-incubação/incubação.",
    en: "Demonstrate product ownership and technical leadership from problem validation to MVP definition in a pre-incubation/incubation context.",
    es: "Demostrar ownership de producto y liderazgo técnico desde la validación del problema hasta la definición del MVP en un contexto de preincubación/incubación.",
  },
  zshop: {
    pt: "Demonstrar execução Full Stack em sistema distribuído com múltiplos repositórios, integrações e infraestrutura.",
    en: "Demonstrate Full Stack execution in a distributed system with multiple repositories, integrations, and infrastructure.",
    es: "Demostrar ejecución Full Stack en un sistema distribuido con múltiples repositorios, integraciones e infraestructura.",
  },
  pupilens: {
    pt: "Demonstrar engenharia mobile com performance e manipulação visual complexa em um produto de demonstração de lentes.",
    en: "Demonstrate mobile engineering with performance and complex visual manipulation in a lens demonstration product.",
    es: "Demostrar ingeniería mobile con performance y manipulación visual compleja en un producto de demostración de lentes.",
  },
  batterycommerce: {
    pt: "Demonstrar capacidade de construir um e-commerce completo com regras de negócio, integrações e documentação técnica em contexto acadêmico de TCC.",
    en: "Demonstrate the ability to build a complete e-commerce with business rules, integrations, and technical documentation in an undergraduate thesis context.",
    es: "Demostrar capacidad de construir un e-commerce completo con reglas de negocio, integraciones y documentación técnica en contexto académico de tesis.",
  },
};

type SectionEvidence = Partial<Record<CaseSectionId, string[]>>;

const evidenceByProject: Partial<
  Record<string, Partial<Record<Locale, SectionEvidence>>>
> = {
  hemoup: {
    pt: {
      executiveSummary: [
        "Produto próprio voltado à doação de sangue, originado de uma dor observada no processo real de doação.",
        "Papel: fundador, responsável técnico e desenvolvedor Full Stack.",
        "Houve validação com hemocentro, estudos de mercado, projeções financeiras e seleção em 1º lugar em edital de pré-incubação.",
        "Estado atual: desenvolvimento do produto previsto para iniciar em 2026.",
      ],
      context: [
        "Produto próprio voltado para doação de sangue.",
        "Participou de programas de pré-incubação e incubação.",
        "Houve contato com hemocentros, estudos de mercado e projeções financeiras.",
        "A prefeitura da cidade lançava projetos de pré-incubação/incubação para fomentar startups locais.",
      ],
      problem: [
        "O processo de doação de sangue apresentava dificuldades percebidas na experiência real de doação.",
        "Havia oportunidade de tornar o processo mais fácil, organizado e engajador para doadores.",
        "Lacuna: formulação detalhada das falhas operacionais do processo atual e consequências mensuráveis de não resolver o problema.",
      ],
      restrictions: [
        "Produto em fase de descoberta/validação, com desenvolvimento previsto para 2026.",
        "Necessidade de alinhar solução com hemocentros e com o contexto de pré-incubação/incubação.",
        "Lacuna: restrições explícitas de prazo técnico, equipe e stack alvo ainda não documentadas no case.",
      ],
      role: [
        "Fundador e Desenvolvedor Full Stack.",
        "Responsável técnico do produto.",
      ],
      responsibilities: [
        "Fundador.",
        "Desenvolvimento mobile.",
        "Backend.",
        "Análise de requisitos.",
        "Pesquisa de mercado.",
        "Marketing.",
        "Planejamento do produto.",
        "Projeção financeira e de custos.",
        "Definição do MVP.",
      ],
      stakeholders: [
        "Hemocentros consultados durante a validação do problema.",
        "Programa de pré-incubação/incubação municipal.",
      ],
      successCriteria: [
        "Lacuna: critérios observáveis de sucesso do MVP e da validação com hemocentros.",
      ],
      alternatives: [
        "Lacuna: alternativas de produto e de arquitetura consideradas antes da definição do MVP.",
      ],
      decision: [
        "Definir o HemoUp como plataforma para facilitar e organizar o processo de doação de sangue.",
        "Priorizar validação com hemocentros, estudos de mercado e projeções antes do início do desenvolvimento em 2026.",
        "Lacuna: decisões técnicas centrais de arquitetura ainda não documentadas.",
      ],
      architecture: [
        "Lacuna: arquitetura do produto (mobile, backend, serviços e integrações).",
      ],
      flow: [
        "Lacuna: fluxo principal do doador e fluxos operacionais com hemocentros.",
      ],
      tradeoffs: ["Lacuna: trade-offs técnicos e de produto."],
      execution: [
        "Validação do problema com a equipe do hemocentro da cidade.",
        "Participação em mentorias de marketing, gestão, captação de recursos e jurídico via pré-incubação/incubação.",
        "Construção de base de planejamento de produto, custos e faturamento.",
        "Seleção em 1º lugar no edital de pré-incubação.",
      ],
      challenges: [
        "Traduzir uma dor observada no processo de doação em proposta de produto validável.",
        "Combinar responsabilidades técnicas com validação de negócio, marketing e projeções.",
      ],
      result: [
        "Selecionado em 1º lugar no edital de pré-incubação.",
        "Desenvolvimento previsto para iniciar em 2026.",
        "Lacuna: estado atual detalhado do MVP.",
      ],
      impact: [
        "Lacuna: validações realizadas, stakeholders públicos adicionais e impacto observado.",
      ],
      limitations: [
        "O case cobre principalmente descoberta, validação e planejamento; a execução de desenvolvimento ainda não começou no período descrito.",
        "Detalhes técnicos profundos ainda não estão disponíveis publicamente.",
      ],
      learnings: [
        "Lacuna: aprendizados específicos derivados das decisões de produto e técnica ainda não documentados.",
      ],
      principles: [
        "Validar o problema com stakeholders reais (hemocentros) antes de iniciar o desenvolvimento.",
        "Lacuna: princípios adicionais após o início da execução técnica.",
      ],
    },
    en: {
      executiveSummary: [
        "Own product focused on blood donation, originated from friction observed in a real donation process.",
        "Role: founder, technical owner, and Full Stack developer.",
        "Included validation with a blood center, market studies, financial projections, and 1st place selection in a pre-incubation call.",
        "Current state: product development planned to start in 2026.",
      ],
      context: [
        "Own product focused on blood donation.",
        "Participated in pre-incubation and incubation programs.",
        "Included contact with blood centers, market studies, and financial projections.",
      ],
      problem: [
        "The blood donation process presented difficulties observed in a real donation experience.",
        "There was an opportunity to make the process easier, more organized, and more engaging for donors.",
        "Gap: detailed formulation of operational failures and measurable consequences of inaction.",
      ],
      restrictions: [
        "Product in discovery/validation phase, with development planned for 2026.",
        "Need to align the solution with blood centers and the pre-incubation/incubation context.",
        "Gap: explicit constraints on technical timeline, team, and target stack are not yet documented in the case.",
      ],
      role: ["Founder and Full Stack Developer.", "Technical owner of the product."],
      responsibilities: [
        "Founder.",
        "Mobile development.",
        "Backend.",
        "Requirements analysis.",
        "Market research.",
        "Marketing.",
        "Product planning.",
        "Financial and cost projection.",
        "MVP definition.",
      ],
      stakeholders: [
        "Blood centers consulted during problem validation.",
        "Municipal pre-incubation/incubation program.",
      ],
      successCriteria: [
        "Gap: observable success criteria for the MVP and blood-center validation.",
      ],
      alternatives: [
        "Gap: product and architecture alternatives considered before MVP definition.",
      ],
      decision: [
        "Define HemoUp as a platform to make blood donation easier and more organized.",
        "Prioritize validation with blood centers, market studies, and projections before development starts in 2026.",
        "Gap: central technical architecture decisions are not yet documented.",
      ],
      architecture: ["Gap: product architecture (mobile, backend, services, and integrations)."],
      flow: ["Gap: main donor flow and operational flows with blood centers."],
      tradeoffs: ["Gap: technical and product trade-offs."],
      execution: [
        "Problem validation with the local blood center team.",
        "Participation in mentorships on marketing, management, fundraising, and legal topics via pre-incubation/incubation.",
        "Product, cost, and revenue planning foundation.",
        "1st place selection in the pre-incubation call.",
      ],
      challenges: [
        "Translate a real donation-process pain into a validatable product proposal.",
        "Combine technical responsibilities with business validation, marketing, and projections.",
      ],
      result: [
        "Selected 1st place in the pre-incubation call.",
        "Development planned to start in 2026.",
        "Gap: detailed current MVP status.",
      ],
      impact: [
        "Gap: validations performed, additional public stakeholders, and observed impact.",
      ],
      limitations: [
        "The case mainly covers discovery, validation, and planning; development execution had not started in the described period.",
        "Deep technical details are not yet publicly available.",
      ],
      learnings: [
        "Gap: specific learnings derived from product and technical decisions are not yet documented.",
      ],
      principles: [
        "Validate the problem with real stakeholders (blood centers) before starting development.",
        "Gap: additional principles after technical execution begins.",
      ],
    },
    es: {
      executiveSummary: [
        "Producto propio enfocado en donación de sangre, originado en fricciones observadas en un proceso real de donación.",
        "Rol: fundador, responsable técnico y desarrollador Full Stack.",
        "Incluyó validación con hemocentro, estudios de mercado, proyecciones financieras y selección en 1.er lugar en una convocatoria de preincubación.",
        "Estado actual: desarrollo del producto previsto para iniciar en 2026.",
      ],
      context: [
        "Producto propio enfocado en donación de sangre.",
        "Participó en programas de preincubación e incubación.",
        "Incluyó contacto con hemocentros, estudios de mercado y proyecciones financieras.",
      ],
      problem: [
        "El proceso de donación de sangre presentaba dificultades observadas en una experiencia real de donación.",
        "Había oportunidad de hacer el proceso más fácil, organizado y atractivo para donantes.",
        "Brecha: formulación detallada de fallas operativas y consecuencias medibles de no resolver el problema.",
      ],
      restrictions: [
        "Producto en fase de descubrimiento/validación, con desarrollo previsto para 2026.",
        "Necesidad de alinear la solución con hemocentros y con el contexto de preincubación/incubación.",
        "Brecha: restricciones explícitas de plazo técnico, equipo y stack objetivo aún no documentadas en el caso.",
      ],
      role: ["Fundador y Desarrollador Full Stack.", "Responsable técnico del producto."],
      responsibilities: [
        "Fundador.",
        "Desarrollo mobile.",
        "Backend.",
        "Análisis de requisitos.",
        "Investigación de mercado.",
        "Marketing.",
        "Planificación del producto.",
        "Proyección financiera y de costos.",
        "Definición del MVP.",
      ],
      stakeholders: [
        "Hemocentros consultados durante la validación del problema.",
        "Programa municipal de preincubación/incubación.",
      ],
      successCriteria: [
        "Brecha: criterios observables de éxito del MVP y de la validación con hemocentros.",
      ],
      alternatives: [
        "Brecha: alternativas de producto y de arquitectura consideradas antes de la definición del MVP.",
      ],
      decision: [
        "Definir HemoUp como plataforma para facilitar y organizar el proceso de donación de sangre.",
        "Priorizar validación con hemocentros, estudios de mercado y proyecciones antes del inicio del desarrollo en 2026.",
        "Brecha: decisiones técnicas centrales de arquitectura aún no documentadas.",
      ],
      architecture: ["Brecha: arquitectura del producto (mobile, backend, servicios e integraciones)."],
      flow: ["Brecha: flujo principal del donante y flujos operativos con hemocentros."],
      tradeoffs: ["Brecha: trade-offs técnicos y de producto."],
      execution: [
        "Validación del problema con el equipo del hemocentro de la ciudad.",
        "Participación en mentorías de marketing, gestión, captación de recursos y jurídico vía preincubación/incubación.",
        "Construcción de base de planificación de producto, costos y facturación.",
        "Selección en 1.er lugar en la convocatoria de preincubación.",
      ],
      challenges: [
        "Traducir un dolor observado en el proceso de donación en una propuesta de producto validable.",
        "Combinar responsabilidades técnicas con validación de negocio, marketing y proyecciones.",
      ],
      result: [
        "Seleccionado en 1.er lugar en la convocatoria de preincubación.",
        "Desarrollo previsto para iniciar en 2026.",
        "Brecha: estado actual detallado del MVP.",
      ],
      impact: [
        "Brecha: validaciones realizadas, stakeholders públicos adicionales e impacto observado.",
      ],
      limitations: [
        "El caso cubre principalmente descubrimiento, validación y planificación; la ejecución de desarrollo aún no había comenzado en el período descrito.",
        "Detalles técnicos profundos aún no están disponibles públicamente.",
      ],
      learnings: [
        "Brecha: aprendizajes específicos derivados de las decisiones de producto y técnica aún no documentados.",
      ],
      principles: [
        "Validar el problema con stakeholders reales (hemocentros) antes de iniciar el desarrollo.",
        "Brecha: principios adicionales después del inicio de la ejecución técnica.",
      ],
    },
  },
  zshop: {
    pt: {
      executiveSummary: [
        "Sistema de atendimento e vendas distribuído em aproximadamente seis repositórios, com Docker, CI/CD e integrações com WhatsApp, pagamentos e fretes.",
        "Papel: Desenvolvedor Full Stack com atuação transversal nos repositórios do sistema.",
        "Lacuna: decisão arquitetural central, trade-offs e resultados ainda não documentados publicamente.",
      ],
      context: [
        "Sistema de atendimento e vendas dividido em aproximadamente seis repositórios.",
        "Utiliza Docker, possui pipeline de CI/CD e integrações com WhatsApp, pagamentos e fretes.",
      ],
      problem: [
        "Lacuna: problema de negócio/técnico que motivou a arquitetura distribuída e as integrações ainda não documentado no case.",
      ],
      restrictions: [
        "Sistema composto por múltiplos repositórios que precisam operar de forma coordenada.",
        "Dependência de integrações externas (WhatsApp, pagamentos e fretes).",
        "Lacuna: restrições de prazo, equipe e continuidade operacional ainda não documentadas.",
      ],
      role: ["Desenvolvedor Full Stack."],
      responsibilities: [
        "Desenvolvimento Full Stack.",
        "Desenvolvimento mobile.",
        "Orquestração Docker.",
        "Análise de requisitos.",
        "CI/CD.",
        "Atuação nos repositórios: API, Front Administrativo, Front Catálogo, APP Mobile, Integração com WhatsApp e orquestrador Docker.",
      ],
      stakeholders: [
        "Lacuna: stakeholders de negócio e técnicos envolvidos nas decisões do sistema.",
      ],
      successCriteria: ["Lacuna: critérios de sucesso do sistema e da atuação no projeto."],
      alternatives: ["Lacuna: alternativas arquiteturais consideradas."],
      decision: ["Lacuna: decisões arquiteturais centrais e sua justificativa."],
      architecture: [
        "Sistema distribuído em aproximadamente seis repositórios.",
        "Orquestração de instâncias Docker para integrações.",
        "Lacuna: decisões arquiteturais, fronteiras entre serviços e fluxos.",
      ],
      flow: ["Lacuna: fluxos de atendimento, vendas e integrações."],
      tradeoffs: ["Lacuna: trade-offs entre distribuição de repositórios, integrações e operação."],
      execution: [
        "Atuação transversal nos seis repositórios do sistema.",
        "Implementação e manutenção de orquestração Docker e pipeline de CI/CD.",
      ],
      challenges: [
        "Atuação simultânea em múltiplos repositórios.",
        "Orquestração Docker para integrações.",
      ],
      result: ["Lacuna: resultados obtidos."],
      impact: ["Lacuna: impacto observado no atendimento/vendas."],
      limitations: [
        "O case público atual descreve estrutura e atuação, mas ainda não documenta decisões e resultados com profundidade de engenharia.",
      ],
      learnings: ["Lacuna: aprendizados derivados de decisões técnicas."],
      principles: ["Lacuna: princípios de Engenharia extraídos após consolidar decisões e resultados."],
    },
    en: {
      executiveSummary: [
        "Sales and service system distributed across approximately six repositories, with Docker, CI/CD, and integrations with WhatsApp, payments, and shipping.",
        "Role: Full Stack Developer with cross-cutting work across system repositories.",
        "Gap: central architectural decision, trade-offs, and results are not yet publicly documented.",
      ],
      context: [
        "Sales and service system split across approximately six repositories.",
        "Uses Docker, has a CI/CD pipeline, and integrations with WhatsApp, payments, and shipping.",
      ],
      problem: [
        "Gap: business/technical problem that motivated the distributed architecture and integrations is not yet documented in the case.",
      ],
      restrictions: [
        "System composed of multiple repositories that must operate in a coordinated way.",
        "Dependency on external integrations (WhatsApp, payments, and shipping).",
        "Gap: timeline, team, and operational continuity constraints are not yet documented.",
      ],
      role: ["Full Stack Developer."],
      responsibilities: [
        "Full Stack development.",
        "Mobile development.",
        "Docker orchestration.",
        "Requirements analysis.",
        "CI/CD.",
        "Work across repositories: API, Admin Front, Catalog Front, Mobile App, WhatsApp integration, and Docker orchestrator.",
      ],
      stakeholders: ["Gap: business and technical stakeholders involved in system decisions."],
      successCriteria: ["Gap: system and contribution success criteria."],
      alternatives: ["Gap: architectural alternatives considered."],
      decision: ["Gap: central architectural decisions and their justification."],
      architecture: [
        "System distributed across approximately six repositories.",
        "Orchestration of Docker instances for integrations.",
        "Gap: architectural decisions, service boundaries, and flows.",
      ],
      flow: ["Gap: service, sales, and integration flows."],
      tradeoffs: ["Gap: trade-offs among repository distribution, integrations, and operations."],
      execution: [
        "Cross-cutting work across the system's six repositories.",
        "Implementation and maintenance of Docker orchestration and CI/CD pipeline.",
      ],
      challenges: [
        "Simultaneous work across multiple repositories.",
        "Docker orchestration for integrations.",
      ],
      result: ["Gap: results obtained."],
      impact: ["Gap: observed impact on service/sales."],
      limitations: [
        "The current public case describes structure and contribution, but does not yet document decisions and results with engineering depth.",
      ],
      learnings: ["Gap: learnings derived from technical decisions."],
      principles: ["Gap: Engineering principles extracted after consolidating decisions and results."],
    },
    es: {
      executiveSummary: [
        "Sistema de atención y ventas distribuido en aproximadamente seis repositorios, con Docker, CI/CD e integraciones con WhatsApp, pagos y envíos.",
        "Rol: Desarrollador Full Stack con actuación transversal en los repositorios del sistema.",
        "Brecha: decisión arquitectónica central, trade-offs y resultados aún no documentados públicamente.",
      ],
      context: [
        "Sistema de atención y ventas dividido en aproximadamente seis repositorios.",
        "Utiliza Docker, posee pipeline de CI/CD e integraciones con WhatsApp, pagos y envíos.",
      ],
      problem: [
        "Brecha: problema de negocio/técnico que motivó la arquitectura distribuida y las integraciones aún no documentado en el caso.",
      ],
      restrictions: [
        "Sistema compuesto por múltiples repositorios que deben operar de forma coordinada.",
        "Dependencia de integraciones externas (WhatsApp, pagos y envíos).",
        "Brecha: restricciones de plazo, equipo y continuidad operacional aún no documentadas.",
      ],
      role: ["Desarrollador Full Stack."],
      responsibilities: [
        "Desarrollo Full Stack.",
        "Desarrollo mobile.",
        "Orquestación Docker.",
        "Análisis de requisitos.",
        "CI/CD.",
        "Actuación en repositorios: API, Front Administrativo, Front Catálogo, APP Mobile, Integración con WhatsApp y orquestador Docker.",
      ],
      stakeholders: ["Brecha: stakeholders de negocio y técnicos involucrados en las decisiones del sistema."],
      successCriteria: ["Brecha: criterios de éxito del sistema y de la actuación en el proyecto."],
      alternatives: ["Brecha: alternativas arquitecturales consideradas."],
      decision: ["Brecha: decisiones arquitecturales centrales y su justificación."],
      architecture: [
        "Sistema distribuido en aproximadamente seis repositorios.",
        "Orquestación de instancias Docker para integraciones.",
        "Brecha: decisiones arquitecturales, fronteras entre servicios y flujos.",
      ],
      flow: ["Brecha: flujos de atención, ventas e integraciones."],
      tradeoffs: ["Brecha: trade-offs entre distribución de repositorios, integraciones y operación."],
      execution: [
        "Actuación transversal en los seis repositorios del sistema.",
        "Implementación y mantenimiento de orquestación Docker y pipeline de CI/CD.",
      ],
      challenges: [
        "Actuación simultánea en múltiples repositorios.",
        "Orquestación Docker para integraciones.",
      ],
      result: ["Brecha: resultados obtenidos."],
      impact: ["Brecha: impacto observado en atención/ventas."],
      limitations: [
        "El caso público actual describe estructura y actuación, pero aún no documenta decisiones y resultados con profundidad de ingeniería.",
      ],
      learnings: ["Brecha: aprendizajes derivados de decisiones técnicas."],
      principles: ["Brecha: principios de Ingeniería extraídos después de consolidar decisiones y resultados."],
    },
  },
  pupilens: {
    pt: {
      executiveSummary: [
        "Aplicação mobile para demonstração de lentes ópticas durante a venda em óticas.",
        "Papel: Desenvolvedor Mobile, com foco em performance e manipulação visual complexa (SVGs).",
        "Lacuna: problema de negócio detalhado, decisões arquiteturais e impacto observado ainda não documentados.",
      ],
      context: [
        "Aplicação para demonstração de lentes ópticas.",
        "Produto voltado a modernizar a experiência de demonstração de distorções, tratamentos, refrações e cores de lentes durante a venda.",
      ],
      problem: [
        "Demonstrações de lentes exigem representação visual clara para apoiar a venda em óticas.",
        "Lacuna: problema de negócio detalhado, quem era afetado e consequência de não modernizar a demonstração.",
      ],
      restrictions: [
        "Lacuna: restrições de plataforma, performance-alvo, equipe e integração com o processo de venda ainda não documentadas.",
      ],
      role: ["Desenvolvedor Mobile."],
      responsibilities: ["Desenvolvimento mobile.", "Suporte."],
      stakeholders: ["Lacuna: stakeholders de óticas, produto e engenharia envolvidos."],
      successCriteria: ["Lacuna: critérios de sucesso de performance, usabilidade e apoio à venda."],
      alternatives: ["Lacuna: alternativas técnicas para renderização visual e arquitetura mobile."],
      decision: ["Lacuna: decisões técnicas centrais e justificativa."],
      architecture: [
        "Stack conhecida: React Native, .NET e TypeScript.",
        "Lacuna: arquitetura da aplicação e integração entre mobile e backend.",
      ],
      flow: ["Lacuna: fluxo de demonstração de lentes na jornada de venda."],
      tradeoffs: ["Lacuna: trade-offs entre fidelidade visual, performance e complexidade de implementação."],
      execution: [
        "Atuação em desenvolvimento mobile com manipulação de dados e SVGs.",
        "Trabalho relacionado a performance mobile e renderização visual complexa.",
      ],
      challenges: [
        "Manipulação complexa de SVGs.",
        "Performance mobile em cenários de renderização visual.",
      ],
      result: ["Lacuna: resultado ou estado atual do produto sob a ótica da atuação."],
      impact: ["Lacuna: impacto observado no uso ou no processo de venda."],
      limitations: [
        "O case público atual evidencia o tipo de desafio técnico, mas ainda não documenta decisões e resultados com profundidade.",
      ],
      learnings: ["Lacuna: aprendizados derivados das decisões técnicas."],
      principles: ["Lacuna: princípios de Engenharia extraídos do case."],
    },
    en: {
      executiveSummary: [
        "Mobile application for optical lens demonstration during sales in optical stores.",
        "Role: Mobile Developer, focused on performance and complex visual manipulation (SVGs).",
        "Gap: detailed business problem, architectural decisions, and observed impact are not yet documented.",
      ],
      context: [
        "Application for optical lens demonstration.",
        "Product focused on modernizing the demonstration of lens distortions, treatments, refractions, and colors during sales.",
      ],
      problem: [
        "Lens demonstrations require clear visual representation to support sales in optical stores.",
        "Gap: detailed business problem, who was affected, and consequence of not modernizing the demonstration.",
      ],
      restrictions: [
        "Gap: platform, target performance, team, and sales-process integration constraints are not yet documented.",
      ],
      role: ["Mobile Developer."],
      responsibilities: ["Mobile development.", "Support."],
      stakeholders: ["Gap: optical-store, product, and engineering stakeholders involved."],
      successCriteria: ["Gap: success criteria for performance, usability, and sales support."],
      alternatives: ["Gap: technical alternatives for visual rendering and mobile architecture."],
      decision: ["Gap: central technical decisions and justification."],
      architecture: [
        "Known stack: React Native, .NET, and TypeScript.",
        "Gap: application architecture and mobile/backend integration.",
      ],
      flow: ["Gap: lens demonstration flow in the sales journey."],
      tradeoffs: ["Gap: trade-offs among visual fidelity, performance, and implementation complexity."],
      execution: [
        "Mobile development involving data manipulation and SVG rendering.",
        "Work related to mobile performance and complex visual rendering.",
      ],
      challenges: [
        "Complex SVG manipulation.",
        "Mobile performance in visual rendering scenarios.",
      ],
      result: ["Gap: result or current product state from the contribution perspective."],
      impact: ["Gap: observed impact on usage or sales process."],
      limitations: [
        "The current public case evidences the type of technical challenge, but does not yet document decisions and results in depth.",
      ],
      learnings: ["Gap: learnings derived from technical decisions."],
      principles: ["Gap: Engineering principles extracted from the case."],
    },
    es: {
      executiveSummary: [
        "Aplicación mobile para demostración de lentes ópticas durante la venta en ópticas.",
        "Rol: Desarrollador Mobile, con foco en performance y manipulación visual compleja (SVGs).",
        "Brecha: problema de negocio detallado, decisiones arquitecturales e impacto observado aún no documentados.",
      ],
      context: [
        "Aplicación para demostración de lentes ópticas.",
        "Producto enfocado en modernizar la demostración de distorsiones, tratamientos, refracciones y colores de lentes durante la venta.",
      ],
      problem: [
        "Las demostraciones de lentes requieren representación visual clara para apoyar la venta en ópticas.",
        "Brecha: problema de negocio detallado, quién era afectado y consecuencia de no modernizar la demostración.",
      ],
      restrictions: [
        "Brecha: restricciones de plataforma, performance objetivo, equipo e integración con el proceso de venta aún no documentadas.",
      ],
      role: ["Desarrollador Mobile."],
      responsibilities: ["Desarrollo mobile.", "Soporte."],
      stakeholders: ["Brecha: stakeholders de ópticas, producto e ingeniería involucrados."],
      successCriteria: ["Brecha: criterios de éxito de performance, usabilidad y apoyo a la venta."],
      alternatives: ["Brecha: alternativas técnicas para renderización visual y arquitectura mobile."],
      decision: ["Brecha: decisiones técnicas centrales y justificación."],
      architecture: [
        "Stack conocida: React Native, .NET y TypeScript.",
        "Brecha: arquitectura de la aplicación e integración entre mobile y backend.",
      ],
      flow: ["Brecha: flujo de demostración de lentes en el recorrido de venta."],
      tradeoffs: ["Brecha: trade-offs entre fidelidad visual, performance y complejidad de implementación."],
      execution: [
        "Desarrollo mobile con manipulación de datos y renderización de SVGs.",
        "Trabajo relacionado con performance mobile y renderización visual compleja.",
      ],
      challenges: [
        "Manipulación compleja de SVGs.",
        "Performance mobile en escenarios de renderización visual.",
      ],
      result: ["Brecha: resultado o estado actual del producto bajo la óptica de la actuación."],
      impact: ["Brecha: impacto observado en el uso o en el proceso de venta."],
      limitations: [
        "El caso público actual evidencia el tipo de desafío técnico, pero aún no documenta decisiones y resultados en profundidad.",
      ],
      learnings: ["Brecha: aprendizajes derivados de las decisiones técnicas."],
      principles: ["Brecha: principios de Ingeniería extraídos del caso."],
    },
  },
  batterycommerce: {
    pt: {
      executiveSummary: [
        "E-commerce desenvolvido como TCC de graduação em aproximadamente 6 meses.",
        "Papel: fundador e desenvolvedor Full Stack, responsável por requisitos, APIs, regras de negócio, integrações e documentação.",
        "Resultado acadêmico: nota máxima pela implementação.",
      ],
      context: [
        "E-commerce desenvolvido como projeto de TCC da graduação.",
        "Projeto construído em aproximadamente 6 meses.",
      ],
      problem: [
        "Construir um e-commerce com regras de vendas, entregas, pagamentos e cálculo de frete.",
        "Necessidade de integrar APIs externas de pagamento e frete e documentar o sistema de ponta a ponta.",
      ],
      restrictions: [
        "Prazo acadêmico de aproximadamente 6 meses.",
        "Escopo de TCC exigindo implementação funcional e documentação técnica.",
        "Lacuna: restrições adicionais de infraestrutura e operação em produção, se houveram.",
      ],
      role: ["Fundador e Desenvolvedor Full Stack."],
      responsibilities: [
        "Desenvolvimento Full Stack.",
        "Análise de requisitos.",
        "Implementação de APIs em Java com Spring Boot.",
        "Implementação de regras de negócio para vendas, entregas, pagamentos e frete.",
        "Integração com APIs de pagamento e frete.",
        "Produção de documentação técnica, diagramas, dicionário de dados e detalhamento de requisitos.",
      ],
      stakeholders: [
        "Contexto acadêmico de TCC.",
        "Lacuna: stakeholders de negócio adicionais, se existiram fora do contexto acadêmico.",
      ],
      successCriteria: [
        "Entregar implementação funcional avaliada academicamente.",
        "Produzir documentação técnica do sistema.",
        "Lacuna: critérios de sucesso de uso real fora do contexto acadêmico.",
      ],
      alternatives: [
        "Lacuna: alternativas de arquitetura, stack e modelo de integração consideradas.",
      ],
      decision: [
        "Implementar APIs com Java e Spring Boot.",
        "Integrar cálculo de frete e geração de pagamentos por Boleto, Pix e Cartão de Crédito.",
        "Tratar documentação técnica como entrega explícita do projeto.",
        "Lacuna: justificativa comparativa das escolhas frente a alternativas.",
      ],
      architecture: [
        "Stack conhecida: React, Java, Spring Boot, Bootstrap e TypeScript.",
        "Lacuna: arquitetura detalhada do frontend, backend, banco de dados e integrações.",
      ],
      flow: [
        "Fluxos conhecidos: venda, entrega, pagamento e cálculo de frete.",
        "Lacuna: fluxo técnico detalhado entre camadas e integrações.",
      ],
      tradeoffs: [
        "Lacuna: trade-offs entre escopo acadêmico, profundidade de engenharia e integrações externas.",
      ],
      execution: [
        "Implementação de APIs em Java com Spring Boot.",
        "Integração com cálculo de frete e geração de pagamentos por Boleto, Pix e Cartão de Crédito.",
        "Produção de documentação técnica.",
      ],
      challenges: [
        "Regras de negócio para vendas, entregas, pagamentos e cálculo de frete.",
        "Integração com APIs externas de frete e pagamento.",
      ],
      result: ["Projeto recebeu nota máxima pela implementação."],
      impact: [
        "Impacto acadêmico demonstrado pela nota máxima.",
        "Lacuna: impacto de uso, caso tenha sido publicado ou utilizado fora do contexto acadêmico.",
      ],
      limitations: [
        "O resultado comprovado publicamente é acadêmico; impacto de produção/uso real ainda não está documentado.",
        "Detalhes profundos de arquitetura e trade-offs ainda são lacunas.",
      ],
      learnings: [
        "Lacuna: aprendizados específicos ligados às decisões de integração e modelagem de regras de negócio.",
      ],
      principles: [
        "Documentação técnica (diagramas, dicionário de dados e requisitos) pode ser tratada como entrega de engenharia, não apenas apêndice.",
        "Lacuna: princípios adicionais após detalhar trade-offs e arquitetura.",
      ],
    },
    en: {
      executiveSummary: [
        "E-commerce developed as an undergraduate thesis project in approximately 6 months.",
        "Role: founder and Full Stack developer, responsible for requirements, APIs, business rules, integrations, and documentation.",
        "Academic result: highest grade for the implementation.",
      ],
      context: [
        "E-commerce developed as the final undergraduate project.",
        "Project built in approximately 6 months.",
      ],
      problem: [
        "Build an e-commerce platform with sales, delivery, payment, and shipping calculation rules.",
        "Need to integrate external payment and shipping APIs and document the system end to end.",
      ],
      restrictions: [
        "Academic timeline of approximately 6 months.",
        "Thesis scope requiring a functional implementation and technical documentation.",
        "Gap: additional infrastructure and production-operation constraints, if any.",
      ],
      role: ["Founder and Full Stack Developer."],
      responsibilities: [
        "Full Stack development.",
        "Requirements analysis.",
        "API implementation with Java and Spring Boot.",
        "Business rule implementation for sales, deliveries, payments, and shipping.",
        "Integration with payment and shipping APIs.",
        "Technical documentation, diagrams, data dictionary, and requirements detailing.",
      ],
      stakeholders: [
        "Undergraduate thesis academic context.",
        "Gap: additional business stakeholders, if any existed outside the academic context.",
      ],
      successCriteria: [
        "Deliver a functional implementation assessed academically.",
        "Produce technical documentation of the system.",
        "Gap: success criteria for real usage outside the academic context.",
      ],
      alternatives: [
        "Gap: architecture, stack, and integration-model alternatives considered.",
      ],
      decision: [
        "Implement APIs with Java and Spring Boot.",
        "Integrate shipping calculation and payment generation using Boleto, Pix, and Credit Card.",
        "Treat technical documentation as an explicit project deliverable.",
        "Gap: comparative justification of choices versus alternatives.",
      ],
      architecture: [
        "Known stack: React, Java, Spring Boot, Bootstrap, and TypeScript.",
        "Gap: detailed architecture for frontend, backend, database, and integrations.",
      ],
      flow: [
        "Known flows: sale, delivery, payment, and shipping calculation.",
        "Gap: detailed technical flow across layers and integrations.",
      ],
      tradeoffs: [
        "Gap: trade-offs among academic scope, engineering depth, and external integrations.",
      ],
      execution: [
        "API implementation with Java and Spring Boot.",
        "Integration with shipping calculation and payment generation using Boleto, Pix, and Credit Card.",
        "Production of technical documentation.",
      ],
      challenges: [
        "Business rules for sales, deliveries, payments, and shipping calculation.",
        "Integration with external shipping and payment APIs.",
      ],
      result: ["Project received the highest grade for its implementation."],
      impact: [
        "Academic impact demonstrated by the highest grade.",
        "Gap: usage impact, if published or used outside the academic context.",
      ],
      limitations: [
        "The publicly evidenced result is academic; production/real-usage impact is not yet documented.",
        "Deep architecture and trade-off details remain gaps.",
      ],
      learnings: [
        "Gap: specific learnings tied to integration decisions and business-rule modeling.",
      ],
      principles: [
        "Technical documentation (diagrams, data dictionary, and requirements) can be treated as an engineering deliverable, not only an appendix.",
        "Gap: additional principles after detailing trade-offs and architecture.",
      ],
    },
    es: {
      executiveSummary: [
        "E-commerce desarrollado como tesis de graduación en aproximadamente 6 meses.",
        "Rol: fundador y desarrollador Full Stack, responsable de requisitos, APIs, reglas de negocio, integraciones y documentación.",
        "Resultado académico: nota máxima por la implementación.",
      ],
      context: [
        "E-commerce desarrollado como proyecto final de la graduación.",
        "Proyecto construido en aproximadamente 6 meses.",
      ],
      problem: [
        "Construir un e-commerce con reglas de ventas, entregas, pagos y cálculo de envío.",
        "Necesidad de integrar APIs externas de pago y envío y documentar el sistema de punta a punta.",
      ],
      restrictions: [
        "Plazo académico de aproximadamente 6 meses.",
        "Alcance de tesis exigiendo implementación funcional y documentación técnica.",
        "Brecha: restricciones adicionales de infraestructura y operación en producción, si las hubo.",
      ],
      role: ["Fundador y Desarrollador Full Stack."],
      responsibilities: [
        "Desarrollo Full Stack.",
        "Análisis de requisitos.",
        "Implementación de APIs con Java y Spring Boot.",
        "Implementación de reglas de negocio para ventas, entregas, pagos y envíos.",
        "Integración con APIs de pago y envío.",
        "Documentación técnica, diagramas, diccionario de datos y detalle de requisitos.",
      ],
      stakeholders: [
        "Contexto académico de tesis.",
        "Brecha: stakeholders de negocio adicionales, si existieron fuera del contexto académico.",
      ],
      successCriteria: [
        "Entregar implementación funcional evaluada académicamente.",
        "Producir documentación técnica del sistema.",
        "Brecha: criterios de éxito de uso real fuera del contexto académico.",
      ],
      alternatives: [
        "Brecha: alternativas de arquitectura, stack y modelo de integración consideradas.",
      ],
      decision: [
        "Implementar APIs con Java y Spring Boot.",
        "Integrar cálculo de envío y generación de pagos por Boleto, Pix y Tarjeta de Crédito.",
        "Tratar la documentación técnica como entrega explícita del proyecto.",
        "Brecha: justificación comparativa de las elecciones frente a alternativas.",
      ],
      architecture: [
        "Stack conocida: React, Java, Spring Boot, Bootstrap y TypeScript.",
        "Brecha: arquitectura detallada del frontend, backend, base de datos e integraciones.",
      ],
      flow: [
        "Flujos conocidos: venta, entrega, pago y cálculo de envío.",
        "Brecha: flujo técnico detallado entre capas e integraciones.",
      ],
      tradeoffs: [
        "Brecha: trade-offs entre alcance académico, profundidad de ingeniería e integraciones externas.",
      ],
      execution: [
        "Implementación de APIs con Java y Spring Boot.",
        "Integración con cálculo de envío y generación de pagos por Boleto, Pix y Tarjeta de Crédito.",
        "Producción de documentación técnica.",
      ],
      challenges: [
        "Reglas de negocio para ventas, entregas, pagos y cálculo de envío.",
        "Integración con APIs externas de envío y pago.",
      ],
      result: ["El proyecto recibió la nota máxima por su implementación."],
      impact: [
        "Impacto académico demostrado por la nota máxima.",
        "Brecha: impacto de uso, si fue publicado o utilizado fuera del contexto académico.",
      ],
      limitations: [
        "El resultado comprobado públicamente es académico; el impacto de producción/uso real aún no está documentado.",
        "Los detalles profundos de arquitectura y trade-offs siguen siendo brechas.",
      ],
      learnings: [
        "Brecha: aprendizajes específicos ligados a las decisiones de integración y modelado de reglas de negocio.",
      ],
      principles: [
        "La documentación técnica (diagramas, diccionario de datos y requisitos) puede tratarse como entrega de ingeniería, no solo como apéndice.",
        "Brecha: principios adicionales después de detallar trade-offs y arquitectura.",
      ],
    },
  },
};

const decisionsByProject: Partial<
  Record<string, Partial<Record<Locale, EngineeringDecision[]>>>
> = {};

const isGapItem = (item: string) =>
  /^(lacuna|gap|brecha|informação necessária|required information|información necesaria):/i.test(
    item.trim(),
  );

const sectionStatus = (content: string[]): CaseSection["status"] => {
  if (!content.length) return "missing";
  if (content.every(isGapItem)) return "missing";
  if (content.some(isGapItem)) return "partial";
  return "available";
};

const buildSections = (
  locale: Locale,
  evidence: SectionEvidence,
  project: IProject,
): CaseSection[] => {
  const sectionLabels = labels[locale].sections;
  const g = labels[locale].gap;

  const withDefaults: SectionEvidence = {
    ...evidence,
    technologies:
      evidence.technologies ||
      project.technologies.map((technology) => technology),
    role: evidence.role || (project.role ? [project.role] : [g("papel detalhado")]),
    responsibilities:
      evidence.responsibilities ||
      project.responsibilities ||
      [g("responsabilidades detalhadas")],
  };

  return SECTION_ORDER.map((id) => {
    const content = (withDefaults[id] || [g(`seção "${sectionLabels[id]}"`)]).map(
      (item) => item.trim(),
    );
    return {
      id,
      title: sectionLabels[id],
      status: sectionStatus(content),
      content,
    };
  });
};

const toCase = (project: IProject, locale: Locale): ICase => {
  const localeLabels = labels[locale];

  if (project.id === "kerootica") {
    const evidence = kerooticaEvidence[locale];
    return {
      id: project.id,
      name: project.name,
      summary: evidence.sections.executiveSummary?.[0] || project.smallDescription,
      objective: evidence.objective,
      competency: evidence.competencies[0],
      competencies: evidence.competencies,
      role: evidence.sections.role?.[0] || project.role || localeLabels.unavailable,
      status: project.link ? "public-reference" : "portfolio-only",
      logo: project.logo,
      link: project.link,
      technologies: project.technologies,
      relatedProjects: projectRelations[project.id] || [],
      sections: buildSections(locale, evidence.sections, project),
      decisions: evidence.decisions,
    };
  }

  const evidence = evidenceByProject[project.id]?.[locale] || {};
  const competencies =
    strongestCompetenciesByProject[project.id]?.[locale] ||
    localeLabels.competencies;

  return {
    id: project.id,
    name: project.name,
    summary:
      evidence.executiveSummary?.[0] ||
      project.smallDescription ||
      project.whatIs,
    objective:
      projectObjectives[project.id]?.[locale] || localeLabels.objective,
    competency: competencies[0],
    competencies,
    role: evidence.role?.[0] || project.role || localeLabels.unavailable,
    status: project.link ? "public-reference" : "portfolio-only",
    logo: project.logo,
    link: project.link,
    technologies: project.technologies,
    relatedProjects: projectRelations[project.id] || [],
    sections: buildSections(locale, evidence, project),
    decisions: decisionsByProject[project.id]?.[locale] || [],
  };
};

export const getCases = (locale: Locale): ICase[] =>
  getProjects(locale).map((project) => toCase(project, locale));
