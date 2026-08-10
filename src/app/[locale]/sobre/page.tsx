import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Layers3,
  MessageSquareText,
  Route,
  ShieldCheck,
} from "lucide-react";
import Contact from "@/components/home/contact";
import { Button } from "@/components/ui/button";
import { aboutPt } from "@/data/portfolio-pt";
import type { Locale } from "@/interfaces";
import { getDictionary } from "@/lib/get-dictionary";
import {
  languageAlternates,
  localeConfig,
  metadataBase,
  sharedOpenGraphImages,
  siteUrl,
} from "@/lib/seo";

type AboutContent = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    imageAlt: string;
    facts: string[];
    primaryAction: string;
    secondaryAction: string;
  };
  sections: {
    profileTitle: string;
    profileParagraphs: string[];
    principleTitle: string;
    principleLead: string;
    principleBody: string;
    competenciesTitle: string;
    currentTitle: string;
    modernizationTitle: string;
    mobileTitle: string;
    previousTitle: string;
    teachingTitle: string;
    educationTitle: string;
    philosophyTitle: string;
    technologiesTitle: string;
    faqTitle: string;
  };
  competencies: Array<{ title: string; description: string }>;
  log: {
    period: string;
    role: string;
    paragraphs: string[];
    items: string[];
  };
  modernization: {
    summary: string;
    foundationTitle: string;
    foundation: string[];
    architectureTitle: string;
    architecture: Array<{ layer: string; description: string }>;
    decisionTitle: string;
    decision: string;
    migrationTitle: string;
    migration: string;
  };
  mobile: {
    paragraphs: string[];
    products: Array<{ title: string; description: string }>;
  };
  previous: {
    period: string;
    role: string;
    paragraphs: string[];
  };
  teaching: {
    period: string;
    role: string;
    paragraphs: string[];
    courses: string[];
  };
  education: Array<{ title: string; institution: string; period: string }>;
  philosophy: string[];
  technologies: string[];
  faq: Array<{ question: string; answer: string }>;
};

