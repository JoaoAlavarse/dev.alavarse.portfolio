import type { ICase, IProject, Locale } from "@/interfaces";
import { getProjects } from "@/lib/get-projects";

const labels = {
  pt: {
    unavailable: "Informação não publicada no portfólio atual.",
    unavailablePlural: "Informações que precisam ser fornecidas manualmente antes da publicação do case.",
    objective: "Demonstrar competência em Engenharia de Software a partir de evidências reais do projeto.",
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
      related: "Projetos relacionados",
      materials: "Materiais complementares",
      diagrams: "Diagramas",
      references: "Referencias",
    },
  },
  en: {
    unavailable: "Information not published in the current portfolio.",
    unavailablePlural: "Information that must be provided manually before publishing the case study.",
    objective: "Demonstrate Software Engineering competence through real project evidence.",
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
      related: "Related projects",
      materials: "Complementary materials",
      diagrams: "Diagrams",
      references: "References",
    },
  },
  es: {
    unavailable: "Información no publicada en el portfolio actual.",
    unavailablePlural: "Información que debe proporcionarse manualmente antes de publicar el caso.",
    objective: "Demostrar competencia en Ingeniería de Software a partir de evidencias reales del proyecto.",
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
      related: "Proyectos relacionados",
      materials: "Materiales complementarios",
      diagrams: "Diagramas",
      references: "Referencias",
    },
  },
};

