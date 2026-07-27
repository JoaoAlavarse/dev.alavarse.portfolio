export const homePt = {
  hero: {
    eyebrow: "Portfólio de engenharia",
    title: "João Alavarse",
    subtitle:
      "O que acontece antes de uma boa solução aparecer?",
    description:
      "Os exemplos abaixo mostram decisões tomadas em sistemas reais, produtos em validação e sala de aula.",
    primaryAction: "Ver cases",
    secondaryAction: "Falar comigo",
    tertiaryAction: "Ver experiência",
  },
  evidence: {
    title: "O que os projetos foram ensinando",
    description:
      "Algumas ideias só ficam claras quando aparecem em situações concretas. Estas foram as que mais se repetiram.",
    items: [
      {
        context: "Kero Ótica",
        title: "Operação pesa mais que preferência técnica",
        description:
          "Um ERP em produção não podia depender de uma troca brusca de frontend. A modernização precisou considerar usuários, módulos sensíveis e continuidade diária.",
      },
      {
        context: "HemoUp",
        title: "A ideia precisa encontrar a dor real",
        description:
          "Antes de pensar em produto pronto, o trabalho passou por uma dor vivida no processo de doação e por conversas com hemocentro.",
      },
      {
        context: "BatteryCommerce",
        title: "Fluxo vem antes de integração",
        description:
          "Pagamentos, pedidos, entregas e frete só faziam sentido quando as regras do e-commerce estavam modeladas como um conjunto coerente.",
      },
      {
        context: "Grupo DBM",
        title: "Partes separadas ainda formam um produto",
        description:
          "Atuar em múltiplos repositórios mostrou que a entrega não termina em uma aplicação isolada; integrações e infraestrutura também carregam decisões.",
      },
      {
        context: "Docência",
        title: "Explicar muda a forma de construir",
        description:
          "Ensinar reforçou uma régua simples: se uma escolha técnica não pode ser explicada, talvez ela ainda não esteja clara o suficiente.",
      },
    ],
  },
  decisionEvidence: {
    title: "Quando vale aprofundar",
    description:
      "Os cases abaixo continuam a mesma história, agora com mais contexto, desafio e consequência.",
    items: [
      {
        context: "ERP em produção",
        title: "Evoluir sem interromper a operação",
        description:
          "A modernização gradual aparece como resposta a uma restrição operacional, não como preferência por stack.",
      },
      {
        context: "Produto próprio",
        title: "Validar antes de construir",
        description:
          "A validação inicial veio antes da arquitetura porque o risco principal ainda era construir algo sem problema comprovado.",
      },
      {
        context: "Projeto acadêmico",
        title: "Modelar regras antes de integrar serviços",
        description:
          "O aprendizado estava em dar coerência às regras antes de tratar APIs externas como solução.",
      },
    ],
  },
  expectations: {
    title: "O que você pode esperar trabalhando comigo",
    description:
      "Não são benefícios. São hábitos de trabalho que tento tornar visíveis.",
    items: [
      "Procuro entender o uso antes de propor uma solução.",
      "Prefiro simplicidade quando ela resolve o problema.",
      "Documento escolhas que mudam a manutenção futura.",
      "Escolho tecnologia como consequência, não como ponto de partida.",
      "Trato comunicação técnica como parte da entrega.",
    ],
  },
  stack: {
    title: "Stack encontrável",
    items: ["TypeScript", "React", "Next.js", "React Native", "Vue.js", ".NET", "Java", "Spring Boot"],
  },
};

export const aboutPt = {
  seo: {
    title: "Sobre João Alavarse | Engenharia, produto e ensino",
    description:
      "Como a trajetória de João Alavarse moldou sua forma de fazer engenharia: contexto, produto, operação, comunicação, docência e decisões técnicas.",
  },
  hero: {
    eyebrow: "Sobre",
    title: "A forma de trabalhar veio do contato com sistemas reais",
    subtitle: "Engenharia, produto, operação e ensino como partes da mesma prática.",
    description:
      "Minha trajetória aproximou código de pessoas: usuários que dependem do sistema, áreas que atendem clientes, empresas que precisam operar e alunos que precisam entender por que uma decisão técnica existe.",
  },
  sections: [
    {
      title: "Antes da solução, o contexto",
      paragraphs: [
        "O trabalho em produtos reais ensinou que uma decisão técnica raramente começa pela tecnologia. Ela começa pelo uso, pelo risco, pela manutenção e pelo impacto que uma mudança pode causar em quem depende do sistema.",
        "Essa leitura aparece tanto em sistemas em produção quanto em produtos em validação: entender pessoas, problema, negócio e restrições vem antes de escolher uma implementação.",
      ],
    },
    {
      title: "Produto e operação mudam o peso das decisões",
      paragraphs: [
        "Atuar próximo de suporte, atendimento, produto e negócio torna a engenharia menos abstrata. Uma tela, uma API ou uma migração deixam de ser apenas tarefas técnicas e passam a carregar consequências para uso, venda, atendimento e evolução futura.",
        "Por isso, busco decisões proporcionais: complexidade precisa justificar valor, e uma solução boa precisa continuar compreensível para quem vai mantê-la depois.",
      ],
    },
    {
      title: "Ensinar também é engenharia",
      paragraphs: [
        "A docência reforça uma habilidade central para engenharia: explicar raciocínio. Quando uma decisão não pode ser explicada com clareza, provavelmente ela ainda não foi compreendida o suficiente.",
        "Levar experiências de mercado para a sala de aula também ajuda a transformar conceitos em situações concretas, aproximando formação técnica e prática profissional.",
      ],
    },
  ],
  principles: [
    {
      title: "Contexto antes da implementação",
      evidence: "Modernização gradual no Kero Ótica em vez de tratar a troca de stack como objetivo isolado.",
    },
    {
      title: "Comunicação como parte da entrega",
      evidence: "Docência, documentação técnica e explicação de decisões para públicos técnicos e não técnicos.",
    },
    {
      title: "Tecnologia como consequência",
      evidence: "Stack aparece como apoio aos problemas resolvidos, não como argumento principal do portfólio.",
    },
  ],
};