const aboutContent: Record<Locale, AboutContent> = {
  pt: {
    seo: {
      title: "João Paulo Almeida Alavarse | Engenheiro de Software",
      description:
        "Perfil profissional de João Paulo Almeida Alavarse, engenheiro de software e docente do ensino superior com atuação em sistemas reais, ERP, mobile, modernização e produto.",
      keywords: [
        "João Paulo Almeida Alavarse",
        "João Paulo Alavarse",
        "João Alavarse",
        "AlavarseDev",
        "engenheiro de software",
        "docente do ensino superior",
        "modernização de ERP",
        "Kero Ótica",
        "Pupilens",
        "React",
        "Next.js",
        "TypeScript",
      ],
    },
    hero: {
      eyebrow: "Perfil profissional",
      title: "João Paulo Almeida Alavarse",
      subtitle: "Engenheiro de Software • Docente do Ensino Superior",
      intro:
        "Trabalha com software olhando para o que acontece depois da entrega: quem usa, quem mantém, quem vende, quem atende e como o produto precisa continuar evoluindo.",
      imageAlt: "Foto profissional de João Paulo Almeida Alavarse",
      facts: [
        "Decisões técnicas com contexto de produto",
        "Responsabilidade por sistemas em produção",
        "Comunicação entre tecnologia, ensino e negócio",
      ],
      primaryAction: "Falar com João",
      secondaryAction: "Ver cases",
    },
    sections: {
      profileTitle: "Quem é João como engenheiro",
      profileParagraphs: [
        "João Paulo Almeida Alavarse é um engenheiro de software que procura entender o problema antes de escolher a solução. Seu trabalho combina implementação, manutenção, arquitetura, comunicação e proximidade com produto.",
        "Ele não enxerga software como uma demonstração de tecnologia. Para João, uma boa solução precisa fazer sentido para quem usa, para a empresa que depende do sistema e para os desenvolvedores que precisarão manter o código depois.",
      ],
      principleTitle: "Complexidade precisa justificar valor",
      principleLead:
        "Software existe para atender usuários e negócios, não para demonstrar sofisticação técnica.",
      principleBody:
        "Qualidade, arquitetura e boas práticas importam, mas precisam ser proporcionais ao contexto. Uma decisão técnica só se sustenta quando melhora a experiência do cliente, facilita a manutenção, reduz acoplamento ou prepara o produto para evoluir sem criar peso desnecessário.",
      competenciesTitle: "Competências demonstradas",
      currentTitle: "Como esse perfil aparece no trabalho atual",
      modernizationTitle: "Modernização do Kero Ótica",
      mobileTitle: "Produtos mobile e Pupilens",
      previousTitle: "Experiência anterior no Grupo DBM",
      teachingTitle: "Docência e formação de novos profissionais",
      educationTitle: "Formação acadêmica",
      philosophyTitle: "Filosofia de engenharia",
      technologiesTitle: "Tecnologias no contexto da atuação",
      faqTitle: "Perguntas frequentes",
    },
    competencies: [
      {
        title: "Entende o contexto",
        description:
          "Antes de propor uma solução, procura entender produto, operação, usuários e limitações técnicas reais.",
      },
      {
        title: "Decide com proporção",
        description:
          "Arquitetura e boas práticas importam, mas a complexidade precisa ser proporcional ao problema resolvido.",
      },
      {
        title: "Assume continuidade",
        description:
          "Além de construir, acompanha evolução, manutenção, publicação, investigação de problemas e suporte ao produto.",
      },
      {
        title: "Comunicação",
        description:
          "Documentação, diagramas, aulas, tutoriais, demonstrações e apoio técnico a áreas não técnicas.",
      },
    ],
    log: {
      period: "Maio de 2025 até o presente",
      role: "Desenvolvedor Full Stack Júnior",
      paragraphs: [
        "Na Log Sistemas, João atua perto do produto e da operação. O trabalho passa por manutenção de sistemas, desenvolvimento web, aplicativos mobile, modernização de frontend, documentação técnica e investigação de problemas.",
        "Esse escopo mostra uma característica importante do seu perfil: ele não trabalha isolado no código. Conversas com atendimento, comercial e marketing ajudam a transformar dúvidas, erros e necessidades de clientes em decisões técnicas mais bem contextualizadas.",
      ],
      items: [
        "No Kero Ótica, a modernização do frontend evidencia sua preocupação com base técnica, padrões e manutenção futura.",
        "Nos aplicativos mobile, a responsabilidade vai além do desenvolvimento: envolve evolução, publicação, investigação e continuidade do produto.",
        "No apoio a atendimento, comercial e marketing, transforma conhecimento técnico em explicações úteis para outras áreas.",
        "Na documentação, registra decisões para que o projeto seja compreensível por quem vier depois.",
      ],
    },
    modernization: {
      summary:
        "A modernização do Kero Ótica começou em outubro de 2025 e ainda está em fase de estruturação. João participa desde o início e é atualmente o único desenvolvedor dedicado ao novo frontend.",
      foundationTitle: "Fundação já estruturada",
      foundation: [
        "Arquitetura inicial, organização do projeto, regras e documentação.",
        "Compartilhamento de autenticação entre o frontend Vue existente e o novo frontend React/Next.js.",
        "Controle e roteamento entre aplicações por meio do Nginx.",
        "Preparação da convivência incremental entre o frontend atual e o novo frontend.",
      ],
      architectureTitle: "Arquitetura modular",
      architecture: [
        {
          layer: "Presentation",
          description:
            "Páginas, componentes, hooks, apresentação de dados e integração da interface com os fluxos da aplicação.",
        },
        {
          layer: "Application",
          description:
            "Casos de uso, orquestração e coordenação entre apresentação, domínio e infraestrutura.",
        },
        {
          layer: "Domain",
          description:
            "Entidades, modelos e regras de negócio independentes de frameworks.",
        },
        {
          layer: "Infra",
          description:
            "Comunicação com APIs, armazenamento, adaptadores e detalhes técnicos externos.",
        },
      ],
      decisionTitle: "Por que React com Next.js",
      decision:
        "A escolha não foi tratada como preferência pessoal nem como crítica ao Vue.js. A decisão considerou estrutura, padronização, mercado, contratação, comunidade, SSR, SEO, robustez do ecossistema e capacidade de sustentar a evolução do produto.",
      migrationTitle: "Migração incremental",
      migration:
        "O foco atual é substituir o frontend sem trocar API ou banco de dados. As duas aplicações precisam conviver para reduzir risco operacional e permitir que o ERP continue evoluindo enquanto a base nova amadurece.",
    },
    mobile: {
      paragraphs: [
        "João também atua com produtos mobile, especialmente no ecossistema de soluções voltadas a óticas. Seu trabalho envolve manutenção, evolução, publicação de versões, investigação de problemas e alinhamento com necessidades de produto.",
        "No Pupilens, a função do produto é apoiar vendedores na apresentação de lentes aos clientes, tornando diferenças visuais e aberrações mais compreensíveis durante o atendimento.",
      ],
      products: [
        {
          title: "Aplicativos mobile",
          description:
            "Manutenção, evolução e publicação de versões com foco em estabilidade, clareza de uso e continuidade dos produtos.",
        },
        {
          title: "Pupilens",
          description:
            "Ferramenta de apoio comercial e educacional para apresentação de lentes, comparação visual e explicação de diferenças ao cliente.",
        },
      ],
    },
    previous: {
      period: "Maio de 2024 a maio de 2025",
      role: "Desenvolvedor Full Stack Júnior",
      paragraphs: [
        "No Grupo DBM, João teve a primeira experiência forte de responsabilidade técnica: passou a cuidar sozinho de uma aplicação de e-commerce para varejo com integração ao WhatsApp.",
        "O produto chegou à produção, mas teve adoção comercial limitada, com cerca de 15 clientes ativos simultaneamente. A experiência foi importante justamente por não ser tratada como uma vitória artificial.",
        "Dali ficou uma leitura que acompanha seu trabalho atual: software funcional não basta. Produto, uso real, manutenção e contexto de negócio também fazem parte da decisão de engenharia.",
      ],
    },
    teaching: {
      period: "Desde junho de 2025",
      role: "Docente do Ensino Superior na UMFG",
      paragraphs: [
        "A docência não aparece como uma atividade separada da engenharia. A mesma preocupação em tornar sistemas compreensíveis também aparece quando João ensina.",
        "Em sala de aula, leva experiências de projetos reais para planos de aula, projetos práticos e orientação de carreira. A proximidade com o mercado ajuda alunos a entenderem não apenas tecnologia, mas como o trabalho acontece dentro de empresas.",
      ],
      courses: [
        "Redes",
        "Front-end",
        "Desenvolvimento Mobile",
        "Ferramentas Computacionais",
      ],
    },
    education: [
      {
        title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        institution: "UMFG",
        period: "2022-2024",
      },
      {
        title: "Especialização em Segurança da Informação",
        institution: "UNIASSELVI",
        period: "2024-2025",
      },
    ],
    philosophy: [
      "O software é feito para satisfazer os usuários, não os desenvolvedores.",
      "Uma base técnica boa é aquela que outras pessoas conseguem compreender, manter e evoluir.",
      "Pragmatismo não é abrir mão de qualidade; é aplicar qualidade na medida certa para o problema, a equipe e o produto.",
    ],
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Vue.js",
      "Node.js",
      ".NET",
      "Nginx",
    ],
    faq: [
      {
        question: "Qual é o foco profissional de João Paulo Almeida Alavarse?",
        answer:
          "O foco é Engenharia de Software aplicada a sistemas reais: manutenção de produtos em produção, modernização de ERP, aplicações web e mobile, documentação técnica e decisões que equilibram valor para o usuário, produto e manutenção futura.",
      },
      {
        question: "Por que ele se posiciona como engenheiro de software, e não apenas como desenvolvedor full stack?",
        answer:
          "Porque o trabalho descrito na página envolve análise de contexto, arquitetura, trade-offs, sustentação de sistemas em produção, integração com produto e comunicação técnica. Full stack aparece como característica da atuação, não como identidade principal.",
      },
      {
        question: "Qual experiência resume melhor seu jeito de trabalhar?",
        answer:
          "A modernização do Kero Ótica resume bem esse perfil: antes de pensar apenas em telas ou tecnologia, João trabalha na base técnica, nos padrões, na documentação e na preparação do projeto para evoluir com mais clareza.",
      },
      {
        question: "A página Sobre é um currículo?",
        answer:
          "Não. A página organiza experiências para explicar como João pensa e trabalha como engenheiro de software. Cargos, empresas e projetos aparecem como evidências, não como uma lista cronológica completa.",
      },
      {
        question: "Que tipo de responsabilidade técnica ele já assumiu?",
        answer:
          "Já cuidou sozinho de uma aplicação em produção no Grupo DBM, atua em manutenção e evolução de sistemas na Log Sistemas, possui responsabilidade técnica por aplicativos mobile e está estruturando a base do novo frontend do ERP Kero Ótica.",
      },
      {
        question: "Como a docência se conecta com a atuação em engenharia?",
        answer:
          "A docência reforça comunicação técnica, organização de raciocínio e formação de novos profissionais. João leva experiências de mercado para aulas, projetos práticos e orientação de carreira, ajudando alunos a entenderem a transição entre faculdade e trabalho real.",
      },
      {
        question: "Que tipo de oportunidade faz sentido entrar em contato?",
        answer:
          "Faz sentido conversar sobre oportunidades em Engenharia de Software, modernização de sistemas, produtos digitais, mobile, ERP, docência, comunicação técnica, colaboração com equipes de produto ou conversas com lideranças técnicas.",
      },
    ],
  },
  en: {
    seo: {
      title: "João Paulo Almeida Alavarse | Software Engineer",
      description:
        "Professional profile of João Paulo Almeida Alavarse, a software engineer and higher education lecturer working with production systems, ERP, mobile, modernization, and product.",
      keywords: [
        "João Paulo Almeida Alavarse",
        "João Paulo Alavarse",
        "João Alavarse",
        "AlavarseDev",
        "software engineer",
        "higher education lecturer",
        "ERP modernization",
        "Kero Ótica",
        "Pupilens",
        "React",
        "Next.js",
        "TypeScript",
      ],
    },
    hero: {
      eyebrow: "Professional profile",
      title: "João Paulo Almeida Alavarse",
      subtitle: "Software Engineer • Higher Education Lecturer",
      intro:
        "Works with software by looking at what happens after delivery: who uses it, who maintains it, who sells it, who supports it, and how the product needs to keep evolving.",
      imageAlt: "Professional photo of João Paulo Almeida Alavarse",
      facts: [
        "Technical decisions with product context",
        "Responsibility for production systems",
        "Communication across technology, teaching, and business",
      ],
      primaryAction: "Contact João",
      secondaryAction: "View cases",
    },
    sections: {
      profileTitle: "Who João is as an engineer",
      profileParagraphs: [
        "João Paulo Almeida Alavarse is a software engineer who tries to understand the problem before choosing the solution. His work combines implementation, maintenance, architecture, communication, and proximity to product.",
        "He does not treat software as a display of technology. A good solution needs to make sense for the people who use it, for the company that depends on it, and for the developers who will maintain it later.",
      ],
      principleTitle: "Complexity must justify its value",
      principleLead:
        "Software exists to serve users and businesses, not to display technical sophistication.",
      principleBody:
        "Quality, architecture, and good practices matter, but they must fit the context. A technical decision is only sustainable when it improves the customer experience, eases maintenance, reduces coupling, or prepares the product to evolve without unnecessary weight.",
      competenciesTitle: "Demonstrated competencies",
      currentTitle: "How this profile appears in current work",
      modernizationTitle: "Kero Ótica modernization",
      mobileTitle: "Mobile products and Pupilens",
      previousTitle: "Previous experience at Grupo DBM",
      teachingTitle: "Teaching and career guidance",
      educationTitle: "Education",
      philosophyTitle: "Engineering philosophy",
      technologiesTitle: "Technologies in context",
      faqTitle: "Frequently asked questions",
    },
    competencies: [
      {
        title: "Understands context",
        description:
          "Before proposing a solution, he tries to understand product, operation, users, and real technical constraints.",
      },
      {
        title: "Decides proportionally",
        description:
          "Architecture and good practices matter, but complexity must be proportional to the problem being solved.",
      },
      {
        title: "Takes continuity seriously",
        description:
          "Beyond building, he follows evolution, maintenance, releases, issue investigation, and product support.",
      },
      {
        title: "Communication",
        description:
          "Documentation, diagrams, classes, tutorials, product demos, and technical support for non-technical areas.",
      },
    ],
    log: {
      period: "May 2025 to present",
      role: "Junior Full Stack Developer",
      paragraphs: [
        "At Log Sistemas, João works close to product and operation. His scope includes system maintenance, web development, mobile apps, frontend modernization, technical documentation, and issue investigation.",
        "This shows an important part of his profile: he does not work isolated in code. Conversations with customer service, sales, and marketing help turn questions, bugs, and customer needs into better-contextualized technical decisions.",
      ],
      items: [
        "In Kero Ótica, frontend modernization evidences his concern with technical foundation, standards, and future maintenance.",
        "In mobile apps, responsibility goes beyond development: it includes evolution, releases, investigation, and product continuity.",
        "In support for customer-facing areas, he turns technical knowledge into useful explanations for other teams.",
        "In documentation, he records decisions so the project can be understood by the next person who works on it.",
      ],
    },
    modernization: {
      summary:
        "The Kero Ótica modernization started in October 2025 and is still in its structuring phase. João has participated from the beginning and is currently the only developer dedicated to the new frontend.",
      foundationTitle: "Foundation already structured",
      foundation: [
        "Initial architecture, project organization, rules, and documentation.",
        "Shared authentication between the existing Vue frontend and the new React/Next.js frontend.",
        "Control and routing between applications through Nginx.",
        "Preparation for incremental coexistence between the current frontend and the new frontend.",
      ],
      architectureTitle: "Modular architecture",
      architecture: [
        {
          layer: "Presentation",
          description:
            "Pages, components, hooks, data presentation, and integration between the interface and application flows.",
        },
        {
          layer: "Application",
          description:
            "Use cases, orchestration, and coordination between presentation, domain, and infrastructure.",
        },
        {
          layer: "Domain",
          description:
            "Entities, models, and business rules independent from frameworks.",
        },
        {
          layer: "Infra",
          description:
            "API communication, storage, adapters, and external technical details.",
        },
      ],
      decisionTitle: "Why React with Next.js",
      decision:
        "The choice was not treated as personal preference or as a criticism of Vue.js. It considered structure, standardization, market adoption, hiring, community, SSR, SEO, ecosystem robustness, and the ability to sustain product evolution.",
      migrationTitle: "Incremental migration",
      migration:
        "The current focus is replacing the frontend without changing the API or database. Both applications need to coexist to reduce operational risk and let the ERP keep evolving while the new foundation matures.",
    },
    mobile: {
      paragraphs: [
        "João also works with mobile products, especially within the ecosystem of solutions for optical stores. His work includes maintenance, evolution, version publishing, problem investigation, and alignment with product needs.",
        "In Pupilens, the product supports sellers during lens presentations, making visual differences and aberrations easier to explain to customers.",
      ],
      products: [
        {
          title: "Mobile applications",
          description:
            "Maintenance, evolution, and version publishing with attention to stability, usability, and product continuity.",
        },
        {
          title: "Pupilens",
          description:
            "A commercial and educational support tool for lens presentation, visual comparison, and customer explanation.",
        },
      ],
    },
    previous: {
      period: "May 2024 to May 2025",
      role: "Junior Full Stack Developer",
      paragraphs: [
        "At Grupo DBM, João had his first strong experience with technical responsibility: he became the person maintaining a retail e-commerce application with WhatsApp integration alone.",
        "The product reached production, but had limited commercial adoption, with around 15 simultaneous active customers. The experience matters precisely because it is not treated as an artificial success story.",
        "It left a lesson that still shapes his work: functional software is not enough. Product, real usage, maintenance, and business context are also part of engineering decisions.",
      ],
    },
    teaching: {
      period: "Since June 2025",
      role: "Higher Education Lecturer at UMFG",
      paragraphs: [
        "Teaching does not appear as a separate activity from engineering. The same concern with making systems understandable also appears when João teaches.",
        "In the classroom, he brings real project experience into class plans, practical projects, and career guidance. That connection with the market helps students understand not only technology, but how work happens inside companies.",
      ],
      courses: [
        "Networks",
        "Front-end",
        "Mobile Development",
        "Computational Tools",
      ],
    },
    education: [
      {
        title: "Technology degree in Systems Analysis and Development",
        institution: "UMFG",
        period: "2022-2024",
      },
      {
        title: "Postgraduate specialization in Information Security",
        institution: "UNIASSELVI",
        period: "2024-2025",
      },
    ],
    philosophy: [
      "Software is made to satisfy users, not developers.",
      "A good technical foundation is one that other people can understand, maintain, and evolve.",
      "Pragmatism does not mean giving up quality; it means applying quality in the right measure for the problem, team, and product.",
    ],
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Vue.js",
      "Node.js",
      ".NET",
      "Nginx",
    ],
    faq: [
      {
        question: "What is João Paulo Almeida Alavarse's professional focus?",
        answer:
          "His focus is Software Engineering applied to real systems: maintaining production products, ERP modernization, web and mobile applications, technical documentation, and decisions that balance user value, product needs, and future maintenance.",
      },
      {
        question: "Why does he position himself as a software engineer, not only as a full stack developer?",
        answer:
          "Because the work described on the page involves context analysis, architecture, trade-offs, production system support, product collaboration, and technical communication. Full stack work is part of the scope, but not the main identity.",
      },
      {
        question: "What does João do in the Kero Ótica modernization?",
        answer:
          "He has participated since the beginning of the frontend modernization, structuring the React with Next.js foundation, documentation, project organization, coexistence with the existing Vue frontend, shared authentication, and criteria for future contributions.",
      },
      {
        question: "Is the Kero Ótica modernization already completed?",
        answer:
          "No. The modernization is still in its structuring phase. The page separates what has already been defined or prepared from results that are not public yet, such as migrated screens, complete customer-facing flows, or measured impact.",
      },
      {
        question: "What kind of technical responsibility has he already taken on?",
        answer:
          "He has maintained a production application alone at Grupo DBM, works on system maintenance and evolution at Log Sistemas, has technical responsibility for mobile apps, and is structuring the foundation of the new Kero Ótica ERP frontend.",
      },
      {
        question: "How does teaching connect with his engineering work?",
        answer:
          "Teaching reinforces technical communication, structured thinking, and the formation of new professionals. João brings market experience into classes, practical projects, and career guidance, helping students understand the transition from college to real work.",
      },
      {
        question: "What kind of opportunity is worth contacting him about?",
        answer:
          "It makes sense to contact him about Software Engineering opportunities, system modernization, digital products, mobile, ERP, teaching, technical communication, collaboration with product teams, or conversations with technical leaders.",
      },
    ],
  },
  es: {
    seo: {
      title: "João Paulo Almeida Alavarse | Ingeniero de Software",
      description:
        "Perfil profesional de João Paulo Almeida Alavarse, ingeniero de software y docente universitario con actuación en sistemas reales, ERP, mobile, modernización y producto.",
      keywords: [
        "João Paulo Almeida Alavarse",
        "João Paulo Alavarse",
        "João Alavarse",
        "AlavarseDev",
        "ingeniero de software",
        "docente universitario",
        "modernización de ERP",
        "Kero Ótica",
        "Pupilens",
        "React",
        "Next.js",
        "TypeScript",
      ],
    },
    hero: {
      eyebrow: "Perfil profesional",
      title: "João Paulo Almeida Alavarse",
      subtitle: "Ingeniero de Software • Docente Universitario",
      intro:
        "Trabaja con software mirando lo que ocurre después de la entrega: quién lo usa, quién lo mantiene, quién lo vende, quién lo atiende y cómo el producto necesita seguir evolucionando.",
      imageAlt: "Foto profesional de João Paulo Almeida Alavarse",
      facts: [
        "Decisiones técnicas con contexto de producto",
        "Responsabilidad por sistemas en producción",
        "Comunicación entre tecnología, enseñanza y negocio",
      ],
      primaryAction: "Contactar a João",
      secondaryAction: "Ver casos",
    },
    sections: {
      profileTitle: "Quién es João como ingeniero",
      profileParagraphs: [
        "João Paulo Almeida Alavarse es un ingeniero de software que busca entender el problema antes de elegir la solución. Su trabajo combina implementación, mantenimiento, arquitectura, comunicación y cercanía con producto.",
        "No entiende el software como una demostración de tecnología. Una buena solución debe tener sentido para quienes la usan, para la empresa que depende del sistema y para los desarrolladores que tendrán que mantenerlo después.",
      ],
      principleTitle: "La complejidad debe justificar su valor",
      principleLead:
        "El software existe para servir a usuarios y negocios, no para exhibir sofisticación técnica.",
      principleBody:
        "Calidad, arquitectura y buenas prácticas importan, pero deben ser proporcionales al contexto. Una decisión técnica se sostiene cuando mejora la experiencia del cliente, facilita el mantenimiento, reduce acoplamiento o prepara el producto para evolucionar sin peso innecesario.",
      competenciesTitle: "Competencias demostradas",
      currentTitle: "Cómo este perfil aparece en el trabajo actual",
      modernizationTitle: "Modernización de Kero Ótica",
      mobileTitle: "Productos mobile y Pupilens",
      previousTitle: "Experiencia anterior en Grupo DBM",
      teachingTitle: "Docencia y orientación profesional",
      educationTitle: "Formación académica",
      philosophyTitle: "Filosofía de ingeniería",
      technologiesTitle: "Tecnologías en contexto",
      faqTitle: "Preguntas frecuentes",
    },
    competencies: [
      {
        title: "Entiende el contexto",
        description:
          "Antes de proponer una solución, busca entender producto, operación, usuarios y restricciones técnicas reales.",
      },
      {
        title: "Decide con proporción",
        description:
          "Arquitectura y buenas prácticas importan, pero la complejidad debe ser proporcional al problema resuelto.",
      },
      {
        title: "Asume continuidad",
        description:
          "Además de construir, acompaña evolución, mantenimiento, publicación, investigación de problemas y soporte al producto.",
      },
      {
        title: "Comunicación",
        description:
          "Documentación, diagramas, clases, tutoriales, demostraciones y apoyo técnico a áreas no técnicas.",
      },
    ],
    log: {
      period: "Mayo de 2025 hasta el presente",
      role: "Desarrollador Full Stack Júnior",
      paragraphs: [
        "En Log Sistemas, João trabaja cerca del producto y de la operación. Su alcance incluye mantenimiento de sistemas, desarrollo web, aplicaciones mobile, modernización de frontend, documentación técnica e investigación de problemas.",
        "Ese alcance muestra una parte importante de su perfil: no trabaja aislado en el código. Conversaciones con atención, comercial y marketing ayudan a transformar dudas, errores y necesidades de clientes en decisiones técnicas con mejor contexto.",
      ],
      items: [
        "En Kero Ótica, la modernización del frontend evidencia su preocupación por base técnica, estándares y mantenimiento futuro.",
        "En aplicaciones mobile, la responsabilidad va más allá del desarrollo: incluye evolución, publicación, investigación y continuidad del producto.",
        "En el apoyo a áreas de contacto con clientes, transforma conocimiento técnico en explicaciones útiles para otros equipos.",
        "En documentación, registra decisiones para que el proyecto sea comprensible para la próxima persona que trabaje en él.",
      ],
    },
    modernization: {
      summary:
        "La modernización de Kero Ótica comenzó en octubre de 2025 y todavía está en fase de estructuración. João participa desde el inicio y actualmente es el único desarrollador dedicado al nuevo frontend.",
      foundationTitle: "Base ya estructurada",
      foundation: [
        "Arquitectura inicial, organización del proyecto, reglas y documentación.",
        "Autenticación compartida entre el frontend Vue existente y el nuevo frontend React/Next.js.",
        "Control y ruteo entre aplicaciones por medio de Nginx.",
        "Preparación de la convivencia incremental entre el frontend actual y el nuevo frontend.",
      ],
      architectureTitle: "Arquitectura modular",
      architecture: [
        {
          layer: "Presentation",
          description:
            "Páginas, componentes, hooks, presentación de datos e integración de la interfaz con los flujos de la aplicación.",
        },
        {
          layer: "Application",
          description:
            "Casos de uso, orquestación y coordinación entre presentación, dominio e infraestructura.",
        },
        {
          layer: "Domain",
          description:
            "Entidades, modelos y reglas de negocio independientes de frameworks.",
        },
        {
          layer: "Infra",
          description:
            "Comunicación con APIs, almacenamiento, adaptadores y detalles técnicos externos.",
        },
      ],
      decisionTitle: "Por qué React con Next.js",
      decision:
        "La elección no fue tratada como preferencia personal ni como crítica a Vue.js. Consideró estructura, estandarización, mercado, contratación, comunidad, SSR, SEO, robustez del ecosistema y capacidad de sostener la evolución del producto.",
      migrationTitle: "Migración incremental",
      migration:
        "El foco actual es sustituir el frontend sin cambiar API ni base de datos. Las dos aplicaciones necesitan convivir para reducir riesgo operativo y permitir que el ERP siga evolucionando mientras la nueva base madura.",
    },
    mobile: {
      paragraphs: [
        "João también trabaja con productos mobile, especialmente en el ecosistema de soluciones para ópticas. Su actuación incluye mantenimiento, evolución, publicación de versiones, investigación de problemas y alineación con necesidades de producto.",
        "En Pupilens, la función del producto es apoyar a vendedores en la presentación de lentes, haciendo que diferencias visuales y aberraciones sean más fáciles de explicar al cliente.",
      ],
      products: [
        {
          title: "Aplicaciones mobile",
          description:
            "Mantenimiento, evolución y publicación de versiones con foco en estabilidad, claridad de uso y continuidad de productos.",
        },
        {
          title: "Pupilens",
          description:
            "Herramienta de apoyo comercial y educativo para presentación de lentes, comparación visual y explicación al cliente.",
        },
      ],
    },
    previous: {
      period: "Mayo de 2024 a mayo de 2025",
      role: "Desarrollador Full Stack Júnior",
      paragraphs: [
        "En Grupo DBM, João tuvo su primera experiencia fuerte de responsabilidad técnica: pasó a mantener solo una aplicación de e-commerce para retail con integración a WhatsApp.",
        "El producto llegó a producción, pero tuvo adopción comercial limitada, con cerca de 15 clientes activos simultáneamente. La experiencia importa justamente porque no se presenta como una victoria artificial.",
        "De ahí quedó una lectura que acompaña su trabajo actual: software funcional no basta. Producto, uso real, mantenimiento y contexto de negocio también forman parte de la decisión de ingeniería.",
      ],
    },
    teaching: {
      period: "Desde junio de 2025",
      role: "Docente Universitario en UMFG",
      paragraphs: [
        "La docencia no aparece como una actividad separada de la ingeniería. La misma preocupación por hacer los sistemas comprensibles también aparece cuando João enseña.",
        "En clase, lleva experiencias de proyectos reales a planes de aula, proyectos prácticos y orientación de carrera. Esa conexión con el mercado ayuda a los estudiantes a entender no solo tecnología, sino cómo el trabajo ocurre dentro de empresas.",
      ],
      courses: [
        "Redes",
        "Front-end",
        "Desarrollo Mobile",
        "Herramientas Computacionales",
      ],
    },
    education: [
      {
        title: "Tecnólogo en Análisis y Desarrollo de Sistemas",
        institution: "UMFG",
        period: "2022-2024",
      },
      {
        title: "Especialización en Seguridad de la Información",
        institution: "UNIASSELVI",
        period: "2024-2025",
      },
    ],
    philosophy: [
      "El software está hecho para satisfacer a los usuarios, no a los desarrolladores.",
      "Una buena base técnica es aquella que otras personas pueden comprender, mantener y evolucionar.",
      "Pragmatismo no significa renunciar a la calidad; significa aplicar calidad en la medida correcta para el problema, el equipo y el producto.",
    ],
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Vue.js",
      "Node.js",
      ".NET",
      "Nginx",
    ],
    faq: [
      {
        question: "¿Cuál es el foco profesional de João Paulo Almeida Alavarse?",
        answer:
          "Su foco es Ingeniería de Software aplicada a sistemas reales: mantenimiento de productos en producción, modernización de ERP, aplicaciones web y mobile, documentación técnica y decisiones que equilibran valor para el usuario, producto y mantenimiento futuro.",
      },
      {
        question: "¿Por qué se posiciona como ingeniero de software y no solo como desarrollador full stack?",
        answer:
          "Porque el trabajo descrito en la página implica análisis de contexto, arquitectura, trade-offs, soporte de sistemas en producción, colaboración con producto y comunicación técnica. Full stack forma parte del alcance, pero no es la identidad principal.",
      },
      {
        question: "¿Qué hace João en la modernización de Kero Ótica?",
        answer:
          "Participa desde el inicio de la modernización del frontend, estructurando la base en React con Next.js, documentación, organización del proyecto, convivencia con el frontend Vue existente, autenticación compartida y criterios para futuras contribuciones.",
      },
      {
        question: "¿La modernización de Kero Ótica ya está concluida?",
        answer:
          "No. La modernización todavía está en fase de estructuración. La página separa lo que ya fue definido o preparado de resultados que aún no existen públicamente, como pantallas migradas, flujos completos disponibles para clientes o impacto medido.",
      },
      {
        question: "¿Qué tipo de responsabilidad técnica ya asumió?",
        answer:
          "Ya mantuvo solo una aplicación en producción en Grupo DBM, actúa en mantenimiento y evolución de sistemas en Log Sistemas, tiene responsabilidad técnica por aplicaciones mobile y está estructurando la base del nuevo frontend del ERP Kero Ótica.",
      },
      {
        question: "¿Cómo se conecta la docencia con su actuación en ingeniería?",
        answer:
          "La docencia refuerza comunicación técnica, organización del pensamiento y formación de nuevos profesionales. João lleva experiencias de mercado a clases, proyectos prácticos y orientación de carrera, ayudando estudiantes a entender la transición entre universidad y trabajo real.",
      },
      {
        question: "¿Qué tipo de oportunidad tiene sentido para entrar en contacto?",
        answer:
          "Tiene sentido conversar sobre oportunidades en Ingeniería de Software, modernización de sistemas, productos digitales, mobile, ERP, docencia, comunicación técnica, colaboración con equipos de producto o conversaciones con liderazgos técnicos.",
      },
    ],
  },
};

