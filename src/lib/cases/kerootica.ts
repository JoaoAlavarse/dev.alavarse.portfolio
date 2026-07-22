import type { CaseSectionId, EngineeringDecision, Locale } from "@/interfaces";

type SectionEvidence = Partial<Record<CaseSectionId, string[]>>;

type LocaleCaseEvidence = {
  objective: string;
  competencies: string[];
  sections: SectionEvidence;
  decisions: EngineeringDecision[];
};

const gap = {
  pt: (text: string) => `Lacuna: ${text}`,
  en: (text: string) => `Gap: ${text}`,
  es: (text: string) => `Brecha: ${text}`,
};

export const kerooticaEvidence: Record<Locale, LocaleCaseEvidence> = {
  pt: {
    objective:
      "Demonstrar capacidade de conduzir modernização de frontend em ERP crítico em produção, com ênfase em decisão arquitetural, gestão de complexidade e comunicação técnica.",
    competencies: [
      "Arquitetura de software",
      "Modernização de sistemas legados",
      "Tomada de decisão técnica",
      "Comunicação técnica e documentação",
      "Gestão de complexidade",
    ],
    sections: {
      executiveSummary: [
        "Modernização do frontend de um ERP óptico em produção há aproximadamente cinco anos, utilizado por aproximadamente 500 empresas.",
        "O sistema é crítico para a operação diária, multi-tenant, e cobre módulos financeiros, fiscais, PDV, estoque, dashboards e integrações bancárias.",
        "Papel: conduzir pesquisa, comparação de alternativas, definição da arquitetura do novo frontend, documentação técnica (RFCs e diretrizes) e estratégia de modernização.",
        "Decisão central: adotar React + Next.js como base do novo frontend e migrar de forma gradual, em vez de reescrever completamente, priorizando governança, observabilidade e longevidade.",
        "Estado atual: a modernização ainda está em andamento. Resultados intermediários observáveis ainda não estão documentados publicamente.",
      ],
      context: [
        "ERP especializado para o mercado óptico, em produção há aproximadamente cinco anos.",
        "Utilizado por aproximadamente 500 empresas e crítico para a operação diária das óticas.",
        "Ambiente multi-tenant com usuários concorrentes.",
        "Escopo funcional conhecido: módulos financeiros, fiscais, PDV, estoque, dashboards e integrações bancárias.",
        "A modernização do frontend ainda está em andamento.",
      ],
      problem: [
        "O frontend legado foi construído com Vue 2, Nuxt 2 e Vuetify 2.",
        "O código apresentava alto acoplamento, componentes monolíticos e baixa separação de responsabilidades.",
        "Essas características dificultavam a evolução do produto à medida que o domínio crescia.",
        "Não havia gerenciamento explícito da complexidade em um sistema que continua expandindo módulos e integrações.",
        "Consequência de não agir: o custo de mudança tenderia a aumentar, a evolução de módulos críticos ficaria mais lenta e o risco operacional associado a alterações no frontend cresceria em um sistema já em produção.",
      ],
      restrictions: [
        "Continuidade operacional: o sistema está em produção e é crítico para a operação diária — interrupção ampla não é aceitável.",
        "Legado: a base Vue 2 / Nuxt 2 / Vuetify 2 precisa coexistir com a evolução até que a migração avance.",
        "Multi-tenancy e concorrência: mudanças precisam respeitar usuários concorrentes e isolamento entre empresas.",
        "Módulos sensíveis: financeiro, fiscal, PDV, estoque e integrações bancárias elevam o custo de erro.",
        "Evolução contínua: o produto continua crescendo; a modernização não pode depender de congelar o negócio.",
        "Lacuna: restrições explícitas de prazo, tamanho de equipe e budget ainda não foram documentadas publicamente.",
      ],
      role: [
        "Engenheiro de Software Full Stack com ownership técnico na modernização do frontend.",
        "Responsável por conduzir a estratégia de modernização, não apenas implementar tarefas isoladas.",
      ],
      responsibilities: [
        "Definir a arquitetura do novo frontend.",
        "Pesquisar alternativas e comparar frameworks.",
        "Produzir documentação técnica.",
        "Escrever RFCs e diretrizes.",
        "Apoiar decisões técnicas da equipe.",
        "Conduzir a estratégia de modernização.",
      ],
      stakeholders: [
        "Usuários de empresas do mercado óptico, impactados pela operação diária do ERP.",
        "Equipe técnica responsável pelo ERP, com quem as decisões de modernização precisam ser alinhadas.",
        "Áreas envolvidas na evolução de módulos financeiros, fiscais, PDV, estoque, dashboards e integrações bancárias.",
      ],
      successCriteria: [
        gap.pt(
          "critérios observáveis de sucesso da modernização (adoção, estabilidade, manutenibilidade, produtividade ou sinais equivalentes).",
        ),
      ],
      alternatives: [
        "Alternativa 1 — reescrita completa do frontend: substituir a base legada de uma vez.",
        "Alternativa 2 — migração gradual: preparar arquitetura para evolução incremental e migrar por etapas, mantendo o sistema em produção.",
        "Alternativa 3 — comparação de frameworks para a base do novo frontend: realizada como parte da responsabilidade técnica.",
        "A reescrita completa foi descartada em favor da migração gradual por conflitar com a restrição de continuidade operacional.",
        gap.pt(
          "lista dos frameworks específicos avaliados, critérios de comparação e motivos detalhados de descarte de cada opção.",
        ),
      ],
      decision: [
        "Escolher React + Next.js como base do novo frontend.",
        "Adotar migração gradual em vez de reescrita completa.",
        "Priorizar governança, observabilidade, longevidade e evolução incremental na condução da modernização.",
      ],
      architecture: [
        "A arquitetura-alvo foi definida para suportar evolução incremental, permitindo modernizar o frontend sem exigir interrupção total do sistema em produção.",
        "A escolha de React + Next.js estabelece a base tecnológica do novo frontend; a estratégia de migração gradual define como essa base coexiste com o legado Vue 2 / Nuxt 2 / Vuetify 2 ao longo do tempo.",
        "O raciocínio arquitetural prioriza fronteiras que reduzam acoplamento e permitam gerenciar complexidade à medida que módulos e integrações continuam a crescer.",
        gap.pt(
          "detalhamento publicável de fronteiras de módulos, integração com o legado, composição de camadas e fluxo arquitetural.",
        ),
      ],
      flow: [
        gap.pt(
          "fluxo arquitetural e fluxos principais da solução (navegação, módulos críticos e pontos de integração com o legado).",
        ),
      ],
      technologies: [
        "Legado do frontend: Vue 2, Nuxt 2 e Vuetify 2.",
        "Base escolhida para o novo frontend: React e Next.js.",
        "Demais tecnologias do ecossistema do produto permanecem fora do escopo detalhado deste case por confidencialidade e foco na decisão de modernização.",
      ],
      tradeoffs: [
        "Trade-off principal: velocidade de substituição do legado versus continuidade operacional.",
        "O que foi ganho com a migração gradual: preservação da operação diária e redução do risco de interrupção ampla em sistema crítico.",
        "O que foi perdido ou adiado: a eliminação imediata do legado; a modernização ocorre ao longo do tempo.",
        "Risco aceito: convivência prolongada entre bases antiga e nova enquanto a migração avança.",
        gap.pt(
          "custo operacional concreto da coexistência (esforço de manutenção dupla, complexidade de release) e critérios em que a reescrita completa seria preferível.",
        ),
      ],
      execution: [
        "Condução da pesquisa técnica e comparação de alternativas.",
        "Produção de documentação técnica, RFCs e diretrizes para alinhar decisões.",
        "Definição e comunicação da estratégia de modernização orientada a evolução incremental.",
        "Apoio contínuo a decisões técnicas da equipe durante a execução.",
      ],
      challenges: [
        "Alto acoplamento no frontend legado.",
        "Componentes monolíticos.",
        "Baixa separação de responsabilidades.",
        "Dificuldade para evoluir o produto com segurança.",
        "Ausência prévia de gerenciamento explícito da complexidade.",
        "Necessidade de modernizar sem interromper um ERP crítico em produção.",
      ],
      result: [
        "Estado atual: a modernização ainda está em andamento e não deve ser tratada como concluída.",
        gap.pt("resultados intermediários obtidos até o momento (entregas, adoção parcial, sinais de estabilidade ou produtividade)."),
      ],
      impact: [
        "O sistema modernizado tem potencial de impacto operacional sobre um ERP usado por aproximadamente 500 empresas.",
        gap.pt("impacto observado até o momento — ainda não documentado publicamente."),
      ],
      limitations: [
        "Detalhes internos de arquitetura, módulos e operação só podem ser publicados em nível generalizado por confidencialidade.",
        "Resultados finais não podem ser apresentados como concluídos enquanto a modernização estiver em andamento.",
        "Parte das alternativas de framework e dos critérios quantitativos de sucesso ainda não está documentada publicamente.",
      ],
      learnings: [
        gap.pt(
          "aprendizados específicos ainda não documentados publicamente; devem derivar das decisões e dos resultados intermediários quando forem publicados.",
        ),
      ],
      principles: [
        "Em sistemas críticos em produção, a estratégia de modernização deve ser condicionada pela continuidade operacional — evidenciado pela escolha de migração gradual em vez de reescrita.",
        "Governança, observabilidade e longevidade podem ser critérios explícitos de arquitetura, não apenas atributos desejáveis a posteriori.",
        "Documentação técnica (RFCs e diretrizes) faz parte da condução da decisão, não é apêndice da implementação.",
        gap.pt("princípios adicionais após consolidar resultados intermediários e trade-offs operacionais detalhados."),
      ],
    },
    decisions: [
      {
        title: "Estratégia de modernização: migração gradual",
        problem: [
          "O frontend legado dificultava a evolução do ERP, mas o sistema é crítico em produção e não pode ser interrompido de forma ampla.",
        ],
        alternatives: [
          "Reescrita completa do frontend.",
          "Migração gradual com evolução incremental.",
        ],
        choice: [
          "Adotar migração gradual, preparando a arquitetura para evolução incremental.",
        ],
        justification: [
          "A restrição de continuidade operacional em ambiente multi-tenant com módulos sensíveis torna a reescrita completa incompatível com o risco aceitável.",
          "A modernização precisa conviver com o crescimento contínuo do produto.",
        ],
        tradeoffs: [
          "Ganho: continuidade da operação e menor risco de interrupção ampla.",
          "Perda/adiamento: eliminação imediata do legado.",
          "Risco aceito: coexistência prolongada entre bases antiga e nova.",
        ],
        consequences: [
          "A arquitetura e a execução passam a ser orientadas por etapas incrementais.",
          "Governança e documentação tornam-se necessárias para manter coerência ao longo da migração.",
          gap.pt("métricas e efeitos observados da coexistência ainda não publicados."),
        ],
      },
      {
        title: "Base do novo frontend: React + Next.js",
        problem: [
          "Era necessário definir a base tecnológica do novo frontend para substituir, de forma planejada, a stack Vue 2 / Nuxt 2 / Vuetify 2.",
        ],
        alternatives: [
          "Comparação de frameworks foi conduzida como parte da responsabilidade técnica.",
          gap.pt("alternativas específicas avaliadas e matriz de comparação ainda não publicadas."),
        ],
        choice: ["Adotar React + Next.js como base do novo frontend."],
        justification: [
          "A escolha foi resultado de pesquisa e comparação de alternativas, documentadas por meio de RFCs e diretrizes.",
          gap.pt("critérios detalhados que tornaram React + Next.js preferíveis às demais opções avaliadas."),
        ],
        tradeoffs: [
          gap.pt(
            "trade-offs específicos da escolha de React + Next.js frente às alternativas avaliadas (curva de aprendizado, ecossistema, compatibilidade com o legado, custo de migração).",
          ),
        ],
        consequences: [
          "O novo frontend passa a ter React + Next.js como fundação tecnológica.",
          "A migração gradual precisa coordenar a introdução dessa base com a convivência do legado.",
        ],
      },
    ],
  },
  en: {
    objective:
      "Demonstrate the ability to lead frontend modernization on a critical production ERP, with emphasis on architectural decision-making, complexity management, and technical communication.",
    competencies: [
      "Software architecture",
      "Legacy system modernization",
      "Technical decision-making",
      "Technical communication and documentation",
      "Complexity management",
    ],
    sections: {
      executiveSummary: [
        "Frontend modernization of an optical ERP in production for approximately five years, used by approximately 500 companies.",
        "The system is critical to daily operations, multi-tenant, and covers financial, fiscal, POS, inventory, dashboard, and banking integration modules.",
        "Role: lead research, compare alternatives, define the new frontend architecture, produce technical documentation (RFCs and guidelines), and drive the modernization strategy.",
        "Central decision: adopt React + Next.js as the new frontend foundation and migrate gradually instead of rewriting everything, prioritizing governance, observability, and longevity.",
        "Current state: modernization is still in progress. Intermediate observable results are not yet publicly documented.",
      ],
      context: [
        "ERP specialized for the optical market, in production for approximately five years.",
        "Used by approximately 500 companies and critical to daily optical store operations.",
        "Multi-tenant environment with concurrent users.",
        "Known functional scope: financial, fiscal, POS, inventory, dashboard, and banking integration modules.",
        "Frontend modernization is still in progress.",
      ],
      problem: [
        "The legacy frontend was built with Vue 2, Nuxt 2, and Vuetify 2.",
        "The codebase had high coupling, monolithic components, and weak separation of responsibilities.",
        "Those characteristics made product evolution harder as the domain grew.",
        "There was no explicit complexity management in a system that keeps expanding modules and integrations.",
        "Consequence of inaction: change cost would tend to rise, evolution of critical modules would slow down, and operational risk tied to frontend changes would grow in an already-production system.",
      ],
      restrictions: [
        "Operational continuity: the system is in production and critical to daily operations — broad interruption is unacceptable.",
        "Legacy: the Vue 2 / Nuxt 2 / Vuetify 2 base must coexist with evolution until migration progresses.",
        "Multi-tenancy and concurrency: changes must respect concurrent users and isolation between companies.",
        "Sensitive modules: financial, fiscal, POS, inventory, and banking integrations raise the cost of mistakes.",
        "Continuous evolution: the product keeps growing; modernization cannot depend on freezing the business.",
        gap.en("explicit constraints on timeline, team size, and budget are not yet publicly documented."),
      ],
      role: [
        "Full Stack Software Engineer with technical ownership of frontend modernization.",
        "Responsible for driving the modernization strategy, not only implementing isolated tasks.",
      ],
      responsibilities: [
        "Define the architecture of the new frontend.",
        "Research alternatives and compare frameworks.",
        "Produce technical documentation.",
        "Write RFCs and guidelines.",
        "Support the team's technical decisions.",
        "Lead the modernization strategy.",
      ],
      stakeholders: [
        "Users from optical-market companies, impacted by the ERP's daily operation.",
        "Technical team responsible for the ERP, with whom modernization decisions must be aligned.",
        "Areas involved in evolving financial, fiscal, POS, inventory, dashboard, and banking integration modules.",
      ],
      successCriteria: [
        gap.en(
          "observable success criteria for the modernization (adoption, stability, maintainability, productivity, or equivalent signals).",
        ),
      ],
      alternatives: [
        "Alternative 1 — full frontend rewrite: replace the legacy base at once.",
        "Alternative 2 — gradual migration: prepare architecture for incremental evolution and migrate in stages while keeping production running.",
        "Alternative 3 — framework comparison for the new frontend base: performed as part of the technical responsibility.",
        "Full rewrite was discarded in favor of gradual migration because it conflicted with the operational continuity constraint.",
        gap.en(
          "list of specific frameworks evaluated, comparison criteria, and detailed rejection reasons for each option.",
        ),
      ],
      decision: [
        "Choose React + Next.js as the foundation of the new frontend.",
        "Adopt gradual migration instead of a full rewrite.",
        "Prioritize governance, observability, longevity, and incremental evolution while driving modernization.",
      ],
      architecture: [
        "The target architecture was defined to support incremental evolution, enabling frontend modernization without requiring a full production stop.",
        "Choosing React + Next.js establishes the technological foundation of the new frontend; gradual migration defines how that foundation coexists with the Vue 2 / Nuxt 2 / Vuetify 2 legacy over time.",
        "The architectural reasoning prioritizes boundaries that reduce coupling and allow complexity management as modules and integrations keep growing.",
        gap.en(
          "publishable detail on module boundaries, legacy integration, layer composition, and architectural flow.",
        ),
      ],
      flow: [
        gap.en(
          "architectural flow and main solution flows (navigation, critical modules, and legacy integration points).",
        ),
      ],
      technologies: [
        "Legacy frontend: Vue 2, Nuxt 2, and Vuetify 2.",
        "Chosen foundation for the new frontend: React and Next.js.",
        "Other technologies in the product ecosystem remain outside the detailed scope of this case due to confidentiality and focus on the modernization decision.",
      ],
      tradeoffs: [
        "Primary trade-off: speed of replacing the legacy versus operational continuity.",
        "What was gained with gradual migration: preservation of daily operations and reduced risk of broad interruption in a critical system.",
        "What was lost or deferred: immediate elimination of the legacy; modernization happens over time.",
        "Accepted risk: prolonged coexistence between old and new bases while migration advances.",
        gap.en(
          "concrete operational cost of coexistence (dual-maintenance effort, release complexity) and criteria under which a full rewrite would be preferable.",
        ),
      ],
      execution: [
        "Lead technical research and comparison of alternatives.",
        "Produce technical documentation, RFCs, and guidelines to align decisions.",
        "Define and communicate a modernization strategy oriented to incremental evolution.",
        "Continuously support the team's technical decisions during execution.",
      ],
      challenges: [
        "High coupling in the legacy frontend.",
        "Monolithic components.",
        "Weak separation of responsibilities.",
        "Difficulty evolving the product safely.",
        "Previous lack of explicit complexity management.",
        "Need to modernize without interrupting a critical production ERP.",
      ],
      result: [
        "Current state: modernization is still in progress and must not be treated as complete.",
        gap.en("intermediate results obtained so far (deliveries, partial adoption, stability or productivity signals)."),
      ],
      impact: [
        "The modernized system has potential operational impact on an ERP used by approximately 500 companies.",
        gap.en("observed impact so far — not yet publicly documented."),
      ],
      limitations: [
        "Internal architecture, module, and operation details can only be published at a generalized level due to confidentiality.",
        "Final results cannot be presented as complete while modernization is still in progress.",
        "Part of the framework alternatives and quantitative success criteria are not yet publicly documented.",
      ],
      learnings: [
        gap.en(
          "specific learnings are not yet publicly documented; they should derive from decisions and intermediate results once published.",
        ),
      ],
      principles: [
        "In critical production systems, modernization strategy must be conditioned by operational continuity — evidenced by choosing gradual migration over rewrite.",
        "Governance, observability, and longevity can be explicit architecture criteria, not only desirable attributes after the fact.",
        "Technical documentation (RFCs and guidelines) is part of driving the decision, not an appendix to implementation.",
        gap.en("additional principles after consolidating intermediate results and detailed operational trade-offs."),
      ],
    },
    decisions: [
      {
        title: "Modernization strategy: gradual migration",
        problem: [
          "The legacy frontend hindered ERP evolution, but the system is critical in production and cannot be broadly interrupted.",
        ],
        alternatives: [
          "Full frontend rewrite.",
          "Gradual migration with incremental evolution.",
        ],
        choice: [
          "Adopt gradual migration, preparing the architecture for incremental evolution.",
        ],
        justification: [
          "The operational continuity constraint in a multi-tenant environment with sensitive modules makes a full rewrite incompatible with acceptable risk.",
          "Modernization must coexist with continuous product growth.",
        ],
        tradeoffs: [
          "Gain: operational continuity and lower risk of broad interruption.",
          "Loss/deferral: immediate elimination of the legacy.",
          "Accepted risk: prolonged coexistence between old and new bases.",
        ],
        consequences: [
          "Architecture and execution become oriented toward incremental stages.",
          "Governance and documentation become necessary to keep coherence throughout migration.",
          gap.en("metrics and observed effects of coexistence are not yet published."),
        ],
      },
      {
        title: "New frontend foundation: React + Next.js",
        problem: [
          "A technological foundation for the new frontend had to be defined to replace, in a planned way, the Vue 2 / Nuxt 2 / Vuetify 2 stack.",
        ],
        alternatives: [
          "Framework comparison was conducted as part of the technical responsibility.",
          gap.en("specific alternatives evaluated and comparison matrix are not yet published."),
        ],
        choice: ["Adopt React + Next.js as the foundation of the new frontend."],
        justification: [
          "The choice resulted from research and comparison of alternatives, documented through RFCs and guidelines.",
          gap.en("detailed criteria that made React + Next.js preferable to the other evaluated options."),
        ],
        tradeoffs: [
          gap.en(
            "specific trade-offs of choosing React + Next.js versus evaluated alternatives (learning curve, ecosystem, legacy compatibility, migration cost).",
          ),
        ],
        consequences: [
          "The new frontend adopts React + Next.js as its technological foundation.",
          "Gradual migration must coordinate introducing that foundation while coexisting with the legacy.",
        ],
      },
    ],
  },
  es: {
    objective:
      "Demostrar capacidad para conducir la modernización de frontend en un ERP crítico en producción, con énfasis en decisión arquitectónica, gestión de complejidad y comunicación técnica.",
    competencies: [
      "Arquitectura de software",
      "Modernización de sistemas legados",
      "Toma de decisiones técnicas",
      "Comunicación técnica y documentación",
      "Gestión de complejidad",
    ],
    sections: {
      executiveSummary: [
        "Modernización del frontend de un ERP óptico en producción desde hace aproximadamente cinco años, utilizado por aproximadamente 500 empresas.",
        "El sistema es crítico para la operación diaria, multi-tenant, y cubre módulos financieros, fiscales, PDV, inventario, dashboards e integraciones bancarias.",
        "Rol: conducir investigación, comparar alternativas, definir la arquitectura del nuevo frontend, producir documentación técnica (RFCs y directrices) y guiar la estrategia de modernización.",
        "Decisión central: adoptar React + Next.js como base del nuevo frontend y migrar de forma gradual, en lugar de reescribir completamente, priorizando gobernanza, observabilidad y longevidad.",
        "Estado actual: la modernización aún está en curso. Los resultados intermedios observables aún no están documentados públicamente.",
      ],
      context: [
        "ERP especializado para el mercado óptico, en producción desde hace aproximadamente cinco años.",
        "Utilizado por aproximadamente 500 empresas y crítico para la operación diaria de las ópticas.",
        "Ambiente multi-tenant con usuarios concurrentes.",
        "Alcance funcional conocido: módulos financieros, fiscales, PDV, inventario, dashboards e integraciones bancarias.",
        "La modernización del frontend aún está en curso.",
      ],
      problem: [
        "El frontend legado se construyó con Vue 2, Nuxt 2 y Vuetify 2.",
        "El código presentaba alto acoplamiento, componentes monolíticos y baja separación de responsabilidades.",
        "Estas características dificultaban la evolución del producto a medida que el dominio crecía.",
        "No había gestión explícita de la complejidad en un sistema que sigue expandiendo módulos e integraciones.",
        "Consecuencia de no actuar: el costo del cambio tendería a aumentar, la evolución de módulos críticos se volvería más lenta y el riesgo operacional asociado a cambios en el frontend crecería en un sistema ya en producción.",
      ],
      restrictions: [
        "Continuidad operacional: el sistema está en producción y es crítico para la operación diaria — una interrupción amplia no es aceptable.",
        "Legado: la base Vue 2 / Nuxt 2 / Vuetify 2 debe coexistir con la evolución hasta que avance la migración.",
        "Multi-tenancy y concurrencia: los cambios deben respetar usuarios concurrentes y el aislamiento entre empresas.",
        "Módulos sensibles: financiero, fiscal, PDV, inventario e integraciones bancarias elevan el costo del error.",
        "Evolución continua: el producto sigue creciendo; la modernización no puede depender de congelar el negocio.",
        gap.es("restricciones explícitas de plazo, tamaño de equipo y presupuesto aún no están documentadas públicamente."),
      ],
      role: [
        "Ingeniero de Software Full Stack con ownership técnico en la modernización del frontend.",
        "Responsable de conducir la estrategia de modernización, no solo de implementar tareas aisladas.",
      ],
      responsibilities: [
        "Definir la arquitectura del nuevo frontend.",
        "Investigar alternativas y comparar frameworks.",
        "Producir documentación técnica.",
        "Escribir RFCs y directrices.",
        "Apoyar las decisiones técnicas del equipo.",
        "Conducir la estrategia de modernización.",
      ],
      stakeholders: [
        "Usuarios de empresas del mercado óptico, impactados por la operación diaria del ERP.",
        "Equipo técnico responsable del ERP, con quien las decisiones de modernización deben alinearse.",
        "Áreas involucradas en la evolución de módulos financieros, fiscales, PDV, inventario, dashboards e integraciones bancarias.",
      ],
      successCriteria: [
        gap.es(
          "criterios observables de éxito de la modernización (adopción, estabilidad, mantenibilidad, productividad o señales equivalentes).",
        ),
      ],
      alternatives: [
        "Alternativa 1 — reescritura completa del frontend: sustituir la base legada de una vez.",
        "Alternativa 2 — migración gradual: preparar la arquitectura para evolución incremental y migrar por etapas, manteniendo el sistema en producción.",
        "Alternativa 3 — comparación de frameworks para la base del nuevo frontend: realizada como parte de la responsabilidad técnica.",
        "La reescritura completa se descartó a favor de la migración gradual por conflictuar con la restricción de continuidad operacional.",
        gap.es(
          "lista de frameworks específicos evaluados, criterios de comparación y motivos detallados de descarte de cada opción.",
        ),
      ],
      decision: [
        "Elegir React + Next.js como base del nuevo frontend.",
        "Adoptar migración gradual en lugar de reescritura completa.",
        "Priorizar gobernanza, observabilidad, longevidad y evolución incremental en la conducción de la modernización.",
      ],
      architecture: [
        "La arquitectura objetivo se definió para soportar evolución incremental, permitiendo modernizar el frontend sin exigir una interrupción total del sistema en producción.",
        "La elección de React + Next.js establece la base tecnológica del nuevo frontend; la estrategia de migración gradual define cómo esa base coexiste con el legado Vue 2 / Nuxt 2 / Vuetify 2 a lo largo del tiempo.",
        "El razonamiento arquitectónico prioriza fronteras que reduzcan el acoplamiento y permitan gestionar la complejidad a medida que módulos e integraciones siguen creciendo.",
        gap.es(
          "detalle publicable de fronteras de módulos, integración con el legado, composición de capas y flujo arquitectural.",
        ),
      ],
      flow: [
        gap.es(
          "flujo arquitectural y flujos principales de la solución (navegación, módulos críticos y puntos de integración con el legado).",
        ),
      ],
      technologies: [
        "Legado del frontend: Vue 2, Nuxt 2 y Vuetify 2.",
        "Base elegida para el nuevo frontend: React y Next.js.",
        "Las demás tecnologías del ecosistema del producto quedan fuera del alcance detallado de este caso por confidencialidad y foco en la decisión de modernización.",
      ],
      tradeoffs: [
        "Trade-off principal: velocidad de sustitución del legado versus continuidad operacional.",
        "Lo que se ganó con la migración gradual: preservación de la operación diaria y reducción del riesgo de interrupción amplia en un sistema crítico.",
        "Lo que se perdió o aplazó: la eliminación inmediata del legado; la modernización ocurre a lo largo del tiempo.",
        "Riesgo aceptado: convivencia prolongada entre bases antigua y nueva mientras avanza la migración.",
        gap.es(
          "costo operacional concreto de la coexistencia (esfuerzo de mantenimiento dual, complejidad de release) y criterios en los que la reescritura completa sería preferible.",
        ),
      ],
      execution: [
        "Conducción de la investigación técnica y comparación de alternativas.",
        "Producción de documentación técnica, RFCs y directrices para alinear decisiones.",
        "Definición y comunicación de la estrategia de modernización orientada a evolución incremental.",
        "Apoyo continuo a las decisiones técnicas del equipo durante la ejecución.",
      ],
      challenges: [
        "Alto acoplamiento en el frontend legado.",
        "Componentes monolíticos.",
        "Baja separación de responsabilidades.",
        "Dificultad para evolucionar el producto con seguridad.",
        "Ausencia previa de gestión explícita de la complejidad.",
        "Necesidad de modernizar sin interrumpir un ERP crítico en producción.",
      ],
      result: [
        "Estado actual: la modernización aún está en curso y no debe tratarse como concluida.",
        gap.es("resultados intermedios obtenidos hasta el momento (entregas, adopción parcial, señales de estabilidad o productividad)."),
      ],
      impact: [
        "El sistema modernizado tiene potencial de impacto operacional sobre un ERP usado por aproximadamente 500 empresas.",
        gap.es("impacto observado hasta el momento — aún no documentado públicamente."),
      ],
      limitations: [
        "Los detalles internos de arquitectura, módulos y operación solo pueden publicarse a un nivel generalizado por confidencialidad.",
        "Los resultados finales no pueden presentarse como concluidos mientras la modernización esté en curso.",
        "Parte de las alternativas de framework y de los criterios cuantitativos de éxito aún no están documentados públicamente.",
      ],
      learnings: [
        gap.es(
          "aprendizajes específicos aún no documentados públicamente; deben derivar de las decisiones y de los resultados intermedios cuando se publiquen.",
        ),
      ],
      principles: [
        "En sistemas críticos en producción, la estrategia de modernización debe condicionarse por la continuidad operacional — evidenciado por la elección de migración gradual en lugar de reescritura.",
        "Gobernanza, observabilidad y longevidad pueden ser criterios explícitos de arquitectura, no solo atributos deseables a posteriori.",
        "La documentación técnica (RFCs y directrices) forma parte de la conducción de la decisión, no es un apéndice de la implementación.",
        gap.es("principios adicionales después de consolidar resultados intermedios y trade-offs operacionales detallados."),
      ],
    },
    decisions: [
      {
        title: "Estrategia de modernización: migración gradual",
        problem: [
          "El frontend legado dificultaba la evolución del ERP, pero el sistema es crítico en producción y no puede interrumpirse de forma amplia.",
        ],
        alternatives: [
          "Reescritura completa del frontend.",
          "Migración gradual con evolución incremental.",
        ],
        choice: [
          "Adoptar migración gradual, preparando la arquitectura para evolución incremental.",
        ],
        justification: [
          "La restricción de continuidad operacional en un ambiente multi-tenant con módulos sensibles hace incompatibile la reescritura completa con el riesgo aceptable.",
          "La modernización debe convivir con el crecimiento continuo del producto.",
        ],
        tradeoffs: [
          "Ganancia: continuidad de la operación y menor riesgo de interrupción amplia.",
          "Pérdida/aplazamiento: eliminación inmediata del legado.",
          "Riesgo aceptado: coexistencia prolongada entre bases antigua y nueva.",
        ],
        consequences: [
          "La arquitectura y la ejecución pasan a orientarse por etapas incrementales.",
          "La gobernanza y la documentación se vuelven necesarias para mantener coherencia a lo largo de la migración.",
          gap.es("métricas y efectos observados de la coexistencia aún no publicados."),
        ],
      },
      {
        title: "Base del nuevo frontend: React + Next.js",
        problem: [
          "Era necesario definir la base tecnológica del nuevo frontend para sustituir, de forma planificada, la stack Vue 2 / Nuxt 2 / Vuetify 2.",
        ],
        alternatives: [
          "La comparación de frameworks se condujo como parte de la responsabilidad técnica.",
          gap.es("alternativas específicas evaluadas y matriz de comparación aún no publicadas."),
        ],
        choice: ["Adoptar React + Next.js como base del nuevo frontend."],
        justification: [
          "La elección fue resultado de investigación y comparación de alternativas, documentadas mediante RFCs y directrices.",
          gap.es("criterios detallados que hicieron preferible React + Next.js frente a las demás opciones evaluadas."),
        ],
        tradeoffs: [
          gap.es(
            "trade-offs específicos de la elección de React + Next.js frente a las alternativas evaluadas (curva de aprendizaje, ecosistema, compatibilidad con el legado, costo de migración).",
          ),
        ],
        consequences: [
          "El nuevo frontend adopta React + Next.js como fundación tecnológica.",
          "La migración gradual debe coordinar la introducción de esa base con la convivencia del legado.",
        ],
      },
    ],
  },
};