export const experiencePt = {
  intro:
    "A progressão abaixo mostra ambientes que mudaram minha forma de trabalhar. O cargo documentado aparece para manter precisão; a leitura principal está no que cada etapa exigiu.",
  professional: [
    {
      title: "Log Sistemas",
      role: "Desenvolvedor Full Stack",
      period: "2025 - Atual",
      context:
        "Entrada em sistemas que já eram usados na rotina de empresas, com ERP, produtos mobile e soluções digitais em operação.",
      responsibility:
        "Manter e evoluir produtos sem tratar produção como detalhe posterior. Cada mudança precisava considerar continuidade, suporte e uso real.",
      scope:
        "Usuários, atendimento, produto, operação, legado e módulos sensíveis passaram a fazer parte da mesma conversa técnica.",
      evolution:
        "Produção deixou de ser destino de deploy e virou uma restrição presente desde o começo.",
      related: "Kero Ótica e Pupilens.",
    },
    {
      title: "Faculdade UMFG",
      role: "Professor do Ensino Superior",
      period: "2025 - Atual",
      context:
        "A sala de aula trouxe outro tipo de pressão: transformar raciocínio técnico em algo claro o suficiente para ser reconstruído por outras pessoas.",
      responsibility:
        "Ensinar fundamentos, conduzir projetos práticos e aproximar conceitos de situações que os alunos encontrariam fora da faculdade.",
      scope:
        "Fundamentos, exemplos, dúvidas, ritmo de aprendizagem e comunicação passaram a influenciar a forma de organizar ideias também no trabalho técnico.",
      evolution:
        "Ensinar tornou mais importante explicar o porquê das escolhas, não só como a solução funciona.",
      related: "Sobre.",
    },
    {
      title: "Grupo DBM",
      role: "Desenvolvedor Full Stack",
      period: "2024 - 2025",
      context:
        "Primeiro contato mais forte com um produto dividido em partes: e-commerce, catálogo, integrações, mobile e infraestrutura.",
      responsibility:
        "Fazer a entrega avançar sem olhar apenas para uma tela ou API isolada. O funcionamento dependia da coordenação entre repositórios, integrações e ambiente.",
      scope:
        "Frontend, backend, mobile, WhatsApp, pagamentos, fretes, Docker e CI/CD criavam dependências entre decisões pequenas.",
      evolution:
        "O trabalho passou a exigir consistência entre fluxos, integrações e partes diferentes do sistema.",
      related: "ZShop aparece como evidência resumida, não como case profundo nesta etapa.",
    },
    {
      title: "HemoUp",
      role: "Fundador e Desenvolvedor Full Stack",
      period: "2024 - Atual",
      context:
        "Um produto próprio começou a partir de uma dor percebida no processo de doação de sangue, antes de existir uma solução pronta.",
      responsibility:
        "Validar se o problema fazia sentido, conversar com hemocentro, estudar mercado e transformar incerteza em recorte de MVP.",
      scope:
        "Pessoas, produto, negócio, custos, requisitos e viabilidade técnica apareceram antes da arquitetura.",
      evolution:
        "Essa etapa reforçou que descoberta, validação e restrições de negócio também fazem parte do trabalho técnico.",
      related: "HemoUp.",
    },
  ],
  academic: [
    {
      title: "Especialização em Segurança da Informação - UNIASSELVI",
      role: "Especialização",
      period: "2024 - 2025",
      context: "Aprofundou a leitura de risco, compliance e segurança dentro de ambientes organizacionais.",
    },
    {
      title: "Monitor e Discente Representante do Curso - Faculdade UMFG",
      role: "Monitoria",
      period: "2022 - 2024",
      context:
        "A monitoria consolidou fundamentos ao exigir que lógica, estruturas de dados, programação e banco de dados fossem explicados para outros alunos.",
    },
    {
      title: "Tecnólogo em Análise e Desenvolvimento de Sistemas - Faculdade UMFG",
      role: "Curso superior",
      period: "2022 - 2024",
      context: "Construiu a base inicial em lógica, algoritmos, estruturas de dados e organização de software.",
    },
  ],
};

export const publicCaseIdsPt = ["kerootica", "batterycommerce", "hemoup", "zshop"];
export const featuredCaseIdsPt = ["kerootica", "hemoup", "batterycommerce"];