const sectionIcons = [
  Layers3,
  Route,
  BriefcaseBusiness,
  MessageSquareText,
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = aboutContent[locale];
  const localeData = localeConfig[locale];
  const title = locale === "pt" ? aboutPt.seo.title : data.seo.title;
  const description =
    locale === "pt" ? aboutPt.seo.description : data.seo.description;

  return {
    title,
    description,
    metadataBase,
    keywords: data.seo.keywords,
    alternates: {
      canonical: `/${locale}/sobre`,
      languages: languageAlternates("/sobre"),
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/sobre`,
      siteName: "AlavarseDev",
      locale: localeData.ogLocale,
      type: "profile",
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: sharedOpenGraphImages.map((image) => image.url),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const content = aboutContent[locale];
  const localeData = localeConfig[locale];
  const canonicalUrl = `${siteUrl}/${locale}/sobre`;
  const personId = `${canonicalUrl}#person`;

  if (locale === "pt") {
    return (
      <main className="relative mx-auto max-w-6xl px-4">
        <div className="pointer-events-none absolute left-0 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/3 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-blue-500/20 blur-3xl" />

        <section className="relative grid w-full max-w-full min-h-[72vh] items-center gap-12 overflow-visible py-20 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 max-w-88 sm:max-w-none">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {aboutPt.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-full bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl">
              {aboutPt.hero.title}
            </h1>
            <p className="mt-5 max-w-full wrap-break-word text-lg font-semibold text-foreground/85 sm:text-xl">
              {aboutPt.hero.subtitle}
            </p>
            <p className="mt-6 max-w-full wrap-break-word text-base leading-8 text-muted-foreground sm:text-lg">
              {aboutPt.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={`/${locale}/cases`}>Ver cases</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/${locale}/experiencia`}>Ver experiência</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[18rem] justify-center sm:max-w-90 md:justify-self-end">
            <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 p-2 shadow-xl backdrop-blur-lg">
              <Image
                src="/joao-alavarse.jpeg"
                alt="Foto profissional de João Paulo Almeida Alavarse"
                width={360}
                height={360}
                sizes="(max-width: 767px) 272px, 344px"
                quality={70}
                className="aspect-square w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="space-y-16 py-16">
          {aboutPt.sections.map((section) => (
            <article
              key={section.title}
              className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                {section.title}
              </h2>
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Princípios demonstrados por fatos
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {aboutPt.principles.map((principle) => (
              <article key={principle.title} className="rounded-lg border p-5">
                <h3 className="text-lg font-bold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {principle.evidence}
                </p>
              </article>
            ))}
          </div>
        </section>

        <Contact params={Promise.resolve({ locale })} />
      </main>
    );
  }

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "João Paulo Almeida Alavarse",
    alternateName: ["João Paulo Alavarse", "João Alavarse", "AlavarseDev"],
    url: canonicalUrl,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}/joao-alavarse.jpeg`,
      width: 360,
      height: 360,
    },
    jobTitle: content.hero.subtitle,
    description: content.seo.description,
    inLanguage: localeData.htmlLang,
    sameAs: [
      "https://github.com/JoaoAlavarse",
      "https://www.linkedin.com/in/joao-alavarse/",
    ],
    knowsAbout: content.technologies.concat([
      "Software Engineering",
      "Software Architecture",
      "System Modernization",
      "ERP",
      "Digital Products",
      "Technical Education",
    ]),
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "UMFG",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "UNIASSELVI",
      },
    ],
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonicalUrl}#profile-page`,
    url: canonicalUrl,
    name: content.seo.title,
    description: content.seo.description,
    inLanguage: localeData.htmlLang,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/joao-alavarse.jpeg`,
    },
    mainEntity: {
      "@id": personId,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.navbar.home,
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.navbar.about,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="relative mx-auto max-w-6xl px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="pointer-events-none absolute left-0 top-10 h-96 w-96 -translate-x-1/3 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <section className="relative grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-full overflow-visible bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground/80">
            {content.hero.subtitle}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {content.hero.intro}
          </p>

          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            {content.hero.facts.map((fact) => (
              <li key={fact} className="flex gap-2">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{fact}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href={`/${locale}/contato`}>
                {content.hero.primaryAction}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href={`/${locale}/cases`}>
                {content.hero.secondaryAction}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-90 justify-center md:justify-self-end">
          <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 p-2 shadow-xl backdrop-blur-lg">
            <Image
              src="/joao-alavarse.jpeg"
              alt={content.hero.imageAlt}
              width={360}
              height={360}
              sizes="(max-width: 767px) 272px, 344px"
              quality={70}
              className="aspect-square w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading title={content.sections.profileTitle} />
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            {content.sections.profileParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 py-16 md:grid-cols-3">
        {content.competencies.slice(0, 3).map((item, index) => {
          const Icon = sectionIcons[index] ?? ShieldCheck;

          return (
            <article
              key={item.title}
              className="group rounded-xl border p-6 transition hover:border-purple-400/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          );
        })}
      </section>

      <section className="py-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading title={content.sections.currentTitle} />
          <div className="space-y-8">
            <ExperienceHeader
              icon={<BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />}
              role={content.log.role}
              period={content.log.period}
            />
            {content.log.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <ul className="grid gap-3 sm:grid-cols-2">
              {content.log.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border p-5 text-sm leading-6 text-muted-foreground transition hover:border-purple-400/50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-12 py-20 lg:grid-cols-2">
        <NarrativePanel
          title={content.sections.principleTitle}
          icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
          role={content.sections.principleLead}
          period=""
          paragraphs={[content.sections.principleBody, ...content.philosophy.slice(0, 1)]}
        />
        <NarrativePanel
          title={content.sections.teachingTitle}
          icon={<GraduationCap className="h-5 w-5" aria-hidden="true" />}
          role={content.teaching.role}
          period={content.teaching.period}
          paragraphs={content.teaching.paragraphs}
          tags={content.teaching.courses}
        />
      </section>

      <section className="grid gap-12 py-20 lg:grid-cols-2">
        <NarrativePanel
          title={content.sections.previousTitle}
          icon={<Route className="h-5 w-5" aria-hidden="true" />}
          role={content.previous.role}
          period={content.previous.period}
          paragraphs={content.previous.paragraphs}
        />
        <div className="rounded-xl border p-6">
          <SectionHeading title={content.sections.educationTitle} />
          <div className="mt-8 grid gap-4">
            {content.education.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border p-5 transition hover:border-purple-400/50"
              >
                <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.institution} • {item.period}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading title={content.sections.technologiesTitle} />
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:items-start">
            {content.technologies.map((technology) => (
              <li
                key={technology}
                className="inline-flex min-h-10 items-center justify-center rounded-lg border px-4 py-2 text-center text-sm leading-none text-muted-foreground transition hover:border-purple-400/50 md:justify-start md:whitespace-nowrap"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-12 py-20 lg:grid-cols-[0.55fr_1.45fr]">
        <SectionHeading title={content.sections.faqTitle} />
        <div className="overflow-hidden rounded-xl border">
          {content.faq.map((item) => (
            <details
              key={item.question}
              className="group border-b border-border last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-5 font-semibold leading-7 transition-colors hover:bg-muted/40">
                <span>{item.question}</span>
                <span className="mt-1 text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 leading-7 text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div>
        <Contact params={Promise.resolve({ locale })} />
      </div>
    </main>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function ExperienceHeader({
  icon,
  role,
  period,
}: {
  icon: React.ReactNode;
  role: string;
  period: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-background p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-primary/10 p-2 text-primary">{icon}</span>
        <h3 className="font-semibold">{role}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{period}</p>
    </div>
  );
}

function NarrativePanel({
  title,
  icon,
  role,
  period,
  paragraphs,
  tags,
}: {
  title: string;
  icon: React.ReactNode;
  role: string;
  period: string;
  paragraphs: string[];
  tags?: string[];
}) {
  return (
    <article className="rounded-lg border border-border bg-background p-6">
      <div className="flex items-start gap-3">
        <span className="rounded-md bg-primary/10 p-2 text-primary">{icon}</span>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {period ? `${role} • ${period}` : role}
          </p>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-7 text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
      {tags ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