const strongestCompetenciesByProject: Record<string, Partial<Record<Locale, string[]>>> = {
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
  kerootica: {
    pt: ["ERP em produção", "Modernização de produto", "Domínio de negócio"],
    en: ["Production ERP", "Product modernization", "Business domain"],
    es: ["ERP en producción", "Modernización de producto", "Dominio de negocio"],
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

const evidenceByProject: Partial<
  Record<
    string,
    Partial<
      Record<
        Locale,
        Partial<Record<keyof typeof labels.pt.sections, string[]>>
      >
    >
  >
> = {
  kerootica: {
    pt: {
      executiveSummary: [
        "Modernização de ERP em produção para o mercado óptico.",
        "Sistema em produção há aproximadamente cinco anos, utilizado por aproximadamente 500 empresas.",
        "A modernização ainda está em andamento e prioriza evolução gradual, governança, observabilidade e longevidade.",
      ],
      context: [
        "ERP especializado para o mercado óptico.",
        "Sistema crítico para operação diária.",
        "Ambiente multi-tenant com usuários concorrentes.",
        "Abrange módulos financeiros, fiscais, PDV, estoque, dashboards e integrações bancárias.",
      ],
      problem: [
        "Frontend legado desenvolvido com Vue 2, Nuxt 2 e Vuetify 2.",
        "Alto acoplamento, componentes monolíticos e baixa separação de responsabilidades dificultavam a evolução.",
        "O crescimento contínuo do produto exigia gerenciamento explícito da complexidade.",
      ],
      restrictions: [
        "Sistema em produção e crítico para a operação diária.",
        "Modernização em andamento, exigindo evolução incremental em vez de interrupção total.",
        "Ambiente multi-tenant com concorrência de usuários e módulos de negócio sensíveis.",
      ],
      responsibilities: [
        "Definir a arquitetura do novo frontend.",
        "Pesquisar alternativas e comparar frameworks.",
        "Produzir documentação técnica.",
        "Escrever RFCs e diretrizes.",
        "Apoiar decisões técnicas.",
        "Conduzir a estratégia de modernização.",
      ],
      stakeholders: [
        "Usuários de empresas do mercado óptico.",
        "Equipe técnica responsável pelo ERP.",
        "Áreas envolvidas na evolução de módulos financeiros, fiscais, PDV, estoque, dashboards e integrações bancárias.",
      ],
      successCriteria: [
        "Informação necessária: critérios observáveis de sucesso da modernização.",
        "Informação necessária: sinais de evolução, adoção, estabilidade, manutenibilidade ou produtividade.",
      ],
      alternatives: [
        "Comparação de frameworks foi parte da responsabilidade técnica.",
        "Informação necessária: alternativas avaliadas e motivos de descarte.",
      ],
      decision: [
        "React + Next.js escolhidos como base do novo frontend.",
        "Migração gradual escolhida em vez de reescrita completa.",
        "Governança, observabilidade, longevidade e evolução incremental foram priorizadas.",
      ],
      architecture: [
        "Arquitetura preparada para evolução incremental.",
        "Informação necessária: fluxo arquitetural, fronteiras, módulos, integração com legado e decisões de composição.",
      ],
      flow: [
        "Informação necessária: fluxo arquitetural e fluxos principais da solução.",
      ],
      tradeoffs: [
        "Informação necessária: trade-offs entre migração gradual, reescrita, governança, velocidade e risco operacional.",
      ],
      execution: [
        "Pesquisa técnica, comparação de alternativas, documentação, RFCs, diretrizes e condução da estratégia de modernização.",
      ],
      challenges: [
        "Alto acoplamento.",
        "Componentes monolíticos.",
        "Baixa separação de responsabilidades.",
        "Dificuldade para evolução.",
        "Ausência de gerenciamento explícito da complexidade.",
      ],
      result: [
        "A modernização ainda está em andamento.",
        "Informação necessária: resultados obtidos até o momento.",
      ],
      impact: [
        "Potencial de impacto em um ERP usado por aproximadamente 500 empresas.",
        "Informação necessária: impacto observado até o momento.",
      ],
      limitations: [
        "Informações internas de arquitetura, módulos e operação devem ser publicadas apenas em nível seguro.",
        "Resultados finais ainda não podem ser tratados como concluídos porque a modernização está em andamento.",
      ],
      learnings: ["Informação necessária: aprendizados obtidos até o momento."],
      principles: [
        "Informação necessária: princípios de Engenharia extraídos após consolidar trade-offs, decisões e resultados.",
      ],
      diagrams: ["Informação necessária: diagramas publicáveis e generalizados."],
    },
    en: {
      executiveSummary: [
        "Modernization of a production ERP for the optical market.",
        "System in production for approximately five years and used by approximately 500 companies.",
        "The modernization is still in progress and prioritizes gradual evolution, governance, observability, and longevity.",
      ],
      context: [
        "ERP specialized for the optical market.",
        "Critical system for daily operations.",
        "Multi-tenant environment with concurrent users.",
        "Covers financial, fiscal, POS, inventory, dashboards, and banking integration modules.",
      ],
      problem: [
        "Legacy frontend built with Vue 2, Nuxt 2, and Vuetify 2.",
        "High coupling, monolithic components, and low separation of responsibilities made evolution harder.",
        "Continuous product growth required explicit complexity management.",
      ],
      restrictions: [
        "Production system critical to daily operations.",
        "Modernization in progress, requiring incremental evolution instead of a full stop-and-rewrite.",
        "Multi-tenant environment with concurrent users and sensitive business modules.",
      ],
      responsibilities: [
        "Define the architecture of the new frontend.",
        "Research alternatives and compare frameworks.",
        "Produce technical documentation.",
        "Write RFCs and guidelines.",
        "Support technical decisions.",
        "Lead the modernization strategy.",
      ],
      stakeholders: [
        "Users from companies in the optical market.",
        "Technical team responsible for the ERP.",
        "Areas involved in the evolution of financial, fiscal, POS, inventory, dashboard, and banking integration modules.",
      ],
      successCriteria: [
        "Required information: observable success criteria for the modernization.",
        "Required information: signals of evolution, adoption, stability, maintainability, or productivity.",
      ],
      alternatives: [
        "Framework comparison was part of the technical responsibility.",
        "Required information: alternatives evaluated and reasons for rejection.",
      ],
      decision: [
        "React + Next.js were selected as the foundation for the new frontend.",
        "Gradual migration was selected instead of a full rewrite.",
        "Governance, observability, longevity, and incremental evolution were prioritized.",
      ],
      architecture: [
        "Architecture prepared for incremental evolution.",
        "Required information: architecture flow, boundaries, modules, legacy integration, and composition decisions.",
      ],
      flow: ["Required information: architecture flow and main solution flows."],
      tradeoffs: [
        "Required information: trade-offs between gradual migration, rewrite, governance, speed, and operational risk.",
      ],
      execution: [
        "Technical research, comparison of alternatives, documentation, RFCs, guidelines, and modernization strategy.",
      ],
      challenges: [
        "High coupling.",
        "Monolithic components.",
        "Low separation of responsibilities.",
        "Difficulty evolving the product.",
        "Lack of explicit complexity management.",
      ],
      result: [
        "The modernization is still in progress.",
        "Required information: results obtained so far.",
      ],
      impact: [
        "Potential impact on an ERP used by approximately 500 companies.",
        "Required information: impact observed so far.",
      ],
      limitations: [
        "Internal architecture, module, and operation details should only be published at a safe level.",
        "Final results cannot be treated as complete because the modernization is still in progress.",
      ],
      learnings: ["Required information: learnings obtained so far."],
      principles: [
        "Required information: Engineering principles extracted after consolidating trade-offs, decisions, and results.",
      ],
      diagrams: ["Required information: publishable and generalized diagrams."],
    },
    es: {
      executiveSummary: [
        "Modernización de un ERP en producción para el mercado óptico.",
        "Sistema en producción desde hace aproximadamente cinco años y utilizado por aproximadamente 500 empresas.",
        "La modernización aún está en curso y prioriza evolución gradual, gobernanza, observabilidad y longevidad.",
      ],
      context: [
        "ERP especializado para el mercado óptico.",
        "Sistema crítico para la operación diaria.",
        "Ambiente multi-tenant con usuarios concurrentes.",
        "Incluye módulos financieros, fiscales, PDV, inventario, dashboards e integraciones bancarias.",
      ],
      problem: [
        "Frontend legado desarrollado con Vue 2, Nuxt 2 y Vuetify 2.",
        "Alto acoplamiento, componentes monolíticos y baja separación de responsabilidades dificultaban la evolución.",
        "El crecimiento continuo del producto exigía una gestión explícita de la complejidad.",
      ],
      restrictions: [
        "Sistema en producción y crítico para la operación diaria.",
        "Modernización en curso, exigiendo evolución incremental en lugar de una reescritura completa.",
        "Ambiente multi-tenant con concurrencia de usuarios y módulos de negocio sensibles.",
      ],
      responsibilities: [
        "Definir la arquitectura del nuevo frontend.",
        "Investigar alternativas y comparar frameworks.",
        "Producir documentación técnica.",
        "Escribir RFCs y directrices.",
        "Apoyar decisiones técnicas.",
        "Conducir la estrategia de modernización.",
      ],
      stakeholders: [
        "Usuarios de empresas del mercado óptico.",
        "Equipo técnico responsable por el ERP.",
        "Áreas involucradas en la evolución de módulos financieros, fiscales, PDV, inventario, dashboards e integraciones bancarias.",
      ],
      successCriteria: [
        "Información necesaria: criterios observables de éxito de la modernización.",
        "Información necesaria: señales de evolución, adopción, estabilidad, mantenibilidad o productividad.",
      ],
      alternatives: [
        "La comparación de frameworks fue parte de la responsabilidad técnica.",
        "Información necesaria: alternativas evaluadas y motivos de descarte.",
      ],
      decision: [
        "React + Next.js fueron elegidos como base del nuevo frontend.",
        "Se eligió migración gradual en lugar de reescritura completa.",
        "Se priorizaron gobernanza, observabilidad, longevidad y evolución incremental.",
      ],
      architecture: [
        "Arquitectura preparada para evolución incremental.",
        "Información necesaria: flujo arquitectural, fronteras, módulos, integración con legado y decisiones de composición.",
      ],
      flow: [
        "Información necesaria: flujo arquitectural y flujos principales de la solución.",
      ],
      tradeoffs: [
        "Información necesaria: trade-offs entre migración gradual, reescritura, gobernanza, velocidad y riesgo operacional.",
      ],
      execution: [
        "Investigación técnica, comparación de alternativas, documentación, RFCs, directrices y estrategia de modernización.",
      ],
      challenges: [
        "Alto acoplamiento.",
        "Componentes monolíticos.",
        "Baja separación de responsabilidades.",
        "Dificultad para evolucionar.",
        "Ausencia de gestión explícita de la complejidad.",
      ],
      result: [
        "La modernización aún está en curso.",
        "Información necesaria: resultados obtenidos hasta el momento.",
      ],
      impact: [
        "Potencial de impacto en un ERP utilizado por aproximadamente 500 empresas.",
        "Información necesaria: impacto observado hasta el momento.",
      ],
      limitations: [
        "La información interna de arquitectura, módulos y operación debe publicarse solo en un nivel seguro.",
        "Los resultados finales aún no pueden tratarse como concluidos porque la modernización sigue en curso.",
      ],
      learnings: ["Información necesaria: aprendizajes obtenidos hasta el momento."],
      principles: [
        "Información necesaria: principios de Ingeniería extraídos después de consolidar trade-offs, decisiones y resultados.",
      ],
      diagrams: ["Información necesaria: diagramas publicables y generalizados."],
    },
  },
  hemoup: {
    pt: {
      context: [
        "Produto próprio voltado para doação de sangue.",
        "Participou de programas de pré-incubação e incubação.",
        "Houve contato com hemocentros, estudos de mercado e projeções financeiras.",
      ],
      responsibilities: [
        "Fundador.",
        "Responsável técnico.",
        "Desenvolvimento mobile.",
        "Backend.",
        "Análise de requisitos.",
        "Pesquisa de mercado.",
        "Marketing.",
        "Planejamento do produto.",
        "Projeção financeira e de custos.",
        "Definição do MVP.",
      ],
      stakeholders: ["Hemocentros foram consultados durante a validação do problema."],
      architecture: ["Informação necessária: arquitetura do produto."],
      tradeoffs: ["Informação necessária: trade-offs técnicos."],
      result: ["Informação necessária: estado atual do MVP."],
      impact: ["Informação necessária: validações realizadas e stakeholders públicos."],
    },
    en: {
      context: [
        "Own product focused on blood donation.",
        "Participated in pre-incubation and incubation programs.",
        "Included contact with blood centers, market studies, and financial projections.",
      ],
      responsibilities: [
        "Founder.",
        "Technical owner.",
        "Mobile development.",
        "Backend.",
        "Requirements analysis.",
        "Market research.",
        "Marketing.",
        "Product planning.",
        "Financial and cost projection.",
        "MVP definition.",
      ],
      stakeholders: ["Blood centers were consulted during problem validation."],
      architecture: ["Required information: product architecture."],
      tradeoffs: ["Required information: technical trade-offs."],
      result: ["Required information: current MVP status."],
      impact: ["Required information: validations performed and public stakeholders."],
    },
    es: {
      context: [
        "Producto propio enfocado en donación de sangre.",
        "Participó en programas de preincubación e incubación.",
        "Incluyó contacto con hemocentros, estudios de mercado y proyecciones financieras.",
      ],
      responsibilities: [
        "Fundador.",
        "Responsable técnico.",
        "Desarrollo mobile.",
        "Backend.",
        "Análisis de requisitos.",
        "Investigación de mercado.",
        "Marketing.",
        "Planificación del producto.",
        "Proyección financiera y de costos.",
        "Definición del MVP.",
      ],
      stakeholders: ["Hemocentros fueron consultados durante la validación del problema."],
      architecture: ["Información necesaria: arquitectura del producto."],
      tradeoffs: ["Información necesaria: trade-offs técnicos."],
      result: ["Información necesaria: estado actual del MVP."],
      impact: ["Información necesaria: validaciones realizadas y stakeholders públicos."],
    },
  },
  zshop: {
    pt: {
      context: [
        "Sistema de atendimento e vendas dividido em aproximadamente seis repositórios.",
        "Possui Docker, pipeline de CI/CD e integrações com WhatsApp, pagamentos e fretes.",
      ],
      architecture: [
        "Sistema distribuído em aproximadamente seis repositórios.",
        "Informação necessária: decisões arquiteturais e fluxos.",
      ],
      flow: ["Informação necessária: fluxos de atendimento, vendas e integrações."],
      tradeoffs: ["Informação necessária: trade-offs."],
      result: ["Informação necessária: resultados."],
    },
    en: {
      context: [
        "Sales and service system split across approximately six repositories.",
        "Includes Docker, CI/CD pipeline, and integrations with WhatsApp, payments, and shipping.",
      ],
      architecture: [
        "System distributed across approximately six repositories.",
        "Required information: architectural decisions and flows.",
      ],
      flow: ["Required information: service, sales, and integration flows."],
      tradeoffs: ["Required information: trade-offs."],
      result: ["Required information: results."],
    },
    es: {
      context: [
        "Sistema de atención y ventas dividido en aproximadamente seis repositorios.",
        "Incluye Docker, pipeline de CI/CD e integraciones con WhatsApp, pagos y envíos.",
      ],
      architecture: [
        "Sistema distribuido en aproximadamente seis repositorios.",
        "Información necesaria: decisiones arquitecturales y flujos.",
      ],
      flow: ["Información necesaria: flujos de atención, ventas e integraciones."],
      tradeoffs: ["Información necesaria: trade-offs."],
      result: ["Información necesaria: resultados."],
    },
  },
  pupilens: {
    pt: {
      context: [
        "Aplicação para demonstração de lentes ópticas.",
        "Produto voltado a modernizar a experiência de demonstração de distorções, tratamentos, refrações e cores de lentes durante a venda.",
      ],
      problem: [
        "Demonstrações de lentes exigem representação visual clara para apoiar a venda em óticas.",
        "Informação necessária: problema de negócio detalhado e contexto operacional.",
      ],
      responsibilities: ["Desenvolvimento mobile.", "Suporte."],
      architecture: [
        "Stack conhecida: React Native, .NET e TypeScript.",
        "Informação necessária: arquitetura da aplicação e integração entre mobile e backend.",
      ],
      execution: [
        "Atuação em desenvolvimento mobile com manipulação de dados e SVGs.",
        "Trabalho relacionado a performance mobile e renderização visual complexa.",
      ],
      challenges: [
        "Manipulação complexa de SVGs.",
        "Performance mobile em cenários de renderização visual.",
      ],
      impact: ["Informação necessária: impacto observado no uso ou no processo de venda."],
    },
    en: {
      context: [
        "Application for optical lens demonstration.",
        "Product focused on modernizing the demonstration of lens distortions, treatments, refractions, and colors during sales.",
      ],
      problem: [
        "Lens demonstrations require clear visual representation to support sales in optical stores.",
        "Required information: detailed business problem and operational context.",
      ],
      responsibilities: ["Mobile development.", "Support."],
      architecture: [
        "Known stack: React Native, .NET, and TypeScript.",
        "Required information: application architecture and mobile/backend integration.",
      ],
      execution: [
        "Mobile development involving data manipulation and SVG rendering.",
        "Work related to mobile performance and complex visual rendering.",
      ],
      challenges: [
        "Complex SVG manipulation.",
        "Mobile performance in visual rendering scenarios.",
      ],
      impact: ["Required information: observed impact on usage or sales process."],
    },
    es: {
      context: [
        "Aplicación para demostración de lentes ópticas.",
        "Producto enfocado en modernizar la demostración de distorsiones, tratamientos, refracciones y colores de lentes durante la venta.",
      ],
      problem: [
        "Las demostraciones de lentes requieren representación visual clara para apoyar la venta en ópticas.",
        "Información necesaria: problema de negocio detallado y contexto operacional.",
      ],
      responsibilities: ["Desarrollo mobile.", "Soporte."],
      architecture: [
        "Stack conocida: React Native, .NET y TypeScript.",
        "Información necesaria: arquitectura de la aplicación e integración entre mobile y backend.",
      ],
      execution: [
        "Desarrollo mobile con manipulación de datos y renderización de SVGs.",
        "Trabajo relacionado con performance mobile y renderización visual compleja.",
      ],
      challenges: [
        "Manipulación compleja de SVGs.",
        "Performance mobile en escenarios de renderización visual.",
      ],
      impact: ["Información necesaria: impacto observado en el uso o en el proceso de venta."],
    },
  },
  batterycommerce: {
    pt: {
      context: [
        "E-commerce desenvolvido como projeto de TCC da graduação.",
        "Projeto construído em aproximadamente 6 meses.",
      ],
      problem: [
        "Construir um e-commerce com regras de vendas, entregas, pagamentos e cálculo de frete.",
      ],
      responsibilities: [
        "Desenvolvimento Full Stack.",
        "Análise de requisitos.",
        "Implementação de APIs em Java com Spring Boot.",
        "Implementação de regras de negócio para vendas, entregas, pagamentos e frete.",
        "Integração com APIs de pagamento e frete.",
        "Produção de documentação técnica, diagramas, dicionário de dados e detalhamento de requisitos.",
      ],
      architecture: [
        "Stack conhecida: React, Java, Spring Boot, Bootstrap e TypeScript.",
        "Informação necessária: arquitetura detalhada do frontend, backend, banco de dados e integrações.",
      ],
      flow: [
        "Fluxos conhecidos: venda, entrega, pagamento e cálculo de frete.",
        "Informação necessária: fluxo técnico detalhado.",
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
        "Informação necessária: impacto de uso, caso tenha sido publicado ou utilizado fora do contexto acadêmico.",
      ],
    },
    en: {
      context: [
        "E-commerce developed as the final undergraduate project.",
        "Project built in approximately 6 months.",
      ],
      problem: [
        "Build an e-commerce platform with sales, delivery, payment, and shipping calculation rules.",
      ],
      responsibilities: [
        "Full Stack development.",
        "Requirements analysis.",
        "API implementation with Java and Spring Boot.",
        "Business rule implementation for sales, deliveries, payments, and shipping.",
        "Integration with payment and shipping APIs.",
        "Technical documentation, diagrams, data dictionary, and requirements detailing.",
      ],
      architecture: [
        "Known stack: React, Java, Spring Boot, Bootstrap, and TypeScript.",
        "Required information: detailed architecture for frontend, backend, database, and integrations.",
      ],
      flow: [
        "Known flows: sale, delivery, payment, and shipping calculation.",
        "Required information: detailed technical flow.",
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
        "Required information: usage impact, if published or used outside the academic context.",
      ],
    },
    es: {
      context: [
        "E-commerce desarrollado como proyecto final de la graduación.",
        "Proyecto construido en aproximadamente 6 meses.",
      ],
      problem: [
        "Construir un e-commerce con reglas de ventas, entregas, pagos y cálculo de envío.",
      ],
      responsibilities: [
        "Desarrollo Full Stack.",
        "Análisis de requisitos.",
        "Implementación de APIs con Java y Spring Boot.",
        "Implementación de reglas de negocio para ventas, entregas, pagos y envíos.",
        "Integración con APIs de pago y envío.",
        "Documentación técnica, diagramas, diccionario de datos y detalle de requisitos.",
      ],
      architecture: [
        "Stack conocida: React, Java, Spring Boot, Bootstrap y TypeScript.",
        "Información necesaria: arquitectura detallada de frontend, backend, base de datos e integraciones.",
      ],
      flow: [
        "Flujos conocidos: venta, entrega, pago y cálculo de envío.",
        "Información necesaria: flujo técnico detallado.",
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
        "Información necesaria: impacto de uso, si fue publicado o utilizado fuera del contexto académico.",
      ],
    },
  },
};

const PLACEHOLDER_RE =
  /informação necessária|required information|información necesaria|não publicada|not published|no publicada|precisam ser fornecidas|must be provided|debe proporcionarse/i;

const cleanContent = (items: string[] = []) =>
  items
    .map((item) => item.trim())
    .filter((item) => item && !PLACEHOLDER_RE.test(item));

const pushSection = (
  sections: ICase["sections"],
  id: ICase["sections"][number]["id"],
  title: string,
  content?: string[],
) => {
  const cleaned = cleanContent(content);
  if (!cleaned.length) return;
  sections.push({ id, title, status: "available", content: cleaned });
};

const toCase = (project: IProject, locale: Locale): ICase => {
  const localeLabels = labels[locale];
  const sectionLabels = localeLabels.sections;
  const projectCompetencies =
    strongestCompetenciesByProject[project.id]?.[locale] || [];
  const evidence = evidenceByProject[project.id]?.[locale] || {};
  const sections: ICase["sections"] = [];

  pushSection(
    sections,
    "context",
    sectionLabels.context,
    evidence.context || [project.whatIs, project.smallDescription],
  );
  pushSection(sections, "problem", sectionLabels.problem, evidence.problem);
  pushSection(
    sections,
    "restrictions",
    sectionLabels.restrictions,
    evidence.restrictions,
  );
  pushSection(
    sections,
    "responsibilities",
    sectionLabels.responsibilities,
    evidence.responsibilities || project.responsibilities,
  );
  pushSection(sections, "decision", sectionLabels.decision, evidence.decision);
  pushSection(
    sections,
    "architecture",
    sectionLabels.architecture,
    evidence.architecture,
  );
  pushSection(
    sections,
    "execution",
    sectionLabels.execution,
    evidence.execution,
  );
  pushSection(
    sections,
    "challenges",
    sectionLabels.challenges,
    evidence.challenges || project.highlights,
  );
  pushSection(sections, "result", sectionLabels.result, evidence.result);
  pushSection(sections, "impact", sectionLabels.impact, evidence.impact);
  pushSection(
    sections,
    "learnings",
    sectionLabels.learnings,
    evidence.learnings,
  );

  return {
    id: project.id,
    name: project.name,
    summary:
      evidence.executiveSummary?.[0] ||
      project.smallDescription ||
      project.whatIs,
    objective: localeLabels.objective,
    competency: projectCompetencies[0] || localeLabels.competencies[0],
    competencies: projectCompetencies.length
      ? projectCompetencies
      : localeLabels.competencies.slice(0, 2),
    role: project.role || localeLabels.unavailable,
    status: project.link ? "public-reference" : "portfolio-only",
    logo: project.logo,
    link: project.link,
    technologies: project.technologies,
    relatedProjects: projectRelations[project.id] || [],
    sections,
  };
};

export const getCases = (locale: Locale): ICase[] =>
  getProjects(locale).map((project) => toCase(project, locale));
